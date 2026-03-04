export const quizQuestions = [
    // Hiragana recognition
    { id: 'q1', type: 'multiple-choice', category: 'hiragana', level: 'N5', question: 'What is the romaji for あ?', options: ['a', 'i', 'u', 'e'], correctAnswer: 'a', explanation: 'あ is the first hiragana character and is pronounced "a" as in "father".' },
    { id: 'q2', type: 'multiple-choice', category: 'hiragana', level: 'N5', question: 'What is the romaji for き?', options: ['ka', 'ki', 'ku', 'ke'], correctAnswer: 'ki', explanation: 'き is from the K-row and is pronounced "ki" as in "key".' },
    { id: 'q3', type: 'multiple-choice', category: 'hiragana', level: 'N5', question: 'Which hiragana represents "su"?', options: ['さ', 'し', 'す', 'せ'], correctAnswer: 'す', explanation: 'す (su) is in the S-row: さ(sa) し(shi) す(su) せ(se) そ(so).' },
    { id: 'q4', type: 'multiple-choice', category: 'hiragana', level: 'N5', question: 'What is the romaji for ね?', options: ['na', 'ni', 'nu', 'ne'], correctAnswer: 'ne', explanation: 'ね is from the N-row. A common word using it: ねこ (neko = cat).' },
    { id: 'q5', type: 'multiple-choice', category: 'hiragana', level: 'N5', question: 'Which hiragana represents "wa"?', options: ['ら', 'わ', 'や', 'は'], correctAnswer: 'わ', explanation: 'わ (wa) is often confused with は. Remember: は is pronounced "wa" only when used as a particle.' },

    // Katakana recognition
    { id: 'q6', type: 'multiple-choice', category: 'katakana', level: 'N5', question: 'What is the romaji for カ?', options: ['ka', 'ki', 'ku', 'sa'], correctAnswer: 'ka', explanation: 'カ is the katakana for "ka". It\'s used for writing カメラ (kamera = camera).' },
    { id: 'q7', type: 'multiple-choice', category: 'katakana', level: 'N5', question: 'Which katakana represents "ko"?', options: ['カ', 'キ', 'ク', 'コ'], correctAnswer: 'コ', explanation: 'コ (ko) looks like two horizontal lines. Used in コーヒー (koohii = coffee).' },
    { id: 'q8', type: 'multiple-choice', category: 'katakana', level: 'N5', question: 'What word does テレビ represent?', options: ['telephone', 'television', 'table', 'taxi'], correctAnswer: 'television', explanation: 'テレビ (terebi) comes from the English word "television". Katakana is used for foreign loanwords.' },

    // Vocabulary
    { id: 'q9', type: 'multiple-choice', category: 'vocab', level: 'N5', question: 'What does ねこ mean?', options: ['dog', 'cat', 'bird', 'fish'], correctAnswer: 'cat', explanation: 'ねこ (neko) means cat. The kanji is 猫.' },
    { id: 'q10', type: 'multiple-choice', category: 'vocab', level: 'N5', question: 'What does おいしい mean?', options: ['beautiful', 'interesting', 'delicious', 'big'], correctAnswer: 'delicious', explanation: 'おいしい (oishii) means delicious/tasty. It\'s one of the most useful words in Japan!' },
    { id: 'q11', type: 'multiple-choice', category: 'vocab', level: 'N5', question: 'What does がっこう mean?', options: ['company', 'hospital', 'school', 'library'], correctAnswer: 'school', explanation: 'がっこう (gakkou) means school. The kanji is 学校.' },
    { id: 'q12', type: 'multiple-choice', category: 'vocab', level: 'N5', question: 'What is the Japanese word for "water"?', options: ['みず', 'かぜ', 'ひ', 'つち'], correctAnswer: 'みず', explanation: 'みず (mizu) means water. The kanji is 水.' },
    { id: 'q13', type: 'fill-in-blank', category: 'vocab', level: 'N5', question: 'Complete: おはよう________ (Good morning - polite)', correctAnswer: 'ございます', explanation: 'おはようございます (ohayou gozaimasu) is the polite form of "good morning". おはよう alone is the casual version.' },

    // Grammar
    { id: 'q14', type: 'multiple-choice', category: 'grammar', level: 'N5', question: 'Which particle marks the topic of a sentence?', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', explanation: 'は (wa) is the topic-marking particle. Example: わたしは がくせいです。(I am a student.)' },
    { id: 'q15', type: 'multiple-choice', category: 'grammar', level: 'N5', question: 'Which particle marks the direct object?', options: ['は', 'が', 'を', 'で'], correctAnswer: 'を', explanation: 'を (o/wo) marks the direct object. Example: パンを たべます。(I eat bread.)' },
    { id: 'q16', type: 'multiple-choice', category: 'grammar', level: 'N5', question: '"わたしは すしを たべます" means:', options: ['I make sushi', 'I eat sushi', 'I buy sushi', 'I like sushi'], correctAnswer: 'I eat sushi', explanation: 'たべます (tabemasu) means "to eat". The sentence literally means "As for me, I eat sushi."' },
    { id: 'q17', type: 'fill-in-blank', category: 'grammar', level: 'N5', question: 'わたし___がくせいです。(I am a student)', correctAnswer: 'は', explanation: 'は (wa) marks the topic. わたしは tells us "as for me..." and がくせいです means "am a student."' },
    { id: 'q18', type: 'multiple-choice', category: 'grammar', level: 'N5', question: 'What is the past tense of たべます?', options: ['たべません', 'たべました', 'たべて', 'たべたい'], correctAnswer: 'たべました', explanation: 'The past polite form changes ます to ました. たべます → たべました (ate).' },

    // N4 questions
    { id: 'q19', type: 'multiple-choice', category: 'grammar', level: 'N4', question: 'What is the て-form of のみます (to drink)?', options: ['のんで', 'のみて', 'のんた', 'のみって'], correctAnswer: 'のんで', explanation: 'For verbs ending in ～みます, the て-form changes to ～んで. のみます → のんで.' },
    { id: 'q20', type: 'multiple-choice', category: 'grammar', level: 'N4', question: '"にほんに いったことがあります" means:', options: ['I went to Japan', 'I want to go to Japan', 'I have been to Japan before', 'I am going to Japan'], correctAnswer: 'I have been to Japan before', explanation: '～たことがある expresses past experience. It emphasizes that you have done something at least once before.' },

    // Kanji
    { id: 'q21', type: 'multiple-choice', category: 'kanji', level: 'N5', question: 'What does the kanji 一 mean?', options: ['two', 'three', 'one', 'ten'], correctAnswer: 'one', explanation: '一 (いち/ichi) means "one". It\'s simply one horizontal stroke!' },
    { id: 'q22', type: 'multiple-choice', category: 'kanji', level: 'N5', question: 'What does the kanji 日 mean?', options: ['moon', 'sun/day', 'fire', 'eye'], correctAnswer: 'sun/day', explanation: '日 means "sun" or "day". にほん (日本) literally means "origin of the sun" — Japan!' },
    { id: 'q23', type: 'multiple-choice', category: 'kanji', level: 'N5', question: 'How do you read 大きい?', options: ['ちいさい', 'おおきい', 'たかい', 'ながい'], correctAnswer: 'おおきい', explanation: '大きい (おおきい/ookii) means "big/large". The kanji 大 represents a person spreading their arms wide.' },
    { id: 'q24', type: 'multiple-choice', category: 'kanji', level: 'N5', question: 'What does 山 mean?', options: ['river', 'mountain', 'field', 'forest'], correctAnswer: 'mountain', explanation: '山 (やま/yama) means "mountain". The kanji looks like three mountain peaks!' },
];
