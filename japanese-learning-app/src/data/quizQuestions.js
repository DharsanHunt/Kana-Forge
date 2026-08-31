/**
 * Kana-Forge Master Quiz & Practice Question Bank
 * Curated JLPT-aligned practice items across Kanji, Vocabulary, Grammar, Reading, and Listening.
 */

export const quizQuestions = [
    // ==========================================
    // JLPT N5 KANJI & VOCABULARY QUESTIONS
    // ==========================================
    {
        id: 'q_n5_k01',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N5',
        lessonId: 'LESSON_N5_09',
        question: '「一」の正しい読み方はどれですか。',
        options: ['いち', 'に', 'さん', 'よん'],
        correctAnswer: 'いち',
        explanation: '「一」 is read as 「いち」 (ichi - one).'
    },
    {
        id: 'q_n5_k02',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N5',
        lessonId: 'LESSON_N5_11',
        question: '「日曜日」の「日」の読み方はどれですか。',
        options: ['にち', 'げつ', 'か', 'すい'],
        correctAnswer: 'にち',
        explanation: '「日曜日」 is pronounced 「にちようび」 (nichiyoubi - Sunday).'
    },
    {
        id: 'q_n5_k03',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N5',
        lessonId: 'LESSON_N5_22',
        question: '毎朝パンを【たべます】。正しい漢字はどれですか。',
        options: ['食べます', '飲みます', '見ます', '行きます'],
        correctAnswer: '食べます',
        explanation: '「たべます」 is written with the kanji 食 (食べる - to eat).'
    },
    {
        id: 'q_n5_k04',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N5',
        lessonId: 'LESSON_N5_22',
        question: '友達と日本語で【はなします】。正しい漢字はどれですか。',
        options: ['話します', '読みます', '書きます', '聞きます'],
        correctAnswer: '話します',
        explanation: '「はなします」 is written with the kanji 話 (話す - to talk/speak).'
    },
    {
        id: 'q_n5_v01',
        type: 'multiple-choice',
        category: 'vocab',
        level: 'N5',
        lessonId: 'LESSON_N5_03',
        question: '朝、先生に会った時の挨拶はどれですか。',
        options: ['おはようございます', 'こんにちは', 'こんばんは', 'さようなら'],
        correctAnswer: 'おはようございます',
        explanation: '「おはようございます」 is the polite greeting used in the morning.'
    },
    {
        id: 'q_n5_v02',
        type: 'multiple-choice',
        category: 'vocab',
        level: 'N5',
        lessonId: 'LESSON_N5_22',
        question: 'のどが渇きました。【　　】を一杯飲みたいです。',
        options: ['水', 'パン', '本', '机'],
        correctAnswer: '水',
        explanation: 'When thirsty (のどが渇いた), you drink water (水 - mizu).'
    },
    {
        id: 'q_n5_v03',
        type: 'multiple-choice',
        category: 'vocab',
        level: 'N5',
        lessonId: 'LESSON_N5_08',
        question: 'お金を下ろしに【　　】へ行きます。',
        options: ['銀行', '病院', '学校', '公園'],
        correctAnswer: '銀行',
        explanation: 'You withdraw money (お金を下ろす) at the bank (銀行 - ginkou).'
    },

    // ==========================================
    // JLPT N5 GRAMMAR QUESTIONS
    // ==========================================
    {
        id: 'q_n5_g01',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_03',
        question: 'わたし【　　】田中です。よろしくお願いします。',
        options: ['は', 'を', 'に', 'で'],
        correctAnswer: 'は',
        explanation: 'The topic marker は marks the speaker as the topic: 「わたしは田中です」.'
    },
    {
        id: 'q_n5_g02',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_13',
        question: '朝ご飯【　　】パンを食べました。',
        options: ['に', 'を', 'で', 'へ'],
        correctAnswer: 'に',
        explanation: '「朝ご飯に」 indicates "for breakfast". Alternatively, を marks the direct object (パンを食べました).'
    },
    {
        id: 'q_n5_g03',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_14',
        question: '図書館【　　】静かに本を読みます。',
        options: ['で', 'に', 'へ', 'を'],
        correctAnswer: 'で',
        explanation: 'The particle で marks the active location where the action occurs.'
    },
    {
        id: 'q_n5_g04',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_17',
        question: '机の上に本が二冊【　　】。',
        options: ['あります', 'います', 'します', 'です'],
        correctAnswer: 'あります',
        explanation: 'Books (本) are inanimate non-living objects, so あります is used.'
    },
    {
        id: 'q_n5_g05',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_31',
        question: 'すみません、ここに名前を【　　】ください。',
        options: ['書いて', '書く', '書いた', '書かない'],
        correctAnswer: '書いて',
        explanation: 'Polite requests are formed with the て-form: 「書いてください」 (Please write).'
    },
    {
        id: 'q_n5_g06',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N5',
        lessonId: 'LESSON_N5_35',
        question: '日本へ【　　】ことがありますか。',
        options: ['行った', '行く', '行って', '行かない'],
        correctAnswer: '行った',
        explanation: 'Past historical experience uses the た-form: 「行ったことがありますか」 (Have you ever been?).'
    },

    // ==========================================
    // JLPT N5 LISTENING & READING QUESTIONS
    // ==========================================
    {
        id: 'q_n5_l01',
        type: 'listening',
        category: 'listening',
        level: 'N5',
        lessonId: 'LESSON_N5_11',
        audioText: 'すみません、いま何時ですか。午後三時半ですよ。',
        question: 'いま何時ですか。(What time is it now?)',
        options: ['午後三時半 (3:30 PM)', '午前三時半 (3:30 AM)', '午後四時 (4:00 PM)', '午後二時半 (2:30 PM)'],
        correctAnswer: '午後三時半 (3:30 PM)',
        explanation: 'The speaker explicitly answers "午後三時半ですよ" (It is 3:30 PM).'
    },
    {
        id: 'q_n5_r01',
        type: 'reading',
        category: 'reading',
        level: 'N5',
        lessonId: 'LESSON_N5_08',
        question: '【メモ】「あしたの朝九時に駅の東口で会いましょう。雨のときはカフェの中にいます。」\n質問：雨のとき、どこで待ち合わせますか。',
        options: ['カフェの中 (Inside the cafe)', '駅の東口の外 (Outside the east exit)', '図書館 (At the library)', '公園 (At the park)'],
        correctAnswer: 'カフェの中 (Inside the cafe)',
        explanation: 'The note clarifies "雨のときはカフェの中にいます" (In case of rain, I will be inside the cafe).'
    },

    // ==========================================
    // JLPT N4 KANJI & VOCABULARY QUESTIONS
    // ==========================================
    {
        id: 'q_n4_k01',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N4',
        lessonId: 'LESSON_N4_01',
        question: '来月京都へ【旅行】します。正しい読み方はどれですか。',
        options: ['りょこう', 'りょかん', 'りょひ', 'りょうこう'],
        correctAnswer: 'りょこう',
        explanation: '「旅行」 is pronounced 「りょこう」 (ryokou - travel/trip).'
    },
    {
        id: 'q_n4_k02',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N4',
        lessonId: 'LESSON_N4_18',
        question: '明日は雨が降ると【おもいます】。正しい漢字はどれですか。',
        options: ['思います', '思い出します', '恩います', '心います'],
        correctAnswer: '思います',
        explanation: '「おもいます」 is written with 思 (思う - to think).'
    },
    {
        id: 'q_n4_k03',
        type: 'multiple-choice',
        category: 'kanji',
        level: 'N4',
        lessonId: 'LESSON_N4_31',
        question: 'ホテルの部屋を【予約】しました。正しい読み方はどれですか。',
        options: ['よやく', 'よてい', 'よほう', 'ゆうやく'],
        correctAnswer: 'よやく',
        explanation: '「予約」 is read as 「よやく」 (yoyaku - reservation/booking).'
    },
    {
        id: 'q_n4_v01',
        type: 'multiple-choice',
        category: 'vocab',
        level: 'N4',
        lessonId: 'LESSON_N4_26',
        question: 'どうして遅刻したのか、【　　】を言ってください。',
        options: ['理由', '方法', '予定', '経験'],
        correctAnswer: '理由',
        explanation: '「理由」 (riyuu) means "reason" (Please state the reason why you were late).'
    },
    {
        id: 'q_n4_v02',
        type: 'multiple-choice',
        category: 'vocab',
        level: 'N4',
        lessonId: 'LESSON_N4_14',
        question: '旅行の前に切符を買うなど、しっかり【　　】をしておきます。',
        options: ['準備', '経験', '約束', '意見'],
        correctAnswer: '準備',
        explanation: '「準備」 (junbi) means preparation (making preparations in advance).'
    },

    // ==========================================
    // JLPT N4 GRAMMAR QUESTIONS
    // ==========================================
    {
        id: 'q_n4_g01',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_05',
        question: '熱がありますから、今日はお風呂に【　　】ほうがいいです。',
        options: ['入らない', '入った', '入る', '入って'],
        correctAnswer: '入らない',
        explanation: 'Negative advice ("had better not do") uses the present ない-form: 「入らないほうがいい」.'
    },
    {
        id: 'q_n4_g02',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_13',
        question: '電車の中に大事なカバンを【　　】しまいました。',
        options: ['忘れて', '忘れる', '忘れた', '忘れ'],
        correctAnswer: '忘れて',
        explanation: 'Regrettable/accidental actions use the て-form with しまう: 「忘れてしまいました」.'
    },
    {
        id: 'q_n4_g03',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_17',
        question: '親切な人が駅までの道を教えて【　　】ました。',
        options: ['くれ', 'あげ', 'もらい', 'やり'],
        correctAnswer: 'くれ',
        explanation: 'When someone kindly performs a favor directed toward the speaker, use ～てくれる (教えてくれました).'
    },
    {
        id: 'q_n4_g04',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_22',
        question: '駅に【　　】ら、すぐに電話をかけてください。',
        options: ['着いた', '着く', '着いて', '着かない'],
        correctAnswer: '着いた',
        explanation: 'The ～たら conditional is built directly from the past た-form: 「着いたら」 (when/once you arrive).'
    },
    {
        id: 'q_n4_g05',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_26',
        question: '頭が痛い【　　】、少し早く帰ってもいいですか。',
        options: ['ので', 'のに', 'なら', 'でも'],
        correctAnswer: 'ので',
        explanation: '「ので」 (node) introduces a polite, objective reason for asking permission.'
    },
    {
        id: 'q_n4_g06',
        type: 'multiple-choice',
        category: 'grammar',
        level: 'N4',
        lessonId: 'LESSON_N4_30',
        question: '音楽を【　　】ながら、部屋の掃除をしました。',
        options: ['聞き', '聞く', '聞いて', '聞かない'],
        correctAnswer: '聞き',
        explanation: 'Simultaneous actions attach ながら to the verb stem: 「聞きながら」 (while listening).'
    },

    // ==========================================
    // JLPT N4 LISTENING & READING QUESTIONS
    // ==========================================
    {
        id: 'q_n4_l01',
        type: 'listening',
        category: 'listening',
        level: 'N4',
        lessonId: 'LESSON_N4_31',
        audioText: '明日の会議は何時からですか。十時の予定でしたが、十一時に変更になりましたよ。',
        question: '明日の会議は何時に始まりますか。(What time does tomorrow\'s meeting start?)',
        options: ['十一時 (11:00)', '十時 (10:00)', '九時半 (9:30)', '十二時 (12:00)'],
        correctAnswer: '十一時 (11:00)',
        explanation: 'The speaker explains that although it was planned for 10, it changed to 11 (十一時に変更になりました).'
    },
    {
        id: 'q_n4_r01',
        type: 'reading',
        category: 'reading',
        level: 'N4',
        lessonId: 'LESSON_N4_29',
        question: '【メール】「田中先生、お世話になっております。風邪をひいて熱があるので、本日の授業を欠席させていただきます。来週の宿題の範囲を教えていただけないでしょうか。」\n質問：メールを書いた人は何を頼んでいますか。',
        options: ['来週の宿題の範囲 (The scope of next week\'s homework)', '薬の処方箋 (A medicine prescription)', '授業の録画 (A recording of the class)', 'テストの点数 (Test scores)'],
        correctAnswer: '来週の宿題の範囲 (The scope of next week\'s homework)',
        explanation: 'The student asks: "宿題の範囲を教えていただけないでしょうか" (Could you please tell me the scope of the homework?).'
    }
];

export default quizQuestions;
