/**
 * Kana-Forge Curated N5 Grammar Structure
 * Organized into 14 Core Pedagogical Sections with granular Topics & Patterns.
 */

export const n5GrammarSections = [
    {
        id: 'sec_n5_01',
        sectionNumber: '01',
        title: 'Sentence Foundations',
        japaneseTitle: '文の基本構造',
        description: 'Learn the fundamental architecture of Japanese sentences: identity statements, negative copulas, polite questions, and noun-to-noun modifiers.',
        topics: [
            {
                topicId: 't_n5_01_01',
                title: 'Polite Identity Statements (です)',
                patterns: ['g_n5_01', 'g_n5_02']
            },
            {
                topicId: 't_n5_01_02',
                title: 'Basic Questions & Answers (か)',
                patterns: ['g_n5_03']
            },
            {
                topicId: 't_n5_01_03',
                title: 'Noun Modifiers & Possession (の・も)',
                patterns: ['g_n5_04', 'g_n5_05']
            }
        ]
    },
    {
        id: 'sec_n5_02',
        sectionNumber: '02',
        title: 'Particles & Sentence Markers',
        japaneseTitle: '助詞と文の標識',
        description: 'Master the essential case particles and markers that define relationships between nouns, subjects, objects, and destinations.',
        topics: [
            {
                topicId: 't_n5_02_01',
                title: 'Topic vs Subject (は vs が)',
                patterns: ['g_n5_06', 'g_n5_07']
            },
            {
                topicId: 't_n5_02_02',
                title: 'Direct Objects (を)',
                patterns: ['g_n5_08']
            },
            {
                topicId: 't_n5_02_03',
                title: 'Time, Target & Destination (に・へ)',
                patterns: ['g_n5_09', 'g_n5_10']
            },
            {
                topicId: 't_n5_02_04',
                title: 'Location of Action & Means (で)',
                patterns: ['g_n5_11']
            },
            {
                topicId: 't_n5_02_05',
                title: 'Companions, Boundaries & Lists (と・から・まで・や)',
                patterns: ['g_n5_12', 'g_n5_13', 'g_n5_14', 'g_n5_15']
            },
            {
                topicId: 't_n5_02_06',
                title: 'Sentence-Ending Confirmation (ね・よ)',
                patterns: ['g_n5_16', 'g_n5_17']
            }
        ]
    },
    {
        id: 'sec_n5_03',
        sectionNumber: '03',
        title: 'Demonstratives (Ko-So-A-Do)',
        japaneseTitle: 'こそあど言葉（指示語）',
        description: 'Navigate Japanese spatial pronouns, noun specifiers, and location indicators based on physical and conversational proximity.',
        topics: [
            {
                topicId: 't_n5_03_01',
                title: 'Thing Demonstratives (これ・それ・あれ・どれ)',
                patterns: ['g_n5_18']
            },
            {
                topicId: 't_n5_03_02',
                title: 'Noun Modifying Demonstratives (この・その・あの・どの)',
                patterns: ['g_n5_19']
            },
            {
                topicId: 't_n5_03_03',
                title: 'Location & Direction (ここ・そこ・あそこ・どこ・こちら)',
                patterns: ['g_n5_20', 'g_n5_21']
            }
        ]
    },
    {
        id: 'sec_n5_04',
        sectionNumber: '04',
        title: 'Question Words & Inquiries',
        japaneseTitle: '疑問詞と質問表現',
        description: 'Ask and answer essential questions regarding identity, time, place, manner, reason, quantity, and cost.',
        topics: [
            {
                topicId: 't_n5_04_01',
                title: 'What, Who & Where (何・だれ・どこ)',
                patterns: ['g_n5_22', 'g_n5_23', 'g_n5_24']
            },
            {
                topicId: 't_n5_04_02',
                title: 'When & Why (いつ・どうして・なぜ)',
                patterns: ['g_n5_25', 'g_n5_26']
            },
            {
                topicId: 't_n5_04_03',
                title: 'How, Price & Quantity (どう・どんな・いくら・いくつ)',
                patterns: ['g_n5_27', 'g_n5_28', 'g_n5_29', 'g_n5_30']
            }
        ]
    },
    {
        id: 'sec_n5_05',
        sectionNumber: '05',
        title: 'Numbers, Time & Counters',
        japaneseTitle: '数・時間・助数詞',
        description: 'Count objects by dimension and category, tell clock time with minutes, read dates on the Japanese calendar, and express frequencies.',
        topics: [
            {
                topicId: 't_n5_05_01',
                title: 'Clock Time & Periods (時・分・午前・午後)',
                patterns: ['g_n5_31', 'g_n5_32']
            },
            {
                topicId: 't_n5_05_02',
                title: 'Days, Dates & Calendar (曜日・日・月・年)',
                patterns: ['g_n5_33']
            },
            {
                topicId: 't_n5_05_03',
                title: 'Essential Counters (～つ・～人・～本・～枚・～台・～冊・～回)',
                patterns: ['g_n5_34', 'g_n5_35']
            }
        ]
    },
    {
        id: 'sec_n5_06',
        sectionNumber: '06',
        title: 'Existence & Spatial Location',
        japaneseTitle: '存在と位置関係',
        description: 'Distinguish animate from inanimate existence and describe 3D physical arrangements in rooms, streets, and nature.',
        topics: [
            {
                topicId: 't_n5_06_01',
                title: 'Inanimate vs Animate Existence (あります vs います)',
                patterns: ['g_n5_36', 'g_n5_37']
            },
            {
                topicId: 't_n5_06_02',
                title: 'Positional Relations (上・下・前・後ろ・中・外・隣・近く)',
                patterns: ['g_n5_38']
            }
        ]
    },
    {
        id: 'sec_n5_07',
        sectionNumber: '07',
        title: 'Verb Basics & Conjugations',
        japaneseTitle: '動詞の分類とます形',
        description: 'Master the 3 verb groups (Godan, Ichidan, Irregular), polite tenses (ます, ません, ました), invitations, and suggestions.',
        topics: [
            {
                topicId: 't_n5_07_01',
                title: 'The 3 Verb Groups & Polite Tenses',
                patterns: ['g_n5_39', 'g_n5_40', 'g_n5_41']
            },
            {
                topicId: 't_n5_07_02',
                title: 'Invitations & Suggestions (～ませんか・～ましょう・～ましょうか)',
                patterns: ['g_n5_42', 'g_n5_43', 'g_n5_44']
            }
        ]
    },
    {
        id: 'sec_n5_08',
        sectionNumber: '08',
        title: 'Adjectives & Modifiers',
        japaneseTitle: 'い形容詞とな形容詞',
        description: 'Describe qualities, temperatures, sizes, and colors through true い-adjectives and adjectival な-nouns.',
        topics: [
            {
                topicId: 't_n5_08_01',
                title: 'い-Adjective Conjugations (Affirmative, Negative, Past)',
                patterns: ['g_n5_45', 'g_n5_46']
            },
            {
                topicId: 't_n5_08_02',
                title: 'な-Adjective Conjugations & Noun Modification',
                patterns: ['g_n5_47', 'g_n5_48']
            },
            {
                topicId: 't_n5_08_03',
                title: 'Connecting Multiple Adjectives (～くて・～で)',
                patterns: ['g_n5_49']
            }
        ]
    },
    {
        id: 'sec_n5_09',
        sectionNumber: '09',
        title: 'Preferences, Skills & Desires',
        japaneseTitle: '好悪・能力・願望',
        description: 'Express personal tastes (好き・嫌い), competencies (上手・下手・できる・分かる), and desires (欲しい・～たい).',
        topics: [
            {
                topicId: 't_n5_09_01',
                title: 'Likes & Dislikes (好き・嫌い)',
                patterns: ['g_n5_50']
            },
            {
                topicId: 't_n5_09_02',
                title: 'Skills & Comprehension (上手・下手・分かります・できます)',
                patterns: ['g_n5_51', 'g_n5_52']
            },
            {
                topicId: 't_n5_09_03',
                title: 'Desires for Objects & Actions (欲しい・～たい)',
                patterns: ['g_n5_53', 'g_n5_54']
            }
        ]
    },
    {
        id: 'sec_n5_10',
        sectionNumber: '10',
        title: 'The て-Form Suite',
        japaneseTitle: 'て形の活用と応用',
        description: 'The golden gateway of Japanese grammar: action sequencing, polite requests, permission, prohibition, and progressive aspect.',
        topics: [
            {
                topicId: 't_n5_10_01',
                title: 'て-Form Conjugation & Sequence (～て、～て)',
                patterns: ['g_n5_55']
            },
            {
                topicId: 't_n5_10_02',
                title: 'Requests & Favors (～てください)',
                patterns: ['g_n5_56']
            },
            {
                topicId: 't_n5_10_03',
                title: 'Permission & Prohibition (～てもいい・～てはいけない)',
                patterns: ['g_n5_57', 'g_n5_58']
            },
            {
                topicId: 't_n5_10_04',
                title: 'Ongoing Action & Resultant State (～ています)',
                patterns: ['g_n5_59']
            },
            {
                topicId: 't_n5_10_05',
                title: 'Chronological Completion (～てから)',
                patterns: ['g_n5_60']
            }
        ]
    },
    {
        id: 'sec_n5_11',
        sectionNumber: '11',
        title: 'Comparison & Degree',
        japaneseTitle: '比較と程度の表現',
        description: 'Compare two items, select preferences with どちら, identify superlatives with 一番, and calibrate degree with adverbs.',
        topics: [
            {
                topicId: 't_n5_11_01',
                title: 'Comparatives & Choices (より・ほうが・どちら)',
                patterns: ['g_n5_61', 'g_n5_62']
            },
            {
                topicId: 't_n5_11_02',
                title: 'Superlatives (一番)',
                patterns: ['g_n5_63']
            },
            {
                topicId: 't_n5_11_03',
                title: 'Adverbs of Degree (とても・少し・あまり・全然)',
                patterns: ['g_n5_64']
            }
        ]
    },
    {
        id: 'sec_n5_12',
        sectionNumber: '12',
        title: 'Past Experience & Activity Lists',
        japaneseTitle: '経験と動作の例示',
        description: 'Share lifetime experiences with ～たことがあります and list non-exhaustive activities with ～たり～たりします.',
        topics: [
            {
                topicId: 't_n5_12_01',
                title: 'Lifetime Experience (～たことがある)',
                patterns: ['g_n5_65']
            },
            {
                topicId: 't_n5_12_02',
                title: 'Listing Activities (～たり～たりする)',
                patterns: ['g_n5_66']
            }
        ]
    },
    {
        id: 'sec_n5_13',
        sectionNumber: '13',
        title: 'Connections & Reasons',
        japaneseTitle: '接続詞と理由表現',
        description: 'Connect sentences and express rationale, contrast, and progression with から, そして, それから, でも, and が.',
        topics: [
            {
                topicId: 't_n5_13_01',
                title: 'Reason & Cause (～から・～ので)',
                patterns: ['g_n5_67']
            },
            {
                topicId: 't_n5_13_02',
                title: 'Sentence Conjunctions (そして・それから・でも・ですが)',
                patterns: ['g_n5_68', 'g_n5_69']
            }
        ]
    },
    {
        id: 'sec_n5_14',
        sectionNumber: '14',
        title: 'N5 Integration & Mock Mastery',
        japaneseTitle: 'N5文法総合総復習',
        description: 'Synthesize particle contrasts, verb transformations, adjective combinations, and sentence ordering in preparation for full practice exams.',
        topics: [
            {
                topicId: 't_n5_14_01',
                title: 'Particle Matrix Review & Sentence Ordering',
                patterns: ['g_n5_70']
            }
        ]
    }
];

export const grammarSections = n5GrammarSections;
export default n5GrammarSections;

