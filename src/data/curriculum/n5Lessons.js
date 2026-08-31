/**
 * Kana-Forge Complete Curated N5 Curriculum (Lessons 01 - 35)
 * All content authored originally for Kana-Forge with authentic dialogues, readings, and listening tasks.
 */

export const n5Lessons = [
    // --- MODULE 1: FOUNDATIONS ---
    {
        id: 'LESSON_N5_01',
        level: 'N5',
        moduleNumber: 1,
        moduleTitle: 'Foundations of Japanese',
        title: 'Japanese Writing & Sound Systems',
        japaneseTitle: '文字と発音の基礎',
        category: 'hiragana',
        description: 'Master the phonetic landscape of Japanese: pure vowel production, mora timing, and the five essential vowels (あいうえお).',
        learningObjectives: [
            'Pronounce the 5 pure Japanese vowels (A, I, U, E, O) with accurate resonance',
            'Understand mora timing and rhythmic cadence in spoken Japanese',
            'Read and recognize foundational vowel hiragana combinations'
        ],
        content: `### The Architecture of the Japanese Sound System\n\nJapanese is a **mora-timed language** rather than a stress-timed language like English. Each mora represents an equal beat of temporal rhythm.\n\n#### The Five Pure Vowels (母音)\n* **あ (a)**: Open back unrounded vowel (crisp "ah").\n* **い (i)**: High front unrounded vowel ("ee" in feet).\n* **う (u)**: High back compressed vowel (lips flat, not rounded).\n* **え (e)**: Mid front unrounded vowel ("e" in pet).\n* **お (o)**: Mid back rounded vowel (pure "oh").\n\n#### Stroke Order Philosophy\n1. **Top to bottom**\n2. **Left to right**\n3. **Horizontal before vertical**`,
        examples: [
            { japanese: 'あい', reading: 'あい', romaji: 'ai', english: 'love / affection' },
            { japanese: 'いえ', reading: 'いえ', romaji: 'ie', english: 'house / home' },
            { japanese: 'うえ', reading: 'うえ', romaji: 'ue', english: 'above / on top' },
            { japanese: 'あおい', reading: 'あおい', romaji: 'aoi', english: 'blue' }
        ],
        dialogue: {
            title: 'Greeting at the Dojo Entrance',
            lines: [
                { speaker: 'Ren', japanese: 'はじめまして。レンです。', romaji: 'Hajimemashite. Ren desu.', english: 'Nice to meet you. I am Ren.' },
                { speaker: 'Hana', japanese: 'はじめまして、はなです。よろしくおねがいします。', romaji: 'Hajimemashite, Hana desu. Yoroshiku onegai shimasu.', english: 'Nice to meet you, I am Hana. Pleased to meet you.' }
            ]
        },
        readingPassage: {
            title: 'Basic Sounds Note',
            japanese: 'あさです。いえのうえにあおいそらがあります。いいあさです。',
            questions: [
                {
                    question: 'そらは何色ですか。(What color is the sky?)',
                    options: ['あおい (Blue)', 'あかい (Red)', 'しろい (White)', 'くろい (Black)'],
                    correctAnswer: 'あおい (Blue)',
                    explanation: 'The passage states "あおいそらがあります" (There is a blue sky).'
                }
            ]
        },
        listeningExercise: {
            audioText: 'あさ。いえ。あおい。',
            transcript: 'あさ。いえ。あおい。',
            question: 'Which word was NOT spoken in the sequence?',
            options: ['うえ (Above)', 'あさ (Morning)', 'いえ (House)', 'あおい (Blue)'],
            correctAnswer: 'うえ (Above)',
            explanation: 'The recording said "Asa, Ie, Aoi", omitting "Ue".'
        },
        culturalNote: 'In Japanese calligraphy, the balance of empty space (間 - ma) around characters is as vital as the ink itself.',
        commonMistakes: ['Rounding the lips on う (u) — Japanese う requires relaxed flat lips.']
    },
    {
        id: 'LESSON_N5_02',
        level: 'N5',
        moduleNumber: 1,
        moduleTitle: 'Foundations of Japanese',
        title: 'Katakana & Foreign Loanwords',
        japaneseTitle: 'カタカナと外来語',
        category: 'katakana',
        description: 'Learn the functional role of Katakana: loanwords (外来語), sound effects (オノマトペ), technical terms, and foreign names.',
        learningObjectives: [
            'Identify the geometric strokes of Katakana',
            'Master the Katakana long-vowel bar (ー)',
            'Transcribe international loanwords into Japanese morae'
        ],
        content: `### The Role of Katakana\n\nKatakana fulfills key communicative purposes:\n1. **Foreign Loanwords (外来語)**: Borrowed vocabulary (コーヒー, ホテル).\n2. **Onomatopoeia (オノマトペ)**: Sounds of impact and mechanical noise.\n3. **Visual Emphasis**: Equivalent to italics or bold text.`,
        examples: [
            { japanese: 'コーヒー', reading: 'コーヒー', romaji: 'koohii', english: 'coffee' },
            { japanese: 'ホテル', reading: 'ホテル', romaji: 'hoteru', english: 'hotel' },
            { japanese: 'タクシー', reading: 'タクシー', romaji: 'takushii', english: 'taxi' }
        ],
        dialogue: {
            title: 'Ordering at a Cafe',
            lines: [
                { speaker: 'Clerk', japanese: 'いらっしゃいませ。ご注文は何にしますか。', romaji: 'Irasshaimase. Gochuumon wa nan ni shimasu ka.', english: 'Welcome! What would you like to order?' },
                { speaker: 'Customer', japanese: 'アイスコーヒーを一つください。', romaji: 'Aisu koohii o hitotsu kudasai.', english: 'One iced coffee, please.' }
            ]
        },
        readingPassage: {
            title: 'Cafe Menu Sign',
            japanese: 'カフェ・さくら。ホットコーヒーは四百円です。アイスティーもあります。',
            questions: [
                {
                    question: 'ホットコーヒーはいくらですか。',
                    options: ['四百円 (400 yen)', '五百円 (500 yen)', '三百円 (300 yen)', '六百円 (600 yen)'],
                    correctAnswer: '四百円 (400 yen)',
                    explanation: 'The sign states "ホットコーヒーは四百円です".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'すみません、ホットコーヒーを二つお願いします。',
            transcript: 'すみません、ホットコーヒーを二つお願いします。',
            question: 'What did the customer order?',
            options: ['Two hot coffees', 'One hot coffee', 'Two iced teas', 'One cake'],
            correctAnswer: 'Two hot coffees',
            explanation: 'The customer ordered two hot coffees (二つ).'
        },
        culturalNote: 'Loanwords in Japanese are often abbreviated, like パソコン (personal computer) and アニメ (animation).',
        commonMistakes: ['Confusing Katakana pairs like シ (shi) vs ツ (tsu) and ソ (so) vs ン (n).']
    },
    {
        id: 'LESSON_N5_03',
        level: 'N5',
        moduleNumber: 1,
        moduleTitle: 'Foundations of Japanese',
        title: 'Greetings & Introductions (は / です / ですか)',
        japaneseTitle: '挨拶と自己紹介',
        category: 'grammar',
        description: 'Construct your very first Japanese sentences: master topic marker は, polite copula です, and questions with か.',
        learningObjectives: [
            'Construct A は B です identity statements',
            'Form polite negative sentences using じゃありません',
            'Ask polite questions using question particle か'
        ],
        content: `### Fundamental Sentence Pattern: A は B です\n\n$$\\text{[Topic]} \\text{ は } \\text{[Description]} \\text{ です}$$\n\n* **は (wa)**: Topic marker.\n* **です (desu)**: Polite copula (*is / am / are*).\n* **じゃありません**: Negative copula (*is not*).\n* **ですか**: Question particle (*is it...?*).`,
        examples: [
            { japanese: 'わたしは学生です。', reading: 'わたしはがくせいです。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
            { japanese: '田中さんは先生です。', reading: 'たなかさんはせんせいです。', romaji: 'Tanaka-san wa sensei desu.', english: 'Mr. Tanaka is a teacher.' },
            { japanese: 'あなたは日本人ですか。', reading: 'あなたはにほんじんですか。', romaji: 'Anata wa nihonjin desu ka.', english: 'Are you Japanese?' }
        ],
        dialogue: {
            title: 'First Day at Class',
            lines: [
                { speaker: 'Ken', japanese: 'はじめまして。ケンです。アメリカ人です。', romaji: 'Hajimemashite. Ken desu. Amerikajin desu.', english: 'Nice to meet you. I am Ken. I am American.' },
                { speaker: 'Yuki', japanese: 'はじめまして、ユキです。よろしくお願いします。', romaji: 'Hajimemashite, Yuki desu. Yoroshiku onegai shimasu.', english: 'Nice to meet you, I am Yuki. Pleased to meet you.' }
            ]
        },
        readingPassage: {
            title: 'Self-Introduction',
            japanese: 'わたしはアレックスです。英語の先生です。山田さんも先生です。',
            questions: [
                {
                    question: 'アレックスさんは何の先生ですか。',
                    options: ['英語の先生 (English teacher)', '日本語の先生 (Japanese teacher)', '数学の先生 (Math teacher)', '医者 (Doctor)'],
                    correctAnswer: '英語の先生 (English teacher)',
                    explanation: 'The passage states "英語の先生です".'
                }
            ]
        },
        listeningExercise: {
            audioText: '山田さんは医者ですか。いいえ、医者じゃありません。会社員です。',
            transcript: '山田さんは医者ですか。いいえ、医者じゃありません。会社員です。',
            question: 'What is Mr. Yamada\'s occupation?',
            options: ['会社員 (Company employee)', '医者 (Doctor)', '学生 (Student)', '先生 (Teacher)'],
            correctAnswer: '会社員 (Company employee)',
            explanation: 'The speaker answers "会社員です".'
        },
        culturalNote: 'Never attach the polite title さん (san) to your own name.',
        commonMistakes: ['Translating English "am / is / are" literally instead of placing です at the sentence end.']
    },
    {
        id: 'LESSON_N5_04',
        level: 'N5',
        moduleNumber: 1,
        moduleTitle: 'Foundations of Japanese',
        title: 'People & Possessions (Particle の & も)',
        japaneseTitle: '人と持ち物（の・も）',
        category: 'particles',
        description: 'Connect nouns with の (possession and affiliation) and express shared attributes with inclusive particle も.',
        learningObjectives: [
            'Use の to express ownership and origin',
            'Use も to replace は for "also" and "too"',
            'Introduce family members with humble vs polite terms'
        ],
        content: `### Connecting Nouns with の & Inclusive も\n\n* **Noun 1 の Noun 2**: Possession or affiliation (私の本 = *my book*, 大学の先生 = *university teacher*).\n* **Noun も**: Expresses "also" and replaces は (田中さんも学生です = *Mr. Tanaka is also a student*).`,
        examples: [
            { japanese: 'これは私のノートです。', reading: 'これはわたしのノートです。', romaji: 'Kore wa watashi no nooto desu.', english: 'This is my notebook.' },
            { japanese: 'スミスさんもアメリカ人です。', reading: 'スミスさんもアメリカじんです。', romaji: 'Sumisu-san mo amerikajin desu.', english: 'Mr. Smith is also American.' }
        ],
        dialogue: {
            title: 'Whose Bag is This?',
            lines: [
                { speaker: 'Maria', japanese: 'これは田中さんのカバンですか。', romaji: 'Kore wa Tanaka-san no kaban desu ka.', english: 'Is this Mr. Tanaka\'s bag?' },
                { speaker: 'Tanaka', japanese: 'いいえ、私のじゃありません。佐藤さんのです。', romaji: 'Iie, watashi no ja arimasen. Satou-san no desu.', english: 'No, it is not mine. It is Ms. Sato\'s.' }
            ]
        },
        readingPassage: {
            title: 'Desk Inventory',
            japanese: '机の上に本とペンがあります。このペンはドイツのペンです。とても良いペンです。',
            questions: [
                {
                    question: 'ペンはどこの国のペンですか。',
                    options: ['ドイツ (Germany)', '日本 (Japan)', 'アメリカ (America)', 'フランス (France)'],
                    correctAnswer: 'ドイツ (Germany)',
                    explanation: 'The text states "このペンはドイツのペンです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'この傘はあなたのですか。いいえ、母の傘です。',
            transcript: 'この傘はあなたのですか。いいえ、母の傘です。',
            question: 'Whose umbrella is it?',
            options: ['The speaker\'s mother\'s', 'The speaker\'s own', 'The friend\'s', 'The teacher\'s'],
            correctAnswer: 'The speaker\'s mother\'s',
            explanation: 'The speaker answers "母の傘です".'
        },
        culturalNote: 'Use humble terms (父, 母) for your own family and honorifics (お父さん, お母さん) for others.',
        commonMistakes: ['Saying "わたし は も" — も completely replaces は.']
    },

    // --- MODULE 2: DEMONSTRATIVES & PLACES ---
    {
        id: 'LESSON_N5_05',
        level: 'N5',
        moduleNumber: 2,
        moduleTitle: 'Demonstratives and Places',
        title: 'Demonstrative Pronouns (これ・それ・あれ・どれ)',
        japaneseTitle: '指示代名詞（これ・それ・あれ・どれ）',
        category: 'demonstratives',
        description: 'Master the spatial relationship system of Japanese demonstratives based on proximity to speaker and listener.',
        learningObjectives: [
            'Use これ for objects close to speaker',
            'Use それ for objects close to listener',
            'Use あれ for objects distant from both',
            'Ask identification questions with どれ'
        ],
        content: `### The Ko-So-A-Do System\n\n* **これ (Kore)**: Near speaker (*this*)\n* **それ (Sore)**: Near listener (*that*)\n* **あれ (Are)**: Far from both (*that over there*)\n* **どれ (Dore)**: Question word (*which one?*)`,
        examples: [
            { japanese: 'これは何ですか。', reading: 'これはなんですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
            { japanese: 'それは辞書です。', reading: 'それはじしょです。', romaji: 'Sore wa jisho desu.', english: 'That is a dictionary.' },
            { japanese: 'あれはスカイツリーです。', reading: 'あれはスカイツリーです。', romaji: 'Are wa Sukaitsurii desu.', english: 'That over there is the Skytree.' }
        ],
        dialogue: {
            title: 'Souvenir Inquiries',
            lines: [
                { speaker: 'Tourist', japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
                { speaker: 'Clerk', japanese: 'それは日本の扇子です。', romaji: 'Sore wa nihon no sensu desu.', english: 'That is a Japanese fan.' }
            ]
        },
        readingPassage: {
            title: 'Shop Shelves',
            japanese: 'これは箸です。それはお椀です。あれは有名な急須です。どれもきれいです。',
            questions: [
                {
                    question: '急須はどれですか。',
                    options: ['あれ (That over there)', 'これ (This)', 'それ (That)', 'どれでもない (None)'],
                    correctAnswer: 'あれ (That over there)',
                    explanation: 'The text states "あれは有名な急須です".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'あなたの鍵はどれですか。あの黒い鍵です。',
            transcript: 'あなたの鍵はどれですか。あの黒い鍵です。',
            question: 'Which key is the speaker\'s?',
            options: ['That black key over there', 'The red key', 'The silver key', 'None'],
            correctAnswer: 'That black key over there',
            explanation: 'The speaker specifies "あの黒い鍵です".'
        },
        culturalNote: 'Point with an open palm rather than a single finger in Japan.',
        commonMistakes: ['Placing a noun directly after これ instead of この.']
    },
    {
        id: 'LESSON_N5_06',
        level: 'N5',
        moduleNumber: 2,
        moduleTitle: 'Demonstratives and Places',
        title: 'Demonstrative Adjectives (この・その・あの・どの)',
        japaneseTitle: '連体詞（この・その・あの・どの）',
        category: 'demonstratives',
        description: 'Specify distinct objects by directly modifying nouns with この, その, あの, and どの.',
        learningObjectives: [
            'Modify nouns directly using この, その, あの',
            'Form specific inquiries using どの + Noun',
            'Ask prices in everyday shopping contexts'
        ],
        content: `### Pre-Noun Demonstratives: この・その・あの・どの\n\nAlways immediately followed by a noun:\n* **この [Noun]**: This [Noun]\n* **その [Noun]**: That [Noun]\n* **あの [Noun]**: That [Noun] over there\n* **どの [Noun]**: Which [Noun]?`,
        examples: [
            { japanese: 'この本は面白いです。', reading: 'このほんはおもしろいです。', romaji: 'Kono hon wa omoshiroi desu.', english: 'This book is interesting.' },
            { japanese: 'その靴はいくらですか。', reading: 'そのくつはいくらですか。', romaji: 'Sono kutsu wa ikura desu ka.', english: 'How much are those shoes?' }
        ],
        dialogue: {
            title: 'Buying a Watch',
            lines: [
                { speaker: 'Customer', japanese: 'この時計を見せてください。', romaji: 'Kono tokei o misete kudasai.', english: 'Please show me this watch.' },
                { speaker: 'Clerk', japanese: 'はい、どうぞ。日本製です。', romaji: 'Hai, douzo. Nihonsei desu.', english: 'Certainly. It is made in Japan.' }
            ]
        },
        readingPassage: {
            title: 'Station Info',
            japanese: 'この電車は新宿行きです。次の駅は渋谷です。あのビルは渋谷駅の新しいビルです。',
            questions: [
                {
                    question: 'この電車はどこへ行きますか。',
                    options: ['新宿 (Shinjuku)', '渋谷 (Shibuya)', '東京 (Tokyo)', '横浜 (Yokohama)'],
                    correctAnswer: '新宿 (Shinjuku)',
                    explanation: 'The text says "この電車は新宿行きです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'どのシャツが好きですか。あの青いシャツが好きです。',
            transcript: 'どのシャツが好きですか。あの青いシャツが好きです。',
            question: 'Which shirt does the speaker like?',
            options: ['That blue shirt over there', 'The red shirt', 'The white shirt', 'The green shirt'],
            correctAnswer: 'That blue shirt over there',
            explanation: 'The speaker picks "あの青いシャツ".'
        },
        culturalNote: 'To inspect shop items, say 「これを見せてください」.',
        commonMistakes: ['Using この alone without a following noun.']
    },
    {
        id: 'LESSON_N5_07',
        level: 'N5',
        moduleNumber: 2,
        moduleTitle: 'Demonstratives and Places',
        title: 'Locations & Directions (ここ・そこ・あそこ・どこ)',
        japaneseTitle: '場所と方向（ここ・そこ・あそこ・どこ）',
        category: 'demonstratives',
        description: 'Ask for directions and describe physical locations using place demonstratives and polite directional counterparts.',
        learningObjectives: [
            'Express location using ここ, そこ, あそこ, どこ',
            'Use polite directionals こちら, そちら, あちら, どちら',
            'Ask where public facilities and rooms are situated'
        ],
        content: `### Location Demonstratives\n\n* **ここ (Koko)**: Here (near speaker)\n* **そこ (Soko)**: There (near listener)\n* **あそこ (Asoko)**: Over there (distant from both)\n* **どこ (Doko)**: Where?\n\n#### Polite Directional Equivalents:\n* ここ $\\rightarrow$ **こちら (Kochira)**\n* そこ $\\rightarrow$ **そちら (Sochira)**\n* あそこ $\\rightarrow$ **あちら (Achira)**\n* どこ $\\rightarrow$ **どちら (Dochira)**`,
        examples: [
            { japanese: 'お手洗いはどこですか。', reading: 'おてあらいはどこですか。', romaji: 'Otearai wa doko desu ka.', english: 'Where is the restroom?' },
            { japanese: '事務所はあちらです。', reading: 'じむしょはあちらです。', romaji: 'Jimusho wa achira desu.', english: 'The office is over there.' }
        ],
        dialogue: {
            title: 'Asking in a Department Store',
            lines: [
                { speaker: 'Customer', japanese: 'すみません、文房具売り場はどこですか。', romaji: 'Sumimasen, bunbougu uriba wa doko desu ka.', english: 'Excuse me, where is the stationery section?' },
                { speaker: 'Clerk', japanese: '三階でございます。あちらのエレベーターをご利用ください。', romaji: 'Sangai de gozaimasu. Achira no erebeetaa o goriyou kudasai.', english: 'It is on the 3rd floor. Please use that elevator over there.' }
            ]
        },
        readingPassage: {
            title: 'Floor Guide',
            japanese: '一階は食品売り場です。二階は服売り場です。三階は本屋とカフェです。お手洗いは各階の奥にあります。',
            questions: [
                {
                    question: '本屋は何階にありますか。',
                    options: ['三階 (3rd floor)', '一階 (1st floor)', '二階 (2nd floor)', '地下一階 (Basement)'],
                    correctAnswer: '三階 (3rd floor)',
                    explanation: 'The guide says "三階は本屋とカフェです".'
                }
            ]
        },
        listeningExercise: {
            audioText: '受付はどちらですか。受付はあそこの入口の隣です。',
            transcript: '受付はどちらですか。受付はあそこの入口の隣です。',
            question: 'Where is the reception desk?',
            options: ['Next to the entrance over there', 'On the 2nd floor', 'Outside the building', 'Near the elevator'],
            correctAnswer: 'Next to the entrance over there',
            explanation: 'The speaker answers "あそこの入口の隣です".'
        },
        culturalNote: 'In stores and businesses, staff use directional terms like こちら and そちら to maintain utmost hospitality (おもてなし).',
        commonMistakes: ['Confusing どこ (where) with どれ (which one).']
    },
    {
        id: 'LESSON_N5_08',
        level: 'N5',
        moduleNumber: 2,
        moduleTitle: 'Demonstratives and Places',
        title: 'Places Around Town',
        japaneseTitle: '町の施設と場所',
        category: 'vocab',
        description: 'Build a vocabulary foundation for urban navigation: stations, hospitals, banks, convenience stores, and restaurants.',
        learningObjectives: [
            'Identify essential public and commercial facilities in Japanese',
            'Construct destination sentences using particle へ and に',
            'Read Japanese municipal signs and building labels'
        ],
        content: `### Navigating Town Facilities\n\n* **駅 (えき - Eki)**: Train station\n* **銀行 (ぎんこう - Ginkou)**: Bank\n* **病院 (びょういん - Byouin)**: Hospital\n* **郵便局 (ゆうびんきょく - Yuubinkyoku)**: Post office\n* **図書館 (としょかん - Toshokan)**: Library\n* **コンビニ (Konbini)**: Convenience store\n* **公園 (こうえん - Kouen)**: Park`,
        examples: [
            { japanese: '銀行でお金を下ろします。', reading: 'ぎんこうでおかねをおろします。', romaji: 'Ginkou de okane o oroshimasu.', english: 'I withdraw money at the bank.' },
            { japanese: '郵便局で切手を買いました。', reading: 'ゆうびんきょくできってをかいまし​​た。', romaji: 'Yuubinkyoku de kitte o kaimashita.', english: 'I bought stamps at the post office.' }
        ],
        dialogue: {
            title: 'Errands Around the Station',
            lines: [
                { speaker: 'Ken', japanese: 'これからどこへ行きますか。', romaji: 'Kore kara doko e ikimasu ka.', english: 'Where are you going now?' },
                { speaker: 'Yuki', japanese: '郵便局へ行って、そのあとコンビニで買い物をします。', romaji: 'Yuubinkyoku e itte, sono ato konbini de kaimono o shimasu.', english: 'I am going to the post office, and then shopping at the convenience store.' }
            ]
        },
        readingPassage: {
            title: 'Town Map Note',
            japanese: '駅の前に大きな広場があります。駅の右に銀行があります。左に交番があります。図書館は公園の近くです。',
            questions: [
                {
                    question: '駅の右に何がありますか。',
                    options: ['銀行 (Bank)', '交番 (Police box)', '図書館 (Library)', '公園 (Park)'],
                    correctAnswer: '銀行 (Bank)',
                    explanation: 'The note states "駅の右に銀行があります".'
                }
            ]
        },
        listeningExercise: {
            audioText: '薬を買いに行きたいです。駅前のドラッグストアにありますよ。',
            transcript: '薬を買いに行きたいです。駅前のドラッグストアにありますよ。',
            question: 'Where can the speaker buy medicine?',
            options: ['At the drugstore in front of the station', 'At the hospital', 'At the convenience store', 'At the supermarket'],
            correctAnswer: 'At the drugstore in front of the station',
            explanation: 'The speaker points to "駅前のドラッグストア".'
        },
        culturalNote: 'Japanese police boxes (交番 - kouban) are located near almost every major station and provide friendly neighborhood directions.',
        commonMistakes: ['Confusing 病院 (byouin - hospital) with 美容院 (biyouin - hair salon).']
    },

    // --- MODULE 3: NUMBERS AND TIME ---
    {
        id: 'LESSON_N5_09',
        level: 'N5',
        moduleNumber: 3,
        moduleTitle: 'Numbers, Time and Calendar',
        title: 'Numbers (0 - 100,000) & Prices',
        japaneseTitle: '数字と値段の数え方',
        category: 'vocab',
        description: 'Count systematically in Japanese from 0 to 100,000 and understand the 4-digit grouping unit 万 (man).',
        learningObjectives: [
            'Count fluently from 0 to 10,000 and beyond',
            'Understand the Japanese 4-digit unit 万 (ten thousand)',
            'Read and ask prices in Japanese Yen (円)'
        ],
        content: `### Japanese Number System & The 10,000 Base\n\nJapanese groups large numbers in units of **4 digits (10,000 = 万)** rather than 3 digits (1,000):\n* **10**: 十 (じゅう)\n* **100**: 百 (ひゃく)\n* **1,000**: 千 (せん)\n* **10,000**: 一万 (いちまん)\n* **100,000**: 十万 (じゅうまん)\n\n#### Sound Changes in Hundreds & Thousands:\n* 300: さんびゃく (sanbyaku)\n* 600: ろっぴゃく (roppyaku)\n* 800: はっぴゃく (happyaku)\n* 3,000: さんぜん (sanzen)\n* 8,000: はっせん (hassen)`,
        examples: [
            { japanese: 'これは五百円です。', reading: 'これはごひゃくえんです。', romaji: 'Kore wa gohyakuen desu.', english: 'This is 500 yen.' },
            { japanese: 'このパソコンは八万五千円でした。', reading: 'このパソコンははちまんごせんえんでした。', romaji: 'Kono pasokon wa hachiman gosen\'en deshita.', english: 'This laptop was 85,000 yen.' }
        ],
        dialogue: {
            title: 'Paying at the Register',
            lines: [
                { speaker: 'Clerk', japanese: '合計で三千二百円になります。', romaji: 'Goukei de sanzen nihyakuen ni narimasu.', english: 'The total comes to 3,200 yen.' },
                { speaker: 'Customer', japanese: '一万円でお支払いします。', romaji: 'Ichiman\'en de oshiharai shimasu.', english: 'I will pay with a 10,000 yen bill.' },
                { speaker: 'Clerk', japanese: '六千八百円のお返しになります。', romaji: 'Rokusen happyakuen no okaeshi ni narimasu.', english: 'Your change is 6,800 yen.' }
            ]
        },
        readingPassage: {
            title: 'Receipt Itemization',
            japanese: 'お買い上げ明細：本（千五百円）、ノート二冊（四百円）、ペン（百五十円）。合計二千五十円です。',
            questions: [
                {
                    question: 'お会計の合計はいくらですか。',
                    options: ['二千五十円 (2,050 yen)', '二千円 (2,000 yen)', '三千円 (3,000 yen)', '千五百円 (1,500 yen)'],
                    correctAnswer: '二千五十円 (2,050 yen)',
                    explanation: 'The receipt total states "合計二千五十円です".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'このリンゴは一つ百二十円です。三つで三百円になります。',
            transcript: 'このリンゴは一つ百二十円です。三つで三百円になります。',
            question: 'How much are three apples?',
            options: ['300 yen', '360 yen', '120 yen', '400 yen'],
            correctAnswer: '300 yen',
            explanation: 'The speaker states "三つで三百円になります".'
        },
        culturalNote: 'Consumption tax (消費税) is typically included in price tags indicated by 「税込」 (tax included).',
        commonMistakes: ['Saying "十千" for 10,000 — in Japanese it is always 一万 (ichiman).']
    },
    {
        id: 'LESSON_N5_10',
        level: 'N5',
        moduleNumber: 3,
        moduleTitle: 'Numbers, Time and Calendar',
        title: 'Counters & Quantities (～つ, ～人, ～本, ～枚)',
        japaneseTitle: '助数詞とものの数え方',
        category: 'vocab',
        description: 'Count physical objects accurately according to shape, dimension, and classification with Japanese counters (助数詞).',
        learningObjectives: [
            'Use the native general counter series (一つ〜十)',
            'Count people with ～人 (ひとり, ふたり, さんにん)',
            'Count thin flat objects (～枚) and long cylindrical items (～本)'
        ],
        content: `### Essential Japanese Counters (助数詞)\n\nJapanese requires specialized suffixes depending on shape and type:\n\n1. **General Objects (Native Series)**: 一つ (ひとつ), 二つ (ふたつ), 三つ (みっつ), 四つ (よっつ), 五つ (いつつ), 六つ (むっつ), 七つ (ななつ), 八つ (やっつ), 九つ (ここのつ), 十 (とお).\n2. **People (～人)**: 一人 (ひとり), 二人 (ふたり), 三人 (さんにん)...\n3. **Flat Objects (～枚 - mai)**: Papers, shirts, plates (一枚, 二枚).\n4. **Long Cylindrical Objects (～本 - hon)**: Bottles, pens, umbrellas (一本 ippon, 二本 nihon, 三本 sanbon).\n5. **Vehicles / Machines (～台 - dai)**: Cars, computers, bicycles.`,
        examples: [
            { japanese: 'ビールを二本と餃子を一つください。', reading: 'ビールをにほんとぎょうざをひとつください。', romaji: 'Biiru o nihon to gyouza o hitotsu kudasai.', english: 'Please give me two beers and one order of gyoza.' },
            { japanese: '家族は四人います。', reading: 'かぞくはよにんいます。', romaji: 'Kazoku wa yonin imasu.', english: 'There are four people in my family.' }
        ],
        dialogue: {
            title: 'At an Izakaya',
            lines: [
                { speaker: 'Clerk', japanese: 'いらっしゃいませ！何名様ですか。', romaji: 'Irasshaimase! Nanmei-sama desu ka.', english: 'Welcome! How many guests?' },
                { speaker: 'Customer', japanese: '二人です。', romaji: 'Futari desu.', english: 'Two people.' },
                { speaker: 'Clerk', japanese: 'こちらのテーブルへどうぞ。', romaji: 'Kochira no teeburu e douzo.', english: 'Please come to this table.' }
            ]
        },
        readingPassage: {
            title: 'Picnic Checklist',
            japanese: 'ピクニックの持ち物：水筒二本、サンドイッチ四つ、お皿四枚、敷物一枚。準備完了です。',
            questions: [
                {
                    question: '水筒は何本ありますか。',
                    options: ['二本 (Two)', '四本 (Four)', '一本 (One)', '三本 (Three)'],
                    correctAnswer: '二本 (Two)',
                    explanation: 'The list states "水筒二本" (two water bottles).'
                }
            ]
        },
        listeningExercise: {
            audioText: '切符を大人二人と子供一人分ください。',
            transcript: '切符を大人二人と子供一人分ください。',
            question: 'How many total tickets were requested?',
            options: ['Three tickets (2 adults, 1 child)', 'Two adult tickets', 'Four tickets', 'One child ticket'],
            correctAnswer: 'Three tickets (2 adults, 1 child)',
            explanation: 'The speaker asked for "大人二人と子供一人分" (two adults and one child).'
        },
        culturalNote: 'When ordering in restaurants, holding up fingers with the count is universally understood alongside counters.',
        commonMistakes: ['Saying "いちにん" or "ににん" for 1 or 2 people — use ひとり and ふたり.']
    },
    {
        id: 'LESSON_N5_11',
        level: 'N5',
        moduleNumber: 3,
        moduleTitle: 'Numbers, Time and Calendar',
        title: 'Telling Time (Hours & Minutes)',
        japaneseTitle: '時間の表し方（時・分）',
        category: 'time',
        description: 'Tell clock time, specify exact minutes, express half-hours (半), and specify AM (午前) and PM (午後).',
        learningObjectives: [
            'Count hours with ～時 (ji) including irregular forms (4:00, 7:00, 9:00)',
            'Count minutes with ～分 (fun/pun)',
            'Express daily activity times using particle に'
        ],
        content: `### Clock Time in Japanese\n\n* **Hours (～時 - ji)**: 一時 (1:00), 二時 (2:00), 三時 (3:00), **四時 (よじ - 4:00)**, 五時 (5:00), 六時 (6:00), **七時 (しちじ - 7:00)**, 八時 (8:00), **九時 (くじ - 9:00)**, 十時 (10:00), 十一時 (11:00), 十二時 (12:00).\n* **Half-past**: ～時**半** (han) (e.g. 七時半 = 7:30).\n* **Minutes (～分)**: 一分 (いっぷん), 二分 (にふん), 三分 (さんぷん), 四分 (よんぷん), 五分 (ごふん), 六分 (ろっぷん), 七分 (ななふん), 八分 (はっぷん), 九分 (きゅうふん), 十分 (じゅっぷん).\n* **AM/PM**: 午前 (ごぜん) / 午後 (ごご).`,
        examples: [
            { japanese: '今何時ですか。午後三時十五分です。', reading: 'いまなんじですか。ごごさんじじゅうごふんです。', romaji: 'Ima nanji desu ka. Gogo sanji juugofun desu.', english: 'What time is it now? It is 3:15 PM.' },
            { japanese: '毎朝六時半に起きます。', reading: 'まいあさろくじはんにおきます。', romaji: 'Maiasa rokujihan ni okimasu.', english: 'I wake up at 6:30 every morning.' }
        ],
        dialogue: {
            title: 'Checking Train Schedule',
            lines: [
                { speaker: 'Passenger', japanese: '次の電車は何時に発車しますか。', romaji: 'Tsugi no densha wa nanji ni hassha shimasu ka.', english: 'What time does the next train depart?' },
                { speaker: 'StationStaff', japanese: '十時二十五分発です。三番ホームへどうぞ。', romaji: 'Juuji nijuugofun hatsu desu. Sanban hoomu e douzo.', english: 'It departs at 10:25. Please proceed to platform 3.' }
            ]
        },
        readingPassage: {
            title: 'Clinic Hours Notice',
            japanese: 'さくら医院の診療時間：午前九時から十二時半まで。午後は三時から六時までです。木曜日と日曜日は休診です。',
            questions: [
                {
                    question: '午後の診療は何時に始まりますか。',
                    options: ['三時 (3:00)', '九時 (9:00)', '十二時半 (12:30)', '六時 (6:00)'],
                    correctAnswer: '三時 (3:00)',
                    explanation: 'The notice states "午後は三時から".'
                }
            ]
        },
        listeningExercise: {
            audioText: '映画は何時に始まりますか。一時四十分ですよ。',
            transcript: '映画は何時に始まりますか。一時四十分ですよ。',
            question: 'When does the movie start?',
            options: ['1:40', '1:14', '2:40', '1:04'],
            correctAnswer: '1:40',
            explanation: 'The speaker answers "一時四十分ですよ" (1:40).'
        },
        culturalNote: 'Trains in Japan depart down to the exact second. Timetables are adhered to with world-renowned precision.',
        commonMistakes: ['Saying "よんじ" or "しじ" for 4:00 (it is always よじ).']
    },
    {
        id: 'LESSON_N5_12',
        level: 'N5',
        moduleNumber: 3,
        moduleTitle: 'Numbers, Time and Calendar',
        title: 'Days, Dates & Calendar',
        japaneseTitle: '曜日と日付・カレンダー',
        category: 'time',
        description: 'Master weekdays, months of the year, and the irregular 1st through 10th days of the month (一日〜十日).',
        learningObjectives: [
            'Recite the 7 days of the week (月火水木金土日)',
            'Master the irregular calendar days of the month (一日 tsuitachi, 二日 futsuka...)',
            'Use relative time words (今日, 明日, 昨日, 先週, 来週)'
        ],
        content: `### Days of the Week & Calendar Dates\n\n#### Weekdays (曜日 - youbi):\n* **月曜日 (Getsu)**: Monday (Moon)\n* **火曜日 (Ka)**: Tuesday (Fire)\n* **水曜日 (Sui)**: Wednesday (Water)\n* **木曜日 (Moku)**: Thursday (Wood)\n* **金曜日 (Kin)**: Friday (Gold/Metal)\n* **土曜日 (Do)**: Saturday (Earth)\n* **日曜日 (Nichi)**: Sunday (Sun)\n\n#### Irregular Dates (Days 1–10, 14, 20, 24):\n* 1日: ついたち (tsuitachi)\n* 2日: ふつか (futsuka)\n* 3日: みっか (mikka)\n* 4日: よっか (yokka)\n* 5日: いつか (itsuka)\n* 6日: むいか (muika)\n* 7日: なのか (nanoka)\n* 8日: ようか (youka)\n* 9日: ここのか (kokonoka)\n* 10日: とおか (tooka)\n* 14日: じゅうよっか (juuyokka)\n* 20日: はつか (hatsuka)\n* 24日: にじゅうよっか (nijuuyokka)`,
        examples: [
            { japanese: '今日は何日ですか。四月一日です。', reading: 'きょうはなんにちですか。しがつついたちです。', romaji: 'Kyou wa nannichi desu ka. Shigatsu tsuitachi desu.', english: 'What date is today? It is April 1st.' },
            { japanese: '誕生日は八月二十日です。', reading: 'たんじょうびははちがつはつかです。', romaji: 'Tanjoubi wa hachigatsu hatsuka desu.', english: 'My birthday is August 20th.' }
        ],
        dialogue: {
            title: 'Scheduling an Appointment',
            lines: [
                { speaker: 'Tanaka', japanese: '来週の金曜日に会えませんか。', romaji: 'Raishuu no kin\'youbi ni aemasen ka.', english: 'Could we meet next Friday?' },
                { speaker: 'Ken', japanese: '金曜日は五日ですね。大丈夫です、会いましょう！', romaji: 'Kin\'youbi wa itsuka desu ne. Daijoubu desu, aimashou!', english: 'Friday is the 5th, right? That is fine, let us meet!' }
            ]
        },
        readingPassage: {
            title: 'Holiday Trip Schedule',
            japanese: '五月三日から五日まで旅行に行きます。五月三日は憲法記念日です。五月五日はこどもの日です。家族で温泉へ行きます。',
            questions: [
                {
                    question: '旅行は何日間ですか。',
                    options: ['三日間 (3 days: May 3-5)', '五日間 (5 days)', '二日間 (2 days)', '一日 (1 day)'],
                    correctAnswer: '三日間 (3 days: May 3-5)',
                    explanation: 'The text states "五月三日から五日まで" (May 3rd to 5th = 3 days).'
                }
            ]
        },
        listeningExercise: {
            audioText: 'テストは来週の木曜日、十二日です。忘れないでください。',
            transcript: 'テストは来週の木曜日、十二日です。忘れないでください。',
            question: 'When is the test?',
            options: ['Next Thursday, the 12th', 'Next Tuesday, the 20th', 'This Friday, the 5th', 'Next Monday'],
            correctAnswer: 'Next Thursday, the 12th',
            explanation: 'The audio specifies "来週の木曜日、十二日".'
        },
        culturalNote: 'Golden Week (ゴールデンウィーク) in late April to early May is one of Japan\'s largest national holiday travel seasons.',
        commonMistakes: ['Calling the 1st of the month "いちにち" when asking for dates — it is ついたち (tsuitachi).']
    },

    // --- MODULE 4: PARTICLES DEEP DIVE ---
    {
        id: 'LESSON_N5_13',
        level: 'N5',
        moduleNumber: 4,
        moduleTitle: 'Particles Deep Dive',
        title: 'Fundamental Particles I (は, が, を, の)',
        japaneseTitle: '基本助詞 I（は・が・を・の）',
        category: 'particles',
        description: 'The core grammatical backbone: master direct objects with を, noun connections with の, and contrast topic は with subject が.',
        learningObjectives: [
            'Mark transitive direct objects accurately with を',
            'Distinguish topic marker は from subject marker が',
            'Construct multi-particle sentences incorporating は, が, を, and の'
        ],
        content: `### The Four Pillars of Sentence Structure\n\n* **を (o)**: Direct object of an action (本**を**読む = *read a book*).\n* **の (no)**: Noun modifier / possession (私**の**家 = *my house*).\n* **は (wa)**: Overarching topic of discussion.\n* **が (ga)**: Specific subject or newly identified actor.`,
        examples: [
            { japanese: 'わたしは毎朝コーヒーを飲みます。', reading: 'わたしはまいあさコーヒーをのみます。', romaji: 'Watashi wa maiasa koohii o nomimasu.', english: 'I drink coffee every morning.' },
            { japanese: '誰が来ましたか。山田さんが来ました。', reading: 'だれがきまし​​たか。やまださんがきました。', romaji: 'Dare ga kimashita ka. Yamada-san ga kimashita.', english: 'Who came? Mr. Yamada came.' }
        ],
        dialogue: {
            title: 'Breakfast Conversation',
            lines: [
                { speaker: 'Emi', japanese: '朝ご飯は何を食べますか。', romaji: 'Asagohan wa nani o tabemasu ka.', english: 'What do you eat for breakfast?' },
                { speaker: 'Ken', japanese: 'パンと卵を食べます。母が作ります。', romaji: 'Pan to tamago o tabemasu. Haha ga tsukurimasu.', english: 'I eat bread and eggs. My mother makes it.' }
            ]
        },
        readingPassage: {
            title: 'Sunday Journal',
            japanese: '日曜日の朝、ケンさんは図書館へ行きます。日本語の雑誌を読みます。そのあと、カフェでコーヒーを飲みます。',
            questions: [
                {
                    question: 'ケンさんは図書館で何を読みますか。',
                    options: ['日本語の雑誌 (Japanese magazine)', '英語の新聞 (English newspaper)', '小説 (Novel)', '教科書 (Textbook)'],
                    correctAnswer: '日本語の雑誌 (Japanese magazine)',
                    explanation: 'The text states "日本語の雑誌を読みます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '昨日、何を買いまし​​たか。デパートで新しいカバンと靴を買いました。',
            transcript: '昨日、何を買いまし​​たか。デパートで新しいカバンと靴を買いました。',
            question: 'What items did the speaker purchase?',
            options: ['A bag and shoes', 'A watch and hat', 'A coat', 'Only a bag'],
            correctAnswer: 'A bag and shoes',
            explanation: 'The speaker bought "新しいカバンと靴".'
        },
        culturalNote: 'Subjects and topics are frequently dropped in natural Japanese when understood from context.',
        commonMistakes: ['Pronouncing を with a heavy English "W" — pronounce it cleanly as "o".']
    },
    {
        id: 'LESSON_N5_14',
        level: 'N5',
        moduleNumber: 4,
        moduleTitle: 'Particles Deep Dive',
        title: 'Fundamental Particles II (に, へ, で, と, も)',
        japaneseTitle: '基本助詞 II（に・へ・で・と・も）',
        category: 'particles',
        description: 'Express location of actions (で), arrival and direction (に/へ), companions (と), and inclusion (も).',
        learningObjectives: [
            'Contrast action locations (で) with static existence locations (に)',
            'Express movement direction with へ and arrival destination with に',
            'List companions and partners with と'
        ],
        content: `### Direction, Location, and Instrument Particles\n\n* **に (ni)**: Target point / Arrival destination / Specific time.\n* **へ (e)**: Direction of movement toward a destination.\n* **で (de)**: Active event location / Tool or means of transport (電車**で**行きます = *go by train*).\n* **と (to)**: With someone / "And" between nouns.\n* **も (mo)**: "Also / Too" (replaces は/を).`,
        examples: [
            { japanese: '図書館で勉強します。', reading: 'としょかんでべんきょうします。', romaji: 'Toshokan de benkyou shimasu.', english: 'I study at the library.' },
            { japanese: '新幹線で京都へ行きました。', reading: 'しんかんせんできょうとへいきました。', romaji: 'Shinkansen de Kyouto e ikimashita.', english: 'I went to Kyoto by Shinkansen.' }
        ],
        dialogue: {
            title: 'Weekend Plans',
            lines: [
                { speaker: 'Sora', japanese: '日曜日にどこへ行きますか。', romaji: 'Nichiyoubi ni doko e ikimasu ka.', english: 'Where are you going on Sunday?' },
                { speaker: 'Riku', japanese: '友達と新宿へ買い物に行きます。電車で行きます。', romaji: 'Tomodachi to Shinjuku e kaimono ni ikimasu. Densha de ikimasu.', english: 'I am going shopping in Shinjuku with a friend. We will go by train.' }
            ]
        },
        readingPassage: {
            title: 'Commute Profile',
            japanese: 'わたしは毎朝七時に起きます。自転車で駅まで行って、電車で会社へ通います。会社で八時間働きます。',
            questions: [
                {
                    question: '駅まで何で行きますか。',
                    options: ['自転車 (Bicycle)', '電車 (Train)', 'バス (Bus)', '歩いて (Walking)'],
                    correctAnswer: '自転車 (Bicycle)',
                    explanation: 'The text states "自転車で駅まで行って".'
                }
            ]
        },
        listeningExercise: {
            audioText: '昨日、どこで晩ご飯を食べましたか。友達とレストランで寿司を食べました。',
            transcript: '昨日、どこで晩ご飯を食べましたか。友達とレストランで寿司を食べました。',
            question: 'Where did the speaker eat dinner?',
            options: ['At a restaurant with a friend', 'At home alone', 'At the office', 'At a cafe'],
            correctAnswer: 'At a restaurant with a friend',
            explanation: 'The speaker answers "友達とレストランで寿司を食べました".'
        },
        culturalNote: 'Japanese public transit requires strict etiquette: talking on phones inside trains is prohibited.',
        commonMistakes: ['Using で for destination instead of へ or に.']
    },
    {
        id: 'LESSON_N5_15',
        level: 'N5',
        moduleNumber: 4,
        moduleTitle: 'Particles Deep Dive',
        title: 'Time, Direction & Limits (から・まで)',
        japaneseTitle: '起点と終点（から・まで）',
        category: 'particles',
        description: 'Frame boundaries of time, distance, and duration using the pairing から (from/since) and まで (until/to).',
        learningObjectives: [
            'Express starting points and ending points of time (9時から5時まで)',
            'Express geographic spans from origin to destination',
            'Use から and まで independently in sentences'
        ],
        content: `### From and Until: から and まで\n\n* **から (kara)**: Starting point in time or space (*from / since*).\n* **まで (made)**: Endpoint in time or space (*until / to*).\n\n$$\\text{[Start]} \\text{ から } \\text{[End]} \\text{ まで}$$\n\nCan be used together or individually: 会社は五時**まで**です (*The office is open until 5*).`,
        examples: [
            { japanese: '銀行は九時から三時までです。', reading: 'ぎんこうはくじからさんじまでです。', romaji: 'Ginkou wa kuji kara sanji made desu.', english: 'The bank is open from 9:00 to 3:00.' },
            { japanese: '東京から大阪まで新幹線で二時間半かかります。', reading: 'とうきょうからおおさかまでしんかんせんでにじかんはんかかります。', romaji: 'It takes two and a half hours from Tokyo to Osaka by bullet train.' }
        ],
        dialogue: {
            title: 'School Hours Inquiry',
            lines: [
                { speaker: 'Parent', japanese: '授業は何時から何時までですか。', romaji: 'Jugyou wa nanji kara nanji made desu ka.', english: 'From what time to what time are classes?' },
                { speaker: 'Staff', japanese: '午前九時から午後三時半までです。', romaji: 'Gozen kuji kara gogo sanjihan made desu.', english: 'From 9:00 AM until 3:30 PM.' }
            ]
        },
        readingPassage: {
            title: 'Museum Schedule Notice',
            japanese: '東京国立博物館。開館時間は午前九時半から午後五時までです。月曜日は休館日です。入館は四時半までにお願いします。',
            questions: [
                {
                    question: '入館は何時までですか。',
                    options: ['四時半 (4:30)', '五時 (5:00)', '九時半 (9:30)', 'いつでもよい (Anytime)'],
                    correctAnswer: '四時半 (4:30)',
                    explanation: 'The notice clarifies "入館は四時半までにお願いします".'
                }
            ]
        },
        listeningExercise: {
            audioText: '会議は二時から四時まで会議室で行います。',
            transcript: '会議は二時から四時まで会議室で行います。',
            question: 'How long is the meeting?',
            options: ['Two hours (2:00 - 4:00)', 'Three hours', 'One hour', 'Four hours'],
            correctAnswer: 'Two hours (2:00 - 4:00)',
            explanation: 'The meeting is from 2 to 4 (二時から四時まで = 2 hours).'
        },
        culturalNote: 'Last admission (最終入館) at Japanese attractions is typically 30 to 60 minutes before closing time.',
        commonMistakes: ['Confusing まで (until continuous) with までに (deadline by a certain time).']
    },
    {
        id: 'LESSON_N5_16',
        level: 'N5',
        moduleNumber: 4,
        moduleTitle: 'Particles Deep Dive',
        title: 'Mastering Particle Contrasts',
        japaneseTitle: '助詞の総整理と使い分け',
        category: 'particles',
        description: 'Resolve common particle confusions through contrasting pairs: は vs が, に vs で, に vs へ, と vs も.',
        learningObjectives: [
            'Confidently select between topic は and subject が',
            'Distinguish location of static presence (に) from location of action (で)',
            'Complete JLPT-style particle insertion challenges without hesitation'
        ],
        content: `### Critical Particle Distinctions Matrix\n\n1. **は vs が**:\n   * **は**: Known context / contrast topic (*"As for X..."*).\n   * **が**: Answers question words / introduces new subject actor (*"X is the one who..."*).\n2. **に vs で**:\n   * **に**: Marks static existence (部屋**に**います = *in the room*).\n   * **で**: Marks dynamic action (部屋**で**本を読みます = *read in the room*).\n3. **に vs へ**:\n   * **に**: Specific arrival target.\n   * **へ**: Direction of travel toward.`,
        examples: [
            { japanese: '教室に先生がいます。（に：存在場所）', reading: 'きょうしつにせんせいがいます。', romaji: 'Kyoushitsu ni sensei ga imasu.', english: 'There is a teacher in the classroom.' },
            { japanese: '教室でテストを受けます。（で：行動場所）', reading: 'きょうしつでテストをうけます。', romaji: 'Kyoushitsu de tesuto o ukemasu.', english: 'I take a test in the classroom.' }
        ],
        dialogue: {
            title: 'Who is Coming to the Party?',
            lines: [
                { speaker: 'Hana', japanese: 'だれがパーティーに来ますか。', romaji: 'Dare ga paatii ni kimasu ka.', english: 'Who is coming to the party?' },
                { speaker: 'Ren', japanese: '田中さんとスミスさんが来ます。山田さんは来ません。', romaji: 'Tanaka-san to Sumisu-san ga kimasu. Yamada-san wa kimasen.', english: 'Mr. Tanaka and Mr. Smith are coming. As for Mr. Yamada, he is not coming.' }
            ]
        },
        readingPassage: {
            title: 'Weekend Contrast',
            japanese: '土曜日は天気が良かったです。日曜日は雨が降りました。土曜日に公園へ行きましたが、日曜日は家で映画を見ました。',
            questions: [
                {
                    question: '日曜日はどこで何をしましたか。',
                    options: ['家で映画を見た (Watched a movie at home)', '公園へ行った (Went to the park)', '会社へ行った (Went to work)', '買い物をした (Shopped)'],
                    correctAnswer: '家で映画を見た (Watched a movie at home)',
                    explanation: 'The text states "日曜日は家で映画を見ました".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'だれがこの絵を描きましたか。妹が描きました。',
            transcript: 'だれがこの絵を描きましたか。妹が描きました。',
            question: 'Who drew the picture?',
            options: ['The speaker\'s younger sister', 'The speaker\'s mother', 'The speaker himself', 'The art teacher'],
            correctAnswer: 'The speaker\'s younger sister',
            explanation: 'The speaker answers "妹が描きました".'
        },
        culturalNote: 'Answering questions starting with だれ (who) or なに (what) always uses particle が to highlight the answer.',
        commonMistakes: ['Using は immediately after question words like だれ or なに (never say "だれは").']
    },

    // --- MODULE 5: EXISTENCE AND LOCATION ---
    {
        id: 'LESSON_N5_17',
        level: 'N5',
        moduleNumber: 5,
        moduleTitle: 'Existence and Location',
        title: 'Existence Verbs (あります & います)',
        japaneseTitle: '存在の動詞（あります・います）',
        category: 'grammar',
        description: 'Express the existence of inanimate objects with あります and animate living beings with います.',
        learningObjectives: [
            'Use あります for inanimate objects, furniture, buildings, and plants',
            'Use います for living beings with autonomous movement (people and animals)',
            'Construct [Place] に [Noun] が あります / います existence sentences'
        ],
        content: `### The Inanimate vs Animate Division\n\nJapanese divides the concept of "existence" into two distinct verbs:\n\n1. **あります (Arimasu)**: Inanimate objects, plants, vehicles, events.\n   * 机の上にペンが**あります**。 (*There is a pen on the desk.*)\n2. **います (Imasu)**: People, animals, insects.\n   * 庭に犬が**います**。 (*There is a dog in the garden.*)\n\n#### Sentence Structure:\n$$\\text{[Location]} \\text{ に } \\text{[Subject]} \\text{ が あります / います}$$`,
        examples: [
            { japanese: '部屋にテレビがあります。', reading: 'へやにテレビがあります。', romaji: 'Heya ni terebi ga arimasu.', english: 'There is a TV in the room.' },
            { japanese: '公園に子供がたくさんいます。', reading: 'こうえんにこどもがたくさんいます。', romaji: 'Kouen ni kodomo ga takusan imasu.', english: 'There are many children in the park.' }
        ],
        dialogue: {
            title: 'Looking for the Cat',
            lines: [
                { speaker: 'Child', japanese: 'お母さん、猫のミーちゃんはどこにいますか。', romaji: 'Okaasan, neko no Mii-chan wa doko ni imasu ka.', english: 'Mom, where is Mii-chan the cat?' },
                { speaker: 'Mother', japanese: 'リビングのソファーの下にいますよ。', romaji: 'Ribingu no sofaa no shita ni imasu yo.', english: 'She is under the sofa in the living room.' }
            ]
        },
        readingPassage: {
            title: 'Room Description',
            japanese: '私の部屋は二階にあります。部屋にベッドと机があります。机の横に本棚があります。ペットのハムスターもいます。',
            questions: [
                {
                    question: '部屋に生き物は何がいますか。',
                    options: ['ハムスター (Hamster)', '犬 (Dog)', '猫 (Cat)', '鳥 (Bird)'],
                    correctAnswer: 'ハムスター (Hamster)',
                    explanation: 'The text states "ペットのハムスターもいます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '冷蔵庫の中に何か飲み物はありますか。冷たいお茶とジュースがありますよ。',
            transcript: '冷蔵庫の中に何か飲み物はありますか。冷たいお茶とジュースがありますよ。',
            question: 'What drinks are inside the refrigerator?',
            options: ['Cold green tea and juice', 'Only water', 'Milk and beer', 'Coffee'],
            correctAnswer: 'Cold green tea and juice',
            explanation: 'The speaker lists "冷たいお茶とジュースがあります".'
        },
        culturalNote: 'Robot pets in modern Japan are sometimes referred to with います when treated like family members!',
        commonMistakes: ['Using あります for people or pets (e.g. saying "ともだち が あります" is incorrect; use います).']
    },
    {
        id: 'LESSON_N5_18',
        level: 'N5',
        moduleNumber: 5,
        moduleTitle: 'Existence and Location',
        title: 'Spatial Positions (上・下・前・後ろ・中・外・隣)',
        japaneseTitle: '位置関係を表す言葉',
        category: 'vocab',
        description: 'Describe precise 3D spatial layouts: above, below, in front of, behind, inside, outside, and next to.',
        learningObjectives: [
            'Master positional words: 上 (ue), 下 (shita), 前 (mae), 後ろ (ushiro), 中 (naka), 外 (soto), 隣 (tonari), 近く (chikaku)',
            'Combine positional words with の (机の上, 箱の中)',
            'Guide people to specific lost items and landmarks'
        ],
        content: `### Spatial Position Words\n\n* **上 (うえ - ue)**: Above / On top\n* **下 (した - shita)**: Below / Underneath\n* **前 (まえ - mae)**: In front / Ahead\n* **後ろ (うしろ - ushiro)**: Behind / In back\n* **中 (なか - naka)**: Inside / In\n* **外 (そと - soto)**: Outside\n* **右 (みぎ - migi)**: Right\n* **左 (ひだり - hidari)**: Left\n* **隣 (となり - tonari)**: Next to (same category)\n* **近く (ちかく - chikaku)**: Near / In vicinity`,
        examples: [
            { japanese: 'カバンのの中に財布があります。', reading: 'カバンのなかにさいふがあります。', romaji: 'Kaban no naka ni saifu ga arimasu.', english: 'The wallet is inside the bag.' },
            { japanese: '駅の前にタクシー乗り場があります。', reading: 'えきのまえにタクシーのりばがあります。', romaji: 'Eki no mae ni takushii noriba ga arimasu.', english: 'There is a taxi stand in front of the station.' }
        ],
        dialogue: {
            title: 'Where are My Glasses?',
            lines: [
                { speaker: 'Grandfather', japanese: '私の眼鏡はどこにあるかな。', romaji: 'Watashi no megane wa doko ni aru ka na.', english: 'I wonder where my glasses are.' },
                { speaker: 'Granddaughter', japanese: 'テレビの横、新聞の下にありますよ！', romaji: 'Terebi no yoko, shinbun no shita ni arimasu yo!', english: 'They are beside the TV, under the newspaper!' }
            ]
        },
        readingPassage: {
            title: 'Living Room Layout',
            japanese: '部屋の中央にテーブルがあります。テーブルの上に花瓶があります。テーブルの下にじゅうたんが敷いてあります。本棚はドアの隣です。',
            questions: [
                {
                    question: '花瓶はどこにありますか。',
                    options: ['テーブルの上 (On the table)', 'テーブルの下 (Under the table)', 'ドアの隣 (Next to the door)', '本棚の中 (In the bookshelf)'],
                    correctAnswer: 'テーブルの上 (On the table)',
                    explanation: 'The text states "テーブルの上に花瓶があります".'
                }
            ]
        },
        listeningExercise: {
            audioText: '鍵はどこですか。靴箱の上に置いてあります。',
            transcript: '鍵はどこですか。靴箱の上に置いてあります。',
            question: 'Where are the keys located?',
            options: ['On top of the shoe cabinet', 'Inside the bag', 'Under the table', 'In the car'],
            correctAnswer: 'On top of the shoe cabinet',
            explanation: 'The speaker specifies "靴箱の上に置いてあります".'
        },
        culturalNote: 'At Japanese entrances (玄関 - genkan), the shoe cabinet is called 靴箱 (kutsubako) or 下駄箱 (getabako).',
        commonMistakes: ['Confusing 隣 (tonari - adjacent item of same type) with 近く (chikaku - general neighborhood vicinity).']
    },
    {
        id: 'LESSON_N5_19',
        level: 'N5',
        moduleNumber: 5,
        moduleTitle: 'Existence and Location',
        title: 'Location & Existence Sentences',
        japaneseTitle: '位置と所在の文型統合',
        category: 'grammar',
        description: 'Synthesize location phrases: contrast [Place] に [Thing] が あります with [Thing] は [Place] に あります.',
        learningObjectives: [
            'Contrast existence sentences with location identification sentences',
            'Construct complex multi-item location descriptions',
            'Inquire about landmark locations in town'
        ],
        content: `### Two Perspectives on Location\n\n1. **Focus on What Exists at a Place**:\n   $$\\text{[Location]} \\text{ に } \\text{[Item]} \\text{ が あります}$$\n   * あそこにコンビニがあります。 (*There is a convenience store over there.*)\n\n2. **Focus on Where a Known Item is Located**:\n   $$\\text{[Item]} \\text{ は } \\text{[Location]} \\text{ に あります}$$\n   * コンビニはあそこにあります。 (*The convenience store is over there.*)`,
        examples: [
            { japanese: '東京タワーは港区にあります。', reading: 'とうきょうタワーはみなとくにあります。', romaji: 'Toukyou tawaa wa Minato-ku ni arimasu.', english: 'Tokyo Tower is in Minato Ward.' },
            { japanese: '先生は今、職員室にいます。', reading: 'せんせいはいま、しょくいんしつにいます。', romaji: 'Sensei wa ima, shokuinshitsu ni imasu.', english: 'The teacher is in the staff room right now.' }
        ],
        dialogue: {
            title: 'Finding the Pharmacy',
            lines: [
                { speaker: 'Tourist', japanese: 'すみません、薬局はどこにありますか。', romaji: 'Sumimasen, yakkyoku wa doko ni arimasu ka.', english: 'Excuse me, where is a pharmacy?' },
                { speaker: 'Local', japanese: 'あのスーパーの向かい側にありますよ。', romaji: 'Ano suupaa no mukaigawa ni arimasu yo.', english: 'It is across from that supermarket over there.' }
            ]
        },
        readingPassage: {
            title: 'School Campus Guide',
            japanese: '体育館はグラウンドの隣にあります。学食は本館の一階にあります。図書館は学食の前にあります。静かで勉強しやすいです。',
            questions: [
                {
                    question: '学食はどこにありますか。',
                    options: ['本館の一階 (1st floor of main building)', 'グラウンドの隣 (Next to ground)', '図書館の二階 (2nd floor of library)', '体育館の中 (Inside gym)'],
                    correctAnswer: '本館の一階 (1st floor of main building)',
                    explanation: 'The guide says "学食は本館の一階にあります".'
                }
            ]
        },
        listeningExercise: {
            audioText: '佐藤さんはどこですか。会議室にいますよ。',
            transcript: '佐藤さんはどこですか。会議室にいますよ。',
            question: 'Where is Ms. Sato?',
            options: ['In the conference room', 'In the cafeteria', 'At her desk', 'Out of the office'],
            correctAnswer: 'In the conference room',
            explanation: 'The speaker answers "会議室にいますよ".'
        },
        culturalNote: 'In Japanese addresses, ordering proceeds from broad to specific: Country $\\rightarrow$ Prefecture $\\rightarrow$ City $\\rightarrow$ Ward $\\rightarrow$ Block $\\rightarrow$ Number.',
        commonMistakes: ['Putting を with あります/います (never say "本をあります").']
    },

    // --- MODULE 6: VERBS AND DAILY ACTIVITIES ---
    {
        id: 'LESSON_N5_20',
        level: 'N5',
        moduleNumber: 6,
        moduleTitle: 'Verbs & Masu Form',
        title: 'Japanese Verb Groups (Group 1, 2, Irregular)',
        japaneseTitle: '動詞の３つのグループ分類',
        category: 'verbs',
        description: 'Understand the three Japanese verb classifications: Godan (Group 1), Ichidan (Group 2), and Irregular (Group 3).',
        learningObjectives: [
            'Classify any verb into Group 1 (Godan), Group 2 (Ichidan), or Group 3 (Irregular)',
            'Identify the dictionary endings for each group',
            'Master the two irregular verbs: する (to do) and 来る (to come)'
        ],
        content: `### The Three Japanese Verb Groups\n\nAll Japanese verbs end in a **U-row vowel** in their dictionary form:\n\n1. **Group 1: 五段 (Godan)**: Ends in う, く, ぐ, す, つ, ぬ, ぶ, む, or consonant+る (e.g. 書く, 話す, 飲む, 帰る).\n2. **Group 2: 一段 (Ichidan)**: Ends in **-いる (-iru)** or **-える (-eru)** (e.g. 食べる, 見る, 寝る, 起きる).\n3. **Group 3: 不規則 (Irregular)**: Only two verbs:\n   * **する (suru)** $\\rightarrow$ します (*to do*)\n   * **来る (kuru)** $\\rightarrow$ 来ます (*to come*)`,
        examples: [
            { japanese: '本を読む（グループ１）', reading: 'ほんをよむ', romaji: 'hon o yomu', english: 'to read a book (Group 1)' },
            { japanese: 'ご飯を食べる（グループ２）', reading: 'ごはんをたべる', romaji: 'gohan o taberu', english: 'to eat a meal (Group 2)' },
            { japanese: '日本語を勉強する（グループ３）', reading: 'にほんごをべんきょうする', romaji: 'nihongo o benkyou suru', english: 'to study Japanese (Group 3)' }
        ],
        dialogue: {
            title: 'Daily Habits',
            lines: [
                { speaker: 'Taro', japanese: '毎晩何時に寝ますか。', romaji: 'Maiban nanji ni nemasu ka.', english: 'What time do you go to bed every night?' },
                { speaker: 'Ken', japanese: '十一時に寝て、朝六時に起きます。', romaji: 'Juuichiji ni nete, asa rokuji ni okimasu.', english: 'I sleep at 11:00 and wake up at 6:00 AM.' }
            ]
        },
        readingPassage: {
            title: 'Verb Classification Note',
            japanese: '日本語の動詞は３グループあります。「食べる」はグループ２です。「行く」はグループ１です。「する」と「来る」はグループ３です。',
            questions: [
                {
                    question: '「食べる」はどのグループですか。',
                    options: ['グループ２ (Group 2)', 'グループ１ (Group 1)', 'グループ３ (Group 3)', '不規則動詞 (Irregular)'],
                    correctAnswer: 'グループ２ (Group 2)',
                    explanation: 'The text states "「食べる」はグループ２です".'
                }
            ]
        },
        listeningExercise: {
            audioText: '毎日、日本語を勉強します。週末は友達と遊びます。',
            transcript: '毎日、日本語を勉強します。週末は友達と遊びます。',
            question: 'What does the speaker do on weekends?',
            options: ['Hangs out with friends', 'Works', 'Studies all day', 'Sleeps'],
            correctAnswer: 'Hangs out with friends',
            explanation: 'The speaker states "週末は友達と遊びます".'
        },
        culturalNote: 'Many compound activities are formed simply by pairing a noun with する (e.g. 勉強する, 散歩する, 買い物する, 料理する).',
        commonMistakes: ['Assuming all verbs ending in る are Group 2 — e.g. 帰る (kaeru) is Group 1 (帰ります).']
    },
    {
        id: 'LESSON_N5_21',
        level: 'N5',
        moduleNumber: 6,
        moduleTitle: 'Verbs & Masu Form',
        title: 'Polite Masu Form (ます・ません・ました・ませんでした)',
        japaneseTitle: '丁寧形「ます形」の活用',
        category: 'verbs',
        description: 'Conjugate all verb groups into the four fundamental polite tenses: present affirmative, present negative, past affirmative, past negative.',
        learningObjectives: [
            'Conjugate Group 1 verbs to ます stem by changing final U-sound to I-sound',
            'Conjugate Group 2 verbs by dropping る and adding ます',
            'Use ます, ません, ました, and ませんでした in polite conversation'
        ],
        content: `### The 4 Masu Conjugations\n\n| Tense | Form | Meaning |\n|---|---|---|\n| Present Affirmative | **～ます** | Do / Will do |\n| Present Negative | **～ません** | Do not / Will not do |\n| Past Affirmative | **～ました** | Did |\n| Past Negative | **～ませんでした** | Did not do |\n\n#### Conjugation Rule:\n* **Group 1**: Change final u-sound to i-sound + ます (書く $\\rightarrow$ 書**き**ます).\n* **Group 2**: Drop る + ます (食べる $\\rightarrow$ 食**べ**ます).\n* **Group 3**: する $\\rightarrow$ **します**, 来る $\\rightarrow$ **来ます (きます)**.`,
        examples: [
            { japanese: '昨日たくさん勉強しました。', reading: 'きのうたくさんべんきょうしました。', romaji: 'Kinou takusan benkyou shimashita.', english: 'I studied a lot yesterday.' },
            { japanese: '今日はお酒を飲みません。', reading: 'きょうはおさけをのみません。', romaji: 'Kyou wa osake o nomimasen.', english: 'I will not drink alcohol today.' }
        ],
        dialogue: {
            title: 'Weekend Debrief',
            lines: [
                { speaker: 'Yuki', japanese: '週末はどこかへ行きましたか。', romaji: 'Shuumatsu wa dokoka e ikimashita ka.', english: 'Did you go anywhere over the weekend?' },
                { speaker: 'Ken', japanese: 'いいえ、どこへも行きませんでした。家で休みました。', romaji: 'Iie, doko e mo ikimasendeshita. Ie de yasumimashita.', english: 'No, I didn\'t go anywhere. I rested at home.' }
            ]
        },
        readingPassage: {
            title: 'Daily Routine Entry',
            japanese: '昨日は朝七時に起きました。朝ご飯を食べました。九時から五時まで働きました。夜はテレビを見ませんでした。本を読みました。',
            questions: [
                {
                    question: '昨日の夜テレビを見ましたか。',
                    options: ['いいえ、見ませんでした (No, did not watch)', 'はい、見ました (Yes, watched)', '映画を見ました (Watched movie)', 'YouTubeを見ました (Watched YouTube)'],
                    correctAnswer: 'いいえ、見ませんでした (No, did not watch)',
                    explanation: 'The entry says "夜はテレビを見ませんでした".'
                }
            ]
        },
        listeningExercise: {
            audioText: '今朝、朝ご飯を食べましたか。いいえ、時間がありませんでしたから、食べませんでした。',
            transcript: '今朝、朝ご飯を食べましたか。いいえ、時間がありませんでしたから、食べませんでした。',
            question: 'Did the speaker eat breakfast this morning?',
            options: ['No, because there was no time', 'Yes, ate toast', 'Ate at a cafe', 'Ate lunch early'],
            correctAnswer: 'No, because there was no time',
            explanation: 'The speaker answers "時間がありませんでしたから、食べませんでした".'
        },
        culturalNote: 'The ます form represents universal polite speech (丁寧語 - teineigo) and is safe to use in any social situation.',
        commonMistakes: ['Using ませんでした as a standalone word without attaching it to a verb stem.']
    },
    {
        id: 'LESSON_N5_22',
        level: 'N5',
        moduleNumber: 6,
        moduleTitle: 'Verbs & Masu Form',
        title: 'Daily Activities & Core N5 Verbs',
        japaneseTitle: '日常の動作と基本動詞',
        category: 'verbs',
        description: 'Expand your practical repertoire of high-frequency daily action verbs: wake up, sleep, eat, drink, read, write, listen, buy, meet.',
        learningObjectives: [
            'Describe a complete 24-hour daily routine from morning to night',
            'Pair core verbs with appropriate object particles (を, に, で)',
            'Read and write common daily action verbs in Kanji'
        ],
        content: `### High-Frequency Daily Verbs\n\n* **起きる (おきる)**: To wake up\n* **寝る (ねる)**: To sleep\n* **食べる (たべる)**: To eat\n* **飲む (のむ)**: To drink\n* **行く (いく)**: To go\n* **来る (くる)**: To come\n* **帰る (かえる)**: To return home\n* **見る (みる)**: To see / watch\n* **聞く (きく)**: To listen / hear\n* **読む (よむ)**: To read\n* **書く (かく)**: To write\n* **話す (はなす)**: To speak\n* **買う (かう)**: To buy\n* **会う (あう)**: To meet (person **に** 会う)`,
        examples: [
            { japanese: '毎晩十一時に寝ます。', reading: 'まいばんじゅういちじにねます。', romaji: 'Maiban juuichiji ni nemasu.', english: 'I sleep at 11:00 every night.' },
            { japanese: '駅で友達に会いました。', reading: 'えきでともだちにあいました。', romaji: 'Eki de tomodachi ni aimashita.', english: 'I met a friend at the station.' }
        ],
        dialogue: {
            title: 'After School Schedule',
            lines: [
                { speaker: 'Emi', japanese: '放課後、何をしますか。', romaji: 'Houkago, nani o shimasu ka.', english: 'What will you do after school?' },
                { speaker: 'Sora', japanese: '図書館で本を読んでから、スーパーで買い物をします。', romaji: 'Toshokan de hon o yonde kara, suupaa de kaimono o shimasu.', english: 'After reading a book at the library, I will shop at the supermarket.' }
            ]
        },
        readingPassage: {
            title: 'My Typical Day',
            japanese: 'わたしは毎朝六時に起きます。ジョギングをして、シャワーを浴びます。朝ご飯にトーストを食べます。八時に家を出て、電車で会社へ行きます。',
            questions: [
                {
                    question: '何時に家を出ますか。',
                    options: ['八時 (8:00)', '六時 (6:00)', '七時 (7:00)', '九時 (9:00)'],
                    correctAnswer: '八時 (8:00)',
                    explanation: 'The text states "八時に家を出て".'
                }
            ]
        },
        listeningExercise: {
            audioText: '今夜は家で日本料理を作ります。友達も一緒に食べます。',
            transcript: '今夜は家で日本料理を作ります。友達も一緒に食べます。',
            question: 'What is the speaker doing tonight?',
            options: ['Cooking Japanese food at home with a friend', 'Going to a restaurant', 'Ordering delivery', 'Eating alone'],
            correctAnswer: 'Cooking Japanese food at home with a friend',
            explanation: 'The speaker states "家で日本料理を作ります。友達も一緒に食べます".'
        },
        culturalNote: 'In Japan, greeting people when leaving or returning home is standard: 「行ってきます」 / 「ただいま」.',
        commonMistakes: ['Marking the person you meet with を instead of に (always say [Person] に 会います).']
    },
    {
        id: 'LESSON_N5_23',
        level: 'N5',
        moduleNumber: 6,
        moduleTitle: 'Verbs & Masu Form',
        title: 'Invitations & Suggestions (～ませんか・～ましょう)',
        japaneseTitle: '勧誘と提案（～ませんか・～ましょう）',
        category: 'verbs',
        description: 'Invite people politely with ～ませんか (*Won\'t you...?*), accept with ～ましょう (*Let\'s!*), and offer help with ～ましょうか (*Shall I...?*).',
        learningObjectives: [
            'Make polite, considerate invitations using ～ませんか',
            'Propose joint actions using ～ましょう',
            'Offer assistance or suggest ideas using ～ましょうか'
        ],
        content: `### The Etiquette of Japanese Invitations\n\n1. **～ませんか (Masen ka)**: *"Won\'t you do X with me?"*\n   * The most polite way to invite someone because the negative ending allows them to decline without embarrassment.\n   * 一緒に京都へ**行きませんか**。 (*Won\'t you go to Kyoto with me?*)\n\n2. **～ましょう (Mashou)**: *"Let\'s do X!"*\n   * Positive acceptance or confident suggestion.\n   * ええ、**行きましょう**！ (*Yes, let\'s go!*)\n\n3. **～ましょうか (Mashou ka)**: *"Shall I / Shall we do X?"*\n   * Offering help or seeking consensus.\n   * 荷物を**持ちましょうか**。 (*Shall I carry your luggage?*)`,
        examples: [
            { japanese: '一緒にお昼ご飯を食べませんか。', reading: 'いっしょにおひるごはんをたべませんか。', romaji: 'Issho ni ohirugohan o tabemasen ka.', english: 'Won\'t you eat lunch together with me?' },
            { japanese: '少し休みましょう。', reading: 'すこしやすみましょう。', romaji: 'Sukoshi yasumimashou.', english: 'Let us take a short break.' },
            { japanese: '窓を開けましょうか。', reading: 'まどをあけましょうか。', romaji: 'Mado o akemashou ka.', english: 'Shall I open the window?' }
        ],
        dialogue: {
            title: 'Lunch Break Invitation',
            lines: [
                { speaker: 'Ren', japanese: 'もう十二時ですね。一緒に学食へ行きませんか。', romaji: 'Mou juuniji desu ne. Issho ni gakushoku e ikimasen ka.', english: 'It is already 12:00. Won\'t you go to the cafeteria together?' },
                { speaker: 'Hana', japanese: 'いいですね！行きましょう。今日のうどんが楽しみです。', romaji: 'Ii desu ne! Ikimashou. Kyou no udon ga tanoshimi desu.', english: 'Sounds good! Let\'s go. I\'m looking forward to today\'s udon.' }
            ]
        },
        readingPassage: {
            title: 'Weekend Festival Invitation',
            japanese: '今週の土曜日に浅草で花火大会があります。一緒に行きませんか。六時に浅草駅で会いましょう。',
            questions: [
                {
                    question: '何時にどこで待ち合わせをしますか。',
                    options: ['六時に浅草駅 (6:00 at Asakusa Station)', '七時に花火会場 (7:00 at fireworks venue)', '五時に家 (5:00 at home)', '八時に新宿 (8:00 at Shinjuku)'],
                    correctAnswer: '六時に浅草駅 (6:00 at Asakusa Station)',
                    explanation: 'The invitation says "六時に浅草駅で会いましょう".'
                }
            ]
        },
        listeningExercise: {
            audioText: '暑いですね。冷たいお茶を飲みませんか。ええ、飲みましょう！',
            transcript: '暑いですね。冷たいお茶を飲みませんか。ええ、飲みましょう！',
            question: 'What did the speakers decide to do?',
            options: ['Drink cold green tea together', 'Go to the beach', 'Open the window', 'Eat ice cream'],
            correctAnswer: 'Drink cold green tea together',
            explanation: 'They agreed to drink cold tea (冷たいお茶を飲みましょう).'
        },
        culturalNote: 'To soften a polite decline in Japan, say 「すみません、ちょっと都合が...」 (*I am sorry, my schedule is a bit...*).',
        commonMistakes: ['Translating English "Shall we" as a harsh command instead of using gentle ～ませんか.']
    },

    // --- MODULE 7: ADJECTIVES ---
    {
        id: 'LESSON_N5_24',
        level: 'N5',
        moduleNumber: 7,
        moduleTitle: 'Adjectives and Descriptions',
        title: 'い-Adjectives (Inflections & Modifiers)',
        japaneseTitle: 'い形容詞の活用と修飾',
        category: 'adjectives',
        description: 'Master true Japanese い-adjectives: present, past, negative inflections, and noun modification.',
        learningObjectives: [
            'Conjugate い-adjectives across all 4 tenses (-い, -くない, -かった, -くなかった)',
            'Master the irregular adjective いい / よい (good)',
            'Modify nouns directly with い-adjectives (おいしい料理)'
        ],
        content: `### The Inflection of い-Adjectives\n\nTrue い-adjectives conjugate directly by replacing the final **い**:\n\n| Tense | Suffix | Example (高い - Expensive / High) |\n|---|---|---|\n| Present Affirmative | **～い** | 高**い** (*is expensive*) |\n| Present Negative | **～くない** | 高**くない** (*is not expensive*) |\n| Past Affirmative | **～かった** | 高**かった** (*was expensive*) |\n| Past Negative | **～くなかった** | 高**くなかった** (*was not expensive*) |\n\n> **Critical Irregularity**: **いい (Good)** conjugates on the stem **よい**:\n> * いい $\\rightarrow$ **よくない** $\\rightarrow$ **よかった** $\\rightarrow$ **よくなかった**`,
        examples: [
            { japanese: '昨日のテストは難しかったです。', reading: 'きのうのテストはむずかしかったです。', romaji: 'Kinou no tesuto wa muzukashikatta desu.', english: 'Yesterday\'s test was difficult.' },
            { japanese: 'この部屋はあまり広くないです。', reading: 'このへやはあまりひろくないです。', romaji: 'Kono heya wa amari hirokunai desu.', english: 'This room is not very spacious.' }
        ],
        dialogue: {
            title: 'Reviewing a New Restaurant',
            lines: [
                { speaker: 'Ken', japanese: '昨日のレストランはどうでしたか。', romaji: 'Kinou no resutoran wa dou deshita ka.', english: 'How was the restaurant yesterday?' },
                { speaker: 'Yuki', japanese: '料理はとてもおいしかったですが、少し高かったです。', romaji: 'Ryouri wa totemo oishikatta desu ga, sukoshi takakatta desu.', english: 'The food was very delicious, but it was a bit expensive.' }
            ]
        },
        readingPassage: {
            title: 'Trip to Hokkaido',
            japanese: '先週、北海道へ行きました。冬の北海道はとても寒かったです。雪が美しかったです。ラーメンがおいしかったです。',
            questions: [
                {
                    question: '北海道の天気はどうでしたか。',
                    options: ['とても寒かった (Very cold)', '暑かった (Hot)', '暖かかった (Warm)', '雨だった (Rainy)'],
                    correctAnswer: 'とても寒かった (Very cold)',
                    explanation: 'The text states "冬の北海道はとても寒かったです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'この靴、安くてデザインがいいですね。買いましょう！',
            transcript: 'この靴、安くてデザインがいいですね。買いましょう！',
            question: 'Why does the speaker want to buy the shoes?',
            options: ['They are cheap and have a good design', 'They are expensive and durable', 'They are red', 'They are famous'],
            correctAnswer: 'They are cheap and have a good design',
            explanation: 'The speaker highlights "安くてデザインがいい".'
        },
        culturalNote: 'Hokkaido in northern Japan is renowned for powder snow, hot springs (温泉), and miso ramen.',
        commonMistakes: ['Saying "いくない" for the negative of いい — always conjugate as よくない.']
    },
    {
        id: 'LESSON_N5_25',
        level: 'N5',
        moduleNumber: 7,
        moduleTitle: 'Adjectives and Descriptions',
        title: 'な-Adjectives (Adjectival Nouns)',
        japaneseTitle: 'な形容詞（形容動詞）の活用',
        category: 'adjectives',
        description: 'Understand な-adjectives (adjectival nouns): copula conjugation and using な when modifying nouns directly.',
        learningObjectives: [
            'Conjugate な-adjectives using です, じゃありません, でした, じゃありませんでした',
            'Connect な-adjectives directly to nouns with な (きれいな花)',
            'Differentiate な-adjectives from い-adjectives that end in い (e.g. きれい, 有名)'
        ],
        content: `### The Structure of な-Adjectives\n\nな-adjectives behave like nouns and conjugate using the copula:\n* **Present Affirmative**: 静か**です** (*is quiet*)\n* **Present Negative**: 静か**じゃありません** (*is not quiet*)\n* **Past Affirmative**: 静か**でした** (*was quiet*)\n* **Past Negative**: 静か**じゃありませんでした** (*was not quiet*)\n\n#### Direct Noun Modification:\nWhen modifying a noun, attach **な**:\n* きれい**な**町 (*beautiful town*)\n* 有名**な**人 (*famous person*)\n* 親切**な**先生 (*kind teacher*)`,
        examples: [
            { japanese: '京都はとても有名な町です。', reading: 'きょうとはとてもゆうめいなまちです。', romaji: 'Kyouto wa totemo yuumei na machi desu.', english: 'Kyoto is a very famous city.' },
            { japanese: '昨日は暇じゃありませんでした。', reading: 'きのうはひまじゃありませんでした。', romaji: 'Kinou wa hima ja arimasendeshita.', english: 'I was not free yesterday.' }
        ],
        dialogue: {
            title: 'Describing a Hometown',
            lines: [
                { speaker: 'Alex', japanese: 'あなたの町はどんな町ですか。', romaji: 'Anata no machi wa donna machi desu ka.', english: 'What kind of town is your hometown?' },
                { speaker: 'Mei', japanese: '静かできれいな町です。緑がたくさんあります。', romaji: 'Shizuka de kirei na machi desu. Midori ga takusan arimasu.', english: 'It is a quiet and clean town. There is a lot of greenery.' }
            ]
        },
        readingPassage: {
            title: 'Hotel Review',
            japanese: 'このホテルは駅から近くてとても便利です。部屋は静かで清潔でした。フロントの人も親切でした。また泊まりたいです。',
            questions: [
                {
                    question: 'ホテルはどうして便利ですか。',
                    options: ['駅から近いから (Because it is close to the station)', '安かったから (Because it was cheap)', '大きいから (Because it is big)', 'プールがあるから (Because it has a pool)'],
                    correctAnswer: '駅から近いから (Because it is close to the station)',
                    explanation: 'The review says "駅から近くてとても便利です".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'あの図書館はとても静かで、勉強に便利ですよ。',
            transcript: 'あの図書館はとても静かで、勉強に便利ですよ。',
            question: 'What is true about the library?',
            options: ['It is quiet and convenient for studying', 'It is noisy', 'It is far from town', 'It is closed on weekends'],
            correctAnswer: 'It is quiet and convenient for studying',
            explanation: 'The speaker states "静かで、勉強に便利".'
        },
        culturalNote: 'Word traps: きれい (kirei - pretty) and 有名 (yuumei - famous) end in "i" phonetically, but are な-adjectives (きれいな, 有名な).',
        commonMistakes: ['Putting な at the end of a sentence (never say "このへや は しずかな です"; say "しずか です").']
    },
    {
        id: 'LESSON_N5_26',
        level: 'N5',
        moduleNumber: 7,
        moduleTitle: 'Adjectives and Descriptions',
        title: 'Describing Things & People (Colors, Sizes, Traits)',
        japaneseTitle: '人や物の描写（色・大きさ・性質）',
        category: 'vocab',
        description: 'Synthesize adjectives to depict people and objects: colors, sizes, temperatures, personality traits, speed, and difficulty.',
        learningObjectives: [
            'Describe physical traits (背が高い, 目が大きい, 髪が長い)',
            'Describe colors as nouns vs adjectives (赤 vs 赤い)',
            'Express complex compound descriptions using the -て form of adjectives'
        ],
        content: `### Rich Compound Descriptions\n\n#### Connecting Adjectives with -て:\n* **い-Adjectives**: Drop い $\\rightarrow$ **～くて** (安くておいしい = *cheap and delicious*).\n* **な-Adjectives**: Drop な $\\rightarrow$ **～で** (親切で元気 = *kind and energetic*).\n\n#### Physical Characteristics Pattern:\n$$\\text{[Person]} \\text{ は } \\text{[Body Part]} \\text{ が } \\text{[Adjective] です}$$\n* 田中さんは**背が高い**です。 (*Mr. Tanaka is tall.*)\n* あの子は**目が大きい**です。 (*That child has big eyes.*)`,
        examples: [
            { japanese: 'この部屋は明るくて広いです。', reading: 'このへやはあかるくてひろいです。', romaji: 'Kono heya wa akarukute hiroi desu.', english: 'This room is bright and spacious.' },
            { japanese: '佐藤先生は優しくて親切です。', reading: 'さとうせんせいはやさしくてしんせつです。', romaji: 'Satou-sensei wa yasashikute shinsetsu desu.', english: 'Teacher Sato is gentle and kind.' }
        ],
        dialogue: {
            title: 'Describing a Lost Pet',
            lines: [
                { speaker: 'Owner', japanese: '私の白い犬を見ませんでしたか。耳が茶色くて小さいです。', romaji: 'Watashi no shiroi inu o mimasendeshita ka. Mimi ga chairokute chiisai desu.', english: 'Have you seen my white dog? His ears are brown and small.' },
                { speaker: 'Neighbor', japanese: 'あ、公園の近くで走っていましたよ！', romaji: 'A, kouen no chikaku de hashitte imashita yo!', english: 'Ah, he was running near the park!' }
            ]
        },
        readingPassage: {
            title: 'Friend Profile',
            japanese: '私の友達のケンさんは背が高くて、髪が短いです。いつも明るくて親切です。テニスがとても上手です。',
            questions: [
                {
                    question: 'ケンさんの髪はどんな髪ですか。',
                    options: ['短い (Short)', '長い (Long)', '金髪 (Blonde)', '茶色 (Brown)'],
                    correctAnswer: '短い (Short)',
                    explanation: 'The text states "髪が短いです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'あの黒いコートを着ている背が高い人は誰ですか。山田先生ですよ。',
            transcript: 'あの黒いコートを着ている背が高い人は誰ですか。山田先生ですよ。',
            question: 'Who is the tall person wearing the black coat?',
            options: ['Teacher Yamada', 'Mr. Tanaka', 'Alex', 'The principal'],
            correctAnswer: 'Teacher Yamada',
            explanation: 'The speaker answers "山田先生ですよ".'
        },
        culturalNote: 'When complimenting physical traits in Japan, complimenting high nasal bridges (鼻が高い) or small faces (顔が小さい) is considered flattering.',
        commonMistakes: ['Connecting い-adjectives with と instead of くて (say 安くておいしい, not "やすい と おいしい").']
    },

    // --- MODULE 8: PREFERENCES AND ABILITY ---
    {
        id: 'LESSON_N5_27',
        level: 'N5',
        moduleNumber: 8,
        moduleTitle: 'Preferences and Ability',
        title: 'Likes & Dislikes (好き & 嫌い)',
        japaneseTitle: '好悪の表現（好き・嫌い）',
        category: 'preferences',
        description: 'Express your tastes, interests, and dietary preferences with 好き (suki) and 嫌い (kirai) taking particle が.',
        learningObjectives: [
            'Use particle が to mark the target of likes and dislikes',
            'Use adverbs of degree (大好き, とても, 少し, あまり, 全然)',
            'Politely decline foods you dislike without sounding blunt'
        ],
        content: `### Marking Preferences with が\n\nIn Japanese, 好き (suki) and 嫌い (kirai) are **な-adjectives**, not transitive verbs. Therefore, the object of affection takes **が**:\n\n$$\\text{[Person は]} \\text{ [Target]} \\text{ が } \\text{好きです / 嫌いです}$$\n\n#### Degrees of Preference:\n* **大好き (daisuki)**: Love / Like immensely\n* **好き (suki)**: Like\n* **あまり好きじゃない**: Don\'t like very much (polite)\n* **嫌い (kirai)**: Dislike\n* **大嫌い (daikirai)**: Hate / Strongly dislike`,
        examples: [
            { japanese: 'わたしは日本のアニメが大好きです。', reading: 'わたしはにほんのアニメがだいすきです。', romaji: 'Watashi wa nihon no anime ga daisuki desu.', english: 'I love Japanese anime.' },
            { japanese: '辛い食べ物はあまり好きじゃありません。', reading: 'からいたべものはあまりすきじゃありません。', romaji: 'Karai tabemono wa amari suki ja arimasen.', english: 'I do not like spicy food very much.' }
        ],
        dialogue: {
            title: 'Favorite Japanese Foods',
            lines: [
                { speaker: 'Ken', japanese: '日本料理は何が好きですか。', romaji: 'Nihon ryouri wa nani ga suki desu ka.', english: 'What Japanese foods do you like?' },
                { speaker: 'Emi', japanese: 'お寿司と天ぷらが好きです。納豆はちょっと苦手です。', romaji: 'Osushi to tenpura ga suki desu. Nattou wa chotto nigate desu.', english: 'I like sushi and tempura. Natto is a bit difficult for me.' }
            ]
        },
        readingPassage: {
            title: 'Hobby Survey',
            japanese: '私の趣味は音楽を聞くことです。特にジャズが好きです。スポーツはあまり好きではありませんが、散歩は好きです。',
            questions: [
                {
                    question: '筆者は特に何の音楽が好きですか。',
                    options: ['ジャズ (Jazz)', 'ロック (Rock)', 'クラシック (Classical)', 'ポップ (Pop)'],
                    correctAnswer: 'ジャズ (Jazz)',
                    explanation: 'The text states "特にジャズが好きです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'どんなスポーツが好きですか。サッカーが一番好きです。',
            transcript: 'どんなスポーツが好きですか。サッカーが一番好きです。',
            question: 'What sport does the speaker like best?',
            options: ['Soccer', 'Baseball', 'Tennis', 'Basketball'],
            correctAnswer: 'Soccer',
            explanation: 'The speaker answers "サッカーが一番好きです".'
        },
        culturalNote: 'To politely say you dislike a food, use 「苦手です」 (nigate desu - weak with / not good with) rather than the harsh 嫌いです.',
        commonMistakes: ['Marking the liked object with を instead of が (never say "すし を すき です").']
    },
    {
        id: 'LESSON_N5_28',
        level: 'N5',
        moduleNumber: 8,
        moduleTitle: 'Preferences and Ability',
        title: 'Skills & Ability (上手・下手・分かります・できます)',
        japaneseTitle: '能力と理解（上手・下手・分かる・できる）',
        category: 'ability',
        description: 'Communicate competencies, language capabilities, and comprehension with 上手, 下手, 分かる, and できる.',
        learningObjectives: [
            'Express understanding with [Target] が 分かります',
            'Express capability with [Skill] が できます',
            'Follow Japanese modesty conventions when discussing personal skills'
        ],
        content: `### Ability & Comprehension Markers\n\nAbility and understanding predicates take particle **が**:\n\n1. **分かります (Wakarimasu)**: To understand / comprehend.\n   * 日本語**が**分かります。 (*I understand Japanese.*)\n2. **できます (Dekimasu)**: To be able to do / can do.\n   * スキー**が**できます。 (*I can ski.*)\n3. **上手 (Jouzu) & 下手 (Heta)**: Good at / Poor at.\n   * 田中さんは料理**が**上手です。 (*Mr. Tanaka is good at cooking.*)`,
        examples: [
            { japanese: '英語と日本語が少し分かります。', reading: 'えいごとにほんごがすこしわかります。', romaji: 'Eigo to nihongo ga sukoshi wakarimasu.', english: 'I understand English and a little Japanese.' },
            { japanese: 'ピアノを弾くことができます。', reading: 'ピアノをひくことができます。', romaji: 'Piano o hiku koto ga dekimasu.', english: 'I can play the piano.' }
        ],
        dialogue: {
            title: 'Language Skills Chat',
            lines: [
                { speaker: 'Interviewer', japanese: '日本語がとてもお上手ですね！', romaji: 'Nihongo ga totemo ojouzu desu ne!', english: 'Your Japanese is very skillful!' },
                { speaker: 'Student', japanese: 'いいえ、まだまだ下手です。もっと勉強します。', romaji: 'Iie, mada mada heta desu. Motto benkyou shimasu.', english: 'No, I am still not good at all. I will study more.' }
            ]
        },
        readingPassage: {
            title: 'Club Application',
            japanese: '私はテニスサークルに入りたいです。高校のとき三年テニスをしました。少しテニスができます。週末の練習に参加したいです。',
            questions: [
                {
                    question: '申請者は何のスポーツができますか。',
                    options: ['テニス (Tennis)', 'サッカー (Soccer)', '野球 (Baseball)', '水泳 (Swimming)'],
                    correctAnswer: 'テニス (Tennis)',
                    explanation: 'The text states "少しテニスができます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '漢字が読めますか。簡単な漢字なら分かりますよ。',
            transcript: '漢字が読めますか。簡単な漢字なら分かりますよ。',
            question: 'What level of kanji can the speaker read?',
            options: ['Simple kanji', 'All newspaper kanji', 'No kanji at all', 'Only numbers'],
            correctAnswer: 'Simple kanji',
            explanation: 'The speaker answers "簡単な漢字なら分かります".'
        },
        culturalNote: 'When complimented on skill, Japanese modesty (謙遜 - kenson) dictates deflecting with 「いいえ、まだまだです」 (*No, not yet / I still have a long way to go*).',
        commonMistakes: ['Calling yourself 上手 (jouzu) — use 得意 (tokui) or simply できる to remain humble.']
    },
    {
        id: 'LESSON_N5_29',
        level: 'N5',
        moduleNumber: 8,
        moduleTitle: 'Preferences and Ability',
        title: 'Desires (欲しい & ～たい)',
        japaneseTitle: '願望の表現（欲しい・～たい）',
        category: 'desires',
        description: 'Distinguish desires for physical objects with 欲しい (hoshii) from desires to perform actions with ～たい (tai).',
        learningObjectives: [
            'Express wanting tangible nouns using [Noun] が 欲しいです',
            'Express wanting to perform actions using Verb [Stem] + たいです',
            'Conjugate ～たい across negative and past tenses like an い-adjective'
        ],
        content: `### The Two Desires: Nouns vs Actions\n\n1. **Desire for an Object (Noun + が 欲しい)**:\n   * 新しいスマホ**が欲しい**です。 (*I want a new smartphone.*)\n\n2. **Desire to Do an Action (Verb Stem + たい)**:\n   * Take the **ます stem** and attach **たい**:\n   * 食べる $\\rightarrow$ 食べ**たい** (*want to eat*)\n   * 行く $\\rightarrow$ 行き**たい** (*want to go*)\n\n#### Conjugations of ～たい (like an い-adjective):\n* 行き**たい** (*want to go*)\n* 行き**たくない** (*don\'t want to go*)\n* 行き**たかった** (*wanted to go*)\n* 行き**たくなかった** (*didn\'t want to go*)`,
        examples: [
            { japanese: '日本へ旅行に行きたいです。', reading: 'にほんへりょこうにいきたいです。', romaji: 'Nihon e ryokou ni ikitai desu.', english: 'I want to go on a trip to Japan.' },
            { japanese: '今は車が欲しくないです。', reading: 'いまはくるまがほしくないです。', romaji: 'Ima wa kuruma ga hoshikunai desu.', english: 'I do not want a car right now.' }
        ],
        dialogue: {
            title: 'Dream Vacation',
            lines: [
                { speaker: 'Yuto', japanese: '夏休みに何をしたいですか。', romaji: 'Natsuyasumi ni nani o shitai desu ka.', english: 'What do you want to do during summer vacation?' },
                { speaker: 'Mia', japanese: '沖縄へ行って、きれいな海で泳ぎたいです！', romaji: 'Okinawa e itte, kirei na umi de oyogitai desu!', english: 'I want to go to Okinawa and swim in the beautiful ocean!' }
            ]
        },
        readingPassage: {
            title: 'Birthday Wish List',
            japanese: '来週は私の誕生日です。新しいカメラが欲しいです。写真をたくさん撮りたいからです。旅行にも行きたいです。',
            questions: [
                {
                    question: '誕生日に何が欲しいですか。',
                    options: ['カメラ (Camera)', '車 (Car)', '時計 (Watch)', '本 (Book)'],
                    correctAnswer: 'カメラ (Camera)',
                    explanation: 'The text states "新しいカメラが欲しいです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'のどが渇きましたね。何か冷たいものを飲みたいです。',
            transcript: 'のどが渇きましたね。何か冷たいものを飲みたいです。',
            question: 'What does the speaker want?',
            options: ['To drink something cold', 'To eat lunch', 'To take a nap', 'To buy a souvenir'],
            correctAnswer: 'To drink something cold',
            explanation: 'The speaker expresses "冷たいものを飲みたい".'
        },
        culturalNote: '欲しい and ～たい express direct first-person desires. To politely ask a guest what they want, offer choices rather than asking directly with 欲しいですか.',
        commonMistakes: ['Using 欲しい with a verb (never say "たべる が ほしい"; say "たべたい").']
    },

    // --- MODULE 9: TE FORM SUITE ---
    {
        id: 'LESSON_N5_30',
        level: 'N5',
        moduleNumber: 9,
        moduleTitle: 'The Te-Form Suite',
        title: 'て-Form (Te-form) Foundations & Conjugation',
        japaneseTitle: 'て形の作り方と連結',
        category: 'verbs',
        description: 'Master the most crucial grammatical form in Japanese: Group 1, Group 2, and Irregular て-form conjugation rules.',
        learningObjectives: [
            'Conjugate Group 1 verbs into て-form according to dictionary endings',
            'Conjugate Group 2 verbs by replacing る with て',
            'Connect sequential actions fluidly with the て-form'
        ],
        content: `### The Golden Rules of て-Form Conjugation\n\n#### Group 1 (Godan Verbs):\n* **う・つ・る** $\\rightarrow$ **～って** (買う $\\rightarrow$ 買って, 待つ $\\rightarrow$ 待って, 取る $\\rightarrow$ 取って)\n* **む・ぶ・ぬ** $\\rightarrow$ **～んで** (飲む $\\rightarrow$ 飲んで, 遊ぶ $\\rightarrow$ 遊んで, 死ぬ $\\rightarrow$ 死んで)\n* **く** $\\rightarrow$ **～いて** (書く $\\rightarrow$ 書いて) *(Exception: 行く $\\rightarrow$ **行って**)*\n* **ぐ** $\\rightarrow$ **～いで** (泳ぐ $\\rightarrow$ 泳いで)\n* **す** $\\rightarrow$ **～して** (話す $\\rightarrow$ 話して)\n\n#### Group 2 (Ichidan Verbs):\n* Drop **る** + **て** (食べる $\\rightarrow$ 食べて, 見る $\\rightarrow$ 見て)\n\n#### Group 3 (Irregular Verbs):\n* **する** $\\rightarrow$ **して**\n* **来る** $\\rightarrow$ **来て (きて)**`,
        examples: [
            { japanese: '朝起きて、顔を洗って、朝ご飯を食べます。', reading: 'あさおきて、かおをあらって、あさごはんをたべます。', romaji: 'Asa okite, kao o aratte, asagohan o tabemasu.', english: 'I wake up in the morning, wash my face, and eat breakfast.' },
            { japanese: '新宿へ行って、映画を見ました。', reading: 'しんじゅくへいって、えいがをみました。', romaji: 'Shinjuku e itte, eiga o mimashita.', english: 'I went to Shinjuku and watched a movie.' }
        ],
        dialogue: {
            title: 'Sunday Actions',
            lines: [
                { speaker: 'Ken', japanese: '昨日は何をしましたか。', romaji: 'Kinou wa nani o shimashita ka.', english: 'What did you do yesterday?' },
                { speaker: 'Yuki', japanese: '図書館に行って、本を借りて、家で読みました。', romaji: 'Toshokan ni itte, hon o karite, ie de yomimashita.', english: 'I went to the library, borrowed books, and read them at home.' }
            ]
        },
        readingPassage: {
            title: 'Recipe Steps',
            japanese: '野菜を切って、鍋に入れます。水を加えて、十分煮ます。調味料を入れて、完成です。',
            questions: [
                {
                    question: '野菜を切ったあと、何をしますか。',
                    options: ['鍋に入れる (Put into pot)', '食べる (Eat)', '捨てる (Discard)', '冷やす (Cool down)'],
                    correctAnswer: '鍋に入れる (Put into pot)',
                    explanation: 'The sequence states "野菜を切って、鍋に入れます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '駅前のカフェで友達と会って、お茶を飲みました。',
            transcript: '駅前のカフェで友達と会って、お茶を飲みました。',
            question: 'What sequence of actions occurred?',
            options: ['Met a friend at a cafe in front of the station and drank tea', 'Bought books at the station', 'Went home alone', 'Walked in the park'],
            correctAnswer: 'Met a friend at a cafe in front of the station and drank tea',
            explanation: 'The speaker describes meeting a friend and having tea.'
        },
        culturalNote: 'The て-form is the indispensable gateway to over 30 fundamental grammar patterns across N5, N4, and N3.',
        commonMistakes: ['Conjugating 行く as "いいて" — the correct irregular form is 行って (itte).']
    },
    {
        id: 'LESSON_N5_31',
        level: 'N5',
        moduleNumber: 9,
        moduleTitle: 'The Te-Form Suite',
        title: 'Requests, Permission & Prohibition (～てください・～てもいい・～てはいけない)',
        japaneseTitle: '依頼・許可・禁止の表現',
        category: 'requests',
        description: 'Ask favors politely with ～てください, seek permission with ～てもいいですか, and state rules with ～てはいけません.',
        learningObjectives: [
            'Make polite requests using Verb [て-form] + ください',
            'Ask and grant permission using Verb [て-form] + もいいです (か)',
            'Express strict rules and prohibitions with Verb [て-form] + はいけません'
        ],
        content: `### Three Essential Modal Extensions of て-Form\n\n1. **Polite Request (～てください)**: *"Please do X"*\n   * ここに名前を**書いてください**。 (*Please write your name here.*)\n\n2. **Permission (～てもいいです / か)**: *"You may do / May I do X?"*\n   * 写真を**撮ってもいいですか**。 (*May I take photos?*)\n\n3. **Prohibition (～てはいけません)**: *"You must not do X"*\n   * ここでタバコを**吸ってはいけません**。 (*You must not smoke here.*)`,
        examples: [
            { japanese: 'ゆっくり話してください。', reading: 'ゆっくりはなしてください。', romaji: 'Yukkuri hanashite kudasai.', english: 'Please speak slowly.' },
            { japanese: 'ここで靴を脱いでもいいですか。', reading: 'ここでくつをぬいでもいいですか。', romaji: 'Koko de kutsu o nuide mo ii desu ka.', english: 'May I take off my shoes here?' },
            { japanese: '美術館の中で触ってはいけません。', reading: 'びじゅつかんのなかでさわってはいけません。', romaji: 'Bijutsukan no naka de sawatte wa ikemasen.', english: 'You must not touch things inside the art museum.' }
        ],
        dialogue: {
            title: 'At the Museum Information Desk',
            lines: [
                { speaker: 'Visitor', japanese: '館内で写真を撮ってもいいですか。', romaji: 'Kannai de shashin o totte mo ii desu ka.', english: 'May I take photos inside the building?' },
                { speaker: 'Guide', japanese: 'フラッシュを使ってはいけませんが、通常の撮影は大丈夫です。', romaji: 'Furasshu o tsukatte wa ikemasen ga, tsuujou no satsuei wa daijoubu desu.', english: 'You must not use flash, but normal photography is fine.' }
            ]
        },
        readingPassage: {
            title: 'Library Rules Signboard',
            japanese: '図書館の利用案内：本を大切に扱ってください。館内で飲食をしてはいけません。静かに読書をしてください。',
            questions: [
                {
                    question: '図書館の中で何をしてはいけませんか。',
                    options: ['飲食 (Eating and drinking)', '読書 (Reading)', '勉強 (Studying)', '歩行 (Walking)'],
                    correctAnswer: '飲食 (Eating and drinking)',
                    explanation: 'The sign prohibits "飲食をしてはいけません".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'すみません、窓を開けてもいいですか。ええ、いいですよ。どうぞ。',
            transcript: 'すみません、窓を開けてもいいですか。ええ、いいですよ。どうぞ。',
            question: 'What permission did the speaker request and receive?',
            options: ['Permission to open the window', 'Permission to leave early', 'Permission to turn on the AC', 'Permission to sit'],
            correctAnswer: 'Permission to open the window',
            explanation: 'The speaker asked "窓を開けてもいいですか".'
        },
        culturalNote: 'In traditional Japanese tatami rooms and homes, wearing outdoor shoes past the genkan is strictly prohibited (上がってはいけません).',
        commonMistakes: ['Pronouncing the は in ～てはいけません as "ha" — it is the particle and pronounced "wa".']
    },
    {
        id: 'LESSON_N5_32',
        level: 'N5',
        moduleNumber: 9,
        moduleTitle: 'The Te-Form Suite',
        title: 'Ongoing Actions & Resultant States (～ています)',
        japaneseTitle: '進行と状態（～ています）',
        category: 'aspect',
        description: 'Understand the dual aspect of ～ています: actions happening right now vs persistent resulting states of being.',
        learningObjectives: [
            'Express ongoing continuous actions happening currently (勉強しています)',
            'Express resultant continuous states (住んでいます, 結婚しています, 知っています)',
            'Contrast 知っています (knowledge state) with 知りません (do not know)'
        ],
        content: `### The Dual Nature of ～ています\n\n1. **Continuous Progressive Action** (with continuous verbs):\n   * 今、日本語を**勉強しています**。 (*I am studying Japanese right now.*)\n   * 雨が**降っています**。 (*It is raining.*)\n\n2. **Resultant Persistent State** (with punctual state-change verbs):\n   * 東京に**住んでいます**。 (*I live in Tokyo / state of residence.*)\n   * 田中さんを**知っています**。 (*I know Mr. Tanaka / state of acquaintance.*)\n   * 結婚**しています**。 (*Married / state of marriage.*)\n\n> **Critical Note on Knowing**: To say "I know", say **知っています**. But to say "I don\'t know", say **知りません** (not 知っていません).`,
        examples: [
            { japanese: '母は台所で料理を作っています。', reading: 'はははだいどころでりょうりをつくっています。', romaji: 'Haha wa daidokoro de ryouri o tsukutte imasu.', english: 'My mother is making a meal in the kitchen.' },
            { japanese: 'わたしは兄の会社を知っています。', reading: 'わたしはあにのかいしゃをしっています。', romaji: 'Watashi wa ani no kaisha o shitte imasu.', english: 'I know my older brother\'s company.' }
        ],
        dialogue: {
            title: 'Phone Call with a Friend',
            lines: [
                { speaker: 'Leo', japanese: 'もしもし、今何をしている？', romaji: 'Moshimoshi, ima nani o shite iru?', english: 'Hello, what are you doing right now?' },
                { speaker: 'Ken', japanese: '部屋で試験の勉強をしているよ。', romaji: 'Heya de shiken no benkyou o shite iru yo.', english: 'I am studying for exams in my room.' }
            ]
        },
        readingPassage: {
            title: 'Family Update',
            japanese: '私の家族は大阪に住んでいます。父は高校で英語を教えています。母は病院で働いています。妹は大学で法律を勉強しています。',
            questions: [
                {
                    question: 'お父さんはどこで何をしていますか。',
                    options: ['高校で英語を教えている (Teaching English at high school)', '病院で働いている (Working at hospital)', '大学で勉強している (Studying at university)', '大阪で店を開いている (Running a shop)'],
                    correctAnswer: '高校で英語を教えている (Teaching English at high school)',
                    explanation: 'The text states "父は高校で英語を教えています".'
                }
            ]
        },
        listeningExercise: {
            audioText: '田中さんの電話番号を知っていますか。いいえ、知りません。',
            transcript: '田中さんの電話番号を知っていますか。いいえ、知りません。',
            question: 'Does the speaker know Mr. Tanaka\'s phone number?',
            options: ['No, does not know', 'Yes, has it written down', 'Will call later', 'Knows his address instead'],
            correctAnswer: 'No, does not know',
            explanation: 'The speaker answers "いいえ、知りません".'
        },
        culturalNote: 'When describing someone\'s attire, state-verbs with ～ています are used: メガネをかけています (wearing glasses), 帽子をかぶっています (wearing a hat).',
        commonMistakes: ['Saying "知っていません" for "I don\'t know" — always use 知りません.']
    },
    {
        id: 'LESSON_N5_33',
        level: 'N5',
        moduleNumber: 9,
        moduleTitle: 'The Te-Form Suite',
        title: 'Sequential Actions (～てから)',
        japaneseTitle: '動作の順序（～てから）',
        category: 'sequence',
        description: 'Specify strict chronological dependency with ～てから: Action 2 only occurs after Action 1 is fully completed.',
        learningObjectives: [
            'Construct chronological sequences using Verb 1 [て-form] + から, Verb 2',
            'Differentiate the causal conjunction から (*because*) from temporal ～てから (*after doing*)',
            'Give step-by-step sequential instructions'
        ],
        content: `### Strict Chronological Sequences with ～てから\n\n$$\\text{Verb 1 [て-form]} + \\text{から、} \\text{Verb 2}$$\n\n* Emphasizes that Verb 2 strictly commences **only after Verb 1 has fully finished**:\n* 手を**洗ってから**、ご飯を食べます。 (*After washing my hands, I eat the meal.*)\n* 仕事が**終わってから**、ジムへ行きます。 (*After work finishes, I go to the gym.*)\n\n> **Grammar Note**: Do not confuse with reason から (e.g. 暑い**から** = *because it is hot*). When attached to the **て-form**, it always denotes time sequence (*after doing*).`,
        examples: [
            { japanese: 'お金を入れてから、ボタンを押してください。', reading: 'おかねをいれてから、ボタンをおしてください。', romaji: 'Okane o irete kara, botan o oshite kudasai.', english: 'After inserting money, please press the button.' },
            { japanese: '大学を卒業してから、日本で働きます。', reading: 'だいがくをそつぎょうしてから、にほんではたらきます。', romaji: 'Daigaku o sotsugyou shite kara, nihon de hatarakimasu.', english: 'After graduating from university, I will work in Japan.' }
        ],
        dialogue: {
            title: 'Buying from a Ticket Machine',
            lines: [
                { speaker: 'Tourist', japanese: 'どうやって切符を買いますか。', romaji: 'Dou yatte kippu o kaimasu ka.', english: 'How do I buy a ticket?' },
                { speaker: 'StationStaff', japanese: '行き先を選んでから、お金を入れてください。', romaji: 'Ikisaki o erande kara, okane o irete kudasai.', english: 'After selecting your destination, please insert the money.' }
            ]
        },
        readingPassage: {
            title: 'Evening Routine',
            japanese: 'わたしは毎晩、お風呂に入ってから、ストレッチをします。温かいお茶を飲んでから、十一時に寝ます。ぐっすり眠ることができます。',
            questions: [
                {
                    question: 'ストレッチをする前に何をしますか。',
                    options: ['お風呂に入る (Take a bath)', 'お茶を飲む (Drink tea)', '寝る (Sleep)', 'テレビを見る (Watch TV)'],
                    correctAnswer: 'お風呂に入る (Take a bath)',
                    explanation: 'The text states "お風呂に入ってから、ストレッチをします".'
                }
            ]
        },
        listeningExercise: {
            audioText: '宿題を全部終わらせてから、ゲームをして遊ぼう。',
            transcript: '宿題を全部終わらせてから、ゲームをして遊ぼう。',
            question: 'When can they play video games?',
            options: ['After finishing all homework', 'Right now', 'Tomorrow morning', 'Before homework'],
            correctAnswer: 'After finishing all homework',
            explanation: 'The speaker sets the sequence "宿題を全部終わらせてから".'
        },
        culturalNote: 'In Japanese onsen etiquette, you must wash your body thoroughly at the washing stations *before* entering the communal bathwater (体を洗ってから湯船に入ります).',
        commonMistakes: ['Putting plain form before temporal から (e.g. 食べるから means "because I eat", whereas 食べてから means "after eating").']
    },

    // --- MODULE 10: COMPARISON, QUANTITY AND INTEGRATION ---
    {
        id: 'LESSON_N5_34',
        level: 'N5',
        moduleNumber: 10,
        moduleTitle: 'Comparison, Quantity & Review',
        title: 'Comparison & Superlatives (より・ほうが・一番)',
        japaneseTitle: '比較と最上級（より・ほう・一番）',
        category: 'comparison',
        description: 'Compare two items with より and ほうが, select between options with どちら, and make superlative statements with 一番.',
        learningObjectives: [
            'Construct comparatives: A は B より [Adj] です',
            'Ask and answer two-way choices with どちらが [Adj] ですか',
            'Construct superlatives: [Group] の中で [Noun] が一番 [Adj] です'
        ],
        content: `### The Comparative & Superlative Framework\n\n1. **Direct Comparison**:\n   $$\\text{A は B より [Adjective] です} \\quad (\\text{A is more [Adj] than B})$$\n   * 新幹線は飛行機**より安いです**。 (*The bullet train is cheaper than an airplane.*)\n\n2. **Choosing Between Two Items**:\n   * A と B と **どちらが好きですか**。 (*Between A and B, which do you like better?*)\n   * A の**ほうが好きです**。 (*I like A better.*)\n\n3. **Superlatives (Number One)**:\n   $$\\text{[Category] の中で [Item] が一番 [Adjective] です}$$\n   * スポーツの中でサッカーが**一番面白いです**。 (*Among sports, soccer is the most interesting.*)`,
        examples: [
            { japanese: '東京は京都より人が多いです。', reading: 'とうきょうはきょうとよりひとがおおいです。', romaji: 'Toukyou wa Kyouto yori hito ga ooi desu.', english: 'Tokyo has more people than Kyoto.' },
            { japanese: '一年の中で春が一番好きです。', reading: 'いちねんのなかではるがいちばんすきです。', romaji: 'Ichinen no naka de haru ga ichiban suki desu.', english: 'Among the entire year, I like spring the best.' }
        ],
        dialogue: {
            title: 'Coffee vs Tea',
            lines: [
                { speaker: 'Ren', japanese: 'コーヒーとお茶とどちらが好きですか。', romaji: 'Koohii to ocha to dochira ga suki desu ka.', english: 'Between coffee and tea, which do you like better?' },
                { speaker: 'Hana', japanese: 'お茶のほうが好きです。特に日本の緑茶が一番好きです。', romaji: 'Ocha no hou ga suki desu. Tokuni nihon no ryokucha ga ichiban suki desu.', english: 'I like tea better. In particular, I like Japanese green tea the best.' }
            ]
        },
        readingPassage: {
            title: 'Comparing Travel Options',
            japanese: '東京から大阪へ行くとき、飛行機は新幹線より速いですが、新幹線は飛行機より便利です。私は新幹線のほうが好きです。',
            questions: [
                {
                    question: '飛行機と新幹線とどちらが速いですか。',
                    options: ['飛行機 (Airplane)', '新幹線 (Bullet train)', '同じ (Same)', 'どちらも遅い (Both slow)'],
                    correctAnswer: '飛行機 (Airplane)',
                    explanation: 'The text states "飛行機は新幹線より速いです" (The plane is faster than the bullet train).'
                }
            ]
        },
        listeningExercise: {
            audioText: '日本で一番高い山は何ですか。富士山ですよ。',
            transcript: '日本で一番高い山は何ですか。富士山ですよ。',
            question: 'What is the tallest mountain in Japan?',
            options: ['Mount Fuji', 'Mount Takao', 'Mount Aso', 'Mount Hiei'],
            correctAnswer: 'Mount Fuji',
            explanation: 'The speaker confirms "富士山ですよ" (Mount Fuji).'
        },
        culturalNote: 'Mount Fuji (富士山 - Fujisan) is Japan\'s highest peak at 3,776 meters and a UNESCO World Heritage cultural site.',
        commonMistakes: ['Using どれ when comparing only TWO items (use どちら for 2 items; use どれ for 3+ items).']
    },
    {
        id: 'LESSON_N5_35',
        level: 'N5',
        moduleNumber: 10,
        moduleTitle: 'Comparison, Quantity & Review',
        title: 'Past Experience & Master N5 Review (～たことがある・たり～たり)',
        japaneseTitle: '経験と総合総復習（～たことがある・たり～たり）',
        category: 'experience',
        description: 'Complete the N5 curriculum: share lifetime experiences with ～たことがあります, list actions with ～たり～たり, and review for the N5 Mock Exam.',
        learningObjectives: [
            'Express past lifetime experiences using Verb [た-form] + ことがあります',
            'List representative non-exhaustive actions with ～たり～たりします',
            'Consolidate all N5 vocabulary, kanji, particles, and grammar for the JLPT Practice Exam'
        ],
        content: `### The Final Pillars of N5\n\n1. **Past Experience (Verb [た-form] + ことがあります)**:\n   * 日本へ**行ったことがあります**。 (*I have been to Japan before.*)\n   * 納豆を**食べたことがありません**。 (*I have never eaten natto.*)\n\n2. **Representative Action Listing (～たり～たりします)**:\n   * 日曜日は本を**読んだり**、音楽を**聞いたりします**。\n   * (*On Sundays, I do things like reading books and listening to music.*)\n\n### 🏆 N5 Curriculum Complete!\nYou are now equipped with all the grammar, vocabulary, particles, and kanji required for the **Kana-Forge JLPT N5 Full Practice Exam**!`,
        examples: [
            { japanese: '着物を着たことがありますか。', reading: 'きものをきたことがありますか。', romaji: 'Kimono o kita koto ga arimasu ka.', english: 'Have you ever worn a kimono?' },
            { japanese: '休みの日は買い物をしたり、散歩したりしました。', reading: 'やすみのひはかいものをしたり、さんぽしたりしました。', romaji: 'Yasumi no hi wa kaimono o shitari, sanpo shitari shimashita.', english: 'On my days off, I did things like shopping and walking.' }
        ],
        dialogue: {
            title: 'Reflecting on Japanese Studies',
            lines: [
                { speaker: 'Sensei', japanese: 'N5のレッスンを全部完了しましたね。素晴らしいです！', romaji: 'N5 no ressun o zenbu kanryou shimashita ne. Subarashii desu!', english: 'You have completed all N5 lessons! That is wonderful!' },
                { speaker: 'Student', japanese: '先生、ありがとうございました！模擬試験で力を試してみます。', romaji: 'Sensei, arigatou gozaimashita! Mogi shiken de chikara o tameshite mimasu.', english: 'Thank you so much, teacher! I will test my strength on the mock exam.' }
            ]
        },
        readingPassage: {
            title: 'Graduation Notice & Reflection',
            japanese: '日本語の初級コースを修了した皆さんへ。私たちはひらがな、カタカナ、漢字、そして多くの文法を学びました。自信を持ってN5模擬試験に挑戦してください。次のステップはN4です！',
            questions: [
                {
                    question: '修了生の次のステップは何ですか。',
                    options: ['N4の学習 (Studying N4)', '学習の終了 (Ending study)', '英語の学習 (Studying English)', '帰国 (Returning home)'],
                    correctAnswer: 'N4の学習 (Studying N4)',
                    explanation: 'The notice states "次のステップはN4です！" (The next step is N4!).'
                }
            ]
        },
        listeningExercise: {
            audioText: '富士山に登ったことがありますか。はい、去年の夏に登りました。とてもきれいでした。',
            transcript: '富士山に登ったことがありますか。はい、去年の夏に登りました。とてもきれいでした。',
            question: 'Has the speaker climbed Mount Fuji?',
            options: ['Yes, climbed it last summer', 'No, never climbed it', 'Plans to climb next year', 'Climbed with a tour guide'],
            correctAnswer: 'Yes, climbed it last summer',
            explanation: 'The speaker answers "はい、去年の夏に登りました" (Yes, climbed last summer).'
        },
        culturalNote: 'In Japanese traditional crafts and martial arts, completing foundational training is commemorated as 初段 (shodan) or 入門修了.',
        commonMistakes: ['Leaving out the final します in ～たり～たり sentences.']
    }
];

export default n5Lessons;
