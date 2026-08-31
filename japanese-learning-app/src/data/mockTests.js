/**
 * Kana-Forge Master JLPT Practice Mock Exams
 * Full structured practice simulations for JLPT N5 and JLPT N4
 */

export const mockTests = [
    {
        id: 'MOCK_TEST_N5',
        level: 'N5',
        title: 'Kana-Forge JLPT N5 Full Practice Exam',
        japaneseTitle: 'JLPT N5 総合模擬試験',
        description: 'Complete 3-section simulation modeled on JLPT N5 structure: Language Knowledge (Vocabulary & Kanji), Grammar & Reading, and Listening.',
        totalQuestions: 15,
        timeLimitMinutes: 45,
        passingPercentage: 60,
        sections: [
            {
                id: 'sec_n5_vocab',
                title: 'Section 1: Language Knowledge (Vocabulary & Kanji)',
                japaneseTitle: '第一部：言語知識（文字・語彙）',
                timeMinutes: 15,
                questions: [
                    {
                        id: 'm_n5_01',
                        type: 'kanji-reading',
                        question: '毎日【水】をたくさん飲みます。',
                        options: ['みず', 'おちゃ', 'さけ', 'ゆ'],
                        correctAnswer: 'みず',
                        explanation: '「水」 is read as 「みず」 (mizu - water).'
                    },
                    {
                        id: 'm_n5_02',
                        type: 'orthography',
                        question: 'あした【ともだち】とあいます。',
                        options: ['友達', '知人', '親友', '仲間'],
                        correctAnswer: '友達',
                        explanation: '「ともだち」 is written with the kanji 友達 (friend).'
                    },
                    {
                        id: 'm_n5_03',
                        type: 'context-vocab',
                        question: '朝起きてから、顔を【　　】。',
                        options: ['洗います', '飲みます', '着ます', '履きます'],
                        correctAnswer: '洗います',
                        explanation: 'You wash (洗う - arau) your face (顔) in the morning.'
                    },
                    {
                        id: 'm_n5_04',
                        type: 'kanji-reading',
                        question: '【大学】の図書館は静かです。',
                        options: ['だいがく', 'たいがく', 'おおがく', 'だいがっこう'],
                        correctAnswer: 'だいがく',
                        explanation: '「大学」 is pronounced 「だいがく」 (daigaku - university).'
                    },
                    {
                        id: 'm_n5_05',
                        type: 'context-vocab',
                        question: 'この部屋はとても【　　】ですね。窓を開けましょう。',
                        options: ['暑い', '寒い', '高い', '古い'],
                        correctAnswer: '暑い',
                        explanation: 'Because it is hot (暑い - atsui), let\'s open the window.'
                    }
                ]
            },
            {
                id: 'sec_n5_grammar_reading',
                title: 'Section 2: Grammar & Reading',
                japaneseTitle: '第二部：文法・読解',
                timeMinutes: 20,
                questions: [
                    {
                        id: 'm_n5_06',
                        type: 'grammar',
                        question: '日曜日【　　】デパートへ買い物に行きました。',
                        options: ['に', 'で', 'を', 'へ'],
                        correctAnswer: 'に',
                        explanation: 'Specific days of the week take the temporal particle に: 「日曜日に」.'
                    },
                    {
                        id: 'm_n5_07',
                        type: 'grammar',
                        question: '図書館【　　】大声で話してはいけません。',
                        options: ['で', 'に', 'へ', 'を'],
                        correctAnswer: 'で',
                        explanation: 'The particle で marks the active location where the prohibited action takes place.'
                    },
                    {
                        id: 'm_n5_08',
                        type: 'grammar',
                        question: 'わたしは日本料理の【　　】寿司が一番好きです。',
                        options: ['中で', 'より', 'ほど', 'から'],
                        correctAnswer: '中で',
                        explanation: 'Superlatives select an item within a category using 「～の中で...一番」.'
                    },
                    {
                        id: 'm_n5_09',
                        type: 'reading',
                        passage: 'わたしは毎週土曜日に日本語のクラスへ行きます。クラスは十時から十二時までです。先生はとても優しくて、授業は楽しいです。クラスのあと、友達とカフェでお茶を飲みます。',
                        question: '土曜日の授業は何時間ありますか。',
                        options: ['二時間 (Two hours)', '一時間 (One hour)', '三時間 (Three hours)', '四時間 (Four hours)'],
                        correctAnswer: '二時間 (Two hours)',
                        explanation: 'Class is from 10:00 to 12:00 (十時から十二時まで), which is 2 hours (二時間).'
                    },
                    {
                        id: 'm_n5_10',
                        type: 'reading',
                        passage: '【お知らせ】来週の月曜日は祝日です。学校は休みになります。火曜日から通常の授業を行います。宿題は火曜日に出してください。',
                        question: '宿題はいつ出しますか。',
                        options: ['火曜日 (Tuesday)', '月曜日 (Monday)', '水曜日 (Wednesday)', '今週 (This week)'],
                        correctAnswer: '火曜日 (Tuesday)',
                        explanation: 'The notice explicitly states "宿題は火曜日に出してください" (Please submit homework on Tuesday).'
                    }
                ]
            },
            {
                id: 'sec_n5_listening',
                title: 'Section 3: Listening Comprehension',
                japaneseTitle: '第三部：聴解',
                timeMinutes: 10,
                questions: [
                    {
                        id: 'm_n5_11',
                        type: 'listening',
                        audioText: '男の人と女の人が話しています。男の人は何時に起きますか。わたしは毎朝七時に起きます。あなたは何時ですか。わたしは六時半です。',
                        question: '男の人は何時に起きますか。',
                        options: ['六時半 (6:30)', '七時 (7:00)', '七時半 (7:30)', '六時 (6:00)'],
                        correctAnswer: '六時半 (6:30)',
                        explanation: 'The man states "わたしは六時半です" (I wake up at 6:30).'
                    },
                    {
                        id: 'm_n5_12',
                        type: 'listening',
                        audioText: '店員と客が話しています。コーヒーはいくらですか。ホットコーヒーは三百五十円です。アイスコーヒーは四百円です。ホットコーヒーをください。',
                        question: '客が頼んだコーヒーはいくらですか。',
                        options: ['三百五十円 (350 yen)', '四百円 (400 yen)', '七百五十円 (750 yen)', '三百円 (300 yen)'],
                        correctAnswer: '三百五十円 (350 yen)',
                        explanation: 'The customer ordered hot coffee (ホットコーヒー), which is 350 yen (三百五十円).'
                    },
                    {
                        id: 'm_n5_13',
                        type: 'listening',
                        audioText: '女の人はどこへ行きますか。いまから郵便局へ手紙を出しに行ってきます。じゃ、気をつけて。',
                        question: '女の人はどこへ行きますか。',
                        options: ['郵便局 (Post office)', '銀行 (Bank)', '駅 (Station)', '病院 (Hospital)'],
                        correctAnswer: '郵便局 (Post office)',
                        explanation: 'The woman states "郵便局へ手紙を出しに行ってきます" (I\'m going to the post office to mail a letter).'
                    },
                    {
                        id: 'm_n5_14',
                        type: 'listening',
                        audioText: 'あしたは何曜日ですか。きょうは金曜日ですから、あしたは土曜日ですよ。',
                        question: 'あしたは何曜日ですか。',
                        options: ['土曜日 (Saturday)', '日曜日 (Sunday)', '金曜日 (Friday)', '月曜日 (Monday)'],
                        correctAnswer: '土曜日 (Saturday)',
                        explanation: 'Since today is Friday (金曜日), tomorrow is Saturday (土曜日).'
                    },
                    {
                        id: 'm_n5_15',
                        type: 'listening',
                        audioText: 'この傘はだれのですか。あ、それは田中さんの傘ですよ。私の傘はあっちにあります。',
                        question: 'この傘はだれのですか。',
                        options: ['田中さんの傘 (Mr. Tanaka\'s umbrella)', '話している人の傘 (The speaker\'s umbrella)', '先生の傘 (Teacher\'s umbrella)', 'だれのか分からない (Unknown)'],
                        correctAnswer: '田中さんの傘 (Mr. Tanaka\'s umbrella)',
                        explanation: 'The speaker clarifies "それは田中さんの傘ですよ" (That is Mr. Tanaka\'s umbrella).'
                    }
                ]
            }
        ]
    },
    {
        id: 'MOCK_TEST_N4',
        level: 'N4',
        title: 'Kana-Forge JLPT N4 Full Practice Exam',
        japaneseTitle: 'JLPT N4 総合模擬試験',
        description: 'Complete 3-section simulation modeled on JLPT N4 structure: Language Knowledge, Grammar & Intermediate Reading, and Listening.',
        totalQuestions: 15,
        timeLimitMinutes: 50,
        passingPercentage: 60,
        sections: [
            {
                id: 'sec_n4_vocab',
                title: 'Section 1: Language Knowledge (Vocabulary & Kanji)',
                japaneseTitle: '第一部：言語知識（文字・語彙）',
                timeMinutes: 15,
                questions: [
                    {
                        id: 'm_n4_01',
                        type: 'kanji-reading',
                        question: '毎日練習を【続ける】ことが大切です。',
                        options: ['つづける', 'はじめる', 'おわる', 'きめる'],
                        correctAnswer: 'つづける',
                        explanation: '「続ける」 is read as 「つづける」 (tsuzukeru - to continue).'
                    },
                    {
                        id: 'm_n4_02',
                        type: 'orthography',
                        question: '会議の【よてい】を確認しました。',
                        options: ['予定', '予約', '予報', '予習'],
                        correctAnswer: '予定',
                        explanation: '「よてい」 (plan/schedule) is written as 予定.'
                    },
                    {
                        id: 'm_n4_03',
                        type: 'context-vocab',
                        question: '分からない漢字があったので、辞書で【　　】みました。',
                        options: ['調べて', '決めて', '続けて', '集めて'],
                        correctAnswer: '調べて',
                        explanation: '「調べる」 (shiraberu) means to look up or investigate in a dictionary.'
                    },
                    {
                        id: 'm_n4_04',
                        type: 'kanji-reading',
                        question: '先生に将来の進路を【相談】しました。',
                        options: ['そうだん', 'しょうだん', 'そくだん', 'そうけん'],
                        correctAnswer: 'そうだん',
                        explanation: '「相談」 is pronounced 「そうだん」 (soudan - consultation/discussion).'
                    },
                    {
                        id: 'm_n4_05',
                        type: 'context-vocab',
                        question: '東京の地下鉄は路線が多くて少し【　　】です。',
                        options: ['複雑', '簡単', '特別', '安全'],
                        correctAnswer: '複雑',
                        explanation: '「複雑」 (fukuzatsu) means complicated or complex.'
                    }
                ]
            },
            {
                id: 'sec_n4_grammar_reading',
                title: 'Section 2: Grammar & Reading',
                japaneseTitle: '第二部：文法・読解',
                timeMinutes: 25,
                questions: [
                    {
                        id: 'm_n4_06',
                        type: 'grammar',
                        question: '風邪をひいたときは、温かいお茶を飲んで早く【　　】ほうがいいです。',
                        options: ['寝た', '寝る', '寝ない', '寝て'],
                        correctAnswer: '寝た',
                        explanation: 'Giving affirmative advice uses the past た-form: 「寝たほうがいい」.'
                    },
                    {
                        id: 'm_n4_07',
                        type: 'grammar',
                        question: '駅に【　　】たら、すぐにメッセージを送ってください。',
                        options: ['着い', '着く', '着て', '着かない'],
                        correctAnswer: '着い',
                        explanation: 'The conditional ～たら attaches to the た-form: 「着いたら」 (when/if you arrive).'
                    },
                    {
                        id: 'm_n4_08',
                        type: 'grammar',
                        question: '重い荷物を持っていたら、友達が手伝って【　　】ました。',
                        options: ['くれ', 'あげ', 'もらい', 'やり'],
                        correctAnswer: 'くれ',
                        explanation: 'A favor performed by another person benefiting the speaker uses ～てくれる (手伝ってくれました).'
                    },
                    {
                        id: 'm_n4_09',
                        type: 'reading',
                        passage: '先週、京都の古い旅館に泊まりました。部屋からは静かな日本庭園が見えて、とてもリラックスできました。旅館の人が親切にお茶を入れてくれたり、周辺の見どころを教えてくれたりしました。また秋の紅葉の季節に行きたいと思っています。',
                        question: '筆者はなぜ旅館に満足しましたか。',
                        options: ['庭園がきれいで旅館の人が親切だったから (Because the garden was beautiful and the staff were kind)', '宿泊料金がとても安かったから (Because lodging was cheap)', '新幹線が近かったから (Because the Shinkansen was nearby)', '料理が西洋風だったから (Because the food was Western)'],
                        correctAnswer: '庭園がきれいで旅館の人が親切だったから (Because the garden was beautiful and the staff were kind)',
                        explanation: 'The passage highlights the peaceful garden view and the staff\'s hospitality.'
                    },
                    {
                        id: 'm_n4_10',
                        type: 'reading',
                        passage: '【掲示板】アパートのゴミ収集について。燃えるゴミは火曜日と金曜日の朝八時までに出してください。粗大ゴミは事前の電話予約が必要です。ルールを守って清潔な環境を保ちましょう。',
                        question: '燃えるゴミはいつ出さなければなりませんか。',
                        options: ['火曜日と金曜日の朝八時まで (By 8:00 AM on Tuesdays and Fridays)', '毎日いつでもよい (Anytime daily)', '月曜日の夜 (Monday night)', '事前の予約後 (After advance reservation)'],
                        correctAnswer: '火曜日と金曜日の朝八時まで (By 8:00 AM on Tuesdays and Fridays)',
                        explanation: 'The notice states "火曜日と金曜日の朝八時までに出してください" (Please take it out by 8 AM on Tuesdays and Fridays).'
                    }
                ]
            },
            {
                id: 'sec_n4_listening',
                title: 'Section 3: Listening Comprehension',
                japaneseTitle: '第三部：聴解',
                timeMinutes: 10,
                questions: [
                    {
                        id: 'm_n4_11',
                        type: 'listening',
                        audioText: '男の人と女の人が話しています。二人はあした何時にどこで会いますか。あしたの映画、何時から？二時からだよ。じゃあ、一時半に劇場の前で会おうか。うん、そうしよう。',
                        question: '二人は何時にどこで会いますか。',
                        options: ['一時半に劇場の前 (1:30 in front of the theater)', '二時に映画館の中 (2:00 inside the cinema)', '一時半に駅の改札 (1:30 at the station ticket gate)', '二時にカフェ (2:00 at the cafe)'],
                        correctAnswer: '一時半に劇場の前 (1:30 in front of the theater)',
                        explanation: 'They agreed on "一時半に劇場の前で会おう" (meet at 1:30 in front of the theater).'
                    },
                    {
                        id: 'm_n4_12',
                        type: 'listening',
                        audioText: '先生が生徒に指示しています。宿題はいつまでに提出しなければなりませんか。この作文は金曜日までに書いて、職員室の私の机の上に出してください。',
                        question: '生徒はいつまでに宿題を出しますか。',
                        options: ['金曜日まで (By Friday)', '木曜日まで (By Thursday)', '来週の月曜日まで (By next Monday)', '今日中 (By the end of today)'],
                        correctAnswer: '金曜日まで (By Friday)',
                        explanation: 'The teacher states: "金曜日までに書いて...出してください" (Write and submit by Friday).'
                    },
                    {
                        id: 'm_n4_13',
                        type: 'listening',
                        audioText: '病院の受付で話しています。薬はいつ飲みますか。この薬は毎食後、ご飯を食べたあとで一錠ずつ飲んでください。',
                        question: '薬はいつ飲みますか。',
                        options: ['ご飯を食べたあと (After eating meals)', 'ご飯を食べる前 (Before eating meals)', '寝る前 (Before sleeping)', '朝起きたとき (Upon waking in the morning)'],
                        correctAnswer: 'ご飯を食べたあと (After eating meals)',
                        explanation: 'The instruction is "毎食後、ご飯を食べたあとで" (After every meal).'
                    },
                    {
                        id: 'm_n4_14',
                        type: 'listening',
                        audioText: '駅でアナウンスが流れています。事故のため、急行電車が運転を見合わせています。お急ぎの方は各駅停車をご利用ください。',
                        question: '急いでいる人はどうしますか。',
                        options: ['各駅停車を利用する (Use the local/all-stations train)', 'バスに乗る (Ride a bus)', 'タクシーを待つ (Wait for a taxi)', '旅行を取り消す (Cancel the trip)'],
                        correctAnswer: '各駅停車を利用する (Use the local/all-stations train)',
                        explanation: 'The announcement instructs: "お急ぎの方は各駅停車をご利用ください" (Those in a hurry please use the local train).'
                    },
                    {
                        id: 'm_n4_15',
                        type: 'listening',
                        audioText: '田中さんが週末の予定を話しています。土曜日は部屋を掃除して、日曜日は友達と新しい美術館に行くつもりです。',
                        question: '田中さんは日曜日に何をしますか。',
                        options: ['友達と美術館へ行く (Go to an art museum with a friend)', '部屋を掃除する (Clean the room)', '家で本を読む (Read books at home)', '仕事をする (Work)'],
                        correctAnswer: '友達と美術館へ行く (Go to an art museum with a friend)',
                        explanation: 'Tanaka says "日曜日は友達と新しい美術館に行くつもりです" (On Sunday I intend to go to a new art museum with a friend).'
                    }
                ]
            }
        ]
    }
];

export default mockTests;
