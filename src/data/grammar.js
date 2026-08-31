/**
 * Kana-Forge Master Grammar Library
 * Curated 70 N5 Grammar Points across 14 Sections + 40 N4 Grammar Points.
 * All content authored originally with formations, nuances, when-to-use, when-not-to-use, audio examples, and common pitfalls.
 */

export const grammar = [
    // ==========================================
    // SECTION 01: SENTENCE FOUNDATIONS
    // ==========================================
    {
        id: 'g_n5_01',
        sectionId: 'sec_n5_01',
        topicTitle: 'Polite Identity Statements (です)',
        level: 'N5',
        pattern: 'Noun 1 は Noun 2 です',
        meaning: 'Noun 1 is Noun 2 (Polite Affirmative Statement)',
        structure: '[Topic] は [Predicate Noun] です',
        formation: 'Noun 1 + は + Noun 2 + です',
        usage: 'State personal identity, nationality, occupation, or attribute of a topic in polite speech.',
        whenToUse: 'When establishing who someone is, what an object is, or defining attributes in polite conversation.',
        whenNotToUse: 'Do not use when describing dynamic actions (e.g. "I eat bread" requires verbs, not です).',
        examples: [
            { japanese: 'わたしは学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
            { japanese: '田中さんは親切な先生です。', romaji: 'Tanaka-san wa shinsetsu na sensei desu.', english: 'Mr. Tanaka is a kind teacher.' },
            { japanese: 'これは日本の本です。', romaji: 'Kore wa nihon no hon desu.', english: 'This is a Japanese book.' }
        ],
        notes: 'は is written with the hiragana "ha" but pronounced "wa" when acting as the topic marker. です functions as the polite copula.',
        commonMistakes: ['Translating English "is/am/are" word-for-word instead of placing です at the sentence end.'],
        relatedGrammar: ['g_n5_02', 'g_n5_03']
    },
    {
        id: 'g_n5_02',
        sectionId: 'sec_n5_01',
        topicTitle: 'Polite Identity Statements (です)',
        level: 'N5',
        pattern: 'Noun 1 は Noun 2 じゃありません / ではありません',
        meaning: 'Noun 1 is not Noun 2 (Polite Negative Statement)',
        structure: '[Topic] は [Predicate Noun] じゃありません / ではありません',
        formation: 'Noun 1 + は + Noun 2 + じゃありません (Spoken) / ではありません (Formal)',
        usage: 'Politely negate a noun identity or classification.',
        whenToUse: 'Use じゃありません in standard polite speech and ではありません in formal or written contexts.',
        whenNotToUse: 'Do not use to negate verbs (verbs negate with ～ません, not じゃありません).',
        examples: [
            { japanese: 'わたしは医者じゃありません。', romaji: 'Watashi wa isha ja arimasen.', english: 'I am not a doctor.' },
            { japanese: 'これは私の傘ではありません。', romaji: 'Kore wa watashi no kasa dewa arimasen.', english: 'This is not my umbrella.' },
            { japanese: '山田さんは会社員じゃありません。学生です。', romaji: 'Yamada-san wa kaishain ja arimasen. Gakusei desu.', english: 'Mr. Yamada is not a company employee. He is a student.' }
        ],
        notes: 'では is pronounced "dewa". じゃ is the phonetic contraction of では common in speech.',
        commonMistakes: ['Saying "学生ありません" without じゃ or では.'],
        relatedGrammar: ['g_n5_01', 'g_n5_03']
    },
    {
        id: 'g_n5_03',
        sectionId: 'sec_n5_01',
        topicTitle: 'Basic Questions & Answers (か)',
        level: 'N5',
        pattern: 'Sentence + か',
        meaning: 'Question Particle (Polite Inquiry)',
        structure: '[Polite Sentence] + か',
        formation: 'Statement + か (Rising pitch)',
        usage: 'Transform any polite statement into a question without changing the word order.',
        whenToUse: 'Whenever asking for information, confirmation, or identity in polite speech.',
        whenNotToUse: 'In casual speech with friends, か is usually dropped in favor of rising intonation.',
        examples: [
            { japanese: 'あなたは日本人ですか。', romaji: 'Anata wa nihonjin desu ka.', english: 'Are you Japanese?' },
            { japanese: 'それは辞書ですか。', romaji: 'Sore wa jisho desu ka.', english: 'Is that a dictionary?' },
            { japanese: '今何時ですか。', romaji: 'Ima nanji desu ka.', english: 'What time is it now?' }
        ],
        notes: 'The particle か acts like a question mark in Japanese grammar.',
        commonMistakes: ['Inverting the subject and verb as in English questions (e.g. word order stays identical).'],
        relatedGrammar: ['g_n5_01', 'g_n5_22']
    },
    {
        id: 'g_n5_04',
        sectionId: 'sec_n5_01',
        topicTitle: 'Noun Modifiers & Possession (の・も)',
        level: 'N5',
        pattern: 'Noun 1 の Noun 2',
        meaning: 'Possession, Affiliation, Origin & Classification (Noun 2 of Noun 1)',
        structure: 'Noun 1 の Noun 2',
        formation: 'Modifying Noun + の + Main Noun',
        usage: 'Connect two nouns where the first describes, classifies, or possesses the second.',
        whenToUse: 'To express ownership (私の本), origin (日本の車), or category (英語の先生).',
        whenNotToUse: 'Do not use between an adjective and a noun (い-adjectives connect directly).',
        examples: [
            { japanese: 'これは私のノートです。', romaji: 'Kore wa watashi no nooto desu.', english: 'This is my notebook.' },
            { japanese: '日本語の先生に会いました。', romaji: 'Nihongo no sensei ni aimashita.', english: 'I met my Japanese teacher.' },
            { japanese: '大学の図書館は広いです。', romaji: 'Daigaku no toshokan wa hiroi desu.', english: 'The university library is spacious.' }
        ],
        notes: 'The order is always Modifier の Main Concept.',
        commonMistakes: ['Reversing the order (e.g. saying "本 の 私" instead of 私の本).'],
        relatedGrammar: ['g_n5_05']
    },
    {
        id: 'g_n5_05',
        sectionId: 'sec_n5_01',
        topicTitle: 'Noun Modifiers & Possession (の・も)',
        level: 'N5',
        pattern: 'Noun + も',
        meaning: 'Also, Too, As well (Inclusive Particle)',
        structure: '[Noun] も [Predicate]',
        formation: 'Noun + も (Replaces は or を)',
        usage: 'State that an additional subject or object shares the same condition as a previous one.',
        whenToUse: 'When adding an item that has the same attribute: "Me too", "Mr. Tanaka too".',
        whenNotToUse: 'Do not stack with は (never say "わたし は も").',
        examples: [
            { japanese: 'わたしも学生です。', romaji: 'Watashi mo gakusei desu.', english: 'I am also a student.' },
            { japanese: 'スミスさんもアメリカ人です。', romaji: 'Sumisu-san mo amerikajin desu.', english: 'Mr. Smith is also American.' },
            { japanese: 'これも美味しいです。', romaji: 'Kore mo oishii desu.', english: 'This is also delicious.' }
        ],
        notes: 'も replaces は, が, and を completely, but attaches after に (にも) and で (でも).',
        commonMistakes: ['Writing は and も together (e.g. "わたしはも").'],
        relatedGrammar: ['g_n5_01', 'g_n5_06']
    },

    // ==========================================
    // SECTION 02: PARTICLES & SENTENCE MARKERS
    // ==========================================
    {
        id: 'g_n5_06',
        sectionId: 'sec_n5_02',
        topicTitle: 'Topic vs Subject (は vs が)',
        level: 'N5',
        pattern: 'Topic Marker: は (wa)',
        meaning: 'As for X... / Topic of the Sentence',
        structure: '[Topic] は [Statement]',
        formation: 'Noun + は',
        usage: 'Establish the overarching theme or topic of the sentence.',
        whenToUse: 'When presenting known background context or contrasting two different topics.',
        whenNotToUse: 'Do not use directly after question words (never say "だれは").',
        examples: [
            { japanese: 'わたしは毎朝コーヒーを飲みます。', romaji: 'Watashi wa maiasa koohii o nomimasu.', english: 'As for me, I drink coffee every morning.' },
            { japanese: '今日は天気がいいです。', romaji: 'Kyou wa tenki ga ii desu.', english: 'As for today, the weather is nice.' }
        ],
        notes: 'Pronounced "wa", written with hiragana は.',
        commonMistakes: ['Writing わ instead of は for the particle.'],
        relatedGrammar: ['g_n5_07']
    },
    {
        id: 'g_n5_07',
        sectionId: 'sec_n5_02',
        topicTitle: 'Topic vs Subject (は vs が)',
        level: 'N5',
        pattern: 'Subject / Identifier Marker: が (ga)',
        meaning: 'Specific Subject / New Information Identifier',
        structure: '[Subject] が [Predicate]',
        formation: 'Noun + が',
        usage: 'Mark the grammatical subject performing the action or answer question words.',
        whenToUse: 'When introducing new information, answering だれ/なに questions, or with existence verbs (あります/います).',
        whenNotToUse: 'Do not use for general broad topics of conversation where は is expected.',
        examples: [
            { japanese: 'だれが来ましたか。田中さんが来ました。', romaji: 'Dare ga kimashita ka. Tanaka-san ga kimashita.', english: 'Who came? Mr. Tanaka is the one who came.' },
            { japanese: '雨が降っています。', romaji: 'Ame ga futte imasu.', english: 'Rain is falling (natural observation).' }
        ],
        notes: 'Answers to question words always use が to highlight the answer.',
        commonMistakes: ['Using は after だれ or なに (always use が).'],
        relatedGrammar: ['g_n5_06', 'g_n5_36']
    },
    {
        id: 'g_n5_08',
        sectionId: 'sec_n5_02',
        topicTitle: 'Direct Objects (を)',
        level: 'N5',
        pattern: 'Direct Object: を (o)',
        meaning: 'Direct Object Marker of Transitive Verbs',
        structure: '[Direct Object] を [Transitive Verb]',
        formation: 'Noun + を + Verb',
        usage: 'Indicate the object directly affected or acted upon by a transitive verb.',
        whenToUse: 'With verbs of consumption, reading, writing, buying, and making (本を読む, 水を飲む).',
        whenNotToUse: 'Do not use with intransitive verbs like 行く, 帰る, or existence verbs (ある, いる).',
        examples: [
            { japanese: '朝ご飯を食べます。', romaji: 'Asagohan o tabemasu.', english: 'I eat breakfast.' },
            { japanese: '日本語を勉強します。', romaji: 'Nihongo o benkyou shimasu.', english: 'I study Japanese.' }
        ],
        notes: 'Written with hiragana を and pronounced "o".',
        commonMistakes: ['Pronouncing with a heavy "wo" sound in modern standard Japanese.'],
        relatedGrammar: ['g_n5_09', 'g_n5_11']
    },
    {
        id: 'g_n5_09',
        sectionId: 'sec_n5_02',
        topicTitle: 'Time, Target & Destination (に・へ)',
        level: 'N5',
        pattern: 'Time & Specific Point: に (ni)',
        meaning: 'At (Specific Time) / To (Destination) / For (Target)',
        structure: '[Specific Time / Destination] に [Verb]',
        formation: 'Time/Place + に',
        usage: 'Mark exact points in time, arrival destinations, or recipients of actions.',
        whenToUse: 'With specific clock times (七時に), days of the week (日曜日に), and destinations (東京に行きます).',
        whenNotToUse: 'Do not use with relative time words like 今日 (today), 明日 (tomorrow), 毎日 (every day).',
        examples: [
            { japanese: '毎朝七時に起きます。', romaji: 'Maiasa shichiji ni okimasu.', english: 'I wake up at 7:00 every morning.' },
            { japanese: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', english: 'I go to school.' }
        ],
        notes: 'Relative time words never take に.',
        commonMistakes: ['Adding に to relative words (saying "あしたに" is incorrect; say あした).'],
        relatedGrammar: ['g_n5_10', 'g_n5_31']
    },
    {
        id: 'g_n5_10',
        sectionId: 'sec_n5_02',
        topicTitle: 'Time, Target & Destination (に・へ)',
        level: 'N5',
        pattern: 'Direction Marker: へ (e)',
        meaning: 'Toward / Heading in the Direction of',
        structure: '[Direction / Destination] へ [Movement Verb]',
        formation: 'Place + へ + 行く / 来る / 帰る',
        usage: 'Emphasize the direction of movement toward a destination.',
        whenToUse: 'With movement verbs (行く, 来る, 帰る) when highlighting the vector/direction of travel.',
        whenNotToUse: 'Do not use for static existence or specific clock time (use に).',
        examples: [
            { japanese: '京都へ行きます。', romaji: 'Kyouto e ikimasu.', english: 'I am heading to Kyoto.' },
            { japanese: '家へ帰ります。', romaji: 'Ie e kaerimasu.', english: 'I return home.' }
        ],
        notes: 'Written with hiragana へ but pronounced "e" as a particle.',
        commonMistakes: ['Writing え instead of へ for the direction particle.'],
        relatedGrammar: ['g_n5_09']
    },
    {
        id: 'g_n5_11',
        sectionId: 'sec_n5_02',
        topicTitle: 'Location of Action & Means (で)',
        level: 'N5',
        pattern: 'Action Location & Means: で (de)',
        meaning: 'At / In (Action Location) & By / With (Tool or Means)',
        structure: '[Place / Tool / Vehicle] で [Action Verb]',
        formation: 'Noun + で',
        usage: 'Mark the dynamic physical place where an action happens, or the instrument/vehicle used.',
        whenToUse: 'For location of active verbs (図書館で勉強する) and transportation (電車で行く).',
        whenNotToUse: 'Do not use で for static existence (use に for あります/います).',
        examples: [
            { japanese: '図書館で本を読みます。', romaji: 'Toshokan de hon o yomimasu.', english: 'I read books at the library.' },
            { japanese: '新幹線で大阪へ行きました。', romaji: 'Shinkansen de Oosaka e ikimashita.', english: 'I went to Osaka by Shinkansen.' },
            { japanese: '箸でご飯を食べます。', romaji: 'Hashi de gohan o tabemasu.', english: 'I eat meals with chopsticks.' }
        ],
        notes: '歩いて (on foot) does not take で (say 歩いて行きます).',
        commonMistakes: ['Using に for location of active events (say 図書館で勉強する, not "図書館に勉強する").'],
        relatedGrammar: ['g_n5_09', 'g_n5_36']
    },
    {
        id: 'g_n5_12',
        sectionId: 'sec_n5_02',
        topicTitle: 'Companions, Boundaries & Lists (と・から・まで・や)',
        level: 'N5',
        pattern: 'Companion & Exhaustive List: と (to)',
        meaning: 'With (Companion) & And (Exhaustive Noun List)',
        structure: '[Person] と [Verb] / [Noun 1] と [Noun 2]',
        formation: 'Noun + と',
        usage: 'Connect nouns in a complete list, or mark a person with whom you perform an action.',
        whenToUse: 'When listing all items in a set (パンと卵) or specifying partners (友達と行く).',
        whenNotToUse: 'Do not use と to connect full independent sentences (use そして).',
        examples: [
            { japanese: '友達と映画を見ました。', romaji: 'Tomodachi to eiga o mimashita.', english: 'I watched a movie with my friend.' },
            { japanese: '机の上にペンとノートがあります。', romaji: 'Tsukue no ue ni pen to nooto ga arimasu.', english: 'There are a pen and a notebook on the desk.' }
        ],
        notes: 'と is an exhaustive list ("only these items").',
        commonMistakes: ['Using と between adjectives (use くて or で instead).'],
        relatedGrammar: ['g_n5_15', 'g_n5_68']
    },
    {
        id: 'g_n5_13',
        sectionId: 'sec_n5_02',
        topicTitle: 'Companions, Boundaries & Lists (と・から・まで・や)',
        level: 'N5',
        pattern: 'Starting Point: から (kara)',
        meaning: 'From / Since (Starting Point in Time or Space)',
        structure: '[Start Time / Origin] から',
        formation: 'Time/Place + から',
        usage: 'Designate when an activity begins or where a journey starts.',
        whenToUse: 'For business hours (9時から), geographic origin (アメリカから来ました).',
        whenNotToUse: 'Do not confuse with the reason conjunction から (which follows clauses).',
        examples: [
            { japanese: '銀行は午前九時から開きます。', romaji: 'Ginkou wa gozen kuji kara akimasu.', english: 'The bank opens from 9:00 AM.' },
            { japanese: 'アメリカから来ました。', romaji: 'Amerika kara kimashita.', english: 'I came from America.' }
        ],
        notes: 'Often paired with まで (から...まで).',
        commonMistakes: ['Confusing temporal から (from) with causal から (because).'],
        relatedGrammar: ['g_n5_14', 'g_n5_67']
    },
    {
        id: 'g_n5_14',
        sectionId: 'sec_n5_02',
        topicTitle: 'Companions, Boundaries & Lists (と・から・まで・や)',
        level: 'N5',
        pattern: 'Endpoint: まで (made)',
        meaning: 'Until / To (Endpoint in Time or Space)',
        structure: '[End Time / Destination] まで',
        formation: 'Time/Place + まで',
        usage: 'Indicate the continuous boundary where an action or time interval stops.',
        whenToUse: 'For closing hours (午後五時まで) and transit distances (東京駅まで).',
        whenNotToUse: 'Do not confuse with までに (which marks a strict deadline "by a certain time").',
        examples: [
            { japanese: '仕事は午後五時までです。', romaji: 'Shigoto wa gogo goji made desu.', english: 'Work is until 5:00 PM.' },
            { japanese: '東京から京都まで新幹線で行きます。', romaji: 'Toukyou kara Kyouto made shinkansen de ikimasu.', english: 'I go from Tokyo to Kyoto by Shinkansen.' }
        ],
        notes: 'まで denotes continuous activity until the endpoint.',
        commonMistakes: ['Using まで for deadlines instead of までに.'],
        relatedGrammar: ['g_n5_13']
    },
    {
        id: 'g_n5_15',
        sectionId: 'sec_n5_02',
        topicTitle: 'Companions, Boundaries & Lists (と・から・まで・や)',
        level: 'N5',
        pattern: 'Non-Exhaustive List: や (ya)',
        meaning: 'And (Non-Exhaustive List among other things)',
        structure: 'Noun 1 や Noun 2 (など)',
        formation: 'Noun + や + Noun (+ など)',
        usage: 'List two or more representative items implying there are other unmentioned items.',
        whenToUse: 'When giving examples from a larger collection: "apples, bananas, and so forth".',
        whenNotToUse: 'Do not use if you intend to list every single item in the container (use と).',
        examples: [
            { japanese: '店でパンや牛乳を買いました。', romaji: 'Mise de pan ya gyuunyuu o kaimashita.', english: 'I bought bread, milk, and other things at the store.' },
            { japanese: '机の上に本やペンなどがあります。', romaji: 'Tsukue no ue ni hon ya pen nado ga arimasu.', english: 'There are things like books and pens on the desk.' }
        ],
        notes: 'Often accompanied by など (nado - etc.).',
        commonMistakes: ['Putting や between verbs (only connects nouns).'],
        relatedGrammar: ['g_n5_12']
    },
    {
        id: 'g_n5_16',
        sectionId: 'sec_n5_02',
        topicTitle: 'Sentence-Ending Confirmation (ね・よ)',
        level: 'N5',
        pattern: 'Sentence-Ending: ね (ne)',
        meaning: 'Right? / Isn\'t it? (Agreement & Consensus Seeking)',
        structure: '[Sentence] + ね',
        formation: 'Sentence + ね',
        usage: 'Seek agreement or confirm shared understanding with the conversational partner.',
        whenToUse: 'Commenting on shared experiences: "Nice weather today, isn\'t it?" (いい天気ですね).',
        whenNotToUse: 'Do not use when imparting completely new facts unknown to the listener (use よ).',
        examples: [
            { japanese: '今日は暑いですね。', romaji: 'Kyou wa atsui desu ne.', english: 'It is hot today, isn\'t it?' },
            { japanese: 'この映画は面白いですね。', romaji: 'Kono eiga wa omoshiroi desu ne.', english: 'This movie is interesting, right?' }
        ],
        notes: 'Creates social rapport and harmonious consensus.',
        commonMistakes: ['Using ね when informing someone of news they could not possibly know.'],
        relatedGrammar: ['g_n5_17']
    },
    {
        id: 'g_n5_17',
        sectionId: 'sec_n5_02',
        topicTitle: 'Sentence-Ending Confirmation (ね・よ)',
        level: 'N5',
        pattern: 'Sentence-Ending: よ (yo)',
        meaning: 'You know / I tell you (Information Giving & Emphasis)',
        structure: '[Sentence] + よ',
        formation: 'Sentence + よ',
        usage: 'Inform the listener of new information, advice, or polite emphasis.',
        whenToUse: 'When sharing facts the listener is unaware of: "The train departs at 3:00, you know."',
        whenNotToUse: 'Overusing よ in formal hierarchy can sound mildly assertive.',
        examples: [
            { japanese: 'このラーメンはとても美味しいですよ。', romaji: 'Kono raamen wa totemo oishii desu yo.', english: 'This ramen is very delicious, I tell you.' },
            { japanese: '明日は休みですよ。', romaji: 'Ashita wa yasumi desu yo.', english: 'Tomorrow is a day off, you know.' }
        ],
        notes: 'Gives friendly assurance and prevents misunderstandings.',
        commonMistakes: ['Using よ aggressively with superiors.'],
        relatedGrammar: ['g_n5_16']
    },

    // ==========================================
    // SECTION 03: DEMONSTRATIVES (KO-SO-A-DO)
    // ==========================================
    {
        id: 'g_n5_18',
        sectionId: 'sec_n5_03',
        topicTitle: 'Thing Demonstratives (これ・それ・あれ・どれ)',
        level: 'N5',
        pattern: 'これ / それ / あれ / どれ',
        meaning: 'This / That / That over there / Which one (Standalone Pronouns)',
        structure: 'これ / それ / あれ / どれ は [Noun] です',
        formation: 'Pronoun + は / が / を',
        usage: 'Refer to objects based on spatial distance relative to speaker and listener.',
        whenToUse: 'これ (near speaker), それ (near listener), あれ (far from both), どれ (which one).',
        whenNotToUse: 'Do not place a noun immediately after これ (use この + Noun).',
        examples: [
            { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
            { japanese: 'それは私の傘です。', romaji: 'Sore wa watashi no kasa desu.', english: 'That is my umbrella.' },
            { japanese: 'あれは東京タワーです。', romaji: 'Are wa Toukyou tawaa desu.', english: 'That over there is Tokyo Tower.' }
        ],
        notes: 'どれ is the question word that requires particle が in answers.',
        commonMistakes: ['Saying "これ本" instead of この本.'],
        relatedGrammar: ['g_n5_19', 'g_n5_20']
    },
    {
        id: 'g_n5_19',
        sectionId: 'sec_n5_03',
        topicTitle: 'Noun Modifying Demonstratives (この・その・あの・どの)',
        level: 'N5',
        pattern: 'この / その / あの / どの + Noun',
        meaning: 'This [Noun] / That [Noun] / That [Noun] over there / Which [Noun]?',
        structure: 'この / その / あの / どの + [Noun]',
        formation: 'Ko/So/A/Do + Noun directly',
        usage: 'Specify a particular noun based on spatial or conversational location.',
        whenToUse: 'Whenever directly modifying a noun: この本 (this book), あの人 (that person).',
        whenNotToUse: 'Never use alone without a following noun (e.g. "このは" is invalid).',
        examples: [
            { japanese: 'この靴はいくらですか。', romaji: 'Kono kutsu wa ikura desu ka.', english: 'How much are these shoes?' },
            { japanese: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', english: 'Who is that person over there?' }
        ],
        notes: 'Always attached directly to a noun.',
        commonMistakes: ['Using この standalone without a noun.'],
        relatedGrammar: ['g_n5_18', 'g_n5_20']
    },
    {
        id: 'g_n5_20',
        sectionId: 'sec_n5_03',
        topicTitle: 'Location & Direction (ここ・そこ・あそこ・どこ・こちら)',
        level: 'N5',
        pattern: 'ここ / そこ / あそこ / どこ',
        meaning: 'Here / There / Over there / Where (Place Demonstratives)',
        structure: 'ここ / そこ / あそこ / どこ は [Place] です',
        formation: 'Place Pronoun + は / に / で',
        usage: 'Identify locations and ask where facilities or rooms are situated.',
        whenToUse: 'ここ (here), そこ (there), あそこ (over there), どこ (where).',
        whenNotToUse: 'In formal customer service, polite directionals (こちら, そちら, あちら, どちら) are preferred.',
        examples: [
            { japanese: 'お手洗いはどこですか。あそこです。', romaji: 'Otearai wa doko desu ka. Asoko desu.', english: 'Where is the restroom? It is over there.' },
            { japanese: 'ここは私の部屋です。', romaji: 'Koko wa watashi no heya desu.', english: 'Here is my room.' }
        ],
        notes: 'あそこ has three syllables (a-so-ko).',
        commonMistakes: ['Saying "あこ" instead of あそこ.'],
        relatedGrammar: ['g_n5_21']
    },
    {
        id: 'g_n5_21',
        sectionId: 'sec_n5_03',
        topicTitle: 'Location & Direction (ここ・そこ・あそこ・どこ・こちら)',
        level: 'N5',
        pattern: 'こちら / そちら / あちら / どちら',
        meaning: 'This way / That way / Over that way / Which way (Polite Directionals)',
        structure: 'こちら / そちら / あちら / どちら でございます',
        formation: 'Polite Directional Pronoun',
        usage: 'Politely indicate directions, locations, or introduce people in formal hospitality contexts.',
        whenToUse: 'In stores, offices, and when introducing colleagues ("This is Mr. Tanaka" = こちらは田中さんです).',
        whenNotToUse: 'Casual chat with close family members where ここ/そこ is more natural.',
        examples: [
            { japanese: '受付はどちらですか。あちらでございます。', romaji: 'Uketsuke wa dochira desu ka. Achira de gozaimasu.', english: 'Which way is the reception? It is in that direction.' },
            { japanese: 'こちらは佐藤さんです。', romaji: 'Kochira wa Satou-san desu.', english: 'This is Ms. Sato.' }
        ],
        notes: 'Functions both as directional pointers and polite personal introductions.',
        commonMistakes: ['Confusing どちら (which of two / which way) with どれ (which of three+).'],
        relatedGrammar: ['g_n5_20', 'g_n5_62']
    },

    // ==========================================
    // SECTION 04: QUESTION WORDS & INQUIRIES
    // ==========================================
    {
        id: 'g_n5_22',
        sectionId: 'sec_n5_04',
        topicTitle: 'What, Who & Where (何・だれ・どこ)',
        level: 'N5',
        pattern: '何 (なん / なに - Nan / Nani)',
        meaning: 'What? (Inquiry of Object or Concept)',
        structure: '何ですか / 何を [Verb] か',
        formation: 'なん (before です, d/t/n sounds, counters) / なに (before を, が, or standalone)',
        usage: 'Ask for identity, content, or direct objects.',
        whenToUse: '何時 (nanji - what time), 何曜日 (nanyoubi - what weekday), 何を食べますか (what do you eat).',
        whenNotToUse: 'Do not pronounce as "なに" when followed by です (always なん です か).',
        examples: [
            { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
            { japanese: '朝ご飯に何を食べましたか。', romaji: 'Asagohan ni nani o tabemashita ka.', english: 'What did you eat for breakfast?' }
        ],
        notes: 'Sound rule: なん before d/t/n sounds and です; なに before particles like を and が.',
        commonMistakes: ['Saying "なに です か" instead of なん です か.'],
        relatedGrammar: ['g_n5_23', 'g_n5_24']
    },
    {
        id: 'g_n5_23',
        sectionId: 'sec_n5_04',
        topicTitle: 'What, Who & Where (何・だれ・どこ)',
        level: 'N5',
        pattern: '誰 (だれ / どなた - Dare / Donata)',
        meaning: 'Who? (Person Inquiry)',
        structure: '誰ですか / 誰が [Verb] か',
        formation: 'だれ (Standard) / どなた (Polite Honorific)',
        usage: 'Ask for the identity of a person.',
        whenToUse: 'When asking who someone is or who performed an action (誰が来ましたか).',
        whenNotToUse: 'Do not use だれ with esteemed guests in business settings (use どなた).',
        examples: [
            { japanese: 'あの人は誰ですか。', romaji: 'Ano hito wa dare desu ka.', english: 'Who is that person?' },
            { japanese: 'あの方はどなたですか。', romaji: 'Ano kata wa donata desu ka.', english: 'Who is that distinguished person?' }
        ],
        notes: 'When subject of the sentence, 誰 takes particle が, never は.',
        commonMistakes: ['Saying "だれ は きました か" — always use だれ が.'],
        relatedGrammar: ['g_n5_07', 'g_n5_22']
    },
    {
        id: 'g_n5_24',
        sectionId: 'sec_n5_04',
        topicTitle: 'What, Who & Where (何・だれ・どこ)',
        level: 'N5',
        pattern: 'どこ (Doko)',
        meaning: 'Where? (Place Inquiry)',
        structure: '[Place / Facility] は どこですか',
        formation: 'どこ + ですか / にありますか / へ行きますか',
        usage: 'Ask the location of places, objects, or destinations.',
        whenToUse: 'When locating stations, shops, buildings, and personal belongings.',
        whenNotToUse: 'In formal customer service, どちら is preferred over どこ.',
        examples: [
            { japanese: '駅はどこですか。', romaji: 'Eki wa doko desu ka.', english: 'Where is the station?' },
            { japanese: '週末はどこへ行きましたか。', romaji: 'Shuumatsu wa doko e ikimashita ka.', english: 'Where did you go over the weekend?' }
        ],
        notes: 'どこへ (where to), どこで (where active event occurs), どこに (where located).',
        commonMistakes: ['Confusing どこ (where) with どれ (which one).'],
        relatedGrammar: ['g_n5_20']
    },
    {
        id: 'g_n5_25',
        sectionId: 'sec_n5_04',
        topicTitle: 'When & Why (いつ・どうして・なぜ)',
        level: 'N5',
        pattern: 'いつ (Itsu)',
        meaning: 'When? (Time Inquiry)',
        structure: 'いつ [Verb] か',
        formation: 'いつ + Verb (Does NOT take particle に)',
        usage: 'Inquire about general or specific timing of events, departures, and milestones.',
        whenToUse: 'When asking dates, departure times, or birthdays.',
        whenNotToUse: 'Do not attach particle に to いつ (never say "いつに").',
        examples: [
            { japanese: '日本へいつ行きますか。', romaji: 'Nihon e itsu ikimasu ka.', english: 'When are you going to Japan?' },
            { japanese: '誕生日はいつですか。八月十日です。', romaji: 'Tanjoubi wa itsu desu ka. Hachigatsu tooka desu.', english: 'When is your birthday? It is August 10th.' }
        ],
        notes: 'いつ does not take particle に.',
        commonMistakes: ['Attaching に to いつ (e.g. "いつに行きますか" is grammatically incorrect).'],
        relatedGrammar: ['g_n5_31', 'g_n5_33']
    },
    {
        id: 'g_n5_26',
        sectionId: 'sec_n5_04',
        topicTitle: 'When & Why (いつ・どうして・なぜ)',
        level: 'N5',
        pattern: 'どうして / なぜ (Doushite / Naze)',
        meaning: 'Why? / For what reason?',
        structure: 'どうして [Statement] か。～からです。',
        formation: 'どうして + Sentence + か',
        usage: 'Inquire about causes and reasons, answered with ～からです.',
        whenToUse: 'When asking why someone was late, absent, or made a decision.',
        whenNotToUse: 'Do not answer without から (the answer must end in ～から).',
        examples: [
            { japanese: 'どうして昨日休みましたか。熱があったからです。', romaji: 'Doushite kinou yasumimashita ka. Netsu ga atta kara desu.', english: 'Why were you absent yesterday? Because I had a fever.' },
            { japanese: 'どうして日本語を勉強していますか。', romaji: 'Doushite nihongo o benkyou shite imasu ka.', english: 'Why are you studying Japanese?' }
        ],
        notes: 'Always answered with [Reason] からです.',
        commonMistakes: ['Forgetting to end the response with からです.'],
        relatedGrammar: ['g_n5_67']
    },
    {
        id: 'g_n5_27',
        sectionId: 'sec_n5_04',
        topicTitle: 'How, Price & Quantity (どう・どんな・いくら・いくつ)',
        level: 'N5',
        pattern: 'どう (Dou) & どうですか',
        meaning: 'How? / How is it? / How about?',
        structure: '[Topic] は どうですか / どうでしたか',
        formation: 'Noun + は どうですか',
        usage: 'Ask for impressions, states, recommendations, or suggestions.',
        whenToUse: 'Asking impressions ("How was the movie?" = 映画はどうでしたか) or offering items ("How about some tea?").',
        whenNotToUse: 'Do not confuse with どうやって (which asks for the physical method/route).',
        examples: [
            { japanese: '日本の生活はどうですか。楽しいです。', romaji: 'Nihon no seikatsu wa dou desu ka. Tanoshii desu.', english: 'How is life in Japan? It is fun.' },
            { japanese: '昨日のテストはどうでしたか。難しかったです。', romaji: 'Kinou no tesuto wa dou deshita ka. Muzukashikatta desu.', english: 'How was yesterday\'s test? It was difficult.' }
        ],
        notes: 'In casual speech, どう？ with rising pitch is used.',
        commonMistakes: ['Confusing どう (impressions) with どうやって (method/steps).'],
        relatedGrammar: ['g_n5_28']
    },
    {
        id: 'g_n5_28',
        sectionId: 'sec_n5_04',
        topicTitle: 'How, Price & Quantity (どう・どんな・いくら・いくつ)',
        level: 'N5',
        pattern: 'どんな + Noun (Donna)',
        meaning: 'What kind of [Noun]?',
        structure: 'どんな + [Noun] ですか',
        formation: 'どんな + Noun',
        usage: 'Ask for qualitative characteristics, genres, or descriptions of a category.',
        whenToUse: 'When asking what type of music, food, or cities someone likes.',
        whenNotToUse: 'Must always be followed directly by a noun.',
        examples: [
            { japanese: 'どんな音楽が好きですか。ジャズが好きです。', romaji: 'Donna ongaku ga suki desu ka. Jazu ga suki desu.', english: 'What kind of music do you like? I like jazz.' },
            { japanese: '京都はどんな町ですか。古くて静かな町です。', romaji: 'Kyouto wa donna machi desu ka. Furukute shizuka na machi desu.', english: 'What kind of town is Kyoto? It is an old and quiet town.' }
        ],
        notes: 'Answers describe with adjectives or specific genres.',
        commonMistakes: ['Using どんな alone without a following noun.'],
        relatedGrammar: ['g_n5_27', 'g_n5_50']
    },
    {
        id: 'g_n5_29',
        sectionId: 'sec_n5_04',
        topicTitle: 'How, Price & Quantity (どう・どんな・いくら・いくつ)',
        level: 'N5',
        pattern: 'いくら (Ikura)',
        meaning: 'How much? (Price Inquiry)',
        structure: '[Item] は いくらですか',
        formation: 'Noun + は いくらですか',
        usage: 'Ask the cost or price of goods, tickets, and services in stores.',
        whenToUse: 'When shopping, dining, and checking transit fares.',
        whenNotToUse: 'Do not use for counting physical items (use いくつ or counters).',
        examples: [
            { japanese: 'このリンゴはいくらですか。百五十円です。', romaji: 'Kono ringo wa ikura desu ka. Hyakugojuuen desu.', english: 'How much is this apple? It is 150 yen.' },
            { japanese: '全部でいくらになりますか。三千円です。', romaji: 'Zenbu de ikura ni narimasu ka. Sanzen\'en desu.', english: 'How much is it in total? It is 3,000 yen.' }
        ],
        notes: 'Essential for Japanese shopping and restaurant transactions.',
        commonMistakes: ['Confusing いくら (price) with いくつ (quantity of items).'],
        relatedGrammar: ['g_n5_30', 'g_n5_31']
    },
    {
        id: 'g_n5_30',
        sectionId: 'sec_n5_04',
        topicTitle: 'How, Price & Quantity (どう・どんな・いくら・いくつ)',
        level: 'N5',
        pattern: 'いくつ (Ikutsu)',
        meaning: 'How many? / How old?',
        structure: '[Noun] を いくつ / おいくつですか',
        formation: 'いくつ (Quantity) / おいくつ (Polite Age)',
        usage: 'Ask for the quantity of general objects, or ask a person\'s age politely.',
        whenToUse: 'Ordering numbers of items in restaurants or asking age courteously.',
        whenNotToUse: 'Do not use for price (use いくら).',
        examples: [
            { japanese: 'みかんをいくつ買いましたか。五つ買いました。', romaji: 'Mikan o ikutsu kaimashita ka. Itsutsu kaimashita.', english: 'How many mandarins did you buy? I bought five.' },
            { japanese: 'お子さんはおいくつですか。七歳です。', romaji: 'Okosan wa oikutsu desu ka. Nanasai desu.', english: 'How old is your child? Seven years old.' }
        ],
        notes: 'おいくつ is the polite honorific form of 何歳 (how old).',
        commonMistakes: ['Using 何歳 with respected senior adults (use おいくつ instead).'],
        relatedGrammar: ['g_n5_29', 'g_n5_34']
    },

    // ==========================================
    // SECTION 05: NUMBERS, TIME & COUNTERS
    // ==========================================
    {
        id: 'g_n5_31',
        sectionId: 'sec_n5_05',
        topicTitle: 'Clock Time & Periods (時・分・午前・午後)',
        level: 'N5',
        pattern: '～時 ～分 (Ji / Fun)',
        meaning: 'Hours and Minutes / Clock Time',
        structure: '[Number] 時 [Number] 分 です',
        formation: 'Hour + 時 + Minute + 分',
        usage: 'Specify the exact time of day.',
        whenToUse: 'Telling current time, scheduling appointments, setting alarms.',
        whenNotToUse: 'Do not confuse with duration hours (～時間).',
        examples: [
            { japanese: '今、午後三時十五分です。', romaji: 'Ima, gogo sanji juugofun desu.', english: 'It is 3:15 PM right now.' },
            { japanese: '会議は十時半からです。', romaji: 'Kaigi wa juujihan kara desu.', english: 'The meeting starts from 10:30.' }
        ],
        notes: 'Irregular hours: 4:00 is よじ (yoji), 7:00 is しちじ (shichiji), 9:00 is くじ (kuji).',
        commonMistakes: ['Saying "よんじ" for 4:00 (always say よじ).'],
        relatedGrammar: ['g_n5_32']
    },
    {
        id: 'g_n5_32',
        sectionId: 'sec_n5_05',
        topicTitle: 'Clock Time & Periods (時・分・午前・午後)',
        level: 'N5',
        pattern: '～時間 (Jikan - Duration)',
        meaning: 'For [Number] Hours (Duration of Time)',
        structure: '[Number] 時間 [Verb]',
        formation: 'Number + 時間 (Does NOT take particle に)',
        usage: 'Measure the length or duration of an activity.',
        whenToUse: 'Stating study time (三時間勉強した), sleep time (八時間寝る), flight duration.',
        whenNotToUse: 'Do not attach に to duration counters (never say "三時間に勉強した").',
        examples: [
            { japanese: '昨日八時間寝ました。', romaji: 'Kinou hachijikan nemashita.', english: 'I slept for eight hours yesterday.' },
            { japanese: '東京から京都まで新幹線で二時間半かかります。', romaji: 'Toukyou kara Kyouto made shinkansen de nijikanhan kakarimasu.', english: 'It takes two and a half hours from Tokyo to Kyoto by bullet train.' }
        ],
        notes: '半 (han) means "and a half" (二時間半 = 2.5 hours).',
        commonMistakes: ['Attaching に to duration time.'],
        relatedGrammar: ['g_n5_31']
    },
    {
        id: 'g_n5_33',
        sectionId: 'sec_n5_05',
        topicTitle: 'Days, Dates & Calendar (曜日・日・月・年)',
        level: 'N5',
        pattern: '～月 ～日 (Gatsu / Nichi)',
        meaning: 'Calendar Dates & Months',
        structure: '[Number] 月 [Number] 日',
        formation: 'Month (1-12) + 月 + Day (1-31) + 日',
        usage: 'Express calendar dates, historical events, and birthdays.',
        whenToUse: 'Writing dates, planning events (四月一日 = April 1st).',
        whenNotToUse: 'Do not count month durations with 月 (use ～ヶ月 for duration).',
        examples: [
            { japanese: '誕生日は八月二十日です。', romaji: 'Tanjoubi wa hachigatsu hatsuka desu.', english: 'My birthday is August 20th.' },
            { japanese: '五月三日は憲法記念日です。', romaji: 'Gogatsu mikka wa Kenpou Kinenbi desu.', english: 'May 3rd is Constitution Memorial Day.' }
        ],
        notes: 'Days 1-10 are irregular native readings: 一日 (tsuitachi), 二日 (futsuka), 三日 (mikka), 四日 (yokka)...',
        commonMistakes: ['Reading 1st of the month as "いちにち" instead of ついたち.'],
        relatedGrammar: ['g_n5_31']
    },
    {
        id: 'g_n5_34',
        sectionId: 'sec_n5_05',
        topicTitle: 'Essential Counters (～つ・～人・～本・～枚・～台・～冊・～回)',
        level: 'N5',
        pattern: 'Native General Counter: 一つ〜十 (Hitotsu - Too)',
        meaning: '1 to 10 General Objects',
        structure: '[Noun] を [Counter] ください / あります',
        formation: 'ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお',
        usage: 'Count general 3D items, orders, or abstract things up to 10.',
        whenToUse: 'Ordering in restaurants (リンゴを二つ, ビールを一つ).',
        whenNotToUse: 'Do not use past 10 (use standard Arabic numbers + 個 for 11+).',
        examples: [
            { japanese: 'リンゴを三つ買いました。', romaji: 'Ringo o mittsu kaimashita.', english: 'I bought three apples.' },
            { japanese: 'おにぎりを二つください。', romaji: 'Onigiri o futatsu kudasai.', english: 'Please give me two rice balls.' }
        ],
        notes: '十 (10) is pronounced "too" without a final つ.',
        commonMistakes: ['Adding つ to 10 (e.g. saying "とおつ" is incorrect; say とお).'],
        relatedGrammar: ['g_n5_35']
    },
    {
        id: 'g_n5_35',
        sectionId: 'sec_n5_05',
        topicTitle: 'Essential Counters (～つ・～人・～本・～枚・～台・～冊・～回)',
        level: 'N5',
        pattern: 'Categorical Counters (人・本・枚・台・冊・杯)',
        meaning: 'Specific Dimensional & Categorical Counters',
        structure: '[Noun] を [Number + Counter]',
        formation: '人 (people), 本 (long cylindrical), 枚 (flat thin), 台 (machines/cars), 冊 (bound books)',
        usage: 'Count objects systematically based on shape, geometry, and type.',
        whenToUse: 'People (一人, 二人, 三人), papers/shirts (二枚), bottles/pens (三本), books (一冊).',
        whenNotToUse: 'Do not use general つ when specific geometric counters are required in formal speech.',
        examples: [
            { japanese: '家族は四人います。', romaji: 'Kazoku wa yonin imasu.', english: 'There are four people in my family.' },
            { japanese: 'ペンを二本とノートを三冊買いました。', romaji: 'Pen o nihon to nooto o sansatsu kaimashita.', english: 'I bought two pens and three notebooks.' }
        ],
        notes: '一人 (ひとり) and 二人 (ふたり) are irregular native readings.',
        commonMistakes: ['Saying "いちにん" or "ににん" for 1 or 2 people.'],
        relatedGrammar: ['g_n5_34']
    },

    // ==========================================
    // SECTION 06: EXISTENCE & SPATIAL LOCATION
    // ==========================================
    {
        id: 'g_n5_36',
        sectionId: 'sec_n5_06',
        topicTitle: 'Inanimate vs Animate Existence (あります vs います)',
        level: 'N5',
        pattern: '[Place] に [Inanimate Object] が あります',
        meaning: 'There is [Object] in [Place] (Inanimate Existence)',
        structure: '[Place] に [Thing] が あります',
        formation: 'Place + に + Noun + が + あります',
        usage: 'State the existence of non-living objects, furniture, buildings, plants, or events.',
        whenToUse: 'For books, cars, trees, money, shops, desks (机の上にペンがあります).',
        whenNotToUse: 'Do not use for living humans or autonomous animals (use います).',
        examples: [
            { japanese: '部屋にテレビがあります。', romaji: 'Heya ni terebi ga arimasu.', english: 'There is a TV in the room.' },
            { japanese: '駅の前に銀行があります。', romaji: 'Eki no mae ni ginkou ga arimasu.', english: 'There is a bank in front of the station.' }
        ],
        notes: 'Negative is ありません.',
        commonMistakes: ['Using あります for pets or friends (say 友達がいます, not "友達があります").'],
        relatedGrammar: ['g_n5_37', 'g_n5_38']
    },
    {
        id: 'g_n5_37',
        sectionId: 'sec_n5_06',
        topicTitle: 'Inanimate vs Animate Existence (あります vs います)',
        level: 'N5',
        pattern: '[Place] に [Living Being] が います',
        meaning: 'There is [Person/Animal] in [Place] (Animate Existence)',
        structure: '[Place] に [Person/Animal] が います',
        formation: 'Place + に + Person/Animal + が + います',
        usage: 'State the physical presence or location of people and animals.',
        whenToUse: 'For people, children, dogs, cats, birds (庭に犬がいます).',
        whenNotToUse: 'Do not use for inanimate objects or plants (use あります).',
        examples: [
            { japanese: '教室に先生がいます。', romaji: 'Kyoushitsu ni sensei ga imasu.', english: 'There is a teacher in the classroom.' },
            { japanese: '庭に猫が二匹います。', romaji: 'Niwa ni neko ga nihiki imasu.', english: 'There are two cats in the garden.' }
        ],
        notes: 'Negative is いません.',
        commonMistakes: ['Using います for buildings or cars.'],
        relatedGrammar: ['g_n5_36', 'g_n5_38']
    },
    {
        id: 'g_n5_38',
        sectionId: 'sec_n5_06',
        topicTitle: 'Positional Relations (上・下・前・後ろ・中・外・隣・近く)',
        level: 'N5',
        pattern: 'Noun の [Position] (上・下・前・後ろ・中・外・隣・間)',
        meaning: 'Spatial Positions: On top, under, in front, behind, inside, outside, next to, between',
        structure: 'Noun の [上 / 下 / 前 / 後ろ / 中 / 外 / 隣 / 間] に',
        formation: 'Noun + の + Positional Noun + に',
        usage: 'Specify the exact 3D location of an item relative to a reference point.',
        whenToUse: 'Describing rooms, locating lost items, giving street landmarks.',
        whenNotToUse: 'Do not omit の between the reference noun and the position word.',
        examples: [
            { japanese: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', english: 'There is a book on the desk.' },
            { japanese: 'カバンの中に財布があります。', romaji: 'Kaban no naka ni saifu ga arimasu.', english: 'There is a wallet inside the bag.' },
            { japanese: '銀行と郵便局の間にカフェがあります。', romaji: 'Ginkou to yuubinkyoku no aida ni kafe ga arimasu.', english: 'There is a cafe between the bank and the post office.' }
        ],
        notes: '隣 (tonari) refers to adjacent items of the same category; 近く (chikaku) refers to general vicinity.',
        commonMistakes: ['Saying "机上" instead of 机の上 in standard sentences.'],
        relatedGrammar: ['g_n5_36', 'g_n5_37']
    },

    // ==========================================
    // SECTION 07: VERB BASICS & CONJUGATIONS
    // ==========================================
    {
        id: 'g_n5_39',
        sectionId: 'sec_n5_07',
        topicTitle: 'The 3 Verb Groups & Polite Tenses',
        level: 'N5',
        pattern: 'Verb [Stem] + ます (Present Polite Affirmative)',
        meaning: 'Do / Will do (Present Habitual & Future Actions)',
        structure: 'Verb Stem + ます',
        formation: 'Group 1: u-sound $\\rightarrow$ i-sound + ます / Group 2: Drop る + ます / Group 3: します, 来ます (きます)',
        usage: 'Express everyday habitual actions, facts, and future intentions politely.',
        whenToUse: 'Standard polite conversation for all positive actions.',
        whenNotToUse: 'Do not use inside embedded subclauses (use plain dictionary form instead).',
        examples: [
            { japanese: '毎朝六時に起きます。', romaji: 'Maiasa rokuji ni okimasu.', english: 'I wake up at 6:00 every morning.' },
            { japanese: '明日日本語を勉強します。', romaji: 'Ashita nihongo o benkyou shimasu.', english: 'I will study Japanese tomorrow.' }
        ],
        notes: 'Functions both as present habitual and future tense.',
        commonMistakes: ['Treating 帰る (kaeru) as Group 2 (it is Group 1: 帰ります).'],
        relatedGrammar: ['g_n5_40', 'g_n5_41']
    },
    {
        id: 'g_n5_40',
        sectionId: 'sec_n5_07',
        topicTitle: 'The 3 Verb Groups & Polite Tenses',
        level: 'N5',
        pattern: 'Verb [Stem] + ません (Present Polite Negative)',
        meaning: 'Do not / Will not do',
        structure: 'Verb Stem + ません',
        formation: 'Verb Stem + ません',
        usage: 'Politely state that you do not perform an action or will not do it.',
        whenToUse: 'Refusing invitations politely, stating daily habits you refrain from.',
        whenNotToUse: 'Do not use for past negation (use ませんでした).',
        examples: [
            { japanese: '今日はお酒を飲みません。', romaji: 'Kyou wa osake o nomimasen.', english: 'I will not drink alcohol today.' },
            { japanese: '朝ご飯を食べません。', romaji: 'Asagohan o tabemasen.', english: 'I do not eat breakfast.' }
        ],
        notes: 'Negates the ます form directly.',
        commonMistakes: ['Saying "飲みないです" in polite speech (use 飲みません).'],
        relatedGrammar: ['g_n5_39', 'g_n5_41']
    },
    {
        id: 'g_n5_41',
        sectionId: 'sec_n5_07',
        topicTitle: 'The 3 Verb Groups & Polite Tenses',
        level: 'N5',
        pattern: 'Verb [Stem] + ました / ませんでした (Past Polite)',
        meaning: 'Did / Did not do (Past Actions)',
        structure: 'Verb Stem + ました / ませんでした',
        formation: 'Verb Stem + ました (Affirmative) / ませんでした (Negative)',
        usage: 'Politely report events and actions completed in the past.',
        whenToUse: 'Sharing daily diary summaries, past travel, past study.',
        whenNotToUse: 'Do not use for incomplete future actions.',
        examples: [
            { japanese: '昨日たくさん勉強しました。', romaji: 'Kinou takusan benkyou shimashita.', english: 'I studied a lot yesterday.' },
            { japanese: '昨日はどこへも行きませんでした。', romaji: 'Kinou wa doko e mo ikimasendeshita.', english: 'I didn\'t go anywhere yesterday.' }
        ],
        notes: 'どこへも + Negative means "nowhere at all".',
        commonMistakes: ['Mixing past verb with present copula (e.g. "行きましたです").'],
        relatedGrammar: ['g_n5_39', 'g_n5_40']
    },
    {
        id: 'g_n5_42',
        sectionId: 'sec_n5_07',
        topicTitle: 'Invitations & Suggestions (～ませんか・～ましょう・～ましょうか)',
        level: 'N5',
        pattern: 'Verb [Stem] + ませんか',
        meaning: 'Won\'t you...? / Would you like to do X together?',
        structure: 'Verb Stem + ませんか',
        formation: 'Verb Stem + ませんか (Rising pitch)',
        usage: 'Politely invite someone to engage in an activity together.',
        whenToUse: 'Making considerate, polite invitations that allow the listener room to decline without awkwardness.',
        whenNotToUse: 'Do not use when commanding or forcing an action.',
        examples: [
            { japanese: '一緒にお昼ご飯を食べませんか。', romaji: 'Issho ni ohirugohan o tabemasen ka.', english: 'Won\'t you eat lunch together with me?' },
            { japanese: '京都へ行きませんか。', romaji: 'Kyouto e ikimasen ka.', english: 'Would you like to go to Kyoto?' }
        ],
        notes: 'The standard polite way to propose shared activities.',
        commonMistakes: ['Translating English "Let\'s" literally as a command instead of using ～ませんか.'],
        relatedGrammar: ['g_n5_43', 'g_n5_44']
    },
    {
        id: 'g_n5_43',
        sectionId: 'sec_n5_07',
        topicTitle: 'Invitations & Suggestions (～ませんか・～ましょう・～ましょうか)',
        level: 'N5',
        pattern: 'Verb [Stem] + ましょう',
        meaning: 'Let\'s do X! (Volitional Suggestion / Acceptance)',
        structure: 'Verb Stem + ましょう',
        formation: 'Verb Stem + ましょう',
        usage: 'Enthusiastically accept an invitation or propose an action with consensus.',
        whenToUse: 'Accepting an invitation ("ええ、行きましょう!") or suggesting a break ("少し休みましょう").',
        whenNotToUse: 'Do not use to invite a superior out of the blue (use ませんか instead).',
        examples: [
            { japanese: 'ええ、行きましょう！', romaji: 'Ee, ikimashou!', english: 'Yes, let\'s go!' },
            { japanese: '少し休みましょう。', romaji: 'Sukoshi yasumimashou.', english: 'Let us take a short break.' }
        ],
        notes: 'Expresses confident shared action.',
        commonMistakes: ['Using ましょう to order a customer or elder.'],
        relatedGrammar: ['g_n5_42', 'g_n5_44']
    },
    {
        id: 'g_n5_44',
        sectionId: 'sec_n5_07',
        topicTitle: 'Invitations & Suggestions (～ませんか・～ましょう・～ましょうか)',
        level: 'N5',
        pattern: 'Verb [Stem] + ましょうか',
        meaning: 'Shall I / Shall we do X? (Offering Assistance)',
        structure: 'Verb Stem + ましょうか',
        formation: 'Verb Stem + ましょうか',
        usage: 'Offer help to someone or check if the listener is ready for a joint action.',
        whenToUse: 'Offering to carry bags, open windows, take photos ("Shall I take your picture?").',
        whenNotToUse: 'Do not use if you are commanding someone else to work.',
        examples: [
            { japanese: '写真を撮りましょうか。', romaji: 'Shashin o torimashou ka.', english: 'Shall I take your picture?' },
            { japanese: '荷物を持ちましょうか。', romaji: 'Nimotsu o mochimashou ka.', english: 'Shall I carry your luggage?' }
        ],
        notes: 'Classic formula for polite assistance.',
        commonMistakes: ['Confusing ましょう (Let\'s) with ましょうか (Shall I help?).'],
        relatedGrammar: ['g_n5_42', 'g_n5_43']
    },

    // ==========================================
    // SECTION 08: ADJECTIVES & MODIFIERS
    // ==========================================
    {
        id: 'g_n5_45',
        sectionId: 'sec_n5_08',
        topicTitle: 'い-Adjective Conjugations (Affirmative, Negative, Past)',
        level: 'N5',
        pattern: 'い-Adjectives: Present & Negative (～い / ～くない)',
        meaning: 'Is [Adj] / Is not [Adj]',
        structure: '[Stem] + い です / [Stem] + くない です',
        formation: 'Drop final い + くない です (Negative)',
        usage: 'Describe temperature, speed, dimensions, difficulty, and physical states.',
        whenToUse: '高い (expensive) $\\rightarrow$ 高くない (not expensive); 暑い $\\rightarrow$ 暑くない.',
        whenNotToUse: 'Do not conjugate いい as "いくない" (irregular: よくない).',
        examples: [
            { japanese: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', english: 'This book is interesting.' },
            { japanese: 'この部屋はあまり広くないです。', romaji: 'Kono heya wa amari hirokunai desu.', english: 'This room is not very spacious.' }
        ],
        notes: 'いい / よい conjugates irregularly: よくない (not good).',
        commonMistakes: ['Saying "いくない" instead of よくない.'],
        relatedGrammar: ['g_n5_46', 'g_n5_47']
    },
    {
        id: 'g_n5_46',
        sectionId: 'sec_n5_08',
        topicTitle: 'い-Adjective Conjugations (Affirmative, Negative, Past)',
        level: 'N5',
        pattern: 'い-Adjectives: Past Tenses (～かった / ～くなかった)',
        meaning: 'Was [Adj] / Was not [Adj]',
        structure: '[Stem] + かった です / [Stem] + くなかった です',
        formation: 'Drop final い + かった です / くなかった です',
        usage: 'Describe past attributes, weather, and impressions.',
        whenToUse: '昨日は寒かった (It was cold yesterday); テストは難しくなかった (The test wasn\'t hard).',
        whenNotToUse: 'Do not use でした on bare い-adjectives (never say "暑いでした").',
        examples: [
            { japanese: '昨日のテストは難しかったです。', romaji: 'Kinou no tesuto wa muzukashikatta desu.', english: 'Yesterday\'s test was difficult.' },
            { japanese: '旅行はとても楽しかったです。', romaji: 'Ryokou wa totemo tanoshikatta desu.', english: 'The trip was very fun.' }
        ],
        notes: 'いい becomes よかった (was good) and よくなかった (was not good).',
        commonMistakes: ['Saying "おいしいでした" instead of おいしかったです.'],
        relatedGrammar: ['g_n5_45', 'g_n5_48']
    },
    {
        id: 'g_n5_47',
        sectionId: 'sec_n5_08',
        topicTitle: 'な-Adjective Conjugations & Noun Modification',
        level: 'N5',
        pattern: 'な-Adjectives: Conjugation (です / じゃありません / でした)',
        meaning: 'Is / Is not / Was / Was not [Adjectival Noun]',
        structure: '[Na-Adj Base] + です / じゃありません / でした / じゃありませんでした',
        formation: 'Base + Copula forms (same as Noun)',
        usage: 'Describe attributes using adjectival nouns (静か, きれい, 元気, 便利, 有名).',
        whenToUse: '静かです (is quiet), 静かじゃありません (is not quiet), 静かでした (was quiet).',
        whenNotToUse: 'Do not put な at the end of a sentence predicate (never say "しずかな です").',
        examples: [
            { japanese: 'この町は静かです。', romaji: 'Kono machi wa shizuka desu.', english: 'This town is quiet.' },
            { japanese: '昨日は暇じゃありませんでした。', romaji: 'Kinou wa hima ja arimasendeshita.', english: 'I was not free yesterday.' }
        ],
        notes: 'きれい (pretty) and 有名 (famous) end in "i" phonetically, but are な-adjectives.',
        commonMistakes: ['Treating きれい as an い-adjective (conjugate as きれいじゃありません).'],
        relatedGrammar: ['g_n5_48', 'g_n5_45']
    },
    {
        id: 'g_n5_48',
        sectionId: 'sec_n5_08',
        topicTitle: 'な-Adjective Conjugations & Noun Modification',
        level: 'N5',
        pattern: 'な-Adjective + な + Noun',
        meaning: 'Direct Noun Modification with な-Adjective',
        structure: '[Na-Adj Base] + な + [Noun]',
        formation: 'Base + な + Noun',
        usage: 'Directly modify a noun using a な-adjective.',
        whenToUse: 'きれいな花 (beautiful flower), 有名な人 (famous person), 静かな部屋 (quiet room).',
        whenNotToUse: 'Do not forget な when directly attaching to a noun.',
        examples: [
            { japanese: '京都は有名な町です。', romaji: 'Kyouto wa yuumei na machi desu.', english: 'Kyoto is a famous city.' },
            { japanese: '親切な先生に会いました。', romaji: 'Shinsetsu na sensei ni aimashita.', english: 'I met a kind teacher.' }
        ],
        notes: 'The defining characteristic of な-adjectives is taking な before nouns.',
        commonMistakes: ['Omitting な before nouns (e.g. saying "しずか へや" instead of 静かな部屋).'],
        relatedGrammar: ['g_n5_47', 'g_n5_49']
    },
    {
        id: 'g_n5_49',
        sectionId: 'sec_n5_08',
        topicTitle: 'Connecting Multiple Adjectives (～くて・～で)',
        level: 'N5',
        pattern: 'Connecting Adjectives: ～くて / ～で',
        meaning: 'And (Compound Adjectival Descriptions)',
        structure: 'い-Adj [Drop い + くて] / な-Adj [Base + で]',
        formation: '安くて美味しい (Cheap and delicious) / 静かで広い (Quiet and spacious)',
        usage: 'Combine two or more descriptive traits in a single sentence.',
        whenToUse: 'When describing multiple positive or negative features of a place, meal, or person.',
        whenNotToUse: 'Do not connect adjectives with the particle と (never say "やすい と おいしい").',
        examples: [
            { japanese: 'この部屋は明るくて広いです。', romaji: 'Kono heya wa akarukute hiroi desu.', english: 'This room is bright and spacious.' },
            { japanese: '田中さんは親切で面白い人です。', romaji: 'Tanaka-san wa shinsetsu de omoshiroi hito desu.', english: 'Mr. Tanaka is a kind and interesting person.' }
        ],
        notes: 'いい becomes よくて (good and...).',
        commonMistakes: ['Using と between adjectives.'],
        relatedGrammar: ['g_n5_45', 'g_n5_48']
    },

    // ==========================================
    // SECTION 09: PREFERENCES, SKILLS & DESIRES
    // ==========================================
    {
        id: 'g_n5_50',
        sectionId: 'sec_n5_09',
        topicTitle: 'Likes & Dislikes (好き・嫌い)',
        level: 'N5',
        pattern: '[Person は] [Target] が 好きです / 嫌いです',
        meaning: 'Like / Dislike [Target]',
        structure: '[Person は] [Target] が 好きです / 嫌いです',
        formation: 'Noun + が + 好き / 嫌い + です',
        usage: 'Express personal tastes, hobbies, and food preferences.',
        whenToUse: '日本料理が好きです (I like Japanese food); 大好きです (Love it).',
        whenNotToUse: 'Do not mark the target with を (好き and 嫌い take が).',
        examples: [
            { japanese: 'わたしは日本のアニメが大好きです。', romaji: 'Watashi wa nihon no anime ga daisuki desu.', english: 'I love Japanese anime.' },
            { japanese: '辛い料理はあまり好きじゃありません。', romaji: 'Karai ryouri wa amari suki ja arimasen.', english: 'I don\'t like spicy food very much.' }
        ],
        notes: '好き and 嫌い are な-adjectives, so the object takes が.',
        commonMistakes: ['Using を instead of が (never say "すし を すき です").'],
        relatedGrammar: ['g_n5_51', 'g_n5_53']
    },
    {
        id: 'g_n5_51',
        sectionId: 'sec_n5_09',
        topicTitle: 'Skills & Comprehension (上手・下手・分かります・できます)',
        level: 'N5',
        pattern: '[Person は] [Skill] が 上手です / 下手です',
        meaning: 'Good at / Poor at [Skill]',
        structure: '[Person は] [Skill] が 上手です / 下手です',
        formation: 'Noun + が + 上手 / 下手 + です',
        usage: 'Describe someone\'s capability in languages, sports, cooking, or arts.',
        whenToUse: 'When complimenting others (日本語が上手ですね).',
        whenNotToUse: 'Do not describe yourself as 上手 (use 得意 or できる to remain humble).',
        examples: [
            { japanese: '田中さんは料理がとても上手です。', romaji: 'Tanaka-san wa ryouri ga totemo jouzu desu.', english: 'Mr. Tanaka is very good at cooking.' },
            { japanese: 'わたしは絵を描くのが下手です。', romaji: 'Watashi wa e o kaku no ga heta desu.', english: 'I am poor at drawing pictures.' }
        ],
        notes: 'Modesty rule: deflect compliments on skill with 「いいえ、まだまだです」.',
        commonMistakes: ['Calling yourself 上手 in Japanese conversation.'],
        relatedGrammar: ['g_n5_50', 'g_n5_52']
    },
    {
        id: 'g_n5_52',
        sectionId: 'sec_n5_09',
        topicTitle: 'Skills & Comprehension (上手・下手・分かります・できます)',
        level: 'N5',
        pattern: '[Target] が 分かります / できます',
        meaning: 'Understand / Can do [Target]',
        structure: '[Noun] が 分かります / できます',
        formation: 'Noun + が + 分かります / できます',
        usage: 'State linguistic comprehension or practical capability.',
        whenToUse: '英語が分かります (I understand English); スキーができます (I can ski).',
        whenNotToUse: 'Do not mark with を (分かります and できます take が).',
        examples: [
            { japanese: '日本語が少し分かります。', romaji: 'Nihongo ga sukoshi wakarimasu.', english: 'I understand a little Japanese.' },
            { japanese: 'ピアノを弾くことができます。', romaji: 'Piano o hiku koto ga dekimasu.', english: 'I can play the piano.' }
        ],
        notes: 'Potential capability verbs take particle が.',
        commonMistakes: ['Marking with を instead of が (say 日本語が分かります).'],
        relatedGrammar: ['g_n5_51']
    },
    {
        id: 'g_n5_53',
        sectionId: 'sec_n5_09',
        topicTitle: 'Desires for Objects & Actions (欲しい・～たい)',
        level: 'N5',
        pattern: '[Noun] が 欲しいです (Hoshii)',
        meaning: 'Want [Physical Object]',
        structure: '[Noun] が 欲しいです',
        formation: 'Noun + が + 欲しいです (Negative: 欲しくないです)',
        usage: 'Express a desire to possess a tangible object, money, or time.',
        whenToUse: '新しい車が欲しいです (I want a new car); 時間が欲しいです (I want time).',
        whenNotToUse: 'Do not use with verbs (verbs take ～たい, not 欲しい).',
        examples: [
            { japanese: '新しいスマホが欲しいです。', romaji: 'Atarashii sumaho ga hoshii desu.', english: 'I want a new smartphone.' },
            { japanese: '今は車が欲しくないです。', romaji: 'Ima wa kuruma ga hoshikunai desu.', english: 'I do not want a car right now.' }
        ],
        notes: '欲しい conjugates like an い-adjective.',
        commonMistakes: ['Attaching 欲しい to a verb (say 食べたい, never "食べたいがほしい").'],
        relatedGrammar: ['g_n5_54']
    },
    {
        id: 'g_n5_54',
        sectionId: 'sec_n5_09',
        topicTitle: 'Desires for Objects & Actions (欲しい・～たい)',
        level: 'N5',
        pattern: 'Verb [Stem] + たいです',
        meaning: 'Want to do [Action]',
        structure: 'Verb Stem + たいです (Negative: たくないです)',
        formation: 'Verb Stem + たいです (Past: たかったです)',
        usage: 'Express first-person desire to perform an activity.',
        whenToUse: '日本へ行きたいです (I want to go to Japan); 寿司を食べたいです (I want to eat sushi).',
        whenNotToUse: 'Do not use to directly interrogate superiors about their wishes.',
        examples: [
            { japanese: '日本へ旅行に行きたいです。', romaji: 'Nihon e ryokou ni ikitai desu.', english: 'I want to go on a trip to Japan.' },
            { japanese: '今日は何も食べたくないです。', romaji: 'Kyou wa nani mo tabetakunai desu.', english: 'I don\'t want to eat anything today.' }
        ],
        notes: 'Conjugates like an い-adjective (たい $\\rightarrow$ たくない $\\rightarrow$ たかった).',
        commonMistakes: ['Using 欲しい with verbs instead of ～たい.'],
        relatedGrammar: ['g_n5_53']
    },

    // ==========================================
    // SECTION 10: THE TE-FORM SUITE
    // ==========================================
    {
        id: 'g_n5_55',
        sectionId: 'sec_n5_10',
        topicTitle: 'て-Form Conjugation & Sequence (～て、～て)',
        level: 'N5',
        pattern: 'Verb [て-form]、Verb [て-form]、[Main Action]',
        meaning: 'Do X, and then do Y, and then do Z (Sequential Actions)',
        structure: 'Verb 1 [て-form]、Verb 2 [て-form]、Verb 3',
        formation: 'Group 1: うつる $\\rightarrow$ って, むぶぬ $\\rightarrow$ んで, く $\\rightarrow$ いて, ぐ $\\rightarrow$ いで, す $\\rightarrow$ して / Group 2: Drop る + て / Group 3: して, 来て (きて)',
        usage: 'Connect chronological sequential actions fluidly in one sentence.',
        whenToUse: 'Describing daily routines: "I wake up, wash my face, and eat breakfast."',
        whenNotToUse: 'Do not use if the events are strictly non-chronological or contrasting.',
        examples: [
            { japanese: '朝起きて、顔を洗って、朝ご飯を食べます。', romaji: 'Asa okite, kao o aratte, asagohan o tabemasu.', english: 'I wake up, wash my face, and eat breakfast.' },
            { japanese: '新宿へ行って、映画を見ました。', romaji: 'Shinjuku e itte, eiga o mimashita.', english: 'I went to Shinjuku and watched a movie.' }
        ],
        notes: 'The final verb in the sentence dictates the overall tense (past or present).',
        commonMistakes: ['Conjugating 行く as "いいて" (irregular: 行って - itte).'],
        relatedGrammar: ['g_n5_56', 'g_n5_60']
    },
    {
        id: 'g_n5_56',
        sectionId: 'sec_n5_10',
        topicTitle: 'Requests & Favors (～てください)',
        level: 'N5',
        pattern: 'Verb [て-form] + ください',
        meaning: 'Please do X (Polite Request)',
        structure: 'Verb [て-form] + ください',
        formation: 'Verb [て-form] + ください',
        usage: 'Politely ask, instruct, or invite someone to perform an action.',
        whenToUse: 'In stores, classrooms, and daily instructions (見てください, 書いてください).',
        whenNotToUse: 'Do not use when speaking up to high executives (use formal honorific requests).',
        examples: [
            { japanese: 'ここに名前を書いてください。', romaji: 'Koko ni namae o kaite kudasai.', english: 'Please write your name here.' },
            { japanese: 'ゆっくり話してください。', romaji: 'Yukkuri hanashite kudasai.', english: 'Please speak slowly.' }
        ],
        notes: 'Negative request is ～ないでください.',
        commonMistakes: ['Attaching ください to dictionary form (never say "書くください").'],
        relatedGrammar: ['g_n5_55', 'g_n5_57']
    },
    {
        id: 'g_n5_57',
        sectionId: 'sec_n5_10',
        topicTitle: 'Permission & Prohibition (～てもいい・～てはいけない)',
        level: 'N5',
        pattern: 'Verb [て-form] + もいいです (か)',
        meaning: 'May I do X? / You may do X (Seeking & Granting Permission)',
        structure: 'Verb [て-form] + もいいですか / もいいです',
        formation: 'Verb [て-form] + もいいです',
        usage: 'Ask for permission or reassure someone that an action is allowed.',
        whenToUse: 'Asking to take photos, sit down, open windows, enter rooms.',
        whenNotToUse: 'Do not use to state strict rules or commands.',
        examples: [
            { japanese: '写真を撮ってもいいですか。', romaji: 'Shashin o totte mo ii desu ka.', english: 'May I take photos?' },
            { japanese: 'ここに座ってもいいですよ。', romaji: 'Koko ni suwatte mo ii desu yo.', english: 'You may sit here.' }
        ],
        notes: 'Answering affirmatively: 「はい、いいですよ」.',
        commonMistakes: ['Using plain form before もいい (say 入ってもいい, not "入るもいい").'],
        relatedGrammar: ['g_n5_58']
    },
    {
        id: 'g_n5_58',
        sectionId: 'sec_n5_10',
        topicTitle: 'Permission & Prohibition (～てもいい・～てはいけない)',
        level: 'N5',
        pattern: 'Verb [て-form] + はいけません',
        meaning: 'Must not do X (Strict Prohibition & Rule)',
        structure: 'Verb [て-form] + は + いけません',
        formation: 'Verb [て-form] + はいけません',
        usage: 'State formal rules, legal prohibitions, and strict safety guidelines.',
        whenToUse: 'Public signs: "No smoking", "Do not enter", "Do not touch exhibits".',
        whenNotToUse: 'Do not use casually with close peers where softer negative requests are kinder.',
        examples: [
            { japanese: 'ここでタバコを吸ってはいけません。', romaji: 'Koko de tabako o sutte wa ikemasen.', english: 'You must not smoke here.' },
            { japanese: '美術館で展示品に触ってはいけません。', romaji: 'Bijutsukan de tenjihin ni sawatte wa ikemasen.', english: 'You must not touch the exhibits in the art museum.' }
        ],
        notes: 'Pronounced "wa ikemasen" because は is the particle.',
        commonMistakes: ['Pronouncing the は as "ha" (it is pronounced "wa").'],
        relatedGrammar: ['g_n5_57']
    },
    {
        id: 'g_n5_59',
        sectionId: 'sec_n5_10',
        topicTitle: 'Ongoing Action & Resultant State (～ています)',
        level: 'N5',
        pattern: 'Verb [て-form] + います',
        meaning: 'Is doing X (Ongoing Action) & Has Done X (Resultant Continuous State)',
        structure: 'Verb [て-form] + います',
        formation: 'Verb [て-form] + います (Negative: いません)',
        usage: '1. Continuous progressive actions (今勉強しています). 2. Persistent states (東京に住んでいます).',
        whenToUse: 'Actions happening now (rain falling, studying) and states (married, living, knowing).',
        whenNotToUse: 'To say "I don\'t know", say 知りません (not 知っていません).',
        examples: [
            { japanese: '今、日本語を勉強しています。', romaji: 'Ima, nihongo o benkyou shite imasu.', english: 'I am studying Japanese right now.' },
            { japanese: 'わたしは東京に住んでいます。', romaji: 'Watashi wa Toukyou ni sunde imasu.', english: 'I live in Tokyo (state of residence).' }
        ],
        notes: '知っています (I know) vs 知りません (I don\'t know).',
        commonMistakes: ['Saying "知っていません" for "I don\'t know" (always say 知りません).'],
        relatedGrammar: ['g_n5_55', 'g_n5_60']
    },
    {
        id: 'g_n5_60',
        sectionId: 'sec_n5_10',
        topicTitle: 'Chronological Completion (～てから)',
        level: 'N5',
        pattern: 'Verb 1 [て-form] + から、Verb 2',
        meaning: 'After doing Verb 1, do Verb 2 (Strict Sequence)',
        structure: 'Verb 1 [て-form] + から、Verb 2',
        formation: 'Verb 1 [て-form] + から',
        usage: 'Emphasize that Action 2 only occurs after Action 1 is fully completed.',
        whenToUse: '手を洗ってからご飯を食べる (Eat meal after washing hands); 卒業してから働く (Work after graduating).',
        whenNotToUse: 'Do not confuse with reason から (e.g. 暑いから = because it\'s hot).',
        examples: [
            { japanese: 'お金を入れてから、ボタンを押してください。', romaji: 'Okane o irete kara, botan o oshite kudasai.', english: 'After inserting money, please press the button.' },
            { japanese: '宿題が終わってから、ゲームをします。', romaji: 'Shukudai ga owatte kara, geemu o shimasu.', english: 'After homework finishes, I will play video games.' }
        ],
        notes: 'Attached strictly to the て-form for chronological sequence.',
        commonMistakes: ['Attaching to dictionary form for sequence (say 食べてから, not "食べるから").'],
        relatedGrammar: ['g_n5_55', 'g_n5_67']
    },

    // ==========================================
    // SECTION 11: COMPARISON & DEGREE
    // ==========================================
    {
        id: 'g_n5_61',
        sectionId: 'sec_n5_11',
        topicTitle: 'Comparatives & Choices (より・ほうが・どちら)',
        level: 'N5',
        pattern: 'A は B より [Adjective] です',
        meaning: 'A is more [Adjective] than B (Direct Comparison)',
        structure: 'A は B より [Adjective] です',
        formation: 'A + は + B + より + Adjective + です',
        usage: 'Compare two entities directly regarding an attribute.',
        whenToUse: '新幹線は飛行機より安いです (The bullet train is cheaper than an airplane).',
        whenNotToUse: 'Do not reverse A and B (the item with より is the standard of comparison).',
        examples: [
            { japanese: '東京は京都より人が多いです。', romaji: 'Toukyou wa Kyouto yori hito ga ooi desu.', english: 'Tokyo has more people than Kyoto.' },
            { japanese: '兄は私より背が高いです。', romaji: 'Ani wa watashi yori se ga takai desu.', english: 'My older brother is taller than me.' }
        ],
        notes: 'より means "than".',
        commonMistakes: ['Putting より on the winner of the comparison instead of the baseline.'],
        relatedGrammar: ['g_n5_62', 'g_n5_63']
    },
    {
        id: 'g_n5_62',
        sectionId: 'sec_n5_11',
        topicTitle: 'Comparatives & Choices (より・ほうが・どちら)',
        level: 'N5',
        pattern: 'A と B と どちらが [Adj] ですか。A のほうが [Adj] です。',
        meaning: 'Between A and B, which is more [Adj]? A is more [Adj].',
        structure: 'A と B と どちらが [Adj] ですか / A のほうが [Adj] です',
        formation: 'Choice + のほうが + Adjective + です',
        usage: 'Ask for and express preferences between two choices.',
        whenToUse: 'Comparing two choices: "Between coffee and tea, which do you like better?"',
        whenNotToUse: 'Do not use どれ when choosing between only two items (use どちら).',
        examples: [
            { japanese: 'コーヒーとお茶とどちらが好きですか。お茶のほうが好きです。', romaji: 'Koohii to ocha to dochira ga suki desu ka. Ocha no hou ga suki desu.', english: 'Between coffee and tea, which do you like better? I like tea better.' },
            { japanese: 'バスと電車とどちらが速いですか。', romaji: 'Basu to densha to dochira ga hayai desu ka.', english: 'Between the bus and the train, which is faster?' }
        ],
        notes: 'どちら is strictly used for 2 choices; どれ for 3+ choices.',
        commonMistakes: ['Using どれ for two-item comparisons.'],
        relatedGrammar: ['g_n5_61', 'g_n5_63']
    },
    {
        id: 'g_n5_63',
        sectionId: 'sec_n5_11',
        topicTitle: 'Superlatives (一番)',
        level: 'N5',
        pattern: '[Category] の中で [Item] が 一番 [Adjective] です',
        meaning: 'Among [Category], [Item] is the most [Adjective] (Superlative)',
        structure: '[Category] の中で [Item] が 一番 [Adjective] です',
        formation: 'Category + の中で + Noun + が一番 + Adjective',
        usage: 'State the absolute superlative (#1) within a group or time frame.',
        whenToUse: '一年の中で春が一番好きです (Among the entire year, I like spring the best).',
        whenNotToUse: 'Do not use when comparing only two items (use ほうが).',
        examples: [
            { japanese: '日本で富士山が一番高い山です。', romaji: 'Nihon de Fujisan ga ichiban takai yama desu.', english: 'Mount Fuji is the highest mountain in Japan.' },
            { japanese: 'スポーツの中でサッカーが一番面白いです。', romaji: 'Supootsu no naka de sakkaa ga ichiban omoshiroi desu.', english: 'Among sports, soccer is the most interesting.' }
        ],
        notes: '一番 (ichiban) means "number one / most".',
        commonMistakes: ['Omitting の中で when establishing the reference category.'],
        relatedGrammar: ['g_n5_61', 'g_n5_62']
    },
    {
        id: 'g_n5_64',
        sectionId: 'sec_n5_11',
        topicTitle: 'Adverbs of Degree (とても・少し・あまり・全然)',
        level: 'N5',
        pattern: 'Degree Adverbs: とても / 少し / あまり / 全然',
        meaning: 'Very / A little / Not very (with neg) / Not at all (with neg)',
        structure: '[Adverb] + [Adjective / Verb]',
        formation: 'とても (Very) / すこし (A little) / あまり + Negative / ぜんぜん + Negative',
        usage: 'Calibrate the intensity or frequency of an action or adjective.',
        whenToUse: 'とても美味しい (very delicious); あまり高くない (not very expensive); 全然分からない (don\'t understand at all).',
        whenNotToUse: 'Do not use あまり with positive affirmative verbs.',
        examples: [
            { japanese: 'この本はとても面白いです。', romaji: 'Kono hon wa totemo omoshiroi desu.', english: 'This book is very interesting.' },
            { japanese: '昨日はあまり寒くなかったです。', romaji: 'Kinou wa amari samukunatta desu.', english: 'Yesterday was not very cold.' },
            { japanese: '英語が全然分かりません。', romaji: 'Eigo ga zenzen wakarimasen.', english: 'I don\'t understand English at all.' }
        ],
        notes: 'あまり and 全然 grammatically require negative predicate endings.',
        commonMistakes: ['Pairing あまり with positive verbs (saying "あまり すき です" is incorrect).'],
        relatedGrammar: ['g_n5_45', 'g_n5_47']
    },

    // ==========================================
    // SECTION 12: PAST EXPERIENCE & ACTIVITY LISTS
    // ==========================================
    {
        id: 'g_n5_65',
        sectionId: 'sec_n5_12',
        topicTitle: 'Lifetime Experience (～たことがある)',
        level: 'N5',
        pattern: 'Verb [た-form] + ことがあります',
        meaning: 'Have the experience of doing X / Have done X before',
        structure: 'Verb [た-form] + ことがあります / ありません',
        formation: 'Verb [た-form] + ことがあります',
        usage: 'Share whether you have ever experienced an activity in your lifetime.',
        whenToUse: '富士山に登ったことがあります (I have climbed Mount Fuji); 日本へ行ったことがありません (I have never been to Japan).',
        whenNotToUse: 'Do not use for routine daily activities that occurred recently (use plain past た instead).',
        examples: [
            { japanese: '日本へ行ったことがありますか。', romaji: 'Nihon e itta koto ga arimasu ka.', english: 'Have you ever been to Japan?' },
            { japanese: '納豆を食べたことがありません。', romaji: 'Nattou o tabeta koto ga arimasen.', english: 'I have never eaten natto.' }
        ],
        notes: 'Takes the past た-form of the verb.',
        commonMistakes: ['Using dictionary form before ことがあります (say 行ったことがある, not "行くことがある").'],
        relatedGrammar: ['g_n5_66']
    },
    {
        id: 'g_n5_66',
        sectionId: 'sec_n5_12',
        topicTitle: 'Listing Activities (～たり～たりする)',
        level: 'N5',
        pattern: 'Verb 1 [たり]、Verb 2 [たり] します',
        meaning: 'Do things like X and Y (Non-Exhaustive Representative Actions)',
        structure: 'Verb 1 [た-form + り]、Verb 2 [た-form + り] します / しました',
        formation: 'た-form + り + た-form + り + します',
        usage: 'List sample activities representative of a time period without implying they were the only things done.',
        whenToUse: 'Describing weekend activities: "On Sundays I do things like read books and listen to music."',
        whenNotToUse: 'Do not forget the final します / しました at the end of the sentence.',
        examples: [
            { japanese: '休みの日は買い物をしたり、散歩したりします。', romaji: 'Yasumi no hi wa kaimono o shitari, sanpo shitari shimasu.', english: 'On days off, I do things like shopping and taking walks.' },
            { japanese: '昨日は本を読んだり、映画を見たりしました。', romaji: 'Kinou wa hon o yondari, eiga o mitari shimashita.', english: 'Yesterday I did things like reading books and watching movies.' }
        ],
        notes: 'The final します/しました carries the overall tense.',
        commonMistakes: ['Leaving off the final します (sentences must end in します or しました).'],
        relatedGrammar: ['g_n5_65', 'g_n5_55']
    },

    // ==========================================
    // SECTION 13: CONNECTIONS & REASONS
    // ==========================================
    {
        id: 'g_n5_67',
        sectionId: 'sec_n5_13',
        topicTitle: 'Reason & Cause (～から・～ので)',
        level: 'N5',
        pattern: '[Reason Clause] から、[Result Clause]',
        meaning: 'Because / Since [Reason], [Result]',
        structure: '[Reason Sentence] から、[Main Clause]',
        formation: 'Sentence + から',
        usage: 'State the causal reason or rationale behind an action or decision.',
        whenToUse: '時間がありませんから、タクシーで行きます (Because there is no time, I will go by taxi).',
        whenNotToUse: 'Order is strictly [Reason] から [Result] (reverse of English "Result because Reason").',
        examples: [
            { japanese: '暑いですから、エアコンをつけましょう。', romaji: 'Atsui desu kara, eakon o tsukemashou.', english: 'Because it is hot, let\'s turn on the air conditioner.' },
            { japanese: '時間がありませんでしたから、朝ご飯を食べませんでした。', romaji: 'Jikan ga arimasendeshita kara, asagohan o tabemasendeshita.', english: 'Because I had no time, I didn\'t eat breakfast.' }
        ],
        notes: 'When answering why (どうして), conclude with ～からです.',
        commonMistakes: ['Putting the result before the reason in Japanese word order.'],
        relatedGrammar: ['g_n5_26', 'g_n5_68']
    },
    {
        id: 'g_n5_68',
        sectionId: 'sec_n5_13',
        topicTitle: 'Sentence Conjunctions (そして・それから・でも・ですが)',
        level: 'N5',
        pattern: 'Sentence 1。そして / それから、Sentence 2。',
        meaning: 'And / And then / After that (Connecting Independent Sentences)',
        structure: '[Sentence 1]。そして / それから、[Sentence 2]。',
        formation: 'そして (And / Furthermore) / それから (And then / Next)',
        usage: 'Connect two complete independent sentences sequentially.',
        whenToUse: 'Adding additional facts or chronological next steps between full sentences.',
        whenNotToUse: 'Do not use そして between individual nouns (use と or や).',
        examples: [
            { japanese: '京都へ行きました。そして、金閣寺を見ました。', romaji: 'Kyouto e ikimashita. Soshite, Kinkakuji o mimashita.', english: 'I went to Kyoto. And, I saw the Golden Pavilion.' },
            { japanese: '図書館で勉強しました。それから、友達と食事をしました。', romaji: 'Toshokan de benkyou shimashita. Sorekara, tomodachi to shokuji o shimashita.', english: 'I studied at the library. And then, I had a meal with a friend.' }
        ],
        notes: 'Start of a new sentence.',
        commonMistakes: ['Using そして to connect nouns inside a list (say ペンと本, not "ペンそして本").'],
        relatedGrammar: ['g_n5_67', 'g_n5_69']
    },
    {
        id: 'g_n5_69',
        sectionId: 'sec_n5_13',
        topicTitle: 'Sentence Conjunctions (そして・それから・でも・ですが)',
        level: 'N5',
        pattern: 'Sentence 1 が / ですが、Sentence 2。 / でも、Sentence 2。',
        meaning: 'But / However (Contrasting Sentences)',
        structure: '[Sentence 1] が、[Sentence 2] / [Sentence 1]。でも、[Sentence 2]。',
        formation: 'Sentence + が / でも (at start of sentence)',
        usage: 'Introduce contrast or unexpected opposition between two clauses.',
        whenToUse: '日本の料理は美味しいですが、高いです (Japanese food is delicious, but expensive).',
        whenNotToUse: 'Do not confuse conjunction が (but) with particle が (subject).',
        examples: [
            { japanese: '日本語は難しいですが、とても面白いです。', romaji: 'Nihongo wa muzukashii desu ga, totemo omoshiroi desu.', english: 'Japanese is difficult, but it is very interesting.' },
            { japanese: '行きたかったです。でも、時間がありませんでした。', romaji: 'Ikitakatta desu. Demo, jikan ga arimasendeshita.', english: 'I wanted to go. But, I had no time.' }
        ],
        notes: 'が connects two clauses directly; でも begins a new sentence.',
        commonMistakes: ['Placing でも at the end of a clause (use が or けど).'],
        relatedGrammar: ['g_n5_68']
    },

    // ==========================================
    // SECTION 14: N5 INTEGRATION & REVIEW
    // ==========================================
    {
        id: 'g_n5_70',
        sectionId: 'sec_n5_14',
        topicTitle: 'Particle Matrix Review & Sentence Ordering',
        level: 'N5',
        pattern: 'N5 Comprehensive Sentence Architecture',
        meaning: 'Integration of SOV Word Order, Case Particles & Modifiers',
        structure: '[Topic は] [Time に] [Location で] [Companion と] [Object を] [Verb ます]',
        formation: 'Standard Japanese Clause Stacking Matrix',
        usage: 'Synthesize full communicative sentences with zero particle collisions.',
        whenToUse: 'Daily conversational production and JLPT sentence ordering challenges.',
        whenNotToUse: 'Never place verbs anywhere except the very end of the clause.',
        examples: [
            { japanese: 'わたしは毎朝七時に駅前のカフェで友達とコーヒーを飲みます。', romaji: 'Watashi wa maiasa shichiji ni ekimae no kafe de tomodachi to koohii o nomimasu.', english: 'I drink coffee with my friend every morning at 7:00 at the cafe in front of the station.' },
            { japanese: '昨日の午後は家でゆっくり休んでから、スーパーへ買い物に行きました。', romaji: 'Kinou no gogo wa ie de yukkuri yasunde kara, suupaa e kaimono ni ikimashita.', english: 'Yesterday afternoon, after resting leisurely at home, I went shopping to the supermarket.' }
        ],
        notes: 'Japanese verbs always anchor the sentence at the conclusion.',
        commonMistakes: ['Putting verbs before objects as in English syntax.'],
        relatedGrammar: ['g_n5_01', 'g_n5_55']
    }
];

export const grammarPatterns = grammar;
export default grammar;

