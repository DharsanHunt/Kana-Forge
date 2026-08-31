/**
 * Kana-Forge Complete Curated N4 Curriculum (Lessons 01 - 35)
 * All content authored originally for Kana-Forge with authentic dialogues, readings, and listening tasks.
 */

export const n4Lessons = [
    // --- MODULE 1: TRANSITION & PLAIN FORMS ---
    {
        id: 'LESSON_N4_01',
        level: 'N4',
        moduleNumber: 1,
        moduleTitle: 'Transition & Plain Forms',
        title: 'N5 Foundation Review & The Path to N4',
        japaneseTitle: 'N5の総復習とN4への架け橋',
        category: 'grammar',
        description: 'Consolidate foundational N5 particles, verb conjugations, and adjectives, and explore how intermediate Japanese transitions into complex clause structures.',
        learningObjectives: [
            'Review all essential N5 particle matrices (は, が, を, に, で, へ, と, から, まで)',
            'Identify the systematic relationship between polite (ます) and plain (辞書形) verb forms',
            'Prepare the conceptual groundwork for multi-clause N4 sentences'
        ],
        content: `### Evolving from N5 to N4: The Shift to Embedded Clauses\n\nIn N5, sentences are largely linear and single-clause structures ending in polite forms (～です / ～ます).\n\nIn **JLPT N4**, Japanese becomes nuanced through **embedded clauses** (quotes, opinions, conditions, relative noun modifications, reasons). To form these embedded clauses, verbs inside the sentence must be in their **Plain Form (普通形)**:\n\n$$\\text{[Plain Form Clause]} + \\text{と思います / と言いました / のに / 前に / とき}$$\n\n#### The Four Core Plain Forms:\n1. **Dictionary Form (辞書形)**: Present Affirmative (e.g. 食べる, 行く)\n2. **Nai Form (ない形)**: Present Negative (e.g. 食べない, 行かない)\n3. **Ta Form (た形)**: Past Affirmative (e.g. 食べた, 行った)\n4. **Nakatta Form (なかった形)**: Past Negative (e.g. 食べなかった, 行かなかった)`,
        examples: [
            { japanese: '明日は雨が降ると思います。', reading: 'あしたはあめがふるとおもいます。', romaji: 'Ashita wa ame ga furu to omoimasu.', english: 'I think it will rain tomorrow.' },
            { japanese: '日本へ行く前にホテルを予約します。', reading: 'にほんへいくまえにホテルをよやくします。', romaji: 'Nihon e iku mae ni hoteru o yoyaku shimasu.', english: 'I reserve a hotel before going to Japan.' }
        ],
        dialogue: {
            title: 'Planning the Weekend with Friends',
            lines: [
                { speaker: 'Daiki', japanese: '今度の土曜日、何か予定ある？', romaji: 'Kondo no doyoubi, nanika yotei aru?', english: 'Do you have any plans this coming Saturday?' },
                { speaker: 'Sora', japanese: 'ううん、特に何もないよ。映画でも見に行かない？', romaji: 'Uun, tokuni nani mo nai yo. Eiga demo mi ni ikanai?', english: 'No, nothing in particular. Won\'t you go watch a movie or something?' }
            ]
        },
        readingPassage: {
            title: 'Study Reflection',
            japanese: '日本語の勉強を始めてから半年が経ちました。ひらがなとカタカナは全部覚えました。今はN4の文法と漢字を勉強しています。難しいですが、会話ができるようになりたいです。',
            questions: [
                {
                    question: '筆者は今何を勉強していますか。',
                    options: ['N4の文法と漢字 (N4 grammar and kanji)', 'ひらがな (Hiragana)', 'カタカナ (Katakana)', '英語 (English)'],
                    correctAnswer: 'N4の文法と漢字 (N4 grammar and kanji)',
                    explanation: 'The text states "今はN4の文法と漢字を勉強しています".'
                }
            ]
        },
        listeningExercise: {
            audioText: '明日の試験について先生は何と言っていましたか。九時までに教室に来るようにと言っていました。',
            transcript: '明日の試験について先生は何と言っていましたか。九時までに教室に来るようにと言っていました。',
            question: 'What did the teacher say about tomorrow\'s exam?',
            options: ['Come to the classroom by 9:00', 'The exam is cancelled', 'Submit homework online', 'Come at 10:00'],
            correctAnswer: 'Come to the classroom by 9:00',
            explanation: 'The quote was "九時までに教室に来るように".'
        },
        culturalNote: 'Using plain forms (タメ口 - tameguchi) is natural among close peers, while polite forms (敬語) show awareness and respect with colleagues and elders.',
        commonMistakes: ['Using polite ます forms inside dependent quotation clauses (say 行くと思います, not "行きますと思います").']
    },
    {
        id: 'LESSON_N4_02',
        level: 'N4',
        moduleNumber: 1,
        moduleTitle: 'Transition & Plain Forms',
        title: 'Mastering Plain Forms (辞書形・ない形・た形・なかった形)',
        japaneseTitle: '普通形の完全マスター',
        category: 'plain_form',
        description: 'Systematically master the 4 plain forms across Group 1, Group 2, and Irregular verbs to unlock all advanced grammar clauses.',
        learningObjectives: [
            'Form the ない-form by shifting Group 1 verbs to the あ-row + ない',
            'Form the た-form from the corresponding て-form',
            'Form the past negative なかった-form across all verb groups'
        ],
        content: `### Complete Verb Plain Form Matrix\n\n| Verb Group | Dictionary | ない-form | た-form | なかった-form |\n|---|---|---|---|---|\n| **Group 1 (書く)** | 書く | 書**か**ない | 書**いた** | 書**かなかった** |\n| **Group 1 (飲む)** | 飲む | 飲**ま**ない | 飲**んだ** | 飲**まなかった** |\n| **Group 2 (食べる)** | 食べる | 食**べ**ない | 食**べた** | 食**べなかった** |\n| **Group 3 (する)** | する | **しない** | **した** | **しなかった** |\n| **Group 3 (来る)** | 来る (くる) | **来ない (こない)** | **来た (きた)** | **来なかった (こなかった)** |\n\n> **Special Group 1 Rule**: Verbs ending in single **う** change to **わ** (e.g. 買う $\\rightarrow$ 買**わ**ない, 会う $\\rightarrow$ 会**わ**ない).`,
        examples: [
            { japanese: '昨日はどこにも出かけなかった。', reading: 'きのうはどこにもでかけなかった。', romaji: 'Kinou wa dokoni mo dekakenakatta.', english: 'I didn\'t go out anywhere yesterday.' },
            { japanese: 'あの映画をもう見た？', reading: 'あのえいがをもうみた？', romaji: 'Ano eiga o mou mita?', english: 'Have you already seen that movie?' }
        ],
        dialogue: {
            title: 'Casual Chat Between Classmates',
            lines: [
                { speaker: 'Ren', japanese: '昨日の宿題、もう終わった？', romaji: 'Kinou no shukudai, mou owatta?', english: 'Did you already finish yesterday\'s homework?' },
                { speaker: 'Kaito', japanese: 'ううん、まだやってない。難しくて分からなかった。', romaji: 'Uun, mada yattenai. Muzukashikute wakaranakatta.', english: 'No, haven\'t done it yet. It was difficult and I didn\'t understand.' }
            ]
        },
        readingPassage: {
            title: 'Diary Entry in Plain Style',
            japanese: '八月十五日。今日は天気が悪かったから、家で読書をした。昼ご飯は自分でパスタを作った。おいしかった。夜は友達と電話で話した。',
            questions: [
                {
                    question: '筆者は昼ご飯に何を食べましたか。',
                    options: ['パスタ (Pasta)', 'ラーメン (Ramen)', 'おにぎり (Rice ball)', '何も食べなかった (Ate nothing)'],
                    correctAnswer: 'パスタ (Pasta)',
                    explanation: 'The entry states "昼ご飯は自分でパスタを作った".'
                }
            ]
        },
        listeningExercise: {
            audioText: '昨日のパーティー、楽しかった？うん、すごく楽しかったよ！',
            transcript: '昨日のパーティー、楽しかった？うん、すごく楽しかったよ！',
            question: 'How was yesterday\'s party according to the speaker?',
            options: ['Very fun', 'Boring', 'Crowded and tiring', 'Cancelled'],
            correctAnswer: 'Very fun',
            explanation: 'The speaker answers "すごく楽しかったよ" (It was really fun).'
        },
        culturalNote: 'In personal journals, diaries, and novels, Japanese is written in the plain style (常体 - joutai).',
        commonMistakes: ['Conjugating 買う as "かあない" instead of 買わない (kawanai).']
    },
    {
        id: 'LESSON_N4_03',
        level: 'N4',
        moduleNumber: 1,
        moduleTitle: 'Transition & Plain Forms',
        title: 'Plain Form in Conversation & Informal Speech',
        japaneseTitle: '日常会話での普通体（タメ口）',
        category: 'plain_form',
        description: 'Speak natural, conversational Japanese with friends: sentence-ending particles, question intonations, and casual contractions.',
        learningObjectives: [
            'Turn plain statements into casual questions using rising intonation without か',
            'Use conversational sentence-ending particles (ね, よ, わ, ぞ)',
            'Understand common spoken contractions (～ている $\\rightarrow$ ～てる, ～ておく $\\rightarrow$ ～とく)'
        ],
        content: `### Conversational Plain Japanese (タメ口)\n\n#### 1. Asking Questions in Casual Style:\n* Drop the particle **か** and raise the vocal pitch at the end:\n* これ、食べる？ ($\\nearrow$) (*Are you eating this?*)\n* 明日、行く？ ($\\nearrow$) (*Are you going tomorrow?*)\n\n#### 2. Casual Copula & Adjectives:\n* Nouns and な-adjectives use **だ** (or drop it in questions: 元気？ instead of 元気ですか).\n* い-adjectives stand alone (おいしい！ instead of おいしいです).\n\n#### 3. Spoken Contractions:\n* 食べている $\\rightarrow$ **食べてる**\n* 買っておく $\\rightarrow$ **買っとく**\n* してしまう $\\rightarrow$ **しちゃう**`,
        examples: [
            { japanese: 'これ、すごくおいしいよ！食べてみて。', reading: 'これ、すごくおいしいよ！たべてみて。', romaji: 'Kore, sugoku oishii yo! Tabete mite.', english: 'This is super delicious! Try it.' },
            { japanese: '今、何してるの？テレビ見てる。', reading: 'いま、なにしているの？テレビみてる。', romaji: 'Ima, nani shiteru no? Terebi miteru.', english: 'What are you doing now? Watching TV.' }
        ],
        dialogue: {
            title: 'Grabbing a Bite After Work',
            lines: [
                { speaker: 'Sota', japanese: 'お腹すいたね。何か食べに行かない？', romaji: 'Onaka suita ne. Nanika tabe ni ikanai?', english: 'I\'m hungry. Want to grab something to eat?' },
                { speaker: 'Aoi', japanese: 'いいね！駅前のラーメン屋、行ってみようよ。', romaji: 'Ii ne! Ekimae no raamen-ya, itte miyou yo.', english: 'Sounds good! Let\'s check out theラーメン shop in front of the station.' }
            ]
        },
        readingPassage: {
            title: 'Text Message Exchange',
            japanese: '【メッセージ】\nケン「今どこ？もう着いた？」\nダイキ「ごめん！ちょっと電車が遅れてる。あと十分で着く！」\nケン「了解。改札の前で待ってるね。」',
            questions: [
                {
                    question: 'ダイキさんはあと何分で着きますか。',
                    options: ['十分 (10 minutes)', '五分 (5 minutes)', '二十分 (20 minutes)', 'もう着いた (Already arrived)'],
                    correctAnswer: '十分 (10 minutes)',
                    explanation: 'Daiki texts "あと十分で着く！" (I will arrive in 10 minutes!).'
                }
            ]
        },
        listeningExercise: {
            audioText: '明日、暇？うん、特に予定ないよ。どこか行く？',
            transcript: '明日、暇？うん、特に予定ないよ。どこか行く？',
            question: 'Does the second speaker have plans tomorrow?',
            options: ['No specific plans', 'Has work all day', 'Has an exam', 'Going to Kyoto'],
            correctAnswer: 'No specific plans',
            explanation: 'The speaker answers "特に予定ないよ" (No plans in particular).'
        },
        culturalNote: 'In Japan, switching from polite to plain form (タメ口) signals genuine friendship and emotional closeness.',
        commonMistakes: ['Using harsh plain forms with strangers or superiors — always maintain polite speech in professional contexts.']
    },

    // --- MODULE 2: NEGATION, NECESSITY & ADVICE ---
    {
        id: 'LESSON_N4_04',
        level: 'N4',
        moduleNumber: 2,
        moduleTitle: 'Negation, Necessity & Advice',
        title: 'Negative Requests (～ないでください)',
        japaneseTitle: '否定の依頼「～ないでください」',
        category: 'requests',
        description: 'Politely ask others to refrain from actions with Verb [ない-form] + でください in public, school, and work contexts.',
        learningObjectives: [
            'Form polite negative requests from the verb ない-form',
            'Read formal public caution signs (入らないでください, 捨てないでください)',
            'Gently caution friends and colleagues in everyday situations'
        ],
        content: `### Polite Negative Requests: ～ないでください\n\n$$\\text{Verb [ない-form]} + \\text{でください}$$\n\n* **入る** $\\rightarrow$ 入ら**ないでください** (*Please do not enter*)\n* **忘れる** $\\rightarrow$ 忘れ**ないでください** (*Please do not forget*)\n* **心配する** $\\rightarrow$ 心配し**ないでください** (*Please do not worry*)`,
        examples: [
            { japanese: 'ここで写真を撮らないでください。', reading: 'ここでしゃしんをとらないでください。', romaji: 'Koko de shashin o toranaide kudasai.', english: 'Please do not take photographs here.' },
            { japanese: 'パスポートを忘れないでくださいね。', reading: 'パスポートをわすれないでくださいね。', romaji: 'Pasupooto o wasurenaide kudasai ne.', english: 'Please don\'t forget your passport, okay?' }
        ],
        dialogue: {
            title: 'At the Art Gallery',
            lines: [
                { speaker: 'Guard', japanese: 'お客様、展示品に手を触れないでください。', romaji: 'Okyaku-sama, tenjihin ni te o furenaide kudasai.', english: 'Dear guest, please do not touch the exhibits.' },
                { speaker: 'Visitor', japanese: 'あ、すみません！気をつけます。', romaji: 'A, sumimasen! Ki o tsukemasu.', english: 'Ah, I\'m sorry! I will be careful.' }
            ]
        },
        readingPassage: {
            title: 'Examination Rules Sign',
            japanese: '【試験の注意】机の上に筆記用具以外のものを置かないでください。試験中に携帯電話を使わないでください。',
            questions: [
                {
                    question: '机の上に置いてはいけないものは何ですか。',
                    options: ['筆記用具以外のもの (Things other than writing tools)', '鉛筆 (Pencil)', '消しゴム (Eraser)', '時計 (Watch)'],
                    correctAnswer: '筆記用具以外のもの (Things other than writing tools)',
                    explanation: 'The sign prohibits placing items other than writing tools on the desk.'
                }
            ]
        },
        listeningExercise: {
            audioText: '大事な書類ですから、無くさないでくださいね。はい、大切に保管します。',
            transcript: '大事な書類ですから、無くさないでくださいね。はい、大切に保管します。',
            question: 'What instruction was given regarding the document?',
            options: ['Do not lose it', 'Do not read it', 'Send it by mail', 'Throw it away'],
            correctAnswer: 'Do not lose it',
            explanation: 'The speaker warns "無くさないでください" (Please do not lose it).'
        },
        culturalNote: 'In Japan, public reminders are expressed with gentle negative requests rather than aggressive commands.',
        commonMistakes: ['Forgetting to put で after the ない-form (say 食べないでください, not "食べないください").']
    },
    {
        id: 'LESSON_N4_05',
        level: 'N4',
        moduleNumber: 2,
        moduleTitle: 'Negation, Necessity & Advice',
        title: 'Obligation & Necessity (～なければならない)',
        japaneseTitle: '義務と必要性「～なければならない」',
        category: 'necessity',
        description: 'Express what you must do, obligations, and societal duties with ～なければならない and ～なくてはいけない.',
        learningObjectives: [
            'Conjugate the negative verb stem into なければならない / なくてはいけない',
            'Express personal duties, deadlines, and medical necessities',
            'Understand the conversational contractions (～なきゃ / ～なくちゃ)'
        ],
        content: `### Expressing "Must" & Obligation\n\nTake the **ない-form**, drop **い**, and attach **ければなりません** or **くてはいけません**:\n\n$$\\text{Verb [Drop い from ない-form]} + \\text{ければなりません / なくてはいけません}$$\n\n* 行かない $\\rightarrow$ 行か**なければなりません** (*Must go*)\n* 飲む $\\rightarrow$ 飲ま**なくてはいけません** (*Must drink / take medicine*)\n\n#### Casual Conversational Forms:\n* 行か**なきゃ** (ikanakya) / 行か**なくちゃ** (ikanakucha)`,
        examples: [
            { japanese: '明日病院へ行かなければなりません。', reading: 'あしたびょういんへいかなければなりません。', romaji: 'Ashita byouin e ikanakereba narimasen.', english: 'I must go to the hospital tomorrow.' },
            { japanese: '毎日漢字を練習しなければなりません。', reading: 'まいにちかんじをれんしゅうしなければなりません。', romaji: 'Mainichi kanji o renshuu shinakereba narimasen.', english: 'I must practice kanji every day.' }
        ],
        dialogue: {
            title: 'Visa Extension Deadline',
            lines: [
                { speaker: 'Student', japanese: 'ビザの更新はどうすればいいですか。', romaji: 'Biza no koushin wa dou sureba ii desu ka.', english: 'What should I do about renewing my visa?' },
                { speaker: 'Advisor', japanese: '来週の金曜日までに入国管理局へ行かなければなりませんよ。', romaji: 'Raishuu no kin\'youbi made ni Nyuukoku Kanrikyoku e ikanakereba narimasen yo.', english: 'You must go to the Immigration Bureau by next Friday.' }
            ]
        },
        readingPassage: {
            title: 'Doctor\'s Prescription Advice',
            japanese: 'この薬は毎食後、一日三回飲まなければなりません。お酒と一緒に飲んではいけません。水分をたくさん取ってください。',
            questions: [
                {
                    question: '薬は一日何回飲まなければなりませんか。',
                    options: ['三回 (3 times)', '一回 (1 time)', '二回 (2 times)', '四回 (4 times)'],
                    correctAnswer: '三回 (3 times)',
                    explanation: 'The instruction states "一日三回飲まなければなりません".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'もう十時だ！早く帰らなきゃ。終電に間に合わないよ。',
            transcript: 'もう十時だ！早く帰らなきゃ。終電に間に合わないよ。',
            question: 'Why does the speaker need to leave quickly?',
            options: ['To catch the last train', 'To cook dinner', 'To wake up early', 'To meet a friend'],
            correctAnswer: 'To catch the last train',
            explanation: 'The speaker expresses "終電に間に合わないよ" (I won\'t make the last train).'
        },
        culturalNote: 'Japanese duty and social responsibility is called 義務 (gimu), forming the ethical backbone of punctuality and public trust.',
        commonMistakes: ['Mispronouncing なければ as "なけらば" — practice the rhythm: な・け・れ・ば.']
    },
    {
        id: 'LESSON_N4_06',
        level: 'N4',
        moduleNumber: 2,
        moduleTitle: 'Negation, Necessity & Advice',
        title: 'Lack of Obligation (～なくてもいい)',
        japaneseTitle: '不要の表現「～なくてもいい」',
        category: 'permission',
        description: 'Reassure listeners that an action is unnecessary using Verb [ない stem] + くてもいい (*do not have to do*).',
        learningObjectives: [
            'Form ～なくてもいい from the negative verb stem',
            'Contrast necessity (なければならない) with lack of necessity (なくてもいい)',
            'Reassure guests and friends about etiquette exceptions'
        ],
        content: `### "You Don\'t Have To": ～なくてもいい\n\n$$\\text{Verb [Drop い from ない-form]} + \\text{くてもいいです}$$\n\n* 早く起きる $\\rightarrow$ 早く起き**なくてもいいです** (*You don\'t have to wake up early*)\n* 靴を脱ぐ $\\rightarrow$ 靴を脱が**なくてもいいです** (*You don\'t have to take off your shoes*)`,
        examples: [
            { japanese: '明日は休みですから、早く起きなくてもいいです。', reading: 'あしたはやすみですから、はやくおきなくてもいいです。', romaji: 'Ashita wa yasumi desu kara, hayaku okinakute mo ii desu.', english: 'Since tomorrow is a day off, you don\'t have to wake up early.' },
            { japanese: '全部食べなくてもいいですよ。', reading: 'ぜんぶたべなくてもいいですよ。', romaji: 'Zenbu tabenakute mo ii desu yo.', english: 'You don\'t have to eat everything.' }
        ],
        dialogue: {
            title: 'At an Office Party',
            lines: [
                { speaker: 'Junior', japanese: '明日の朝もスーツを着て来なければなりませんか。', romaji: 'Ashita no asa mo suutsu o kite konakereba narimasen ka.', english: 'Do I have to wear a suit tomorrow morning as well?' },
                { speaker: 'Senior', japanese: '明日はカジュアルフライデーだから、スーツじゃなくてもいいよ。', romaji: 'Ashita wa kajuaru furaidee da kara, suutsu ja nakute mo ii yo.', english: 'Tomorrow is Casual Friday, so you don\'t have to wear a suit.' }
            ]
        },
        readingPassage: {
            title: 'Online Class Guidance',
            japanese: 'オンライン授業の案内：カメラをオンにしなくてもいいです。マイクは発言するとき以外はオフにしてください。',
            questions: [
                {
                    question: '生徒は何をしなくてもいいですか。',
                    options: ['カメラをオンにすること (Turning on the camera)', '授業を受けること (Attending class)', 'マイクをオフにすること (Muting microphone)', '宿題を出すこと (Submitting homework)'],
                    correctAnswer: 'カメラをオンにすること (Turning on the camera)',
                    explanation: 'The guide says "カメラをオンにしなくてもいいです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'この書類は今日中に提出しなければなりませんか。いいえ、明日でもいいですよ。急がなくてもいいです。',
            transcript: 'この書類は今日中に提出しなければなりませんか。いいえ、明日でもいいですよ。急がなくてもいいです。',
            question: 'Does the document have to be submitted today?',
            options: ['No, tomorrow is fine and there is no need to rush', 'Yes, by 5:00 PM today', 'Next week', 'Never'],
            correctAnswer: 'No, tomorrow is fine and there is no need to rush',
            explanation: 'The speaker answers "急がなくてもいいです" (You don\'t have to rush).'
        },
        culturalNote: 'To soften requirements in Japanese hospitality, hosts often proactively offer permission with ～なくてもいいですよ.',
        commonMistakes: ['Confusing ～てはいけない (*must not do*) with ～なくてもいい (*do not have to do*).']
    },
    {
        id: 'LESSON_N4_07',
        level: 'N4',
        moduleNumber: 2,
        moduleTitle: 'Negation, Necessity & Advice',
        title: 'Giving Advice & Warnings (～たほうがいい・～ないほうがいい)',
        japaneseTitle: '助言と忠告（～たほうがいい・～ないほうがいい）',
        category: 'advice',
        description: 'Give friendly recommendations and constructive health/safety advice with ～たほうがいい (*should*) and ～ないほうがいい (*should not*).',
        learningObjectives: [
            'Use the past た-form with ほうがいい for affirmative advice',
            'Use the present ない-form with ほうがいい for negative advice',
            'Offer constructive wellness, study, and travel advice'
        ],
        content: `### The Structure of Advice: ほうがいい\n\n1. **Affirmative Advice ("You should do X")**:\n   $$\\text{Verb [た-form]} + \\text{ほうがいいです}$$\n   * 早く寝**たほうがいい**です。 (*You should go to sleep early.*)\n   * 病院へ行っ**たほうがいい**です。 (*You should go to the hospital.*)\n\n2. **Negative Advice ("You had better NOT do X")**:\n   $$\\text{Verb [ない-form]} + \\text{ほうがいいです}$$\n   * 冷たいものを飲ま**ないほうがいい**です。 (*You should not drink cold things.*)\n   * 夜遅く出かけ**ないほうがいい**です。 (*You should not go out late at night.*)`,
        examples: [
            { japanese: '風邪をひいたときは、温かいスープを飲んだほうがいいです。', reading: 'かぜをひいたときは、あたたかいスープをのんだほうがいいです。', romaji: 'Kaze o hiita toki wa, atatakai suupu o nonda hou ga ii desu.', english: 'When you have a cold, you should drink warm soup.' },
            { japanese: '無理をしないほうがいいですよ。', reading: 'むりをしないほうがいいですよ。', romaji: 'Muri o shinai hou ga ii desu yo.', english: 'You had better not overwork yourself.' }
        ],
        dialogue: {
            title: 'Health Advice for a Friend',
            lines: [
                { speaker: 'Ken', japanese: '頭が痛くて少し熱があります。', romaji: 'Atama ga itakute sukoshi netsu ga arimasu.', english: 'I have a headache and a slight fever.' },
                { speaker: 'Yuki', japanese: '大変ですね！今日は早く帰って、ゆっくり休んだほうがいいですよ。', romaji: 'Taihen desu ne! Kyou wa hayaku kaette, yukkuri yasunda hou ga ii desu yo.', english: 'That is rough! You should go home early today and rest well.' }
            ]
        },
        readingPassage: {
            title: 'Summer Heatwave Advisory',
            japanese: '【熱中症の予防】水分をこまめに補給したほうがいいです。エアコンを上手に使ってください。直射日光の下に長時間いないほうがいいです。',
            questions: [
                {
                    question: '直射日光の下でどうするべきですか。',
                    options: ['長時間いないほうがいい (Should not stay for a long time)', '運動したほうがいい (Should exercise)', '寝たほうがいい (Should sleep)', '帽子を脱ぐべき (Should take off hat)'],
                    correctAnswer: '長時間いないほうがいい (Should not stay for a long time)',
                    explanation: 'The advisory says "直射日光の下に長時間いないほうがいいです".'
                }
            ]
        },
        listeningExercise: {
            audioText: '試験の前日は徹夜しないで、しっかり寝たほうがいいですよ。',
            transcript: '試験の前日は徹夜しないで、しっかり寝たほうがいいですよ。',
            question: 'What advice was given for the night before an exam?',
            options: ['Get plenty of sleep rather than staying up all night', 'Study until morning', 'Drink energy drinks', 'Take a practice test'],
            correctAnswer: 'Get plenty of sleep rather than staying up all night',
            explanation: 'The speaker advises "徹夜しないで、しっかり寝たほうがいい".'
        },
        culturalNote: 'To soften advice so it doesn\'t sound overbearing, add sentence-final particle よ (～たほうがいいですよ).',
        commonMistakes: ['Using dictionary form with affirmative ほうがいい (say 行ったほうがいい, not "行くほうがいい").']
    },

    // --- MODULE 3: PAST FORM EXPANSION & SEQUENCES ---
    {
        id: 'LESSON_N4_08',
        level: 'N4',
        moduleNumber: 3,
        moduleTitle: 'Past Form Expansion & Sequences',
        title: 'Temporal Sequence: After Doing (～たあとで)',
        japaneseTitle: '動作の前後関係「～たあとで」',
        category: 'sequence',
        description: 'Specify that an event occurs strictly after another action finishes using Verb [た-form] + あとで / Noun のあとで.',
        learningObjectives: [
            'Connect verbs using Verb [た-form] + あとで',
            'Connect nouns using Noun + のあとで (仕事のあとで)',
            'Contrast ～たあとで with ～てから'
        ],
        content: `### After Doing: ～たあとで\n\n$$\\text{Verb [た-form]} + \\text{あとで、} \\text{Action 2}$$\n$$\\text{Noun} + \\text{のあとで、} \\text{Action 2}$$\n\n* **ご飯を食べたあとで**、散歩をします。 (*After eating a meal, I take a walk.*)\n* **会議のあとで**、レポートを書きます。 (*After the meeting, I write a report.*)`,
        examples: [
            { japanese: '説明を聞いたあとで、質問をしてください。', reading: 'せつめいをきいたあとで、しつもんをしてください。', romaji: 'Setsumei o kiita ato de, shitsumon o shite kudasai.', english: 'After listening to the explanation, please ask questions.' },
            { japanese: '買い物のあとでカフェに行きましょう。', reading: 'かいもののあとでカフェにいきましょう。', romaji: 'Kaimono no ato de kafe ni ikimashou.', english: 'After shopping, let\'s go to a cafe.' }
        ],
        dialogue: {
            title: 'After Class Activities',
            lines: [
                { speaker: 'Taro', japanese: '授業が終わったあとで、サッカーをしない？', romaji: 'Jugyou ga owatta ato de, sakkaa o shinai?', english: 'After class finishes, want to play soccer?' },
                { speaker: 'Ken', japanese: 'いいね！宿題を出したあとで行くよ。', romaji: 'Ii ne! Shukudai o dashita ato de iku yo.', english: 'Sounds good! I\'ll go after submitting my homework.' }
            ]
        },
        readingPassage: {
            title: 'Medicine Instructions',
            japanese: 'この薬は必ずご飯を食べたあとで飲んでください。空腹のときに飲むと胃が痛くなることがあります。',
            questions: [
                {
                    question: '薬はいつ飲むべきですか。',
                    options: ['ご飯を食べたあと (After eating a meal)', 'ご飯を食べる前 (Before eating)', '寝る直前 (Right before sleeping)', 'いつでもよい (Anytime)'],
                    correctAnswer: 'ご飯を食べたあと (After eating a meal)',
                    explanation: 'The text states "必ずご飯を食べたあとで飲んでください".'
                }
            ]
        },
        listeningExercise: {
            audioText: '映画を見たあとで、みんなで感想を話しましょう。',
            transcript: '映画を見たあとで、みんなで感想を話しましょう。',
            question: 'When will they discuss their thoughts?',
            options: ['After watching the movie', 'Before the movie starts', 'During the movie', 'Tomorrow'],
            correctAnswer: 'After watching the movie',
            explanation: 'The speaker specifies "映画を見たあとで".'
        },
        culturalNote: 'In Japanese work environments, drinking gatherings after work are called 二次会 (nijikai - after-party).',
        commonMistakes: ['Putting plain present form before あとで (say 食べたあとで, not "食べるあとで").']
    },
    {
        id: 'LESSON_N4_09',
        level: 'N4',
        moduleNumber: 3,
        moduleTitle: 'Past Form Expansion & Sequences',
        title: 'Unchanged Persistent States (～たまま)',
        japaneseTitle: '状態の継続「～たまま」',
        category: 'aspect',
        description: 'Describe actions carried out while leaving a previous state unchanged with Verb [た-form] + まま.',
        learningObjectives: [
            'Form ～たまま from the past verb form',
            'Express unintentional oversights (leaving lights on, wearing shoes indoors)',
            'Use Noun + のまま for natural unmodified states'
        ],
        content: `### Leaving a State Unchanged: ～たまま\n\n$$\\text{Verb [た-form]} + \\text{まま、} \\text{[Action]}$$\n\n* **メガネをかけたまま**、寝てしまいました。 (*I fell asleep with my glasses still on.*)\n* **窓を開けたまま**、出かけました。 (*I went out leaving the window open.*)\n* **生のまま** 食べる (*eat it raw / as is*)`,
        examples: [
            { japanese: '靴を履いたまま部屋に入ってはいけません。', reading: 'くつをはいたままへやにはいってはいけません。', romaji: 'Kutsu o haita mama heya ni haitte wa ikemasen.', english: 'You must not enter the room with your shoes on.' },
            { japanese: '電気をつけたまま寝てしまった。', reading: 'でんきをつけたままねてしまった。', romaji: 'Denki o tsuketa mama nete shimatta.', english: 'I fell asleep with the light left on.' }
        ],
        dialogue: {
            title: 'Leaving the House in a Rush',
            lines: [
                { speaker: 'Sister', japanese: 'エアコンをつけたまま出かけちゃった！', romaji: 'Eakon o tsuketa mama dekakechatta!', english: 'I went out leaving the air conditioner turned on!' },
                { speaker: 'Brother', japanese: 'えっ、電気代がもったいないよ。戻って消そう。', romaji: 'E-, denkidai ga mottainai yo. Modotte kesou.', english: 'What, that\'s a waste of electricity. Let\'s go back and turn it off.' }
            ]
        },
        readingPassage: {
            title: 'Japanese Genkan Etiquette',
            japanese: '日本の家では、玄関で靴を脱ぎます。靴を履いたまま畳の部屋に上がってはいけません。スリッパのまま入るのもマナー違反です。',
            questions: [
                {
                    question: '畳の部屋に入るときはどうするべきですか。',
                    options: ['靴やスリッパを脱ぐ (Take off shoes and slippers)', '靴を履いたまま入る (Enter with shoes on)', 'スリッパを履く (Wear slippers)', '走って入る (Run inside)'],
                    correctAnswer: '靴やスリッパを脱ぐ (Take off shoes and slippers)',
                    explanation: 'The guide says entering tatami rooms with shoes or slippers is a violation of etiquette.'
                }
            ]
        },
        listeningExercise: {
            audioText: 'テレビをつけたまま寝るのはよくないですよ。',
            transcript: 'テレビをつけたまま寝るのはよくないですよ。',
            question: 'What habit is described as not good?',
            options: ['Sleeping with the TV left on', 'Watching TV in the morning', 'Turning off the TV early', 'Buying a new TV'],
            correctAnswer: 'Sleeping with the TV left on',
            explanation: 'The audio cautions against "テレビをつけたまま寝る".'
        },
        culturalNote: 'The Japanese concept of もったいない (mottainai) reflects a sense of regret over wasting resources.',
        commonMistakes: ['Using て-form instead of た-form before まま (say 開けたまま, not "開けてまま").']
    },
    {
        id: 'LESSON_N4_10',
        level: 'N4',
        moduleNumber: 3,
        moduleTitle: 'Past Form Expansion & Sequences',
        title: 'Recent Actions (～たばかり)',
        japaneseTitle: '直近の完了「～たばかり」',
        category: 'aspect',
        description: 'Express that an event just occurred freshly from the speaker\'s subjective perspective with Verb [た-form] + ばかり.',
        learningObjectives: [
            'Form ～たばかり from the past verb form',
            'Contrast objective immediate past (～たところ) with subjective recent past (～たばかり)',
            'Modify nouns with ～たばかり (買ったばかりの車)'
        ],
        content: `### Just Done / Freshly Completed: ～たばかり\n\n$$\\text{Verb [た-form]} + \\text{ばかり (です / の Noun)}$$\n\n* **日本に来たばかり**です。 (*I just arrived in Japan recently.*)\n* これは**買ったばかりのカメラ**です。 (*This is a camera I just bought.*)\n* さっき**昼ご飯を食べたばかり**だから、お腹がいっぱいです。 (*Since I just ate lunch, I am full.*)`,
        examples: [
            { japanese: '先月大学を卒業したばかりです。', reading: 'せんげつだいがくをそつぎょうしたばかりです。', romaji: 'Sengetsu daigaku o sotsugyou shita bakari desu.', english: 'I just graduated from university last month.' },
            { japanese: 'このパンは焼き上がったばかりで温かいです。', reading: 'このパンはやきあがったばかりであたたかいです。', romaji: 'Kono pan wa yakiagatta bakari de atatakai desu.', english: 'This bread was freshly baked and is warm.' }
        ],
        dialogue: {
            title: 'New in Town',
            lines: [
                { speaker: 'Neighbor', japanese: 'この町並みにはもう慣れましたか。', romaji: 'Kono machinami ni wa mou naremashita ka.', english: 'Have you gotten used to this town yet?' },
                { speaker: 'Resident', japanese: '先週引っ越してきたばかりなので、まだ分からないことばかりです。', romaji: 'Senshuu hikkoshite kita bakari na node, mada wakaranai koto bakari desu.', english: 'Since I just moved here last week, there are still many things I don\'t know.' }
            ]
        },
        readingPassage: {
            title: 'Bakery Signboard',
            japanese: '【焼きたてベーカリー】オーブンから出たばかりのクロワッサンはいかがですか。外はサクサク、中はふわふわです。',
            questions: [
                {
                    question: 'クロワッサンはどんな状態ですか。',
                    options: ['オーブンから出たばかりで温かい (Freshly taken out of the oven and warm)', '冷たい (Cold)', '昨日作った (Made yesterday)', '固い (Hard)'],
                    correctAnswer: 'オーブンから出たばかりで温かい (Freshly taken out of the oven and warm)',
                    explanation: 'The sign highlights "オーブンから出たばかりのクロワッサン".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'お茶をどうぞ。ありがとうございます。でも、さっき飲んだばかりなんですよ。',
            transcript: 'お茶をどうぞ。ありがとうございます。でも、さっき飲んだばかりなんですよ。',
            question: 'Why does the speaker decline another drink?',
            options: ['Just drank tea a moment ago', 'Dislikes tea', 'Has to leave immediately', 'Is allergic'],
            correctAnswer: 'Just drank tea a moment ago',
            explanation: 'The speaker explains "さっき飲んだばかりなんですよ".'
        },
        culturalNote: 'In bakery and restaurant menus, 焼きたて (freshly baked) and 揚げたて (freshly fried) use the related suffix たて for hot food.',
        commonMistakes: ['Confusing ～たばかり with general quantity ばかり (e.g. 遊んでばかり = doing nothing but playing).']
    },
    {
        id: 'LESSON_N4_11',
        level: 'N4',
        moduleNumber: 3,
        moduleTitle: 'Past Form Expansion & Sequences',
        title: 'Precise Temporal Points (～ところだ)',
        japaneseTitle: '動作の局面「～ところだ」',
        category: 'aspect',
        description: 'Pinpoint the exact chronological stage of an event: just about to start (辞書形＋ところ), in the middle of (ている＋ところ), or just finished (た＋ところ).',
        learningObjectives: [
            'Express imminent action using Verb [Dictionary form] + ところだ',
            'Express ongoing action using Verb [ている] + ところだ',
            'Express exact moment of completion using Verb [た] + ところだ'
        ],
        content: `### The 3 Stages of ～ところだ\n\n1. **About to Begin (辞書形 + ところ)**:\n   * これからご飯を**食べるところです**。 (*I am just about to eat now.*)\n2. **In the Middle of Happening (ている + ところ)**:\n   * 今、資料を**調べているところです**。 (*I am right in the middle of looking up materials.*)\n3. **Just This Second Finished (た + ところ)**:\n   * たった今、駅に**着いたところです**。 (*I literally just arrived at the station this very second.*)`,
        examples: [
            { japanese: '今から出かけるところです。', reading: 'いまからでかけるところです。', romaji: 'Ima kara dekakeru tokoro desu.', english: 'I am just about to leave now.' },
            { japanese: 'ちょうど今、宿題が終わったところです。', reading: 'ちょうどいま、しゅくだいがおわったところです。', romaji: 'Choudo ima, shukudai ga owatta tokoro desu.', english: 'I have just finished my homework right now.' }
        ],
        dialogue: {
            title: 'Phone Call Timing',
            lines: [
                { speaker: 'Friend', japanese: '今、電話大丈夫？話せる？', romaji: 'Ima, denwa daijoubu? Hanaseru?', english: 'Is now okay on the phone? Can you talk?' },
                { speaker: 'Ken', japanese: 'ちょうど家に着いたところだから、大丈夫だよ！', romaji: 'Choudo ie ni tsuita tokoro da kara, daijoubu da yo!', english: 'I literally just arrived home this second, so it\'s totally fine!' }
            ]
        },
        readingPassage: {
            title: 'Train Departure Announcement',
            japanese: 'まもなく一番線に電車が到着いたします。黄色い点字ブロックの内側までお下がりください。電車は今、ホームに入ってきたところです。',
            questions: [
                {
                    question: '電車は現在どのような状況ですか。',
                    options: ['今ホームに入ってきたところ (Just entered the platform)', 'まだ遠くにいる (Still far away)', '発車したところ (Just departed)', '運休中 (Suspended)'],
                    correctAnswer: '今ホームに入ってきたところ (Just entered the platform)',
                    explanation: 'The announcement states "電車は今、ホームに入ってきたところです".'
                }
            ]
        },
        listeningExercise: {
            audioText: '今から会議が始まるところですので、お静かにお願いします。',
            transcript: '今から会議が始まるところですので、お静かにお願いします。',
            question: 'What is about to happen?',
            options: ['The meeting is just about to start', 'The meeting just ended', 'The meeting is postponed', 'Lunch is starting'],
            correctAnswer: 'The meeting is just about to start',
            explanation: 'The speaker states "今から会議が始まるところですので".'
        },
        culturalNote: 'In business phone calls, asking 「今、お時間よろしいでしょうか」 (*Is now a good time?*) checks whether the partner is in the middle of a task.',
        commonMistakes: ['Confusing ところ (place) with the grammatical aspect marker ところ (temporal stage).']
    },

    // --- MODULE 4: ADVANCED TE-FORM ASPECTS ---
    {
        id: 'LESSON_N4_12',
        level: 'N4',
        moduleNumber: 4,
        moduleTitle: 'Advanced Te-Form Aspects',
        title: 'Attempting & Trying (～てみる)',
        japaneseTitle: '試みの表現「～てみる」',
        category: 'aspect',
        description: 'Express trying an activity to discover the outcome with Verb [て-form] + みる (*try and see*).',
        learningObjectives: [
            'Form ～てみる across polite and casual conjugations',
            'Encourage others to try novel experiences with ～てみてください',
            'Describe personal experiments and first-time attempts'
        ],
        content: `### Trying Something Out: ～てみる\n\n$$\\text{Verb [て-form]} + \\text{みる}$$\n\n* **食べてみる** (*try eating to see how it tastes*)\n* **着てみる** (*try on clothes to see if they fit*)\n* **やってみる** (*give it a shot / try doing it*)\n\n> **Grammar Note**: Conjugates like a Group 2 (一段) verb (食べてみます, 食べてみました, 食べてみたい).`,
        examples: [
            { japanese: '日本の納豆を食べてみたいです。', reading: 'にほんのなっとうをたべてみたいです。', romaji: 'Nihon no nattou o tabete mitai desu.', english: 'I want to try eating Japanese natto.' },
            { japanese: 'この靴を履いてみてもいいですか。', reading: 'このくつをはいてみてもいいですか。', romaji: 'Kono kutsu o haite mite mo ii desu ka.', english: 'May I try on these shoes?' }
        ],
        dialogue: {
            title: 'At a Clothing Boutique',
            lines: [
                { speaker: 'Customer', japanese: 'すみません、このジャケットを試着してもいいですか。', romaji: 'Sumimasen, kono jaketto o shichaku shite mo ii desu ka.', english: 'Excuse me, may I try on this jacket?' },
                { speaker: 'Clerk', japanese: 'はい、どうぞ着てみてください。試着室はこちらです。', romaji: 'Hai, douzo kite mite kudasai. Shichakushitsu wa kochira desu.', english: 'Yes, please go ahead and try it on. The fitting room is here.' }
            ]
        },
        readingPassage: {
            title: 'Travel Wish List',
            japanese: '京都に行ったら、着物を着て街を歩いてみたいです。そして、伝統的な茶道を体験してみたいです。きっと素晴らしい思い出になります。',
            questions: [
                {
                    question: '筆者は京都で何を体験してみたいですか。',
                    options: ['茶道 (Tea ceremony)', 'スキー (Skiing)', 'サーフィン (Surfing)', 'カラオケ (Karaoke)'],
                    correctAnswer: '茶道 (Tea ceremony)',
                    explanation: 'The text states "伝統的な茶道を体験してみたいです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'この問題、難しそうだけど自分で解いてみるよ。頑張ってね！',
            transcript: 'この問題、難しそうだけど自分で解いてみるよ。頑張ってね！',
            question: 'What is the speaker going to attempt?',
            options: ['Solve the difficult problem himself', 'Ask the teacher', 'Skip the homework', 'Copy a friend\'s answer'],
            correctAnswer: 'Solve the difficult problem himself',
            explanation: 'The speaker states "自分で解いてみるよ".'
        },
        culturalNote: 'In Japanese retail stores, trying on shoes or garments is always requested with 「試着してもいいですか」 or 「履いてみてもいいですか」.',
        commonMistakes: ['Writing the auxiliary verb みる with the kanji 見る — auxiliary ～てみる is conventionally written in hiragana.']
    },
    {
        id: 'LESSON_N4_13',
        level: 'N4',
        moduleNumber: 4,
        moduleTitle: 'Advanced Te-Form Aspects',
        title: 'Completion & Regret (～てしまう)',
        japaneseTitle: '完了と後悔「～てしまう」',
        category: 'aspect',
        description: 'Express total completion of an action or emotional regret/unintended accidents with Verb [て-form] + しまう (casual: ～ちゃう / ～じゃう).',
        learningObjectives: [
            'Conjugate ～てしまう across formal and informal registers',
            'Distinguish thorough completion from accidental regret',
            'Recognize casual contractions (食べてしまう $\\rightarrow$ 食べちゃう, 飲んでしまう $\\rightarrow$ 飲んじゃう)'
        ],
        content: `### The Dual Meanings of ～てしまう\n\n1. **Total Thorough Completion**:\n   * 本を全部**読んでしまいました**。 (*I finished reading the entire book.*)\n\n2. **Regret / Accidental Mishap ("Oh no!")**:\n   * 電車に傘を**忘れてしまいました**。 (*I accidentally forgot my umbrella on the train.*)\n   * 財布を**落としてしまいました**。 (*I dropped my wallet, alas.*)\n\n#### Casual Conversational Contractions:\n* ～てしまう $\\rightarrow$ **～ちゃう** (宿題忘れた $\\rightarrow$ 忘れ**ちゃった**)\n* ～でしまう $\\rightarrow$ **～じゃう** (ジュースこぼした $\\rightarrow$ こぼし**ちゃった** / 飲んじゃった)`,
        examples: [
            { japanese: '宿題を家に忘れてきてしまいました。', reading: 'しゅくだいをいえにわすれてきてしまいました。', romaji: 'Shukudai o ie ni wasurete kite shimaimashita.', english: 'I accidentally left my homework at home.' },
            { japanese: '美味しいケーキを全部食べちゃった！', reading: 'おいしいケーキをぜんぶたべちゃった！', romaji: 'Oishii keeki o zenbu tabechatta!', english: 'I ended up eating the entire delicious cake!' }
        ],
        dialogue: {
            title: 'Lost Item at the Station',
            lines: [
                { speaker: 'Passenger', japanese: 'すみません、電車の中にカバンを忘れてしまいました。', romaji: 'Sumimasen, densha no naka ni kaban o wasurete shimaimashita.', english: 'Excuse me, I accidentally left my bag inside the train.' },
                { speaker: 'StationStaff', japanese: '何時頃のどの電車ですか。お調べします。', romaji: 'Nanji goro no dono densha desu ka. Oshirabe shimasu.', english: 'Around what time and which train was it? I will check for you.' }
            ]
        },
        readingPassage: {
            title: 'Diary of a Clumsy Day',
            japanese: '今朝は大変だった。目覚ましをかけ忘れて寝坊してしまった。急いで家を出たら、途中で雨が降って服が濡れてしまった。',
            questions: [
                {
                    question: '筆者はどうして寝坊しましたか。',
                    options: ['目覚ましをかけ忘れたから (Forgot to set the alarm)', '夜更かししたから (Stayed up late)', '体調が悪かったから (Felt unwell)', '電車が遅れたから (Train delayed)'],
                    correctAnswer: '目覚ましをかけ忘れたから (Forgot to set the alarm)',
                    explanation: 'The text states "目覚ましをかけ忘れて寝坊してしまった".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'ごめん！約束の時間に遅れちゃった。大丈夫だよ、気にしないで。',
            transcript: 'ごめん！約束の時間に遅れちゃった。大丈夫だよ、気にしないで。',
            question: 'What happened to the first speaker?',
            options: ['Arrived late to the appointment', 'Forgot the ticket', 'Went to the wrong place', 'Lost their phone'],
            correctAnswer: 'Arrived late to the appointment',
            explanation: 'The speaker confesses "約束の時間に遅れちゃった".'
        },
        culturalNote: 'Lost and found offices (遺失物取扱所) in Japan return over 80% of lost phones and wallets annually!',
        commonMistakes: ['Using ～てしまう for intentional, happy actions unless emphasizing completion.']
    },
    {
        id: 'LESSON_N4_14',
        level: 'N4',
        moduleNumber: 4,
        moduleTitle: 'Advanced Te-Form Aspects',
        title: 'Preparatory Actions (～ておく)',
        japaneseTitle: '事前の準備「～ておく」',
        category: 'aspect',
        description: 'Express doing an action in advance in preparation for a future event with Verb [て-form] + おく (casual: ～とく).',
        learningObjectives: [
            'Form ～ておく across formal and casual tenses',
            'Express proactive preparation for trips, meetings, and parties',
            'Recognize casual contractions (買っておく $\\rightarrow$ 買っとく)'
        ],
        content: `### Action in Advance: ～ておく\n\n$$\\text{Verb [て-form]} + \\text{おく}$$\n\n1. **Preparation for a Future Purpose**:\n   * 旅行の前にホテルを**予約しておきます**。 (*I will reserve a hotel in advance before the trip.*)\n   * パーティーの前に飲み物を**買っておきました**。 (*I bought drinks in advance before the party.*)\n\n2. **Casual Contraction**:\n   * ～ておく $\\rightarrow$ **～とく** (予約し**とく**ね = *I\'ll book it in advance!*)`,
        examples: [
            { japanese: '授業の前に教科書を読んでおいてください。', reading: 'じゅぎょうのまえにきょうかしょをよんでおいてください。', romaji: 'Jugyou no mae ni kyoukasho o yonde oite kudasai.', english: 'Please read the textbook in advance before class.' },
            { japanese: '忘れないようにメモしておきます。', reading: 'わすれないようにメモしておきます。', romaji: 'Wasurenai you ni memo shite okimasu.', english: 'I will take notes in advance so I don\'t forget.' }
        ],
        dialogue: {
            title: 'Preparing for the Presentation',
            lines: [
                { speaker: 'Leader', japanese: '明日の会議の資料、もう準備した？', romaji: 'Ashita no kaigi no shiryou, mou junbi shita?', english: 'Did you already prepare the materials for tomorrow\'s meeting?' },
                { speaker: 'Member', japanese: 'はい！参加者全員分コピーしておきました。', romaji: 'Hai! Sankasha zen\'in bun kopii shite okimashita.', english: 'Yes! I printed copies for all attendees in advance.' }
            ]
        },
        readingPassage: {
            title: 'Typhoon Preparedness Notice',
            japanese: '【台風の接近に備えて】懐中電灯と非常用の食料を準備しておいてください。ベランダの植木鉢は部屋の中に入れておきましょう。',
            questions: [
                {
                    question: 'ベランダの植木鉢はどうしておくべきですか。',
                    options: ['部屋の中に入れておく (Bring inside the room in advance)', '外に出しておく (Leave outside)', '捨てる (Discard)', '水をやる (Water them)'],
                    correctAnswer: '部屋の中に入れておく (Bring inside the room in advance)',
                    explanation: 'The advisory states "部屋の中に入れておきましょう".'
                }
            ]
        },
        listeningExercise: {
            audioText: '人気のあるレストランだから、席を予約しておいたほうがいいよ。',
            transcript: '人気のあるレストランだから、席を予約しておいたほうがいいよ。',
            question: 'What is recommended regarding the restaurant?',
            options: ['Reserve seats in advance', 'Go without a reservation', 'Order takeout', 'Eat at home'],
            correctAnswer: 'Reserve seats in advance',
            explanation: 'The speaker advises "席を予約しておいたほうがいいよ".'
        },
        culturalNote: 'Japan has a deep culture of 根回し (nemawashi) — laying groundwork in advance before major business decisions.',
        commonMistakes: ['Confusing ～ておく (do in advance) with ～てある (state left in place).']
    },
    {
        id: 'LESSON_N4_15',
        level: 'N4',
        moduleNumber: 4,
        moduleTitle: 'Advanced Te-Form Aspects',
        title: 'Intentional Resultant States (～てある)',
        japaneseTitle: '意図的な結果の状態「～てある」',
        category: 'aspect',
        description: 'Describe states resulting from someone\'s intentional, purposeful prior action with Transitive Verb [て-form] + ある (takes particle が).',
        learningObjectives: [
            'Construct [Noun] が + Transitive Verb [て-form] + あります sentences',
            'Contrast intentional states (～てある) with natural automatic states (～ている)',
            'Describe room setups, calendars, and pre-arranged environments'
        ],
        content: `### Intentional Resultant States: ～てある\n\n$$\\text{[Noun]} \\text{ が } \\text{Transitive Verb [て-form]} + \\text{あります}$$\n\n* **壁にカレンダーが掛けてあります**。 (*A calendar has been hung on the wall [by someone for a purpose].*)\n* **机の上にメモが置いてあります**。 (*A memo has been placed on the desk.*)\n\n#### The Contrast: ～ている vs ～てある\n* ドアが**開いています** (Intransitive: *The door is open / state*).\n* ドアが**開けてあります** (Transitive: *The door has been intentionally left open [e.g. for ventilation]*).`,
        examples: [
            { japanese: '窓が開けてあります。（換気のため）', reading: 'まどがあけてあります。', romaji: 'Mado ga akete arimasu.', english: 'The window has been kept open (for ventilation).' },
            { japanese: 'ホテルの予約はもうしてあります。', reading: 'ホテルのよやくはもうしてあります。', romaji: 'Hoteru no yoyaku wa mou shite arimasu.', english: 'The hotel reservation has already been made.' }
        ],
        dialogue: {
            title: 'Checking the Meeting Room',
            lines: [
                { speaker: 'Manager', japanese: 'プロジェクターの電源は入っていますか。', romaji: 'Purojekutaa no dengen wa haitte imasu ka.', english: 'Is the projector power turned on?' },
                { speaker: 'Assistant', japanese: 'はい、もう準備してありますので、すぐ使えます。', romaji: 'Hai, mou junbi shite arimasu node, sugu tsukaemasu.', english: 'Yes, it has already been prepared, so it is ready to use immediately.' }
            ]
        },
        readingPassage: {
            title: 'Classroom Setup',
            japanese: '教室の黒板には今日の予定が書いてあります。机の上には教科書とプリントが並べてあります。生徒を迎える準備が整っています。',
            questions: [
                {
                    question: '黒板には何が書いてありますか。',
                    options: ['今日の予定 (Today\'s schedule)', '宿題の答え (Homework answers)', '漢字のテスト (Kanji test)', '何も書いていない (Nothing written)'],
                    correctAnswer: '今日の予定 (Today\'s schedule)',
                    explanation: 'The text states "黒板には今日の予定が書いてあります".'
                }
            ]
        },
        listeningExercise: {
            audioText: '冷蔵庫の中にビールが冷やしてありますよ。お風呂のあとにどうぞ。',
            transcript: '冷蔵庫の中にビールが冷やしてありますよ。お風呂のあとにどうぞ。',
            question: 'What has been prepared in the refrigerator?',
            options: ['Beer has been chilled', 'Food has been cooked', 'Juice has been made', 'Ice cream has been stored'],
            correctAnswer: 'Beer has been chilled',
            explanation: 'The speaker states "ビールが冷やしてありますよ".'
        },
        culturalNote: 'In traditional Japanese ryokan (inns), futons are laid out in advance (敷いてある) while guests are having dinner.',
        commonMistakes: ['Using intransitive verbs with ～てある (always use transitive verbs like 開ける, 並べる, 書く).']
    },

    // --- MODULE 5: GIVING AND RECEIVING ---
    {
        id: 'LESSON_N4_16',
        level: 'N4',
        moduleNumber: 5,
        moduleTitle: 'Giving & Receiving',
        title: 'Giving & Receiving Objects (あげる・くれる・もらう)',
        japaneseTitle: '物の授受動詞（あげる・くれる・もらう）',
        category: 'giving_receiving',
        description: 'Navigate Japanese social relationships and perspective circles with the giving/receiving verbs: あげる, くれる, and もらう.',
        learningObjectives: [
            'Use あげる when giving outward from speaker to others',
            'Use くれる when someone gives inward to the speaker / speaker\'s in-group',
            'Use もらう when receiving from someone (marked with に/から)'
        ],
        content: `### The 3 Giving & Receiving Verbs\n\n1. **あげる (Ageru - Give Outward)**:\n   * わたし は 友達 に プレゼント を **あげました**。 (*I gave a present to my friend.*)\n\n2. **くれる (Kureru - Give Inward to Me)**:\n   * 友達 が わたし に お土産 を **くれました**。 (*My friend gave me a souvenir.*)\n\n3. **もらう (Morau - Receive)**:\n   * わたし は 先生 に/から 本 を **もらいました**。 (*I received a book from the teacher.*)`,
        examples: [
            { japanese: '誕生日に母が時計をくれました。', reading: 'たんじょうびにははがとけいをくれました。', romaji: 'Tanjoubi ni haha ga tokei o kuremashita.', english: 'My mother gave me a watch on my birthday.' },
            { japanese: '友達の結婚祝いに花をあげました。', reading: 'ともだちのけっこんいわいにはなをあげました。', romaji: 'Tomodachi no kekkon iwai ni hana o agemashita.', english: 'I gave flowers for my friend\'s wedding celebration.' }
        ],
        dialogue: {
            title: 'Admiring a Souvenir',
            lines: [
                { speaker: 'Emi', japanese: 'そのキーホルダー、可愛いね！', romaji: 'Sono kihorudaa, kawaii ne!', english: 'That keychain is cute!' },
                { speaker: 'Mei', japanese: 'ありがとう！北海道に行った友達がくれたの。', romaji: 'Arigatou! Hokkaidou ni itta tomodachi ga kureta no.', english: 'Thank you! A friend who went to Hokkaido gave it to me.' }
            ]
        },
        readingPassage: {
            title: 'Birthday Gifts',
            japanese: '昨日は私の二十歳の誕生日でした。父は万年筆をくれました。母はおいしい手作りケーキを作ってくれました。友達からもたくさんのメッセージをもらいました。幸せな一日でした。',
            questions: [
                {
                    question: 'お父さんは何をくれましたか。',
                    options: ['万年筆 (Fountain pen)', '時計 (Watch)', 'ケーキ (Cake)', '本 (Book)'],
                    correctAnswer: '万年筆 (Fountain pen)',
                    explanation: 'The passage states "父は万年筆をくれました".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'このお菓子、誰にもらったの？山田さんが旅行のお土産にくれたんだ。',
            transcript: 'このお菓子、誰にもらったの？山田さんが旅行のお土産にくれたんだ。',
            question: 'Who gave the sweets to the speaker?',
            options: ['Mr. Yamada', 'The speaker\'s mother', 'Teacher Sato', 'A colleague'],
            correctAnswer: 'Mr. Yamada',
            explanation: 'The speaker answers "山田さんが旅行のお土産にくれたんだ".'
        },
        culturalNote: 'Omiyage (お土産 - regional souvenirs) are customarily gifted to colleagues and friends after returning from any trip.',
        commonMistakes: ['Using あげる when someone gives something to YOU (never say "山田さんは私にあげました"; say くれました).']
    },
    {
        id: 'LESSON_N4_17',
        level: 'N4',
        moduleNumber: 5,
        moduleTitle: 'Giving & Receiving',
        title: 'Giving & Receiving Favors (～てあげる・～てくれる・～てもらう)',
        japaneseTitle: '行為の授受（～てあげる・～てくれる・～てもらう）',
        category: 'giving_receiving',
        description: 'Express gratitude and social goodwill through benefactive actions with ～てあげる, ～てくれる, and ～てもらう.',
        learningObjectives: [
            'Express doing helpful favors for others with ～てあげる',
            'Express gratitude for favors received with ～てくれる',
            'Request and acknowledge assistance with ～てもらう'
        ],
        content: `### Benefactive Actions (Doing Favors)\n\nAttach **て-form** to the giving/receiving verbs:\n\n1. **～てあげる (Do a favor for someone)**:\n   * 友達に日本語を**教えてあげました**。 (*I taught Japanese to my friend as a favor.*)\n\n2. **～てくれる (Someone kindly does a favor for me)**:\n   * 田中さんが駅まで**車で送ってくれました**。 (*Mr. Tanaka kindly drove me to the station.*)\n\n3. **～てもらう (Have someone do a favor / Receive help)**:\n   * 先生に作文を**直してもらいました**。 (*I had the teacher correct my essay.*)`,
        examples: [
            { japanese: '重い荷物を持ってあげましょうか。', reading: 'おもいにもつをもったあげましょうか。', romaji: 'Omoi nimotsu o motte agemashou ka.', english: 'Shall I carry your heavy luggage for you?' },
            { japanese: '友達が引っ越しを手伝ってくれました。', reading: 'ともだちがひっこしをてつだってくれました。', romaji: 'Tomodachi ga hikkoshi o tetsudatte kuremashita.', english: 'My friend kindly helped me with moving.' }
        ],
        dialogue: {
            title: 'Thanking a Colleague',
            lines: [
                { speaker: 'Ken', japanese: '昨日は駅まで送ってくれてありがとう！', romaji: 'Kinou wa eki made okutte kurete arigatou!', english: 'Thank you for kindly giving me a ride to the station yesterday!' },
                { speaker: 'Sora', japanese: 'どういたしまして。またいつでも言ってね。', romaji: 'Dou itashimashite. Mata itsudemo itte ne.', english: 'You\'re welcome. Feel free to ask anytime.' }
            ]
        },
        readingPassage: {
            title: 'Japanese Study Diary',
            japanese: '日本語のスピーチコンテストに出場しました。スミス先生が原稿を何度も直してくださいました。本番では緊張しましたが、上手に話すことができました。先生に感謝しています。',
            questions: [
                {
                    question: 'スミス先生は何をしてくれましたか。',
                    options: ['原稿を直してくれた (Corrected the draft)', 'スピーチをした (Gave the speech)', '賞をくれた (Gave an award)', '写真を撮った (Took photos)'],
                    correctAnswer: '原稿を直してくれた (Corrected the draft)',
                    explanation: 'The text states "スミス先生が原稿を何度も直してくださいました".'
                }
            ]
        },
        listeningExercise: {
            audioText: '道が分からなくて困っていたら、親切な人が駅まで案内してくれました。',
            transcript: '道が分からなくて困っていたら、親切な人が駅まで案内してくれました。',
            question: 'What kind deed was done for the speaker?',
            options: ['A kind person guided them to the station', 'Someone bought them a ticket', 'Someone called a taxi', 'Someone gave them a map'],
            correctAnswer: 'A kind person guided them to the station',
            explanation: 'The audio explains "親切な人が駅まで案内してくれました".'
        },
        culturalNote: 'To superiors and elders, humble and respectful variants are used: ～て差し上げる, ～てくださる, ～ていただく.',
        commonMistakes: ['Saying ～てあげる directly to a superior — it sounds condescending. Use ～ましょうか instead.']
    },

    // --- MODULE 6: OPINIONS, QUOTATIONS & PREDICTIONS ---
    {
        id: 'LESSON_N4_18',
        level: 'N4',
        moduleNumber: 6,
        moduleTitle: 'Opinions, Quotations & Modality',
        title: 'Expressing Thoughts & Opinions (～と思う)',
        japaneseTitle: '意見と考え「～と思う」',
        category: 'opinions',
        description: 'Share personal perspectives, thoughts, and conjectures politely with Plain Form Clause + と思う / と思います.',
        learningObjectives: [
            'Embed plain form clauses before と思います',
            'Express affirmative and negative opinions (～ないと思います)',
            'Share polite perspectives in discussion and debate'
        ],
        content: `### Sharing Thoughts: ～と思う\n\n$$\\text{[Plain Form Clause]} + \\text{と思います}$$\n\n* **Verbs**: 明日は雨が**降ると思います**。 (*I think it will rain tomorrow.*)\n* **い-Adj**: 日本の物価は**高いと思います**。 (*I think prices in Japan are high.*)\n* **な-Adj**: この町は**便利だと思います**。 (*I think this town is convenient.*)\n* **Noun**: 田中さんは**日本人だと思います**。 (*I think Mr. Tanaka is Japanese.*)`,
        examples: [
            { japanese: 'この映画はとても面白いと思います。', reading: 'このえいがはとてもおもしろいとおもいます。', romaji: 'Kono eiga wa totemo omoshiroi to omoimasu.', english: 'I think this movie is very interesting.' },
            { japanese: '彼は試験に合格すると思います。', reading: 'かれはしけんにごうかくするとおもいます。', romaji: 'Kare wa shiken ni goukaku suru to omoimasu.', english: 'I think he will pass the exam.' }
        ],
        dialogue: {
            title: 'Exchanging Opinions on AI',
            lines: [
                { speaker: 'Ren', japanese: 'これからの社会でAIはどうなると思う？', romaji: 'Kore kara no shakai de AI wa dou naru to omou?', english: 'What do you think will happen with AI in future society?' },
                { speaker: 'Hana', japanese: 'もっと便利になると思うけれど、人間の仕事も変わると思うな。', romaji: 'Motto benri ni naru to omou keredo, ningen no shigoto mo kawaru to omou na.', english: 'I think it will become more convenient, but I also think human jobs will change.' }
            ]
        },
        readingPassage: {
            title: 'Public Transit Editorial',
            japanese: '日本の鉄道システムは世界で最も正確だと思います。時間に遅れないので、とても信頼できます。外国人観光客にも使いやすいと思います。',
            questions: [
                {
                    question: '筆者は日本の鉄道についてどう思っていますか。',
                    options: ['世界で最も正確で信頼できる (Most punctual and reliable in the world)', '料金が高すぎる (Prices too high)', '使いにくい (Hard to use)', '遅れが多い (Often delayed)'],
                    correctAnswer: '世界で最も正確で信頼できる (Most punctual and reliable in the world)',
                    explanation: 'The editorial states "世界で最も正確だと思います... とても信頼できます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '明日のサッカーの試合、どちらのチームが勝つと思いますか。日本チームが勝つと思いますよ。',
            transcript: '明日のサッカーの試合、どちらのチームが勝つと思いますか。日本チームが勝つと思いますよ。',
            question: 'Which team does the speaker think will win?',
            options: ['The Japanese team', 'The opposing team', 'A draw', 'No opinion'],
            correctAnswer: 'The Japanese team',
            explanation: 'The speaker asserts "日本チームが勝つと思いますよ".'
        },
        culturalNote: 'In Japanese discussions, buffering statements with と思います prevents sounding dogmatic or aggressive.',
        commonMistakes: ['Forgetting だ after nouns and な-adjectives before と思う (say 好きだと思います, not "好きと思います").']
    },
    {
        id: 'LESSON_N4_19',
        level: 'N4',
        moduleNumber: 6,
        moduleTitle: 'Opinions, Quotations & Modality',
        title: 'Direct & Indirect Quotations (～と言う)',
        japaneseTitle: '引用の表現「～と言う・言っていました」',
        category: 'quotations',
        description: 'Report what third parties said using direct quotes (「...」と言う) and indirect reported speech (Plain form + と言っていた).',
        learningObjectives: [
            'Quote exact spoken lines using Japanese brackets 「 」 + と言いました',
            'Convert sentences into indirect reported speech with plain forms',
            'Pass messages and announcements between colleagues'
        ],
        content: `### Direct vs Indirect Quotations\n\n1. **Direct Quotation (Verbatim)**:\n   * 田中さんは**「明日休みます」と言いました**。\n   * (*Mr. Tanaka said, "I will take off tomorrow."*)\n\n2. **Indirect Quotation (Reported Speech)**:\n   * Change the inside clause into **Plain Form**:\n   * 田中さんは**明日休むと言っていました**。\n   * (*Mr. Tanaka was saying that he will take off tomorrow.*)`,
        examples: [
            { japanese: '先生は来週テストがあると言っていました。', reading: 'せんせいはらいしゅうテストがあるといっていました。', romaji: 'Sensei wa raishuu tesuto ga aru to itte imashita.', english: 'The teacher said that there will be a test next week.' },
            { japanese: '母は「気をつけて行ってらっしゃい」と言いました。', reading: 'ははは「きをつけていってらっしゃい」といいました。', romaji: 'Haha wa "Ki o tsukete itterasshai" to iimashita.', english: 'My mother said, "Take care and have a safe trip."' }
        ],
        dialogue: {
            title: 'Passing on a Teacher\'s Message',
            lines: [
                { speaker: 'ClassmateA', japanese: '今日の授業について先生何か言ってた？', romaji: 'Kyou no jugyou ni tsuite sensei nanika itteta?', english: 'Did the teacher say anything about today\'s class?' },
                { speaker: 'ClassmateB', japanese: '三番教室に変更になると言っていたよ。', romaji: 'Sanban kyoushitsu ni henkou ni naru to itte ita yo.', english: 'He said it would be changed to classroom number 3.' }
            ]
        },
        readingPassage: {
            title: 'School Notice Board',
            japanese: '【お知らせ】校長先生は、来月の修学旅行は京都と奈良に行くとおっしゃいました。詳しい日程は来週配るプリントを見てくださいとのことです。',
            questions: [
                {
                    question: '修学旅行はどこへ行きますか。',
                    options: ['京都と奈良 (Kyoto and Nara)', '東京と横浜 (Tokyo and Yokohama)', '北海道 (Hokkaido)', '沖縄 (Okinawa)'],
                    correctAnswer: '京都と奈良 (Kyoto and Nara)',
                    explanation: 'The notice states "修学旅行は京都と奈良に行くとおっしゃいました".'
                }
            ]
        },
        listeningExercise: {
            audioText: '佐藤さんは何時頃来ると言っていましたか。午後三時頃に来ると言っていました。',
            transcript: '佐藤さんは何時頃来ると言っていましたか。午後三時頃に来ると言っていました。',
            question: 'Around what time did Ms. Sato say she would come?',
            options: ['Around 3:00 PM', 'Around 2:00 PM', 'At noon', 'Around 5:00 PM'],
            correctAnswer: 'Around 3:00 PM',
            explanation: 'The speaker quotes "午後三時頃に来ると言っていました".'
        },
        culturalNote: 'Japanese quotation marks are corner brackets called かぎ括弧 (「 」), replacing Western quotation marks.',
        commonMistakes: ['Leaving ます/です inside indirect quotes (say 行くと言いました, not "行きますと言いました").']
    },
    {
        id: 'LESSON_N4_20',
        level: 'N4',
        moduleNumber: 6,
        moduleTitle: 'Opinions, Quotations & Modality',
        title: 'Possibility & Uncertainty (～かもしれない)',
        japaneseTitle: '可能性と推測「～かもしれない」',
        category: 'modality',
        description: 'Express possibility and probabilistic uncertainty (around 50% likelihood) with Plain Form + かもしれない (*might / may*).',
        learningObjectives: [
            'Attach かもしれない to verbs, adjectives, and nouns without だ',
            'Express tentative predictions about weather, schedules, and health',
            'Understand the casual contraction ～かも'
        ],
        content: `### "Might / Perhaps": ～かもしれない\n\n$$\\text{[Plain Form]} + \\text{かもしれません (Polite) / かもしれない (Casual)}$$\n\n* **Verbs**: 午後から雨が**降るかもしれません**。 (*It might rain from the afternoon.*)\n* **い-Adj**: あの店のケーキは**高いかもしれません**。 (*Cakes at that shop might be expensive.*)\n* **な-Adj / Nouns (Drop だ)**: 彼は今**忙しい / 病気かもしれません**。 (*He might be busy / sick right now.*)\n\n#### Casual Slang:\n* 明日、行く**かも**！ (*I might go tomorrow!*)`,
        examples: [
            { japanese: '約束の時間に少し遅れるかもしれません。', reading: 'やくそくのじかんにすこしおくれるかもしれません。', romaji: 'Yakusoku no jikan ni sukoshi okureru kamoshiremasen.', english: 'I might be a little late for the appointment.' },
            { japanese: '道が混んでいるかもしれないから、早めに出よう。', reading: 'みちがこんでいるかもしれないから、はやめにでよう。', romaji: 'The roads might be crowded, so let\'s leave early.' }
        ],
        dialogue: {
            title: 'Checking the Dark Clouds',
            lines: [
                { speaker: 'Yuto', japanese: '空が急に暗くなってきたね。', romaji: 'Sora ga kyuu ni kuraku natte kita ne.', english: 'The sky suddenly became dark.' },
                { speaker: 'Mia', japanese: '夕方から雷が鳴るかもしれないよ。傘を持っていこう。', romaji: 'Yuugata kara kaminari ga naru kamoshirenai yo. Kasa o motte ikou.', english: 'There might be thunder starting in the evening. Let\'s take an umbrella.' }
            ]
        },
        readingPassage: {
            title: 'Weather Bulletin',
            japanese: '明日の関東地方は、寒気の影響で山沿いでは雪が降るかもしれません。平地でも風が強くなる可能性があります。防寒対策をしっかりしてください。',
            questions: [
                {
                    question: '山沿いでは何が降るかもしれませんか。',
                    options: ['雪 (Snow)', '大雨 (Heavy rain)', '雹 (Hail)', '何も降らない (Nothing)'],
                    correctAnswer: '雪 (Snow)',
                    explanation: 'The bulletin notes "山沿いでは雪が降るかもしれません".'
                }
            ]
        },
        listeningExercise: {
            audioText: '電車が遅れているから、九時の会議に間に合わないかもしれない。',
            transcript: '電車が遅れているから、九時の会議に間に合わないかもしれない。',
            question: 'What is the speaker concerned about?',
            options: ['Might not make it in time for the 9:00 meeting', 'Forgot conference materials', 'Boarded the wrong train', 'Meeting is cancelled'],
            correctAnswer: 'Might not make it in time for the 9:00 meeting',
            explanation: 'The speaker worries "九時の会議に間に合わないかもしれない".'
        },
        culturalNote: 'Japanese communication values hedging statements with かもしれません to avoid being overly categorical.',
        commonMistakes: ['Adding だ after nouns before かもしれない (say 休みかもしれない, not "休みだかもしれない").']
    },
    {
        id: 'LESSON_N4_21',
        level: 'N4',
        moduleNumber: 6,
        moduleTitle: 'Opinions, Quotations & Modality',
        title: 'Conjecture & Agreement (～でしょう・～だろう)',
        japaneseTitle: '推量と確認「～でしょう・～だろう」',
        category: 'modality',
        description: 'Make high-probability predictions with falling intonation (～でしょう) and seek confirmation with rising intonation (～でしょう？).',
        learningObjectives: [
            'Use ～でしょう (polite) and ～だろう (casual) for weather and general forecasts',
            'Distinguish conjectural falling intonation from confirmatory rising intonation',
            'Attach directly to plain forms (dropping だ for nouns and な-adjectives)'
        ],
        content: `### High Probability & Confirmation: ～でしょう\n\n1. **Conjecture / Forecast (Falling Intonation $\\searrow$)**:\n   * 明日はいい天気になる**でしょう**。 (*Tomorrow will probably be good weather.*)\n   * 北海道の冬はとても寒い**でしょう**。 (*Winter in Hokkaido is probably very cold.*)\n\n2. **Seeking Confirmation ("Right?" - Rising Intonation $\\nearrow$)**:\n   * あなたも一緒に行く**でしょう？** (*You are coming along too, right?*)\n\n3. **Casual Equivalent**: **～だろう (darou)**\n   * 明日は雨**だろう**。 (*It\'ll probably rain tomorrow.*)`,
        examples: [
            { japanese: '明日の最高気温は二十五度になるでしょう。', reading: 'あしたのさいこうきおんはにじゅうごどになるでしょう。', romaji: 'Ashita no saikou kion wa nijuugodo ni naru deshou.', english: 'Tomorrow\'s high temperature will probably reach 25 degrees.' },
            { japanese: 'この問題は誰でも分かるでしょう。', reading: 'このもんだいはだれでもわかるでしょう。', romaji: 'Kono mondai wa dare demo wakaru deshou.', english: 'Anyone would probably understand this problem.' }
        ],
        dialogue: {
            title: 'Evening Weather Forecast',
            lines: [
                { speaker: 'Announcer', japanese: '明日は全国的に晴れて、暖かい一日となるでしょう。', romaji: 'Ashita wa zenkokuteki ni harete, atatakai ichinichi to naru deshou.', english: 'Tomorrow will be clear across the nation and will likely be a warm day.' },
                { speaker: 'Viewer', japanese: '明日は洗濯日和になりそうだね！', romaji: 'Ashita wa sentakubiyori ni nari sou da ne!', english: 'Looks like tomorrow will be perfect weather for laundry!' }
            ]
        },
        readingPassage: {
            title: 'Economics Article Extract',
            japanese: '来年の観光客数は今年よりもさらに増加するでしょう。新しいホテルの建設が進んでおり、地域の経済も活性化すると期待されています。',
            questions: [
                {
                    question: '来年の観光客数はどうなると予想されていますか。',
                    options: ['さらに増加する (Will increase further)', '減少する (Will decrease)', '変わらない (Will stay same)', 'ゼロになる (Will become zero)'],
                    correctAnswer: 'さらに増加する (Will increase further)',
                    explanation: 'The extract states "さらに増加するでしょう".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'このケーキ、すごくおいしいでしょう？うん、甘すぎなくて最高！',
            transcript: 'このケーキ、すごくおいしいでしょう？うん、甘すぎなくて最高！',
            question: 'What is the second speaker\'s reaction to the cake?',
            options: ['It is great and not too sweet', 'It is too sweet', 'Dislikes it', 'Has not eaten it yet'],
            correctAnswer: 'It is great and not too sweet',
            explanation: 'The speaker affirms "甘すぎなくて最高！" (Not too sweet, the best!).'
        },
        culturalNote: 'Professional Japanese meteorologists on television almost exclusively end daily forecasts in ～でしょう.',
        commonMistakes: ['Putting だ before でしょう for nouns (say 雨でしょう, not "雨だでしょう").']
    },

    // --- MODULE 7: CONDITIONALS IN DEPTH ---
    {
        id: 'LESSON_N4_22',
        level: 'N4',
        moduleNumber: 7,
        moduleTitle: 'Conditionals in Depth',
        title: 'The Tara Conditional (～たら)',
        japaneseTitle: '条件表現「～たら」',
        category: 'conditionals',
        description: 'Master the most versatile conditional form in Japanese: express "if" and "when" sequences with ～たら.',
        learningObjectives: [
            'Form the ～たら conditional from the past た-form across all word classes',
            'Distinguish hypothetical conditions ("If X...") from temporal sequences ("When X...")',
            'Construct conversational invitations and suggestions following ～たら'
        ],
        content: `### The Power of ～たら (Ta-ra)\n\nBuilt by taking the **た-form** and adding **ら**:\n$$\\text{Verb [た-form]} + \\text{ら} \\quad (\\text{飲んだ } \\rightarrow \\text{ 飲んだら)}$$\n$$\\text{い-Adj [かった]} + \\text{ら} \\quad (\\text{安かった } \\rightarrow \\text{ 安かったら)}$$\n$$\\text{な-Adj / Noun [だった]} + \\text{ら} \\quad (\\text{暇だった } \\rightarrow \\text{ 暇だったら)}$$\n\n#### Two Primary Meanings:\n1. **Hypothetical ("If")**: お金が**あったら**、車を買います。 (*If I had money, I\'d buy a car.*)\n2. **Temporal Sequence ("When / Once X finishes")**: 駅に**着いたら**、電話してください。 (*When you arrive at the station, please call me.*)`,
        examples: [
            { japanese: '雨が降ったら、出かけません。', reading: 'あめがふったら、でかけません。', romaji: 'Ame ga futtara, dekakemasen.', english: 'If it rains, I will not go out.' },
            { japanese: '仕事が終わったら、飲みに行きましょう。', reading: 'しごとがおわったら、のみにいきましょう。', romaji: 'Shigoto ga owattara, nomi ni ikimashou.', english: 'When work finishes, let\'s go for a drink.' }
        ],
        dialogue: {
            title: 'Meeting at Shibuya Station',
            lines: [
                { speaker: 'Yuto', japanese: '明日の待ち合わせ、何時にする？', romaji: 'Ashita no machiawase, nanji ni suru?', english: 'What time shall we meet tomorrow?' },
                { speaker: 'Mia', japanese: '二時はどう？駅に着いたらメッセージを送るね。', romaji: 'Niji wa dou? Eki ni tsuitara messeeji o okuru ne.', english: 'How about 2:00? When I arrive at the station, I\'ll message you.' }
            ]
        },
        readingPassage: {
            title: 'Travel Planning Advice',
            japanese: '日本へ旅行に行くなら、春か秋がおすすめです。春に行ったら、きれいな桜を見ることができます。秋に行ったら、山で鮮やかな紅葉を楽しむことができます。',
            questions: [
                {
                    question: '春に日本へ行ったら何を見ることができますか。',
                    options: ['きれいな桜 (Beautiful cherry blossoms)', '雪景色 (Snowy scenery)', '紅葉 (Autumn leaves)', '花火 (Fireworks)'],
                    correctAnswer: 'きれいな桜 (Beautiful cherry blossoms)',
                    explanation: 'The text states "春に行ったら、きれいな桜を見ることができます".'
                }
            ]
        },
        listeningExercise: {
            audioText: '授業が終わったら、図書館で一緒に勉強しませんか。ええ、そうしましょう。',
            transcript: '授業が終わったら、図書館で一緒に勉強しませんか。ええ、そうしましょう。',
            question: 'What did the speakers agree to do after class?',
            options: ['Study together at the library', 'Go to a cafe', 'Go home', 'Watch a movie'],
            correctAnswer: 'Study together at the library',
            explanation: 'They agreed to study together at the library (図書館で一緒に勉強しませんか).'
        },
        culturalNote: 'To soften advice in Japanese, framing ideas with 「～たらどうですか」 (*How about doing X?*) is considered friendly and courteous.',
        commonMistakes: ['Using ～たら when Action 1 does not precede Action 2 in chronological time.']
    },
    {
        id: 'LESSON_N4_23',
        level: 'N4',
        moduleNumber: 7,
        moduleTitle: 'Conditionals in Depth',
        title: 'Contextual Suggestions with なら (Nara)',
        japaneseTitle: '話題の取り上げと助言「～なら」',
        category: 'conditionals',
        description: 'Provide targeted recommendations and advice based on context provided by your conversational partner using なら (*If it\'s the case that...*).',
        learningObjectives: [
            'Attach なら directly to nouns and plain verbs without だ',
            'Respond to partner inquiries with expert suggestions',
            'Contrast contextual なら with temporal ～たら'
        ],
        content: `### Contextual Conditional: なら (Nara)\n\n$$\\text{[Noun / Plain Verb]} + \\text{なら、} \\text{[Suggestion / Recommendation]}$$\n\n* **Nara** takes a topic introduced by the speaker or conversational partner and gives advice regarding it:\n* 日本料理**なら**、寿司が一番おすすめです。 (*If it\'s Japanese food you\'re talking about, sushi is most recommended.*)\n* 京都へ**行くなら**、秋がいいですよ。 (*If it\'s the case that you\'re going to Kyoto, autumn is great.*)`,
        examples: [
            { japanese: 'カメラを買うなら、秋葉原の店が安いですよ。', reading: 'カメラをかうなら、あきはばらのみせがやすいですよ。', romaji: 'Kamera o kau nara, Akihabara no mise ga yasui desu yo.', english: 'If you are buying a camera, shops in Akihabara are cheap.' },
            { japanese: '日本語の辞書なら、このアプリが便利です。', reading: 'にほんごのじしょなら、このアプリがべんりです。', romaji: 'Nihongo no jisho nara, kono apuri ga benri desu.', english: 'If it\'s Japanese dictionaries, this app is convenient.' }
        ],
        dialogue: {
            title: 'Recommending a Cafe',
            lines: [
                { speaker: 'Ken', japanese: '静かに勉強できるカフェを探しているんだ。', romaji: 'Shizuka ni benkyou dekiru kafe o sagashite iru n da.', english: 'I\'m looking for a cafe where I can study quietly.' },
                { speaker: 'Yuki', japanese: '静かなカフェなら、図書館の裏のカフェがおすすめだよ。', romaji: 'Shizuka na kafe nara, toshokan no ura no kafe ga osusume da yo.', english: 'If it\'s a quiet cafe you want, the cafe behind the library is recommended.' }
            ]
        },
        readingPassage: {
            title: 'Tourist City Recommendations',
            japanese: '東京の観光なら、浅草とスカイツリーが人気です。伝統的な文化を楽しみたいなら、神社やお寺を巡ると良いでしょう。',
            questions: [
                {
                    question: '伝統的な文化を楽しみたいなら、どこを巡ると良いですか。',
                    options: ['神社やお寺 (Shrines and temples)', 'テーマパーク (Theme parks)', 'デパート (Department stores)', '空港 (Airports)'],
                    correctAnswer: '神社やお寺 (Shrines and temples)',
                    explanation: 'The guide says "神社やお寺を巡ると良いでしょう".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'おいしいラーメンが食べたいなら、駅前の専門店に行ってみて！',
            transcript: 'おいしいラーメンが食べたいなら、駅前の専門店に行ってみて！',
            question: 'What is recommended if you want delicious ramen?',
            options: ['Go to the specialty shop in front of the station', 'Cook at home', 'Order online', 'Go to Shinjuku'],
            correctAnswer: 'Go to the specialty shop in front of the station',
            explanation: 'The speaker recommends "駅前の専門店に行ってみて".'
        },
        culturalNote: 'Akihabara (秋葉原) in Tokyo is world-famous as the electronic district (電気街) and anime subculture hub.',
        commonMistakes: ['Adding だ before なら (say 本なら, not "本だなら").']
    },
    {
        id: 'LESSON_N4_24',
        level: 'N4',
        moduleNumber: 7,
        moduleTitle: 'Conditionals in Depth',
        title: 'The Ba Conditional (～ば)',
        japaneseTitle: '仮定条件「～ば」',
        category: 'conditionals',
        description: 'Construct hypothetical conditions and general mathematical/logical truths using the ～ば verb and adjective inflection.',
        learningObjectives: [
            'Form the ～ば conditional for Group 1 (え-row + ば) and Group 2 (れば)',
            'Form adjective ～ば (い $\\rightarrow$ ければ)',
            'Construct natural conditional maxims and reciprocal relationships'
        ],
        content: `### The Hypothetical Conditional: ～ば\n\n1. **Group 1 Verbs**: Change final u-sound to **e-row** + **ば**\n   * 書く $\\rightarrow$ 書**けば** (kakeba)\n   * 飲む $\\rightarrow$ 飲**めば** (nomeba)\n   * 行く $\\rightarrow$ 行**けば** (ikeba)\n\n2. **Group 2 Verbs**: Drop る + **れば**\n   * 食べる $\\rightarrow$ 食**べれば** (tabereba)\n   * 見る $\\rightarrow$ 見**れば** (mireba)\n\n3. **い-Adjectives**: Drop い + **ければ**\n   * 安い $\\rightarrow$ 安**ければ** (yasukereba)\n   * いい $\\rightarrow$ **よければ** (yokereba)`,
        examples: [
            { japanese: '安ければ買います。', reading: 'やすければかいます。', romaji: 'Yasukereba kaimasu.', english: 'If it is cheap, I will buy it.' },
            { japanese: '毎日練習すれば、必ず上手になります。', reading: 'まいにちれんしゅうすれば、かならずじょうずになります。', romaji: 'Mainichi renshuu sureba, kanarazu jouzu ni narimasu.', english: 'If you practice every day, you will definitely become skilled.' }
        ],
        dialogue: {
            title: 'Study Encouragement',
            lines: [
                { speaker: 'Sensei', japanese: '分からない言葉があれば、いつでも質問してください。', romaji: 'Wakaranai kotoba ga areba, itsudemo shitsumon shite kudasai.', english: 'If there are words you don\'t understand, please ask questions anytime.' },
                { speaker: 'Student', japanese: 'はい！辞書で調べても分からなければ伺います。', romaji: 'Hai! Jisho de shirabete mo wakaranakereba ukagaimasu.', english: 'Yes! If I still don\'t understand after checking the dictionary, I will ask.' }
            ]
        },
        readingPassage: {
            title: 'Proverb & Study Wisdom',
            japanese: '「継続は力なり」。毎日少しずつでも勉強を続ければ、大きな力になります。諦めなければ、目標を達成できます。',
            questions: [
                {
                    question: '勉強を続ければどうなりますか。',
                    options: ['大きな力になる (Becomes great power/strength)', '疲れるだけ (Only gets tired)', '意味がない (Has no meaning)', '忘れてしまう (Forgets everything)'],
                    correctAnswer: '大きな力になる (Becomes great power/strength)',
                    explanation: 'The text states "勉強を続ければ、大きな力になります".'
                }
            ]
        },
        listeningExercise: {
            audioText: '天気がよければ、富士山がきれいに見えますよ。',
            transcript: '天気がよければ、富士山がきれいに見えますよ。',
            question: 'Under what condition can Mount Fuji be seen beautifully?',
            options: ['If the weather is good', 'If you climb in winter', 'From a plane only', 'At night'],
            correctAnswer: 'If the weather is good',
            explanation: 'The condition specified is "天気がよければ" (If the weather is good).'
        },
        culturalNote: 'Japanese proverb: 「七転び八起き」 (Nana korobi ya oki) — *Fall seven times, rise eight*. Perseverance is deeply revered.',
        commonMistakes: ['Following ～ば with direct personal commands or requests (unless expressing an adjective condition).']
    },
    {
        id: 'LESSON_N4_25',
        level: 'N4',
        moduleNumber: 7,
        moduleTitle: 'Conditionals in Depth',
        title: 'Natural & Inevitable Results (～と)',
        japaneseTitle: '確定条件・自然現象「～と」',
        category: 'conditionals',
        description: 'Describe automatic physical operations, road directions, and inevitable natural laws with Verb [Dictionary form] + と.',
        learningObjectives: [
            'Express automatic physical reactions and scientific consequences',
            'Give clear pedestrian and driving directions (まっすぐ行くと...)',
            'Identify when to use と versus たら and ば'
        ],
        content: `### Natural & Inevitable Consequence: ～と\n\n$$\\text{Verb [Dictionary Form]} + \\text{と、} \\text{[Automatic Consequence]}$$\n\n* **Inevitable Consequence**: Whenever A occurs, B automatically happens.\n* **Machine Operations**: このボタンを**押すと**、切符が出ます。 (*When you press this button, the ticket comes out.*)\n* **Road Directions**: この道を**まっすぐ行くと**、駅があります。 (*If you go straight along this road, the station is there.*)\n* **Natural Laws**: 春に**なると**、桜が咲きます。 (*When spring comes, cherry blossoms bloom.*)\n\n> **Strict Rule**: The clause after ～と **cannot** be a request, invitation, command, or speaker\'s personal volition (*never say "押すと、ください"*).`,
        examples: [
            { japanese: '右に曲がると、大きな公園が見えます。', reading: 'みぎにまがると、おおきなこうえんがみえます。', romaji: 'Migi ni magaru to, ookina kouen ga miemasu.', english: 'When you turn right, you will see a large park.' },
            { japanese: '冬になると、この湖は凍ります。', reading: 'ふゆになると、このみずうみはこおります。', romaji: 'Fuyu ni naru to, kono mizuumi wa koorimasu.', english: 'When winter comes, this lake freezes over.' }
        ],
        dialogue: {
            title: 'Giving Street Directions',
            lines: [
                { speaker: 'LostTourist', japanese: 'すみません、郵便局はどちらですか。', romaji: 'Sumimasen, yuubinkyoku wa dochira desu ka.', english: 'Excuse me, which way is the post office?' },
                { speaker: 'Resident', japanese: 'あの信号を左に曲がると、すぐ右側にありますよ。', romaji: 'Ano shingou o hidari ni magaru to, sugu migigawa ni arimasu yo.', english: 'When you turn left at that traffic light, it is right on the right-hand side.' }
            ]
        },
        readingPassage: {
            title: 'Vending Machine Instructions',
            japanese: '自動販売機の使い方：お金を投入口に入れます。飲みたい商品のボタンを押すと、下から商品が出てきます。お釣りを忘れずに取ってください。',
            questions: [
                {
                    question: 'ボタンを押すと何が起きますか。',
                    options: ['下から商品が出てくる (Product comes out from bottom)', 'お金が戻る (Money returns)', '機械が止まる (Machine stops)', 'ベルが鳴る (Bell rings)'],
                    correctAnswer: '下から商品が出てくる (Product comes out from bottom)',
                    explanation: 'The instructions state "ボタンを押すと、下から商品が出てきます".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'この道をまっすぐ行くと、銀行が見えてきますよ。',
            transcript: 'この道をまっすぐ行くと、銀行が見えてきますよ。',
            question: 'What will appear if you go straight down this road?',
            options: ['A bank', 'A hospital', 'A station', 'A police box'],
            correctAnswer: 'A bank',
            explanation: 'The speaker states "銀行が見えてきますよ".'
        },
        culturalNote: 'Japan has over 4 million vending machines (自動販売機), offering hot canned coffee in winter and ice-cold green tea in summer.',
        commonMistakes: ['Putting a request like ください after と (use ～たら instead for requests).']
    },

    // --- MODULE 8: REASONS, CAUSES AND CONTRAST ---
    {
        id: 'LESSON_N4_26',
        level: 'N4',
        moduleNumber: 8,
        moduleTitle: 'Reasons, Causes & Contrast',
        title: 'Objective Reasons & Polite Cause (～ので)',
        japaneseTitle: '客観的な理由・丁寧な原因「～ので」',
        category: 'reasons',
        description: 'State objective, polite reasons and formal justifications using Plain Form + ので (takes な for nouns and な-adjectives).',
        learningObjectives: [
            'Attach ので correctly to verbs, adjectives, and nouns (雨なので)',
            'Contrast polite, objective ので with subjective, emotional から',
            'Apologize and make polite requests in business contexts'
        ],
        content: `### Objective & Polite Reason: ～ので\n\n$$\\text{[Plain Form]} + \\text{ので、} \\text{[Main Clause]}$$\n\n* **Nouns / な-Adjectives**: Attach **な** before ので (病気**なので** = *since I am sick*, 暇**なので** = *since I am free*).\n* **Polite Business Tone**: Unlike から (which sounds subjective and personal), ので states facts gently and objectively:\n* 電車が遅れました**ので**、遅刻しました。 (*Because the train was delayed, I was late.*)`,
        examples: [
            { japanese: '気分が悪いので、早退してもいいですか。', reading: 'きぶんがわるいので、そうたいしてもいいですか。', romaji: 'Kibun ga warui node, soutai shite mo ii desu ka.', english: 'Since I am feeling unwell, may I leave early?' },
            { japanese: '今日は日曜日なので、道路が混んでいます。', reading: 'きょうはにちようびなので、どうろがこんでいます。', romaji: 'Because today is Sunday, the roads are crowded.' }
        ],
        dialogue: {
            title: 'Calling In Sick to Work',
            lines: [
                { speaker: 'Employee', japanese: '熱があるので、本日の仕事を休ませていただきたいのですが。', romaji: 'Netsu ga aru node, honjitsu no shigoto o yasumasete itadakitai no desu ga.', english: 'Since I have a fever, I would like to request permission to take off work today.' },
                { speaker: 'Manager', japanese: '分かりました。無理をしないでゆっくり休んでください。', romaji: 'Wakarimashita. Muri o shinaide yukkuri yasunde kudasai.', english: 'Understood. Please rest well and don\'t push yourself.' }
            ]
        },
        readingPassage: {
            title: 'Train Suspension Notice',
            japanese: '【運転見合わせ】強風の影響により、現在全線で運転を見合わせております。ご迷惑をおかけして大変申し訳ありません。復旧まで時間がかかりますので、振替輸送をご利用ください。',
            questions: [
                {
                    question: '電車が止まっている理由は何ですか。',
                    options: ['強風の影響 (Effect of strong winds)', '大雪 (Heavy snow)', '事故 (Accident)', '工事 (Construction)'],
                    correctAnswer: '強風の影響 (Effect of strong winds)',
                    explanation: 'The notice states "強風の影響により".'
                }
            ]
        },
        listeningExercise: {
            audioText: '雨が降ってきましたので、洗濯物を取り込みましょう。',
            transcript: '雨が降ってきましたので、洗濯物を取り込みましょう。',
            question: 'Why should they bring in the laundry?',
            options: ['Because it has started raining', 'Because it is night', 'Because it is dry', 'Because of wind'],
            correctAnswer: 'Because it has started raining',
            explanation: 'The reason given is "雨が降ってきましたので".'
        },
        culturalNote: 'In Japanese business correspondence and formal emails, reasons are almost universally framed with ので rather than から.',
        commonMistakes: ['Saying "雨だので" — for nouns and な-adjectives, it is always なので (雨なので).']
    },
    {
        id: 'LESSON_N4_27',
        level: 'N4',
        moduleNumber: 8,
        moduleTitle: 'Reasons, Causes & Contrast',
        title: 'Unexpected Contrast & Grievance (～のに)',
        japaneseTitle: '逆接と不満の表現「～のに」',
        category: 'contrast',
        description: 'Express surprise, unexpected outcomes, or emotional frustration (*even though / despite*) with Plain Form + のに.',
        learningObjectives: [
            'Attach のに to plain forms (using な for nouns and な-adjectives)',
            'Contrast simple factual but (が / けれども) with emotional contrast (のに)',
            'Express personal frustration over unexpected discrepancies'
        ],
        content: `### "Even Though / Despite": ～のに\n\n$$\\text{[Plain Form (nouns & な-adj + な)]} + \\text{のに、} \\text{[Unexpected Outcome]}$$\n\n* **たくさん勉強したのに**、試験に落ちてしまいました。 (*Even though I studied a lot, I ended up failing the exam.*)\n* **日曜日なのに**、会社で働かなければなりません。 (*Even though it is Sunday, I have to work at the company.*)\n\n> **Grammar Nuance**: のに always carries an undertone of speaker surprise, disappointment, or emotional indignation at the contrast.`,
        examples: [
            { japanese: '薬を飲んだのに、熱が下がりません。', reading: 'くすりをのんだのに、ねつがさがりません。', romaji: 'Kusuri o nonda noni, netsu ga sagarimasen.', english: 'Even though I took medicine, my fever isn\'t going down.' },
            { japanese: '約束したのに、彼は来ませんでした。', reading: 'やくそくしたのに、かれはきませんでした。', romaji: 'Yakusoku shita noni, kare wa kimasendeshita.', english: 'Even though we made a promise, he didn\'t come.' }
        ],
        dialogue: {
            title: 'Weather Disappointment',
            lines: [
                { speaker: 'Kaito', japanese: '天気予報では晴れると言っていたのに、雨が降ってきたね。', romaji: 'Tenki yohou dewa hareru to itte ita noni, ame ga futte kita ne.', english: 'Even though the weather forecast said it would be sunny, it started raining.' },
                { speaker: 'Ren', japanese: '本当だね、せっかく公園に来たのに残念だね。', romaji: 'Hontou da ne, sekkaku kouen ni kita noni zannen da ne.', english: 'Truly. Even though we came all the way to the park, what a pity.' }
            ]
        },
        readingPassage: {
            title: 'Diary of Frustration',
            japanese: '今月は毎日一時間ジョギングをしたのに、全然体重が減りませんでした。食事も気をつけていたのに不思議です。来月は筋トレも始めてみます。',
            questions: [
                {
                    question: '筆者は何に不満を感じていますか。',
                    options: ['毎日走ったのに体重が減らなかったこと (Weight didn\'t drop despite running daily)', '天気が悪かったこと (Bad weather)', '靴が壊れたこと (Shoes broke)', '怪我をしたこと (Got injured)'],
                    correctAnswer: '毎日走ったのに体重が減らなかったこと (Weight didn\'t drop despite running daily)',
                    explanation: 'The writer vents "ジョギングをしたのに、全然体重が減りませんでした".'
                }
            ]
        },
        listeningExercise: {
            audioText: '一生懸命練習したのに、試合に負けてしまって悔しいです。',
            transcript: '一生懸命練習したのに、試合に負けてしまって悔しいです。',
            question: 'How does the speaker feel about the match result?',
            options: ['Frustrated and disappointed despite practicing hard', 'Happy with the victory', 'Indifferent', 'Relieved it ended'],
            correctAnswer: 'Frustrated and disappointed despite practicing hard',
            explanation: 'The speaker expresses frustration (悔しい) despite hard practice (一生懸命練習したのに).'
        },
        culturalNote: 'The word せっかく (sekkaku - with much effort / specially) is frequently paired with のに (e.g. せっかく作ったのに = *even though I went to the trouble of cooking it*).',
        commonMistakes: ['Putting requests or commands after のに (the main clause must be a factual result).']
    },
    {
        id: 'LESSON_N4_28',
        level: 'N4',
        moduleNumber: 8,
        moduleTitle: 'Reasons, Causes & Contrast',
        title: 'Listing Reasons & Multiple Traits (～し～し)',
        japaneseTitle: '理由の並列・複数の特徴「～し～し」',
        category: 'reasons',
        description: 'List multiple non-exhaustive reasons or co-occurring attributes to support a conclusion with Plain Form + し.',
        learningObjectives: [
            'Attach し to plain forms across verbs, adjectives, and nouns (だし)',
            'List multiple positive or negative qualities of a place or item',
            'Give compounded reasoning for decisions'
        ],
        content: `### Compounded Reasons: ～し～し\n\n$$\\text{[Plain Form]} + \\text{し、} \\text{[Plain Form]} + \\text{し、} \\text{[Conclusion]}$$\n\n* **このアパートは家賃も安いし、駅からも近いし、とても便利です**。\n* (*This apartment\'s rent is cheap, it\'s close to the station too, and it\'s very convenient.*)\n* **頭も痛いし、熱もあるし、今日は休みます**。\n* (*My head hurts, I have a fever too, so I will rest today.*)`,
        examples: [
            { japanese: 'あの店は料理もおいしいし、値段も安いし、人気があります。', reading: 'あのみせはりょうりもおおいしいし、ねだんもやすいし、にんきがあります。', romaji: 'Ano mise wa ryouri mo oishii shi, nedan mo yasui shi, ninki ga arimasu.', english: 'That shop\'s food is delicious, prices are cheap too, and it is popular.' },
            { japanese: '雨も降っているし、疲れたし、どこへも行きたくない。', reading: 'あめもふっているし、つかれたし、どこへもいきたくない。', romaji: 'It\'s raining, I\'m tired too, so I don\'t want to go anywhere.' }
        ],
        dialogue: {
            title: 'Choosing a Travel Destination',
            lines: [
                { speaker: 'Aoi', japanese: '今度の旅行、どこがいいかな？', romaji: 'Kondo no ryokou, doko ga ii ka na?', english: 'Where should we go on our next trip?' },
                { speaker: 'Sota', japanese: '金沢はどう？新幹線で行けるし、魚もおいしいし、街並みもきれいだよ。', romaji: 'Kanazawa wa dou? Shinkansen de ikeru shi, sakana mo oishii shi, machinami mo kirei da yo.', english: 'How about Kanazawa? You can go by Shinkansen, the fish is delicious, and the streets are beautiful too.' }
            ]
        },
        readingPassage: {
            title: 'Apartment Hunting Review',
            japanese: '新居を決める際、このマンションを選びました。日当たりもいいし、近くに大きなスーパーもあるし、治安もいいからです。とても満足しています。',
            questions: [
                {
                    question: 'このマンションを選んだ理由は何ですか。',
                    options: ['日当たりが良く、スーパーが近く、治安もいいから (Good sunlight, nearby supermarket, good safety)', '家賃が最も高かったから (Highest rent)', '古いから (Old)', '遠いから (Far away)'],
                    correctAnswer: '日当たりが良く、スーパーが近く、治安もいいから (Good sunlight, nearby supermarket, good safety)',
                    explanation: 'The writer lists the three compounded advantages with し.'
                }
            ]
        },
        listeningExercise: {
            audioText: 'このパソコン、軽くて持ち運びやすいし、バッテリーも長持ちするからおすすめだよ。',
            transcript: 'このパソコン、軽くて持ち運びやすいし、バッテリーも長持ちするからおすすめだよ。',
            question: 'Why is the laptop recommended?',
            options: ['It is light to carry and has long battery life', 'It is cheap and colorful', 'It is heavy and powerful', 'It is on sale'],
            correctAnswer: 'It is light to carry and has long battery life',
            explanation: 'The speaker highlights "軽くて持ち運びやすいし、バッテリーも長持ちする".'
        },
        culturalNote: 'Kanazawa (金沢) on the Sea of Japan is famed for fresh seafood, preserved samurai districts, and Kenrokuen garden.',
        commonMistakes: ['Forgetting だ before し for nouns and な-adjectives (say 親切だし, not "親切し").']
    },

    // --- MODULE 9: PURPOSE, NOMINALIZATION & CHANGE ---
    {
        id: 'LESSON_N4_29',
        level: 'N4',
        moduleNumber: 9,
        moduleTitle: 'Purpose, Nominalization & Change',
        title: 'Purpose Clauses (～ために vs ～ように)',
        japaneseTitle: '目的の表現「～ために」と「～ように」',
        category: 'purpose',
        description: 'Master the subtle distinction between volitional direct purpose (～ために) and non-volitional state enablement (～ように).',
        learningObjectives: [
            'Use Verb [Dictionary form] + ために for direct deliberate goals (留学するために)',
            'Use Potential / Negative verbs + ように for indirect enablement (聞こえるように, 忘れないように)',
            'Identify which marker to use based on verb controllability'
        ],
        content: `### The Purpose Spectrum: ために vs ように\n\n1. **～ために (Volitional Action Purpose - "In order to")**:\n   * Used with controllable actions and deliberate effort by the same subject:\n   * 家を**買うために**、貯金しています。 (*I am saving money in order to buy a house.*)\n   * 日本語を**勉強するために**、日本へ来ました。 (*I came to Japan in order to study Japanese.*)\n\n2. **～ように (Enablement & State Target - "So that / In such a way that")**:\n   * Used with **potential verbs, negative verbs, and non-controllable verbs**:\n   * 後ろの人にも**聞こえるように**、大きな声で話しました。 (*I spoke loudly so that people in the back could hear.*)\n   * 風邪を**ひかないように**、温かい服を着ます。 (*I wear warm clothes so that I don\'t catch a cold.*)`,
        examples: [
            { japanese: '健康のために毎日野菜をたくさん食べます。', reading: 'けんこうのためにまいにちやさいをたくさんたべます。', romaji: 'Kenkou no tame ni mainichi yasai o takusan tabemasu.', english: 'For the sake of my health, I eat a lot of vegetables every day.' },
            { japanese: '忘れないように手帳にメモしておきました。', reading: 'わすれないようにてちょうにメモしておきました。', romaji: 'Wasurenai you ni techou ni memo shite okimashita.', english: 'I made a note in my planner so that I wouldn\'t forget.' }
        ],
        dialogue: {
            title: 'Studying for the JLPT',
            lines: [
                { speaker: 'Ren', japanese: '毎日夜遅くまで勉強しているね。', romaji: 'Mainichi yoru osoku made benkyou shite iru ne.', english: 'You are studying until late every night.' },
                { speaker: 'Hana', japanese: 'うん、N4の試験に合格できるように、過去問をたくさん解いているの。', romaji: 'Un, N4 no shiken ni goukaku dekiru you ni, kakomon o takusan toi te iru no.', english: 'Yeah, I am solving lots of past exam questions so that I can pass the N4 exam.' }
            ]
        },
        readingPassage: {
            title: 'School Speech on Goals',
            japanese: '将来、通訳になるために、毎日外国語のニュースを聞いています。発音が自然になるように、シャドーイングの練習も欠かしません。夢に向かって努力を続けます。',
            questions: [
                {
                    question: '通訳になるために何を聞いていますか。',
                    options: ['外国語のニュース (Foreign language news)', '音楽 (Music)', 'ポッドキャスト (Podcasts)', 'ラジオ (Radio)'],
                    correctAnswer: '外国語のニュース (Foreign language news)',
                    explanation: 'The speech states "将来、通訳になるために、毎日外国語のニュースを聞いています".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'みんなによく見えるように、文字を大きく書いてください。',
            transcript: 'みんなによく見えるように、文字を大きく書いてください。',
            question: 'Why should the writing be large?',
            options: ['So that everyone can see clearly', 'Because the board is big', 'For practice', 'For children'],
            correctAnswer: 'So that everyone can see clearly',
            explanation: 'The purpose given is "みんなによく見えるように".'
        },
        culturalNote: 'Shadowing (シャドーイング) — repeating native audio instantaneously — is one of Japan\'s most popular language training techniques.',
        commonMistakes: ['Using ために with potential verbs (never say "話せるために"; use 話せるように).']
    },
    {
        id: 'LESSON_N4_30',
        level: 'N4',
        moduleNumber: 9,
        moduleTitle: 'Purpose, Nominalization & Change',
        title: 'Decisions & Rules (～ことになる vs ～ことにする)',
        japaneseTitle: '決定の表現「～ことになる・～ことにする」',
        category: 'decisions',
        description: 'Differentiate personal voluntary decisions (～ことにする) from organizational rules and external arrangements (～ことになる).',
        learningObjectives: [
            'Express personal resolutions with Verb [Dictionary/Nai] + ことにする',
            'Express organizational policies and scheduled arrangements with Verb [Dictionary/Nai] + ことになる',
            'Communicate work relocations, business transfers, and habit changes'
        ],
        content: `### Personal Decisions vs External Arrangements\n\n1. **～ことにする (Personal Decision / Resolution)**:\n   * **Subjective choice made by the speaker**:\n   * 健康のために、毎朝ジョギングする**ことにしました**。 (*I decided to jog every morning for my health.*)\n   * お酒を飲まない**ことにしました**。 (*I decided not to drink alcohol.*)\n\n2. **～ことになる (External Arrangement / Organizational Decision)**:\n   * **Decision reached by an external group, company, or circumstances**:\n   * 来月から大阪本社へ転勤する**ことになりました**。 (*It has been arranged that I will transfer to the Osaka office next month.*)\n   * 日本で働く**ことになりました**。 (*It has been decided that I will work in Japan.*)`,
        examples: [
            { japanese: '今年中にJLPT N4に合格することにしました。', reading: 'ことしじゅうにJLPT N4にごうかくすることにしました。', romaji: 'Kotoshijuu ni JLPT N4 ni goukaku suru koto ni shimashita.', english: 'I have decided to pass JLPT N4 within this year.' },
            { japanese: '来週の出張は中止ということになりました。', reading: 'らいしゅうのしゅっちょうはちゅうしということになりました。', romaji: 'Raishuu no shutchou wa chuushi to iu koto ni narimashita.', english: 'It has been decided that next week\'s business trip is cancelled.' }
        ],
        dialogue: {
            title: 'Company Transfer Announcement',
            lines: [
                { speaker: 'Colleague', japanese: '来期の人事異動、どうなった？', romaji: 'Raiki no jinji idou, dou natta?', english: 'How did next term\'s personnel transfers turn out?' },
                { speaker: 'Ken', japanese: '来月から東京支社で働くことになったよ！', romaji: 'Raigetsu kara Toukyou shisha de hataraku koto ni natta yo!', english: 'It has been arranged that I\'ll be working at the Tokyo branch from next month!' }
            ]
        },
        readingPassage: {
            title: 'New Year Resolutions',
            japanese: '新年の抱負として、毎日三十分読書をすることに決めました。また、夜更かしをやめて早起きすることにしました。健康的な一年を目指します。',
            questions: [
                {
                    question: '筆者は新年に何を決意しましたか。',
                    options: ['読書と早起きをすること (Reading and waking up early)', '旅行に行くこと (Going on a trip)', '転職すること (Changing jobs)', '家を買うこと (Buying a house)'],
                    correctAnswer: '読書と早起きをすること (Reading and waking up early)',
                    explanation: 'The writer decides to read for 30 minutes and wake up early.'
                }
            ]
        },
        listeningExercise: {
            audioText: '大学院に進学することになりました。おめでとうございます！',
            transcript: '大学院に進学することになりました。おめでとうございます！',
            question: 'What has been decided regarding the speaker\'s future?',
            options: ['Advancing to graduate school', 'Starting a job', 'Studying abroad in Europe', 'Taking a gap year'],
            correctAnswer: 'Advancing to graduate school',
            explanation: 'The speaker announces "大学院に進学することになりました".'
        },
        culturalNote: 'Announcing job transfers and marriages with ことになりました sounds modest by downplaying individual ego.',
        commonMistakes: ['Confusing the particle: にする (to decide) vs になる (to become decided).']
    },
    {
        id: 'LESSON_N4_31',
        level: 'N4',
        moduleNumber: 9,
        moduleTitle: 'Purpose, Nominalization & Change',
        title: 'Acquired Ability & Habitual Change (～ようになる)',
        japaneseTitle: '変化と到達「～ようになる」',
        category: 'change',
        description: 'Express gradual developmental changes in ability, habit, and routine with Verb [Potential / Dictionary] + ようになる.',
        learningObjectives: [
            'Express newly acquired competencies with Potential Verb + ようになる (話せるようになる)',
            'Express new lifestyle habits with Dictionary Verb + ようになる',
            'Express discontinued habits with Negative [ない] + ようになる (～なくなる)'
        ],
        content: `### Gradual Transformation: ～ようになる\n\n$$\\text{Verb [Potential / Dictionary Form]} + \\text{ようになる}$$\n\n1. **Change in Ability (Gradual Mastery)**:\n   * 漢字が**読めるようになりました**。 (*I have become able to read kanji.*)\n   * 日本語で日常会話が**話せるようになりました**。 (*I have become able to hold daily conversations in Japanese.*)\n\n2. **Change in Habit / Routine**:\n   * 毎朝散歩を**するようになりました**。 (*I have started making a habit of walking every morning.*)\n\n3. **Negative Change (Ceasing a Habit - ～なくなる)**:\n   * 甘いものを**食べなくなりました**。 (*I stopped eating sweets / don\'t eat sweets anymore.*)`,
        examples: [
            { japanese: '日本のアニメを字幕なしで見られるようになりたいです。', reading: 'にほんのアニメをじまくなしでみられるようになりたいです。', romaji: 'Nihon no anime o jimaku nashi de mirareru you ni naritai desu.', english: 'I want to reach the point where I can watch Japanese anime without subtitles.' },
            { japanese: '最近、あまり肉を食べなくなりました。', reading: 'さいきん、あまりにくをたべなくなりました。', romaji: 'Saikin, amari niku o tabenaku narimashita.', english: 'Recently, I have stopped eating meat very much.' }
        ],
        dialogue: {
            title: 'Japanese Progress Milestones',
            lines: [
                { speaker: 'Sensei', japanese: '日本語のニュースが聞き取れるようになってきましたね。', romaji: 'Nihongo no nyuusu ga kikitoreru you ni natte kimashita ne.', english: 'You have become able to catch Japanese news by ear!' },
                { speaker: 'Student', japanese: 'はい！毎日ラジオを聞いているおかげです。', romaji: 'Hai! Mainichi rajio o kiite iru okage desu.', english: 'Yes! It is thanks to listening to the radio every day.' }
            ]
        },
        readingPassage: {
            title: 'Learning to Cook',
            japanese: '一人暮らしを始めてから、自分で料理を作るようになりました。最初は失敗ばかりでしたが、今ではいろいろな日本料理が作れるようになりました。',
            questions: [
                {
                    question: '筆者は現在どのようになれるようになりましたか。',
                    options: ['いろいろな日本料理が作れるようになった (Become able to cook various Japanese dishes)', '料理をやめた (Quit cooking)', '外食ばかりしている (Eating out only)', 'お菓子しか作れない (Can only make sweets)'],
                    correctAnswer: 'いろいろな日本料理が作れるようになった (Become able to cook various Japanese dishes)',
                    explanation: 'The writer notes "今ではいろいろな日本料理が作れるようになりました".'
                }
            ]
        },
        listeningExercise: {
            audioText: '眼鏡をかけるようになってから、遠くの文字がよく見えるようになりました。',
            transcript: '眼鏡をかけるようになってから、遠くの文字がよく見えるようになりました。',
            question: 'What improvement occurred after wearing glasses?',
            options: ['Can see distant text clearly', 'Headache went away', 'Eyes became tired', 'Read books faster'],
            correctAnswer: 'Can see distant text clearly',
            explanation: 'The audio explains "遠くの文字がよく見えるようになりました".'
        },
        culturalNote: 'Language progress in Japan is often evaluated by the milestone of being able to read newspaper headlines (新聞が読めるようになる).',
        commonMistakes: ['Using standard な-adjective rules — with verbs it is always Verb + ようになる.']
    },

    // --- MODULE 10: TIME EXPRESSIONS AND MODALITY ---
    {
        id: 'LESSON_N4_32',
        level: 'N4',
        moduleNumber: 10,
        moduleTitle: 'Time Expressions & Modality',
        title: 'Time Clauses: Before & When (～前に・～とき)',
        japaneseTitle: '時間節の表現「～前に・～とき」',
        category: 'time',
        description: 'Frame complex chronological time clauses with Verb [Dictionary form] + 前に (*before doing*) and dynamic tense shifts with ～とき (*when*).',
        learningObjectives: [
            'Use Verb [Dictionary form] + 前に regardless of main clause tense',
            'Master the tense distinction before とき (辞書形 + とき vs た形 + とき)',
            'Construct precise chronological timelines in narrative speech'
        ],
        content: `### Chronological Framework: 前に and とき\n\n1. **～前に (Before doing X)**:\n   * **Always uses Dictionary Form before 前に**, even when describing the past:\n   * 日本へ**行く前に**、ビザを取りました。 (*Before going to Japan, I obtained a visa.*)\n\n2. **～とき (When / At the time of)**:\n   * **Dictionary Form + とき**: Incomplete / On the way to doing X:\n     * 日本へ**行くとき**、カメラを買いました。 (*I bought a camera before/on the way to Japan.*)\n   * **た-Form + とき**: Completed / Already arrived at X:\n     * 日本へ**行ったとき**、富士山を見ました。 (*When I was in Japan [having arrived], I saw Mount Fuji.*)`,
        examples: [
            { japanese: 'ご飯を食べる前に、手を洗ってください。', reading: 'ごはんをたべるまえに、てをあらってください。', romaji: 'Gohan o taberu mae ni, te o aratte kudasai.', english: 'Please wash your hands before eating a meal.' },
            { japanese: '子供のとき、よくこの公園で遊びました。', reading: 'こどものとき、よくこのこうえんであそびました。', romaji: 'Kodomo no toki, yoku kono kouen de asobimashita.', english: 'When I was a child, I often played in this park.' }
        ],
        dialogue: {
            title: 'Buying Souvenirs on a Trip',
            lines: [
                { speaker: 'Ren', japanese: '京都へ行ったとき、何を買った？', romaji: 'Kyouto e itta toki, nani o katta?', english: 'When you went to Kyoto, what did you buy?' },
                { speaker: 'Mia', japanese: '有名な八ツ橋と抹茶を買ったよ。すごくおいしかった！', romaji: 'Yuumei na yatsuhashi to matcha o katta yo. Sugoku oishikatta!', english: 'I bought famous yatsuhashi and matcha. It was very delicious!' }
            ]
        },
        readingPassage: {
            title: 'Emergency Drill Instructions',
            japanese: '【避難訓練の注意】地震が起きたときは、まず机の下に隠れて頭を守ってください。避難する前に、必ず台所の火を消してください。慌てて外に出てはいけません。',
            questions: [
                {
                    question: '避難する前に何をしなければなりませんか。',
                    options: ['台所の火を消す (Extinguish the kitchen fire)', '靴を履く (Put on shoes)', '電話をかける (Make a call)', '荷物をまとめる (Pack luggage)'],
                    correctAnswer: '台所の火を消す (Extinguish the kitchen fire)',
                    explanation: 'The guide commands "避難する前に、必ず台所の火を消してください".'
                }
            ]
        },
        listeningExercise: {
            audioText: '寝る前にスマホを見ないほうが、ぐっすり眠れますよ。',
            transcript: '寝る前にスマホを見ないほうが、ぐっすり眠れますよ。',
            question: 'What advice is given regarding sleep quality?',
            options: ['Do not look at smartphones before sleeping', 'Sleep with lights on', 'Drink coffee before bed', 'Wake up at midnight'],
            correctAnswer: 'Do not look at smartphones before sleeping',
            explanation: 'The advice specifies "寝る前にスマホを見ないほうが".'
        },
        culturalNote: 'Earthquake drills (避難訓練) are practiced regularly across Japanese schools and workplaces.',
        commonMistakes: ['Putting past tense before 前に (never say "行った前に"; it is always 行く前に).']
    },
    {
        id: 'LESSON_N4_33',
        level: 'N4',
        moduleNumber: 10,
        moduleTitle: 'Time Expressions & Modality',
        title: 'Appearance vs Hearsay (～そうだ)',
        japaneseTitle: '様態・伝聞の助動詞「～そうだ」',
        category: 'modality',
        description: 'Distinguish visual conjecture ("looks like / appears") using Verb/Adj Stem + そうだ from hearsay ("I heard that...") using Plain Form + そうだ.',
        learningObjectives: [
            'Form visual conjecture using Verb/Adj stem + そうだ (おいしそう, 降りそう)',
            'Form hearsay reported information using Plain Form + そうだ (雨が降るそうだ)',
            'Identify irregular visual conjecture forms: よさそう (looks good), なさそう (looks like there is none)'
        ],
        content: `### Visual Appearance vs Hearsay: ～そうだ\n\n1. **Visual Conjecture ("Looks like / Appears to be")**:\n   * Attached to **Verb stem / Adjective stem** (drop い / な):\n   * このケーキは**おいしそう**です。 (*This cake looks delicious.*)\n   * 雨が**降りそう**です。 (*It looks like it\'s about to rain.*)\n   * **Special Forms**: いい $\\rightarrow$ **よさそう**, ない $\\rightarrow$ **なさそう**\n\n2. **Hearsay ("I heard that / According to reports")**:\n   * Attached to **Full Plain Form**:\n   * 明日は雨が**降るそうです**。 (*I heard it will rain tomorrow.*)\n   * 田中さんは来月結婚**するそうです**。 (*I heard that Mr. Tanaka is getting married next month.*)`,
        examples: [
            { japanese: '荷物が重そうですね。持ちましょうか。', reading: 'にもつがおもそうですね。もちましょうか。', romaji: 'Nimotsu ga omosou desu ne. Mochimashou ka.', english: 'Your luggage looks heavy. Shall I carry it?' },
            { japanese: 'ニュースによると、明日は暖かくなるそうです。', reading: 'ニュースによると、あしたはあたたかくなるそうです。', romaji: 'Nyuusu ni yoru to, ashita wa tatakaku naru sou desu.', english: 'According to the news, I heard it will become warm tomorrow.' }
        ],
        dialogue: {
            title: 'At the Bakery Window',
            lines: [
                { speaker: 'Aoi', japanese: 'わあ、この焼きたてのアップルパイ、すごくおいしそう！', romaji: 'Waa, kono yakitate no appurupai, sugoku oishisou!', english: 'Wow, this freshly baked apple pie looks super delicious!' },
                { speaker: 'Sota', japanese: 'テレビでも紹介された人気商品だそうだよ。買ってみよう！', romaji: 'Terebi demo shoukai sareta ninki shouhin da sou da yo. Katte miyou!', english: 'I heard it\'s a popular item featured on TV. Let\'s buy one!' }
            ]
        },
        readingPassage: {
            title: 'Neighborhood Grapevine',
            japanese: '駅前に新しい大型スーパーができるそうです。品揃えが豊富で、深夜まで営業するそうです。買い物がとても便利になりそうです。',
            questions: [
                {
                    question: '新しいスーパーについてどのような噂を聞きましたか。',
                    options: ['深夜まで営業し品揃えが豊富 (Open late with abundant selection)', '値段が高すぎる (Prices too high)', '駐車場がない (No parking)', 'すぐに閉店する (Closing soon)'],
                    correctAnswer: '深夜まで営業し品揃えが豊富 (Open late with abundant selection)',
                    explanation: 'The passage reports "品揃えが豊富で、深夜まで営業するそうです".'
                }
            ]
        },
        listeningExercise: {
            audioText: '空が暗くなってきましたね。今にも雨が降りそうですよ。',
            transcript: '空が暗くなってきましたね。今にも雨が降りそうですよ。',
            question: 'What is the weather about to do based on appearance?',
            options: ['Looks like it is about to rain any second', 'Looks like it will clear up', 'Looks like snow', 'Wind is stopping'],
            correctAnswer: 'Looks like it is about to rain any second',
            explanation: 'The speaker observes "今にも雨が降りそうですよ".'
        },
        culturalNote: 'The phrase 「～によると」 (*according to...*) is the textbook pair with hearsay ～そうです.',
        commonMistakes: ['Saying "いいそう" for visual appearance — the correct form is always よさそう (yosasou).']
    },
    {
        id: 'LESSON_N4_34',
        level: 'N4',
        moduleNumber: 10,
        moduleTitle: 'Time Expressions & Modality',
        title: 'Expectation & Logical Deduction (～はずだ)',
        japaneseTitle: '確信と当然の推量「～はずだ」',
        category: 'modality',
        description: 'Express strong logical conviction based on facts and expectations (*ought to be / should be*) with Plain Form + はずだ.',
        learningObjectives: [
            'Attach はずだ to plain forms (using な for な-adjectives and の for nouns)',
            'Express strong negative conviction with ～はずがない (*it is impossible that...*)',
            'Analyze logical deductions in problem-solving scenarios'
        ],
        content: `### Logical Expectation: ～はずだ\n\n$$\\text{[Plain Form (nouns + の / な-adj + な)]} + \\text{はずです / はずだ}$$\n\n* **田中さんは今日来るはずです**。 (*Mr. Tanaka is expected to come today / should come based on schedule.*)\n* **鍵はカバンの中にあるはずです**。 (*The keys should be in my bag / I\'m confident they are.*)\n* **そんなはずはありません**。 (*That cannot be possible / That shouldn\'t be!*)`,
        examples: [
            { japanese: '荷物は昨日発送されたので、今日届くはずです。', reading: 'にもつはきのうはっそうされたので、きょうとどくはずです。', romaji: 'Nimotsu wa kinou hassou sareta node, kyou todoku hazu desu.', english: 'Since the package was shipped yesterday, it should arrive today.' },
            { japanese: '真面目な彼がそんな嘘をつくはずがありません。', reading: 'まじめなかれがそんなうそをつくはずがありません。', romaji: 'Majime na kare ga sonna uso o tsuku hazu ga arimasen.', english: 'An earnest person like him could not possibly tell such a lie.' }
        ],
        dialogue: {
            title: 'Waiting for the Delivery',
            lines: [
                { speaker: 'Customer', japanese: '注文した商品はいつ届きますか。', romaji: 'Chuumon shita shouhin wa itsu todokimasu ka.', english: 'When will the ordered product arrive?' },
                { speaker: 'Clerk', japanese: '午前中に配達指定されていますので、間もなく届くはずですよ。', romaji: 'Gozenchuu ni haitatsu shitei sarete imasu node, mamonaku todoku hazu desu yo.', english: 'Since it was designated for morning delivery, it should arrive shortly.' }
            ]
        },
        readingPassage: {
            title: 'Logical Deduction Exercise',
            japanese: '会議は十時に始まる予定でした。田中さんは九時半の電車に乗ったと言っていました。駅から会社までは徒歩十分ですから、もう到着しているはずです。',
            questions: [
                {
                    question: '田中さんは現在どうしているはずですか。',
                    options: ['会社に到着しているはず (Should have arrived at company)', 'まだ家にいる (Still at home)', '電車に乗り遅れた (Missed train)', '旅行中 (Traveling)'],
                    correctAnswer: '会社に到着しているはず (Should have arrived at company)',
                    explanation: 'The timeline logically concludes "もう到着しているはずです".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'パスポートは引き出しの中にしまったはずなのに、見当たらない！',
            transcript: 'パスポートは引き出しの中にしまったはずなのに、見当たらない！',
            question: 'What is the speaker puzzled about?',
            options: ['Cannot find the passport where they were sure they put it', 'Lost the passport at the airport', 'Forgot to apply for a passport', 'Passport is expired'],
            correctAnswer: 'Cannot find the passport where they were sure they put it',
            explanation: 'The speaker expresses surprise: "しまったはずなのに、見当たらない！".'
        },
        culturalNote: 'Japanese express dismay at unexpected discrepancies by combining はず with のに (～はずなのに = *it was supposed to be, yet...*).',
        commonMistakes: ['Forgetting の for nouns before はず (say 休みのず, not "休みはず").']
    },

    // --- MODULE 11: COMPREHENSIVE INTEGRATION & CAPSTONE ---
    {
        id: 'LESSON_N4_35',
        level: 'N4',
        moduleNumber: 11,
        moduleTitle: 'Comprehensive Integration',
        title: 'N4 Master Review & JLPT Exam Readiness',
        japaneseTitle: 'N4総合総復習と試験対策',
        category: 'grammar',
        description: 'Integrate the full spectrum of N4 Language Knowledge, Reading, and Listening strategies in preparation for the comprehensive Practice Mock Exam.',
        learningObjectives: [
            'Synthesize multi-layer grammar structures (Aspect, Conditionals, Giving/Receiving, Keigo)',
            'Develop speed and accuracy for JLPT Language Knowledge (Kanji & Vocab)',
            'Master reading comprehension scan strategies for informational documents and emails'
        ],
        content: `### The Capstone of Elementary Japanese\n\nYou have navigated the full journey from basic Hiragana strokes to sophisticated intermediate Japanese communication!\n\n#### Key Structural Pillars Mastered in N4:\n1. **Aspect & Auxiliary Verbs**: ～てみる, ～てしまう, ～ておく, ～てある\n2. **Social Directionality**: あげる, くれる, もらう, ～てくれる\n3. **Four Conditional Nuances**:\n   * **～たら**: General temporal & hypothetical condition (*When / If*)\n   * **～なら**: Topic-based suggestion (*If that\'s the case*)\n   * **～ば**: Logical & hypothetical condition\n   * **～と**: Inevitable natural consequence & mechanical operations\n4. **Opinions & Modality**: ～と思う, ～かもしれない, ～でしょう, ～そうだ\n5. **Purpose & Reason**: ～ために, ～ように, ～ので, ～のに\n\nYou are now prepared to test your skills in the **Full Kana-Forge JLPT Practice Exam Arena**!`,
        examples: [
            { japanese: '先生に教えていただいたおかげで、試験に合格できました。', reading: 'せんせいにおしえていただいたおかげで、しけんにごうかくできました。', romaji: 'Sensei ni oshiete itadaita okage de, shiken ni goukaku dekimashita.', english: 'Thanks to the teacher\'s kind instruction, I was able to pass the exam.' },
            { japanese: 'これからも毎日日本語の練習を続けるつもりです。', reading: 'これからもまいにちにほんごのれんしゅうをつづけるつもりです。', romaji: 'Kore kara mo mainichi nihongo no renshuu o tsuzukeru tsumori desu.', english: 'I intend to keep practicing Japanese every day from now on as well.' }
        ],
        dialogue: {
            title: 'Congratulating a Fellow Learner',
            lines: [
                { speaker: 'Sensei', japanese: 'N4のカリキュラム修了、おめでとうございます！', romaji: 'N4 no karikyuramu shuuryou, omedetou gozaimasu!', english: 'Congratulations on completing the N4 curriculum!' },
                { speaker: 'Student', japanese: '先生、今まで丁寧に教えてくださって、本当にありがとうございました！', romaji: 'Sensei, ima made teinei ni oshiete kudasatte, hontou ni arigatou gozaimashita!', english: 'Teacher, thank you so much for teaching me so kindly until now!' }
            ]
        },
        readingPassage: {
            title: 'Notice: JLPT Practice Test Instructions',
            japanese: '模擬試験を受ける皆さんへ。試験は三つのセクションに分かれています。第一部は言語知識（文字・語彙）、第二部は文法・読解、第三部は聴解です。時間配分に注意して、すべての問題に答えてください。頑張りましょう！',
            questions: [
                {
                    question: '試験の第二部は何ですか。',
                    options: ['文法・読解 (Grammar & Reading)', '言語知識 (Language Knowledge)', '聴解 (Listening)', '面接 (Interview)'],
                    correctAnswer: '文法・読解 (Grammar & Reading)',
                    explanation: 'The notice states "第二部は文法・読解".'
                }
            ]
        },
        listeningExercise: {
            audioText: 'これまでの学習の成果を発揮して、模擬試験に挑戦してください。',
            transcript: 'これまでの学習の成果を発揮して、模擬試験に挑戦してください。',
            question: 'What is the message urging the learner to do?',
            options: ['Take on the mock test demonstrating what you have learned', 'Take a break from studying', 'Buy a new textbook', 'Register for university'],
            correctAnswer: 'Take on the mock test demonstrating what you have learned',
            explanation: 'The audio encourages: "これまでの学習の成果を発揮して、模擬試験に挑戦してください".'
        },
        culturalNote: 'In Japan, before facing a major exam or life challenge, friends and supporters shout 「頑張ってください！」 to instill spirit and fortitude.',
        commonMistakes: ['Leaving questions unanswered on timed exams — there is no penalty for guessing on the JLPT.']
    }
];

export default n4Lessons;
