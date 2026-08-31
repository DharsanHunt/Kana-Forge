import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// 1. AI Chat with Hana Sensei
router.post('/chat', async (req, res, next) => {
    try {
        const { messages, systemPrompt } = req.body;

        if (!Array.isArray(messages)) {
            return res.status(400).json({ error: 'messages array is required' });
        }

        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return res.status(503).json({
                error: 'AI service is currently not configured on server (missing GROQ_API_KEY).',
            });
        }

        const conversation = messages.map(m => ({ role: m.role, content: m.content }));

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt || 'You are Hana, an encouraging Japanese tutor.' },
                    ...conversation,
                ],
                max_tokens: 1000,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.error?.message || `AI API error status: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || 'No response generated.';

        res.json({ message: content });
    } catch (error) {
        console.error('AI Chat Error:', error.message);
        res.status(500).json({ error: `AI Tutor error: ${error.message}` });
    }
});

// 2. AI Handwriting Stroke Evaluation
router.post('/check-stroke', async (req, res, next) => {
    try {
        const { imageData, character, romaji, characterType } = req.body;

        if (!imageData || !character) {
            return res.status(400).json({ error: 'imageData and character are required' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(503).json({
                error: 'AI Stroke checking is currently not configured on server (missing GEMINI_API_KEY).',
            });
        }

        // Clean base64 data
        const base64Data = imageData.includes('base64,')
            ? imageData.split('base64,')[1]
            : imageData;

        const charLabel = characterType ? characterType.toLowerCase() : 'Japanese';

        const promptText = `I am practicing writing the ${charLabel} character "${character}" (${romaji || ''}). 

Please analyze my handwritten attempt in the image and respond in this exact JSON format only, no other text:
{"match": true/false, "score": 1-10, "feedback": "brief feedback about stroke accuracy"}

Rules:
- "match" = true if the character is recognizable as ${character}, even if imperfect
- "score" = 1 (unrecognizable) to 10 (perfect)
- "feedback" = one sentence about stroke quality, proportions, or what to improve
- Be encouraging but honest
- If you literally cannot see any strokes or the canvas appears blank, set match to false and score to 0`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    inline_data: {
                                        mime_type: 'image/png',
                                        data: base64Data,
                                    },
                                },
                                {
                                    text: promptText,
                                },
                            ],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.3,
                        maxOutputTokens: 2048,
                        responseMimeType: 'application/json',
                        responseSchema: {
                            type: 'OBJECT',
                            properties: {
                                match: { type: 'BOOLEAN' },
                                score: { type: 'INTEGER' },
                                feedback: { type: 'STRING' },
                            },
                            required: ['match', 'score', 'feedback'],
                        },
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.error?.message || `Gemini Vision error status: ${response.status}`);
        }

        const data = await response.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        let result = { match: false, score: 0, feedback: 'Analysis could not be parsed.' };
        if (responseText) {
            try {
                result = JSON.parse(responseText);
            } catch {
                result = { match: false, score: 0, feedback: responseText };
            }
        }

        res.json(result);
    } catch (error) {
        console.error('AI Stroke Check Error:', error.message);
        res.status(500).json({ error: `Stroke check failed: ${error.message}` });
    }
});

export default router;
