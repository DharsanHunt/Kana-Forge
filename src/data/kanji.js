/**
 * Kana-Forge Curated 100 N5 Kanji Master Dataset
 * Exactly 100 core N5 Kanji organized across 11 thematic sections with 10-kanji review checkpoints.
 */

export const kanjiList = [
    // ==========================================
    // 01. NUMBERS & COUNTING (Kanji 1–10) [Review 01]
    // ==========================================
    {
        id: 'k_n5_001',
        character: '一',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['one'],
        onReadings: ['イチ', 'イツ'],
        kunReadings: ['ひと', 'ひと.つ'],
        strokeCount: 1,
        radical: '一 (one)',
        compounds: [
            { kanji: '一つ', reading: 'ひとつ', meaning: 'one item' },
            { kanji: '一人', reading: 'ひとり', meaning: 'one person / alone' },
            { kanji: '一日', reading: 'ついたち', meaning: '1st day of the month' },
            { kanji: '一番', reading: 'いちばん', meaning: 'number one / best' }
        ],
        exampleSentence: {
            japanese: 'りんごを一つ買いました。',
            romaji: 'Ringo o hitotsu kaimashita.',
            english: 'I bought one apple.'
        }
    },
    {
        id: 'k_n5_002',
        character: '二',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['two'],
        onReadings: ['ニ', 'ジ'],
        kunReadings: ['ふた', 'ふた.つ'],
        strokeCount: 2,
        radical: '二 (two)',
        compounds: [
            { kanji: '二つ', reading: 'ふたつ', meaning: 'two items' },
            { kanji: '二人', reading: 'ふたり', meaning: 'two people' },
            { kanji: '二月', reading: 'にがつ', meaning: 'February' }
        ],
        exampleSentence: {
            japanese: '切符を二枚買いました。',
            romaji: 'Kippu o nimai kaimashita.',
            english: 'I bought two tickets.'
        }
    },
    {
        id: 'k_n5_003',
        character: '三',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['three'],
        onReadings: ['サン'],
        kunReadings: ['み', 'み.つ', 'みっ.つ'],
        strokeCount: 3,
        radical: '一 (one)',
        compounds: [
            { kanji: '三つ', reading: 'みっつ', meaning: 'three items' },
            { kanji: '三人', reading: 'さんにん', meaning: 'three people' },
            { kanji: '三月', reading: 'さんがつ', meaning: 'March' }
        ],
        exampleSentence: {
            japanese: '友達と三人で京都へ行きました。',
            romaji: 'Tomodachi to sannin de Kyouto e ikimashita.',
            english: 'Three of us went to Kyoto with friends.'
        }
    },
    {
        id: 'k_n5_004',
        character: '四',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['four'],
        onReadings: ['シ'],
        kunReadings: ['よ', 'よ.つ', 'よっ.つ', 'よん'],
        strokeCount: 5,
        radical: '囗 (enclosure)',
        compounds: [
            { kanji: '四つ', reading: 'よっつ', meaning: 'four items' },
            { kanji: '四人', reading: 'よにん', meaning: 'four people' },
            { kanji: '四月', reading: 'しがつ', meaning: 'April' },
            { kanji: '四季', reading: 'しき', meaning: 'four seasons' }
        ],
        exampleSentence: {
            japanese: '家族は四人います。',
            romaji: 'Kazoku wa yonin imasu.',
            english: 'There are four people in my family.'
        }
    },
    {
        id: 'k_n5_005',
        character: '五',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['five'],
        onReadings: ['ゴ'],
        kunReadings: ['いつ', 'いつ.つ'],
        strokeCount: 4,
        radical: '二 (two)',
        compounds: [
            { kanji: '五つ', reading: 'いつつ', meaning: 'five items' },
            { kanji: '五人', reading: 'ごにん', meaning: 'five people' },
            { kanji: '五月', reading: 'ごがつ', meaning: 'May' }
        ],
        exampleSentence: {
            japanese: '五分待ってください。',
            romaji: 'Gofun matte kudasai.',
            english: 'Please wait for five minutes.'
        }
    },
    {
        id: 'k_n5_006',
        character: '六',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['six'],
        onReadings: ['ロク'],
        kunReadings: ['む', 'む.つ', 'むっ.つ', 'むい'],
        strokeCount: 4,
        radical: '八 (eight)',
        compounds: [
            { kanji: '六つ', reading: 'むっつ', meaning: 'six items' },
            { kanji: '六日', reading: 'むいか', meaning: '6th day of month / 6 days' },
            { kanji: '六月', reading: 'ろくがつ', meaning: 'June' }
        ],
        exampleSentence: {
            japanese: '朝六時に起きます。',
            romaji: 'Asa rokuji ni okimasu.',
            english: 'I wake up at 6:00 in the morning.'
        }
    },
    {
        id: 'k_n5_007',
        character: '七',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['seven'],
        onReadings: ['シチ'],
        kunReadings: ['なな', 'なな.つ', 'なの'],
        strokeCount: 2,
        radical: '一 (one)',
        compounds: [
            { kanji: '七つ', reading: 'ななつ', meaning: 'seven items' },
            { kanji: '七日', reading: 'なのか', meaning: '7th day of month / 7 days' },
            { kanji: '七月', reading: 'しちがつ', meaning: 'July' }
        ],
        exampleSentence: {
            japanese: '七時に夜ご飯を食べます。',
            romaji: 'Shichiji ni yorugohan o tabemasu.',
            english: 'I eat dinner at 7:00.'
        }
    },
    {
        id: 'k_n5_008',
        character: '八',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['eight'],
        onReadings: ['ハチ'],
        kunReadings: ['や', 'や.つ', 'やっ.つ', 'よう'],
        strokeCount: 2,
        radical: '八 (eight)',
        compounds: [
            { kanji: '八つ', reading: 'やっつ', meaning: 'eight items' },
            { kanji: '八日', reading: 'ようか', meaning: '8th day of month / 8 days' },
            { kanji: '八月', reading: 'はちがつ', meaning: 'August' }
        ],
        exampleSentence: {
            japanese: '昨夜八時間寝ました。',
            romaji: 'Sakuya hachijikan nemashita.',
            english: 'I slept for eight hours last night.'
        }
    },
    {
        id: 'k_n5_009',
        character: '九',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['nine'],
        onReadings: ['キュウ', 'ク'],
        kunReadings: ['ここの', 'ここの.つ'],
        strokeCount: 2,
        radical: '乙 (second)',
        compounds: [
            { kanji: '九つ', reading: 'ここのつ', meaning: 'nine items' },
            { kanji: '九日', reading: 'ここのか', meaning: '9th day of month / 9 days' },
            { kanji: '九月', reading: 'くがつ', meaning: 'September' }
        ],
        exampleSentence: {
            japanese: '九時に授業が始まります。',
            romaji: 'Kuji ni jugyou ga hajimarimasu.',
            english: 'Class starts at 9:00.'
        }
    },
    {
        id: 'k_n5_010',
        character: '十',
        level: 'N5',
        category: 'Numbers & Counting',
        meanings: ['ten'],
        onReadings: ['ジュウ', 'ジッ'],
        kunReadings: ['とお', 'と'],
        strokeCount: 2,
        radical: '十 (ten)',
        compounds: [
            { kanji: '十', reading: 'とお', meaning: 'ten items' },
            { kanji: '十日', reading: 'とおか', meaning: '10th day of month / 10 days' },
            { kanji: '十月', reading: 'じゅうがつ', meaning: 'October' }
        ],
        exampleSentence: {
            japanese: 'みかんを十買いました。',
            romaji: 'Mikan o too kaimashita.',
            english: 'I bought ten mandarins.'
        }
    },

    // ==========================================
    // 02. TIME & CALENDAR (Kanji 11–20) [Review 02]
    // ==========================================
    {
        id: 'k_n5_011',
        character: '百',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['hundred'],
        onReadings: ['ヒャク'],
        kunReadings: ['もも'],
        strokeCount: 6,
        radical: '白 (white)',
        compounds: [
            { kanji: '百円', reading: 'ひゃくえん', meaning: '100 yen' },
            { kanji: '三百', reading: 'さんびゃく', meaning: '300' },
            { kanji: '六百', reading: 'ろっぴゃく', meaning: '600' }
        ],
        exampleSentence: {
            japanese: '百円ショップでお菓子を買いました。',
            romaji: 'Hyakuen shoppu de okashi o kaimashita.',
            english: 'I bought sweets at the 100-yen shop.'
        }
    },
    {
        id: 'k_n5_012',
        character: '千',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['thousand'],
        onReadings: ['セン'],
        kunReadings: ['ち'],
        strokeCount: 3,
        radical: '十 (ten)',
        compounds: [
            { kanji: '千円', reading: 'せんえん', meaning: '1,000 yen' },
            { kanji: '三千', reading: 'さんぜん', meaning: '3,000' },
            { kanji: '千葉', reading: 'ちば', meaning: 'Chiba prefecture' }
        ],
        exampleSentence: {
            japanese: '千円札を崩して小銭にしました。',
            romaji: 'Sen\'ensatsu o kuzushite kozeni ni shimashita.',
            english: 'I broke a 1,000-yen bill into coins.'
        }
    },
    {
        id: 'k_n5_013',
        character: '万',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['ten thousand'],
        onReadings: ['マン', 'バン'],
        kunReadings: ['よろず'],
        strokeCount: 3,
        radical: '一 (one)',
        compounds: [
            { kanji: '一万', reading: 'いちまん', meaning: '10,000' },
            { kanji: '万年筆', reading: 'まんねんひつ', meaning: 'fountain pen' }
        ],
        exampleSentence: {
            japanese: '一万円札を財布に入れました。',
            romaji: 'Ichiman\'ensatsu o saifu ni iremashita.',
            english: 'I put a 10,000-yen bill into my wallet.'
        }
    },
    {
        id: 'k_n5_014',
        character: '円',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['yen', 'circle', 'round'],
        onReadings: ['エン'],
        kunReadings: ['まる.い'],
        strokeCount: 4,
        radical: '冂 (box/border)',
        compounds: [
            { kanji: '円', reading: 'えん', meaning: 'yen' },
            { kanji: '円高', reading: 'えんだか', meaning: 'strong yen' }
        ],
        exampleSentence: {
            japanese: 'この本は千五百円です。',
            romaji: 'Kono hon wa sengohyaku\'en desu.',
            english: 'This book is 1,500 yen.'
        }
    },
    {
        id: 'k_n5_015',
        character: '年',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['year', 'age'],
        onReadings: ['ネン'],
        kunReadings: ['とし'],
        strokeCount: 6,
        radical: '干 (dry)',
        compounds: [
            { kanji: '今年', reading: 'ことし', meaning: 'this year' },
            { kanji: '去年', reading: 'きょねん', meaning: 'last year' },
            { kanji: '来年', reading: 'らいねん', meaning: 'next year' },
            { kanji: '一年生', reading: 'いちねんせい', meaning: 'first-year student' }
        ],
        exampleSentence: {
            japanese: '日本に来て一年が経ちました。',
            romaji: 'Nihon ni kite ichinen ga tachimashita.',
            english: 'One year has passed since I came to Japan.'
        }
    },
    {
        id: 'k_n5_016',
        character: '月',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['month', 'moon'],
        onReadings: ['ゲツ', 'ガツ'],
        kunReadings: ['つき'],
        strokeCount: 4,
        radical: '月 (moon)',
        compounds: [
            { kanji: '月曜日', reading: 'げつようび', meaning: 'Monday' },
            { kanji: '今月', reading: 'こんげつ', meaning: 'this month' },
            { kanji: '一月', reading: 'いちがつ', meaning: 'January' }
        ],
        exampleSentence: {
            japanese: '夜空にきれいな月が見えます。',
            romaji: 'Yozora ni kirei na tsuki ga miemasu.',
            english: 'A beautiful moon is visible in the night sky.'
        }
    },
    {
        id: 'k_n5_017',
        character: '日',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['day', 'sun', 'Japan'],
        onReadings: ['ニチ', 'ジツ'],
        kunReadings: ['ひ', '-び', '-か'],
        strokeCount: 4,
        radical: '日 (sun)',
        compounds: [
            { kanji: '日本', reading: 'にほん', meaning: 'Japan' },
            { kanji: '日曜日', reading: 'にちようび', meaning: 'Sunday' },
            { kanji: '毎日', reading: 'まいにち', meaning: 'every day' },
            { kanji: '休日', reading: 'きゅうじつ', meaning: 'holiday / day off' }
        ],
        exampleSentence: {
            japanese: '今日は天気がとてもいいです。',
            romaji: 'Kyou wa tenki ga totemo ii desu.',
            english: 'The weather is very nice today.'
        }
    },
    {
        id: 'k_n5_018',
        character: '時',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['time', 'hour'],
        onReadings: ['ジ'],
        kunReadings: ['とき'],
        strokeCount: 10,
        radical: '日 (sun)',
        compounds: [
            { kanji: '時間', reading: 'じかん', meaning: 'time / hours duration' },
            { kanji: '時計', reading: 'とけい', meaning: 'clock / watch' },
            { kanji: '何時', reading: 'なんじ', meaning: 'what time' }
        ],
        exampleSentence: {
            japanese: '今、午後三時十五分です。',
            romaji: 'Ima, gogo sanji juugofun desu.',
            english: 'It is 3:15 PM right now.'
        }
    },
    {
        id: 'k_n5_019',
        character: '分',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['minute', 'part', 'to understand'],
        onReadings: ['フン', 'ブン', 'ブ'],
        kunReadings: ['わ.ける', 'わ.かる'],
        strokeCount: 4,
        radical: '刀 (sword)',
        compounds: [
            { kanji: '十分', reading: 'じゅっぷん', meaning: 'ten minutes' },
            { kanji: '分かる', reading: 'わかる', meaning: 'to understand' },
            { kanji: '半分', reading: 'はんぶん', meaning: 'half' }
        ],
        exampleSentence: {
            japanese: '日本語の文法がよく分かりました。',
            romaji: 'Nihongo no bunpou ga yoku wakarimashita.',
            english: 'I understood Japanese grammar well.'
        }
    },
    {
        id: 'k_n5_020',
        character: '半',
        level: 'N5',
        category: 'Time & Calendar',
        meanings: ['half', 'middle'],
        onReadings: ['ハン'],
        kunReadings: ['なか.ば'],
        strokeCount: 5,
        radical: '十 (ten)',
        compounds: [
            { kanji: '三時半', reading: 'さんじはん', meaning: 'half past three (3:30)' },
            { kanji: '半分', reading: 'はんぶん', meaning: 'half' },
            { kanji: '半年', reading: 'はんとし', meaning: 'half a year' }
        ],
        exampleSentence: {
            japanese: '会議は十時半から始まります。',
            romaji: 'Kaigi wa juujihan kara hajimarimasu.',
            english: 'The meeting starts at 10:30.'
        }
    },

    // ==========================================
    // 03. PEOPLE & FAMILY (Kanji 21–30) [Review 03]
    // ==========================================
    {
        id: 'k_n5_021',
        character: '人',
        level: 'N5',
        category: 'People & Family',
        meanings: ['person', 'human'],
        onReadings: ['ジン', 'ニン'],
        kunReadings: ['ひと'],
        strokeCount: 2,
        radical: '人 (person)',
        compounds: [
            { kanji: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
            { kanji: '外国人', reading: 'がいこくじん', meaning: 'foreigner' },
            { kanji: '大人', reading: 'おとな', meaning: 'adult' }
        ],
        exampleSentence: {
            japanese: 'あの人はとても親切な先生です。',
            romaji: 'Ano hito wa totemo shinsetsu na sensei desu.',
            english: 'That person is a very kind teacher.'
        }
    },
    {
        id: 'k_n5_022',
        character: '男',
        level: 'N5',
        category: 'People & Family',
        meanings: ['man', 'male'],
        onReadings: ['ダン', 'ナン'],
        kunReadings: ['おとこ'],
        strokeCount: 7,
        radical: '田 (rice field)',
        compounds: [
            { kanji: '男の人', reading: 'おとこのひと', meaning: 'man' },
            { kanji: '男の子', reading: 'おとこのこ', meaning: 'boy' },
            { kanji: '男性', reading: 'だんせい', meaning: 'male / man' }
        ],
        exampleSentence: {
            japanese: '背の高い男の人が歩いています。',
            romaji: 'Se no takai otoko no hito ga aruite imasu.',
            english: 'A tall man is walking.'
        }
    },
    {
        id: 'k_n5_023',
        character: '女',
        level: 'N5',
        category: 'People & Family',
        meanings: ['woman', 'female'],
        onReadings: ['ジョ', 'ニョ'],
        kunReadings: ['おんな', 'め'],
        strokeCount: 3,
        radical: '女 (woman)',
        compounds: [
            { kanji: '女の人', reading: 'おんなのひと', meaning: 'woman' },
            { kanji: '女の子', reading: 'おんなのこ', meaning: 'girl' },
            { kanji: '彼女', reading: 'かのじょ', meaning: 'she / girlfriend' }
        ],
        exampleSentence: {
            japanese: 'あの女の人は英語の先生です。',
            romaji: 'Ano onna no hito wa eigo no sensei desu.',
            english: 'That woman is an English teacher.'
        }
    },
    {
        id: 'k_n5_024',
        character: '子',
        level: 'N5',
        category: 'People & Family',
        meanings: ['child'],
        onReadings: ['シ', 'ス'],
        kunReadings: ['こ'],
        strokeCount: 3,
        radical: '子 (child)',
        compounds: [
            { kanji: '子ども', reading: 'こども', meaning: 'child / children' },
            { kanji: '女の子', reading: 'おんなのこ', meaning: 'girl' },
            { kanji: '男の子', reading: 'おとこのこ', meaning: 'boy' }
        ],
        exampleSentence: {
            japanese: '公園で子どもたちが遊んでいます。',
            romaji: 'Kouen de kodomotachi ga asonde imasu.',
            english: 'Children are playing in the park.'
        }
    },
    {
        id: 'k_n5_025',
        character: '父',
        level: 'N5',
        category: 'People & Family',
        meanings: ['father'],
        onReadings: ['フ'],
        kunReadings: ['ちち', 'とう'],
        strokeCount: 4,
        radical: '父 (father)',
        compounds: [
            { kanji: '父', reading: 'ちち', meaning: 'my father' },
            { kanji: 'お父さん', reading: 'おとうさん', meaning: 'father (polite)' },
            { kanji: '祖父', reading: 'そふ', meaning: 'grandfather' }
        ],
        exampleSentence: {
            japanese: '父は会社員です。',
            romaji: 'Chichi wa kaishain desu.',
            english: 'My father is a company employee.'
        }
    },
    {
        id: 'k_n5_026',
        character: '母',
        level: 'N5',
        category: 'People & Family',
        meanings: ['mother'],
        onReadings: ['ボ'],
        kunReadings: ['はは', 'かあ'],
        strokeCount: 5,
        radical: '毋 (mother)',
        compounds: [
            { kanji: '母', reading: 'はは', meaning: 'my mother' },
            { kanji: 'お母さん', reading: 'おかあさん', meaning: 'mother (polite)' },
            { kanji: '祖母', reading: 'そぼ', meaning: 'grandmother' }
        ],
        exampleSentence: {
            japanese: '母は料理がとても上手です。',
            romaji: 'Haha wa ryouri ga totemo jouzu desu.',
            english: 'My mother is very good at cooking.'
        }
    },
    {
        id: 'k_n5_027',
        character: '友',
        level: 'N5',
        category: 'People & Family',
        meanings: ['friend'],
        onReadings: ['ユウ'],
        kunReadings: ['とも'],
        strokeCount: 4,
        radical: '又 (again/right hand)',
        compounds: [
            { kanji: '友達', reading: 'ともだち', meaning: 'friend' },
            { kanji: '友人', reading: 'ゆうじん', meaning: 'friend (formal)' },
            { kanji: '親友', reading: 'しんゆう', meaning: 'best friend' }
        ],
        exampleSentence: {
            japanese: '駅前のカフェで友達に会いました。',
            romaji: 'Ekimae no kafe de tomodachi ni aimashita.',
            english: 'I met my friend at the cafe in front of the station.'
        }
    },
    {
        id: 'k_n5_028',
        character: '名',
        level: 'N5',
        category: 'People & Family',
        meanings: ['name', 'reputation'],
        onReadings: ['メイ', 'ミョウ'],
        kunReadings: ['な'],
        strokeCount: 6,
        radical: '口 (mouth)',
        compounds: [
            { kanji: '名前', reading: 'なまえ', meaning: 'name' },
            { kanji: '有名', reading: 'ゆうめい', meaning: 'famous' },
            { kanji: '名刺', reading: 'めいし', meaning: 'business card' }
        ],
        exampleSentence: {
            japanese: 'ここに名前を書いてください。',
            romaji: 'Koko ni namae o kaite kudasai.',
            english: 'Please write your name here.'
        }
    },
    {
        id: 'k_n5_029',
        character: '先',
        level: 'N5',
        category: 'People & Family',
        meanings: ['ahead', 'previous', 'future'],
        onReadings: ['セン'],
        kunReadings: ['さき', 'ま.ず'],
        strokeCount: 6,
        radical: '儿 (legs)',
        compounds: [
            { kanji: '先生', reading: 'せんせい', meaning: 'teacher' },
            { kanji: '先週', reading: 'せんしゅう', meaning: 'last week' },
            { kanji: '先月', reading: 'せんげつ', meaning: 'last month' }
        ],
        exampleSentence: {
            japanese: '先生、おはようございます。',
            romaji: 'Sensei, ohayou gozaimasu.',
            english: 'Good morning, teacher.'
        }
    },
    {
        id: 'k_n5_030',
        character: '生',
        level: 'N5',
        category: 'People & Family',
        meanings: ['life', 'birth', 'student'],
        onReadings: ['セイ', 'ショウ'],
        kunReadings: ['い.きる', 'う.まれる', 'なま'],
        strokeCount: 5,
        radical: '生 (life)',
        compounds: [
            { kanji: '学生', reading: 'がくせい', meaning: 'student' },
            { kanji: '先生', reading: 'せんせい', meaning: 'teacher' },
            { kanji: '誕生日', reading: 'たんじょうび', meaning: 'birthday' },
            { kanji: '留学生', reading: 'りゅうがくせい', meaning: 'international student' }
        ],
        exampleSentence: {
            japanese: '私は日本語学校の学生です。',
            romaji: 'Watashi wa nihongo gakkou no gakusei desu.',
            english: 'I am a student at a Japanese language school.'
        }
    },

    // ==========================================
    // 04. SCHOOL & LEARNING (Kanji 31–40) [Review 04]
    // ==========================================
    {
        id: 'k_n5_031',
        character: '学',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['study', 'learning', 'school'],
        onReadings: ['ガク'],
        kunReadings: ['まな.ぶ'],
        strokeCount: 8,
        radical: '子 (child)',
        compounds: [
            { kanji: '学校', reading: 'がっこう', meaning: 'school' },
            { kanji: '大学', reading: 'だいがく', meaning: 'university' },
            { kanji: '学生', reading: 'がくせい', meaning: 'student' }
        ],
        exampleSentence: {
            japanese: '大学で経済学を勉強しています。',
            romaji: 'Daigaku de keizaigaku o benkyou shite imasu.',
            english: 'I am studying economics at university.'
        }
    },
    {
        id: 'k_n5_032',
        character: '校',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['school', 'examining'],
        onReadings: ['コウ'],
        kunReadings: [],
        strokeCount: 10,
        radical: '木 (tree)',
        compounds: [
            { kanji: '学校', reading: 'がっこう', meaning: 'school' },
            { kanji: '高校', reading: 'こうこう', meaning: 'high school' },
            { kanji: '中学校', reading: 'ちゅうがっこう', meaning: 'middle school' }
        ],
        exampleSentence: {
            japanese: '毎朝歩いて学校へ通っています。',
            romaji: 'Maiasa aruite gakkou e kayotte imasu.',
            english: 'I commute to school on foot every morning.'
        }
    },
    {
        id: 'k_n5_033',
        character: '本',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['book', 'origin', 'real'],
        onReadings: ['ホン'],
        kunReadings: ['もと'],
        strokeCount: 5,
        radical: '木 (tree)',
        compounds: [
            { kanji: '本', reading: 'ほん', meaning: 'book' },
            { kanji: '日本', reading: 'にほん', meaning: 'Japan' },
            { kanji: '本屋', reading: 'ほんや', meaning: 'bookstore' }
        ],
        exampleSentence: {
            japanese: '図書館で面白い本を借りました。',
            romaji: 'Toshokan de omoshiroi hon o karimashita.',
            english: 'I borrowed an interesting book at the library.'
        }
    },
    {
        id: 'k_n5_034',
        character: '語',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['language', 'word', 'to talk'],
        onReadings: ['ゴ'],
        kunReadings: ['かた.る'],
        strokeCount: 14,
        radical: '言 (word/speech)',
        compounds: [
            { kanji: '日本語', reading: 'にほんご', meaning: 'Japanese language' },
            { kanji: '英語', reading: 'えいご', meaning: 'English language' },
            { kanji: '単語', reading: 'たんご', meaning: 'vocabulary word' }
        ],
        exampleSentence: {
            japanese: '毎日日本語の単語を覚えます。',
            romaji: 'Mainichi nihongo no tango o oboemasu.',
            english: 'I memorize Japanese vocabulary words every day.'
        }
    },
    {
        id: 'k_n5_035',
        character: '何',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['what'],
        onReadings: ['カ'],
        kunReadings: ['なに', 'なん'],
        strokeCount: 7,
        radical: '人 (person)',
        compounds: [
            { kanji: '何時', reading: 'なんじ', meaning: 'what time' },
            { kanji: '何人', reading: 'なんにん', meaning: 'how many people' },
            { kanji: '何曜日', reading: 'なんようび', meaning: 'what day of week' }
        ],
        exampleSentence: {
            japanese: '朝ご飯に何を食べましたか。',
            romaji: 'Asagohan ni nani o tabemashita ka.',
            english: 'What did you eat for breakfast?'
        }
    },
    {
        id: 'k_n5_036',
        character: '書',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['write', 'document'],
        onReadings: ['ショ'],
        kunReadings: ['か.く'],
        strokeCount: 10,
        radical: '曰 (say)',
        compounds: [
            { kanji: '書く', reading: 'かく', meaning: 'to write' },
            { kanji: '辞書', reading: 'じしょ', meaning: 'dictionary' },
            { kanji: '教科書', reading: 'きょうかしょ', meaning: 'textbook' }
        ],
        exampleSentence: {
            japanese: 'ノートに新しい漢字を書きました。',
            romaji: 'Nooto ni atarashii kanji o kakimashita.',
            english: 'I wrote new kanji in my notebook.'
        }
    },
    {
        id: 'k_n5_037',
        character: '読',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['read'],
        onReadings: ['ドク', 'トク'],
        kunReadings: ['よ.む'],
        strokeCount: 14,
        radical: '言 (word/speech)',
        compounds: [
            { kanji: '読む', reading: 'よむ', meaning: 'to read' },
            { kanji: '読書', reading: 'どくしょ', meaning: 'reading books' }
        ],
        exampleSentence: {
            japanese: '休みの日に部屋で本を読みます。',
            romaji: 'Yasumi no hi ni heya de hon o yomimasu.',
            english: 'I read books in my room on days off.'
        }
    },
    {
        id: 'k_n5_038',
        character: '話',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['talk', 'speak', 'story'],
        onReadings: ['ワ'],
        kunReadings: ['はな.す', 'はなし'],
        strokeCount: 13,
        radical: '言 (word/speech)',
        compounds: [
            { kanji: '話す', reading: 'はなす', meaning: 'to speak' },
            { kanji: '電話', reading: 'でんわ', meaning: 'telephone' },
            { kanji: '会話', reading: 'かいわ', meaning: 'conversation' }
        ],
        exampleSentence: {
            japanese: '先生と日本語で楽しく話しました。',
            romaji: 'Sensei to nihongo de tanoshiku hanashimashita.',
            english: 'I talked pleasantly in Japanese with the teacher.'
        }
    },
    {
        id: 'k_n5_039',
        character: '聞',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['hear', 'listen', 'ask'],
        onReadings: ['ブン', 'モン'],
        kunReadings: ['き.く', 'き.こえる'],
        strokeCount: 14,
        radical: '耳 (ear)',
        compounds: [
            { kanji: '聞く', reading: 'きく', meaning: 'to listen / ask' },
            { kanji: '新聞', reading: 'しんぶん', meaning: 'newspaper' }
        ],
        exampleSentence: {
            japanese: '毎朝ラジオのニュースを聞きます。',
            romaji: 'Maiasa rajio no nyuusu o kikimasu.',
            english: 'I listen to radio news every morning.'
        }
    },
    {
        id: 'k_n5_040',
        character: '見',
        level: 'N5',
        category: 'School & Learning',
        meanings: ['see', 'look', 'visible'],
        onReadings: ['ケン'],
        kunReadings: ['み.る', 'み.える', 'み.せる'],
        strokeCount: 7,
        radical: '見 (see)',
        compounds: [
            { kanji: '見る', reading: 'みる', meaning: 'to see / watch' },
            { kanji: '花見', reading: 'はなみ', meaning: 'cherry blossom viewing' },
            { kanji: '意見', reading: 'いけん', meaning: 'opinion' }
        ],
        exampleSentence: {
            japanese: '週末に映画館で映画を見ました。',
            romaji: 'Shuumatsu ni eigakan de eiga o mimashita.',
            english: 'I watched a movie at the cinema on the weekend.'
        }
    },

    // ==========================================
    // 05. PLACES & DIRECTION (Kanji 41–50) [Review 05]
    // ==========================================
    {
        id: 'k_n5_041',
        character: '東',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['east'],
        onReadings: ['トウ'],
        kunReadings: ['ひがし'],
        strokeCount: 8,
        radical: '木 (tree)',
        compounds: [
            { kanji: '東京', reading: 'とうきょう', meaning: 'Tokyo' },
            { kanji: '東口', reading: 'ひがしぐち', meaning: 'east exit' },
            { kanji: '東洋', reading: 'とうよう', meaning: 'the Orient / East' }
        ],
        exampleSentence: {
            japanese: '東京タワーを見に行きました。',
            romaji: 'Toukyou tawaa o mi ni ikimashita.',
            english: 'I went to see Tokyo Tower.'
        }
    },
    {
        id: 'k_n5_042',
        character: '西',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['west'],
        onReadings: ['セイ', 'サイ'],
        kunReadings: ['にし'],
        strokeCount: 6,
        radical: '西 (west)',
        compounds: [
            { kanji: '西口', reading: 'にしぐち', meaning: 'west exit' },
            { kanji: '関西', reading: 'かんさい', meaning: 'Kansai region' }
        ],
        exampleSentence: {
            japanese: '駅の西口で待ち合わせをしました。',
            romaji: 'Eki no nishiguchi de machiawase o shimashita.',
            english: 'We met at the station\'s west exit.'
        }
    },
    {
        id: 'k_n5_043',
        character: '南',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['south'],
        onReadings: ['ナン'],
        kunReadings: ['みなみ'],
        strokeCount: 9,
        radical: '十 (ten)',
        compounds: [
            { kanji: '南口', reading: 'みなみぐち', meaning: 'south exit' },
            { kanji: '東南アジア', reading: 'とうなんアジア', meaning: 'Southeast Asia' }
        ],
        exampleSentence: {
            japanese: '南の暖かい島へ旅行に行きました。',
            romaji: 'Minami no atatakai shima e ryokou ni ikimashita.',
            english: 'I went on a trip to a warm southern island.'
        }
    },
    {
        id: 'k_n5_044',
        character: '北',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['north'],
        onReadings: ['ホク'],
        kunReadings: ['きた'],
        strokeCount: 5,
        radical: '匕 (spoon)',
        compounds: [
            { kanji: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' },
            { kanji: '北口', reading: 'きたぐち', meaning: 'north exit' }
        ],
        exampleSentence: {
            japanese: '北海道は冬に雪がたくさん降ります。',
            romaji: 'Hokkaidou wa fuyu ni yuki ga takusan furimasu.',
            english: 'A lot of snow falls in Hokkaido in winter.'
        }
    },
    {
        id: 'k_n5_045',
        character: '上',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['above', 'up', 'on top'],
        onReadings: ['ジョウ'],
        kunReadings: ['うえ', 'あ.がる', 'のぼ.る'],
        strokeCount: 3,
        radical: '一 (one)',
        compounds: [
            { kanji: '上', reading: 'うえ', meaning: 'on / above' },
            { kanji: '上手', reading: 'じょうず', meaning: 'skilled / good at' },
            { kanji: '上着', reading: 'うわぎ', meaning: 'jacket / coat' }
        ],
        exampleSentence: {
            japanese: '机の上に辞書があります。',
            romaji: 'Tsukue no ue ni jisho ga arimasu.',
            english: 'There is a dictionary on the desk.'
        }
    },
    {
        id: 'k_n5_046',
        character: '下',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['below', 'down', 'under'],
        onReadings: ['カ', 'ゲ'],
        kunReadings: ['した', 'さ.がる', 'くだ.さる'],
        strokeCount: 3,
        radical: '一 (one)',
        compounds: [
            { kanji: '下', reading: 'した', meaning: 'under / below' },
            { kanji: '下手', reading: 'へた', meaning: 'unskilled / poor at' },
            { kanji: '地下鉄', reading: 'ちかてつ', meaning: 'subway' }
        ],
        exampleSentence: {
            japanese: '椅子の下に猫が寝ています。',
            romaji: 'Isu no shita ni neko ga nete imasu.',
            english: 'A cat is sleeping under the chair.'
        }
    },
    {
        id: 'k_n5_047',
        character: '左',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['left'],
        onReadings: ['サ'],
        kunReadings: ['ひだり'],
        strokeCount: 5,
        radical: '工 (work)',
        compounds: [
            { kanji: '左', reading: 'ひだり', meaning: 'left' },
            { kanji: '左折', reading: 'させつ', meaning: 'left turn' }
        ],
        exampleSentence: {
            japanese: '次の角を左に曲がってください。',
            romaji: 'Tsugi no kado o hidari ni magatte kudasai.',
            english: 'Please turn left at the next corner.'
        }
    },
    {
        id: 'k_n5_048',
        character: '右',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['right'],
        onReadings: ['ウ', 'ユウ'],
        kunReadings: ['みぎ'],
        strokeCount: 5,
        radical: '口 (mouth)',
        compounds: [
            { kanji: '右', reading: 'みぎ', meaning: 'right' },
            { kanji: '右手', reading: 'みぎて', meaning: 'right hand' }
        ],
        exampleSentence: {
            japanese: '右を見て左を見て道路を渡りました。',
            romaji: 'Migi o mite hidari o mite douro o watarimashita.',
            english: 'I looked right and left before crossing the road.'
        }
    },
    {
        id: 'k_n5_049',
        character: '中',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['inside', 'middle', 'center'],
        onReadings: ['チュウ'],
        kunReadings: ['なか'],
        strokeCount: 4,
        radical: '丨 (line)',
        compounds: [
            { kanji: '中', reading: 'なか', meaning: 'inside' },
            { kanji: '中国', reading: 'ちゅうごく', meaning: 'China' },
            { kanji: '一日中', reading: 'いちにちじゅう', meaning: 'all day long' }
        ],
        exampleSentence: {
            japanese: 'カバンの中に財布を入れました。',
            romaji: 'Kaban no naka ni saifu o iremashita.',
            english: 'I put my wallet inside the bag.'
        }
    },
    {
        id: 'k_n5_050',
        character: '外',
        level: 'N5',
        category: 'Places & Direction',
        meanings: ['outside', 'foreign', 'other'],
        onReadings: ['ガイ', 'ゲ'],
        kunReadings: ['そと', 'ほか', 'はず.す'],
        strokeCount: 5,
        radical: '夕 (evening)',
        compounds: [
            { kanji: '外', reading: 'そと', meaning: 'outside' },
            { kanji: '外国', reading: 'がいこく', meaning: 'foreign country' },
            { kanji: '外国人', reading: 'がいこくじん', meaning: 'foreigner' }
        ],
        exampleSentence: {
            japanese: '外は冷たい風が吹いています。',
            romaji: 'Soto wa tsumetai kaze ga fuite imasu.',
            english: 'A cold wind is blowing outside.'
        }
    },

    // ==========================================
    // 06. NATURE (Kanji 51–60) [Review 06]
    // ==========================================
    {
        id: 'k_n5_051',
        character: '山',
        level: 'N5',
        category: 'Nature',
        meanings: ['mountain'],
        onReadings: ['サン'],
        kunReadings: ['やま'],
        strokeCount: 3,
        radical: '山 (mountain)',
        compounds: [
            { kanji: '富士山', reading: 'ふじさん', meaning: 'Mount Fuji' },
            { kanji: '山登り', reading: 'やまのぼり', meaning: 'mountain climbing' }
        ],
        exampleSentence: {
            japanese: '夏に富士山に登りました。',
            romaji: 'Natsu ni Fujisan ni noborimashita.',
            english: 'I climbed Mount Fuji in summer.'
        }
    },
    {
        id: 'k_n5_052',
        character: '川',
        level: 'N5',
        category: 'Nature',
        meanings: ['river', 'stream'],
        onReadings: ['セン'],
        kunReadings: ['かわ'],
        strokeCount: 3,
        radical: '川 (river)',
        compounds: [
            { kanji: '川', reading: 'かわ', meaning: 'river' },
            { kanji: '小川', reading: 'おがわ', meaning: 'brook / stream' }
        ],
        exampleSentence: {
            japanese: '川のほとりをゆっくり散歩しました。',
            romaji: 'Kawa no hotori o yukkuri sanpo shimashita.',
            english: 'I strolled slowly along the riverbank.'
        }
    },
    {
        id: 'k_n5_053',
        character: '木',
        level: 'N5',
        category: 'Nature',
        meanings: ['tree', 'wood'],
        onReadings: ['ボク', 'モク'],
        kunReadings: ['き'],
        strokeCount: 4,
        radical: '木 (tree)',
        compounds: [
            { kanji: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
            { kanji: '大木', reading: 'たいぼく', meaning: 'large tree' }
        ],
        exampleSentence: {
            japanese: '公園の大きな木の下で休みました。',
            romaji: 'Kouen no ookina ki no shita de yasumimashita.',
            english: 'I rested under a large tree in the park.'
        }
    },
    {
        id: 'k_n5_054',
        character: '花',
        level: 'N5',
        category: 'Nature',
        meanings: ['flower', 'blossom'],
        onReadings: ['カ'],
        kunReadings: ['はな'],
        strokeCount: 7,
        radical: '艸 (grass/herb)',
        compounds: [
            { kanji: '花見', reading: 'はなみ', meaning: 'cherry blossom viewing' },
            { kanji: '花屋', reading: 'はなや', meaning: 'flower shop' },
            { kanji: '花火', reading: 'はなび', meaning: 'fireworks' }
        ],
        exampleSentence: {
            japanese: '庭にきれいな花が咲いています。',
            romaji: 'Niwa ni kirei na hana ga saite imasu.',
            english: 'Beautiful flowers are blooming in the garden.'
        }
    },
    {
        id: 'k_n5_055',
        character: '雨',
        level: 'N5',
        category: 'Nature',
        meanings: ['rain'],
        onReadings: ['ウ'],
        kunReadings: ['あめ', 'あま-'],
        strokeCount: 8,
        radical: '雨 (rain)',
        compounds: [
            { kanji: '雨', reading: 'あめ', meaning: 'rain' },
            { kanji: '大雨', reading: 'おおあめ', meaning: 'heavy rain' }
        ],
        exampleSentence: {
            japanese: '午後から雨が降ってきました。',
            romaji: 'Gogo kara ame ga futte kimashita.',
            english: 'It started raining from the afternoon.'
        }
    },
    {
        id: 'k_n5_056',
        character: '天',
        level: 'N5',
        category: 'Nature',
        meanings: ['heavens', 'sky', 'weather'],
        onReadings: ['テン'],
        kunReadings: ['あめ', 'あま'],
        strokeCount: 4,
        radical: '大 (big)',
        compounds: [
            { kanji: '天気', reading: 'てんき', meaning: 'weather' },
            { kanji: '天ぷら', reading: 'てんぷら', meaning: 'tempura' },
            { kanji: '天国', reading: 'てんごく', meaning: 'heaven' }
        ],
        exampleSentence: {
            japanese: '今日は天気がとてもいいですね。',
            romaji: 'Kyou wa tenki ga totemo ii desu ne.',
            english: 'The weather is very nice today, isn\'t it?'
        }
    },
    {
        id: 'k_n5_057',
        character: '気',
        level: 'N5',
        category: 'Nature',
        meanings: ['spirit', 'energy', 'air'],
        onReadings: ['キ'],
        kunReadings: ['いき'],
        strokeCount: 6,
        radical: '气 (steam/air)',
        compounds: [
            { kanji: '元気', reading: 'げんき', meaning: 'healthy / energetic' },
            { kanji: '天気', reading: 'てんき', meaning: 'weather' },
            { kanji: '電気', reading: 'でんき', meaning: 'electricity' },
            { kanji: '気持ち', reading: 'きもち', meaning: 'feeling' }
        ],
        exampleSentence: {
            japanese: '毎日元気で学校に通っています。',
            romaji: 'Mainichi genki de gakkou ni kayotte imasu.',
            english: 'I commute to school energetically every day.'
        }
    },
    {
        id: 'k_n5_058',
        character: '空',
        level: 'N5',
        category: 'Nature',
        meanings: ['sky', 'empty', 'vacant'],
        onReadings: ['クウ'],
        kunReadings: ['そら', 'あ.く', 'から'],
        strokeCount: 8,
        radical: '穴 (cave/hole)',
        compounds: [
            { kanji: '空', reading: 'そら', meaning: 'sky' },
            { kanji: '空港', reading: 'くうこう', meaning: 'airport' },
            { kanji: '空気', reading: 'くうき', meaning: 'air' }
        ],
        exampleSentence: {
            japanese: '青空に飛行機が飛んでいます。',
            romaji: 'Aozora ni hikouki ga tonde imasu.',
            english: 'An airplane is flying in the blue sky.'
        }
    },
    {
        id: 'k_n5_059',
        character: '田',
        level: 'N5',
        category: 'Nature',
        meanings: ['rice field', 'paddy'],
        onReadings: ['デン'],
        kunReadings: ['た'],
        strokeCount: 5,
        radical: '田 (field)',
        compounds: [
            { kanji: '田中', reading: 'たなか', meaning: 'Tanaka (surname)' },
            { kanji: '水田', reading: 'すいでん', meaning: 'water-filled paddy' }
        ],
        exampleSentence: {
            japanese: '田中さんは親切な先生です。',
            romaji: 'Tanaka-san wa shinsetsu na sensei desu.',
            english: 'Mr. Tanaka is a kind teacher.'
        }
    },
    {
        id: 'k_n5_060',
        character: '金',
        level: 'N5',
        category: 'Nature',
        meanings: ['gold', 'money', 'metal'],
        onReadings: ['キン', 'コン'],
        kunReadings: ['かね', 'かな-'],
        strokeCount: 8,
        radical: '金 (gold/metal)',
        compounds: [
            { kanji: 'お金', reading: 'おかね', meaning: 'money' },
            { kanji: '金曜日', reading: 'きんようび', meaning: 'Friday' },
            { kanji: '料金', reading: 'りょうきん', meaning: 'fee / charge' }
        ],
        exampleSentence: {
            japanese: '金曜日の夜に友達と食事をしました。',
            romaji: 'Kin\'youbi no yoru ni tomodachi to shokuji o shimashita.',
            english: 'I had a meal with friends on Friday night.'
        }
    },

    // ==========================================
    // 07. DAILY LIFE (Kanji 61–70) [Review 07]
    // ==========================================
    {
        id: 'k_n5_061',
        character: '水',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['water'],
        onReadings: ['スイ'],
        kunReadings: ['みず'],
        strokeCount: 4,
        radical: '水 (water)',
        compounds: [
            { kanji: '水', reading: 'みず', meaning: 'water' },
            { kanji: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
            { kanji: '水泳', reading: 'すいえい', meaning: 'swimming' }
        ],
        exampleSentence: {
            japanese: '冷たい水を一杯飲みました。',
            romaji: 'Tsumetai mizu o ippai nomimashita.',
            english: 'I drank a glass of cold water.'
        }
    },
    {
        id: 'k_n5_062',
        character: '火',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['fire', 'flame'],
        onReadings: ['カ'],
        kunReadings: ['ひ', 'ほ-'],
        strokeCount: 4,
        radical: '火 (fire)',
        compounds: [
            { kanji: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
            { kanji: '花火', reading: 'はなび', meaning: 'fireworks' },
            { kanji: '火事', reading: 'かじ', meaning: 'fire / conflagration' }
        ],
        exampleSentence: {
            japanese: '夏のお祭りで綺麗な花火を見ました。',
            romaji: 'Natsu no omatsuri de kirei na hanabi o mimashita.',
            english: 'I saw beautiful fireworks at the summer festival.'
        }
    },
    {
        id: 'k_n5_063',
        character: '土',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['soil', 'earth', 'ground'],
        onReadings: ['ド', 'ト'],
        kunReadings: ['つち'],
        strokeCount: 3,
        radical: '土 (earth)',
        compounds: [
            { kanji: '土曜日', reading: 'どようび', meaning: 'Saturday' },
            { kanji: '土地', reading: 'とち', meaning: 'land / plot' }
        ],
        exampleSentence: {
            japanese: '土曜日にテニスを練習します。',
            romaji: 'Doyoubi ni tenisu o renshuu shimasu.',
            english: 'I practice tennis on Saturday.'
        }
    },
    {
        id: 'k_n5_064',
        character: '毎',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['every'],
        onReadings: ['マイ'],
        kunReadings: ['ごと'],
        strokeCount: 6,
        radical: '毋 (mother)',
        compounds: [
            { kanji: '毎日', reading: 'まいにち', meaning: 'every day' },
            { kanji: '毎朝', reading: 'まいあさ', meaning: 'every morning' },
            { kanji: '毎週', reading: 'まいしゅう', meaning: 'every week' },
            { kanji: '毎月', reading: 'まいつき', meaning: 'every month' }
        ],
        exampleSentence: {
            japanese: '毎日日本語の勉強をします。',
            romaji: 'Mainichi nihongo no benkyou o shimasu.',
            english: 'I study Japanese every day.'
        }
    },
    {
        id: 'k_n5_065',
        character: '週',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['week'],
        onReadings: ['シュウ'],
        kunReadings: [],
        strokeCount: 11,
        radical: '辵 (walk)',
        compounds: [
            { kanji: '今週', reading: 'こんしゅう', meaning: 'this week' },
            { kanji: '先週', reading: 'せんしゅう', meaning: 'last week' },
            { kanji: '来週', reading: 'らいしゅう', meaning: 'next week' },
            { kanji: '週末', reading: 'しゅうまつ', meaning: 'weekend' }
        ],
        exampleSentence: {
            japanese: '来週の金曜日にテストがあります。',
            romaji: 'Raishuu no kin\'youbi ni tesuto ga arimasu.',
            english: 'There is a test next Friday.'
        }
    },
    {
        id: 'k_n5_066',
        character: '午',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['noon', 'sign of the horse'],
        onReadings: ['ゴ'],
        kunReadings: ['うま'],
        strokeCount: 4,
        radical: '十 (ten)',
        compounds: [
            { kanji: '午前', reading: 'ごぜん', meaning: 'morning / AM' },
            { kanji: '午後', reading: 'ごご', meaning: 'afternoon / PM' },
            { kanji: '正午', reading: 'しょうご', meaning: 'exact noon' }
        ],
        exampleSentence: {
            japanese: '午後の二時に図書館で会いましょう。',
            romaji: 'Gogo no niji ni toshokan de aimashou.',
            english: 'Let\'s meet at the library at 2:00 PM.'
        }
    },
    {
        id: 'k_n5_067',
        character: '前',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['front', 'before', 'earlier'],
        onReadings: ['ゼン'],
        kunReadings: ['まえ'],
        strokeCount: 9,
        radical: '刀 (sword)',
        compounds: [
            { kanji: '前', reading: 'まえ', meaning: 'front / before' },
            { kanji: '名前', reading: 'なまえ', meaning: 'name' },
            { kanji: '駅前', reading: 'えきまえ', meaning: 'in front of station' }
        ],
        exampleSentence: {
            japanese: '駅の前で友達を待ちました。',
            romaji: 'Eki no mae de tomodachi o machimashita.',
            english: 'I waited for my friend in front of the station.'
        }
    },
    {
        id: 'k_n5_068',
        character: '後',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['after', 'behind', 'later'],
        onReadings: ['ゴ', 'コウ'],
        kunReadings: ['のち', 'うし.ろ', 'あと', 'おく.れる'],
        strokeCount: 9,
        radical: '彳 (step)',
        compounds: [
            { kanji: '後ろ', reading: 'うしろ', meaning: 'behind' },
            { kanji: '午後', reading: 'ごご', meaning: 'afternoon / PM' },
            { kanji: '後で', reading: 'あとで', meaning: 'afterwards / later' }
        ],
        exampleSentence: {
            japanese: '食事の後で薬を飲みます。',
            romaji: 'Shokuji no ato de kusuri o nomimasu.',
            english: 'I take medicine after meals.'
        }
    },
    {
        id: 'k_n5_069',
        character: '今',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['now', 'present'],
        onReadings: ['コン', 'キン'],
        kunReadings: ['いま'],
        strokeCount: 4,
        radical: '人 (person)',
        compounds: [
            { kanji: '今', reading: 'いま', meaning: 'now' },
            { kanji: '今日', reading: 'きょう', meaning: 'today' },
            { kanji: '今月', reading: 'こんげつ', meaning: 'this month' },
            { kanji: '今年', reading: 'ことし', meaning: 'this year' }
        ],
        exampleSentence: {
            japanese: '今、日本語を勉強しています。',
            romaji: 'Ima, nihongo o benkyou shite imasu.',
            english: 'I am studying Japanese right now.'
        }
    },
    {
        id: 'k_n5_070',
        character: '休',
        level: 'N5',
        category: 'Daily Life',
        meanings: ['rest', 'holiday', 'day off'],
        onReadings: ['キュウ'],
        kunReadings: ['やす.む', 'やす.まる', 'やす.み'],
        strokeCount: 6,
        radical: '人 (person)',
        compounds: [
            { kanji: '休む', reading: 'やすむ', meaning: 'to rest / be absent' },
            { kanji: '休み', reading: 'やすみ', meaning: 'holiday / vacation' },
            { kanji: '夏休み', reading: 'なつやすみ', meaning: 'summer vacation' }
        ],
        exampleSentence: {
            japanese: '明日は会社が休みです。',
            romaji: 'Ashita wa kaisha ga yasumi desu.',
            english: 'Tomorrow is a day off from work.'
        }
    },

    // ==========================================
    // 08. OBJECTS & FOOD (Kanji 71–80) [Review 08]
    // ==========================================
    {
        id: 'k_n5_071',
        character: '食',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['eat', 'food', 'meal'],
        onReadings: ['ショク', 'ジキ'],
        kunReadings: ['た.べる', 'く.う'],
        strokeCount: 9,
        radical: '食 (food)',
        compounds: [
            { kanji: '食べる', reading: 'たべる', meaning: 'to eat' },
            { kanji: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
            { kanji: '食堂', reading: 'しょくどう', meaning: 'dining hall' }
        ],
        exampleSentence: {
            japanese: '朝ご飯にパンを食べました。',
            romaji: 'Asagohan ni pan o tabemashita.',
            english: 'I ate bread for breakfast.'
        }
    },
    {
        id: 'k_n5_072',
        character: '飲',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['drink'],
        onReadings: ['イン'],
        kunReadings: ['の.む'],
        strokeCount: 12,
        radical: '食 (food)',
        compounds: [
            { kanji: '飲む', reading: 'のむ', meaning: 'to drink' },
            { kanji: '飲み物', reading: 'のみもの', meaning: 'beverage / drink' }
        ],
        exampleSentence: {
            japanese: '毎朝温かいお茶を飲みます。',
            romaji: 'Maiasa atatakai ocha o nomimasu.',
            english: 'I drink hot green tea every morning.'
        }
    },
    {
        id: 'k_n5_073',
        character: '車',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['car', 'wheel', 'vehicle'],
        onReadings: ['シャ'],
        kunReadings: ['くるま'],
        strokeCount: 7,
        radical: '車 (car)',
        compounds: [
            { kanji: '電車', reading: 'でんしゃ', meaning: 'electric train' },
            { kanji: '自動車', reading: 'じどうしゃ', meaning: 'automobile' },
            { kanji: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' }
        ],
        exampleSentence: {
            japanese: '電車で新宿へ行きました。',
            romaji: 'Densha de Shinjuku e ikimashita.',
            english: 'I went to Shinjuku by train.'
        }
    },
    {
        id: 'k_n5_074',
        character: '電',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['electricity', 'lightning'],
        onReadings: ['デン'],
        kunReadings: [],
        strokeCount: 13,
        radical: '雨 (rain)',
        compounds: [
            { kanji: '電車', reading: 'でんしゃ', meaning: 'train' },
            { kanji: '電気', reading: 'でんき', meaning: 'electricity / light' },
            { kanji: '電話', reading: 'でんわ', meaning: 'telephone' }
        ],
        exampleSentence: {
            japanese: '部屋の電気をつけてください。',
            romaji: 'Heya no denki o tsukete kudasai.',
            english: 'Please turn on the room light.'
        }
    },
    {
        id: 'k_n5_075',
        character: '駅',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['train station'],
        onReadings: ['エキ'],
        kunReadings: [],
        strokeCount: 14,
        radical: '馬 (horse)',
        compounds: [
            { kanji: '駅', reading: 'えき', meaning: 'station' },
            { kanji: '駅員', reading: 'えきいん', meaning: 'station attendant' },
            { kanji: '東京駅', reading: 'とうきょうえき', meaning: 'Tokyo Station' }
        ],
        exampleSentence: {
            japanese: '駅の改札口で待ち合わせをしました。',
            romaji: 'Eki no kaisatsuguchi de machiawase o shimashita.',
            english: 'We met at the station ticket gate.'
        }
    },
    {
        id: 'k_n5_076',
        character: '店',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['store', 'shop'],
        onReadings: ['テン'],
        kunReadings: ['みせ'],
        strokeCount: 8,
        radical: '广 (broad/shelter)',
        compounds: [
            { kanji: '店', reading: 'みせ', meaning: 'shop' },
            { kanji: '店員', reading: 'てんいん', meaning: 'store clerk' },
            { kanji: '売店', reading: 'ばいてん', meaning: 'kiosk / stand' }
        ],
        exampleSentence: {
            japanese: 'あのお店はいつも美味しいパンを売っています。',
            romaji: 'Ano omise wa itsumo oishii pan o utte imasu.',
            english: 'That shop always sells delicious bread.'
        }
    },
    {
        id: 'k_n5_077',
        character: '道',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['road', 'street', 'way', 'path'],
        onReadings: ['ドウ', 'トウ'],
        kunReadings: ['みち'],
        strokeCount: 12,
        radical: '辵 (walk)',
        compounds: [
            { kanji: '道', reading: 'みち', meaning: 'street / path' },
            { kanji: '歩道', reading: 'ほどう', meaning: 'sidewalk' },
            { kanji: '茶道', reading: 'さどう', meaning: 'tea ceremony' }
        ],
        exampleSentence: {
            japanese: 'この道をまっすぐ行くと駅があります。',
            romaji: 'Kono michi o massugu iku to eki ga arimasu.',
            english: 'If you go straight along this street, the station is there.'
        }
    },
    {
        id: 'k_n5_078',
        character: '魚',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['fish'],
        onReadings: ['ギョ'],
        kunReadings: ['さかな', 'うお'],
        strokeCount: 11,
        radical: '魚 (fish)',
        compounds: [
            { kanji: '魚', reading: 'さかな', meaning: 'fish' },
            { kanji: '魚屋', reading: 'さかなや', meaning: 'fish market' },
            { kanji: '金魚', reading: 'きんぎょ', meaning: 'goldfish' }
        ],
        exampleSentence: {
            japanese: '夕食に焼き魚を食べました。',
            romaji: 'Yuushoku ni yakizakana o tabemashita.',
            english: 'I ate grilled fish for dinner.'
        }
    },
    {
        id: 'k_n5_079',
        character: '肉',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['meat'],
        onReadings: ['ニク'],
        kunReadings: [],
        strokeCount: 6,
        radical: '肉 (meat)',
        compounds: [
            { kanji: '牛肉', reading: 'ぎゅうにく', meaning: 'beef' },
            { kanji: '豚肉', reading: 'ぶたにく', meaning: 'pork' },
            { kanji: '鳥肉', reading: 'とりにく', meaning: 'chicken' },
            { kanji: '肉屋', reading: 'にくや', meaning: 'butcher' }
        ],
        exampleSentence: {
            japanese: 'スーパーで牛肉を買いました。',
            romaji: 'Suupaa de gyuuniku o kaimashita.',
            english: 'I bought beef at the supermarket.'
        }
    },
    {
        id: 'k_n5_080',
        character: '茶',
        level: 'N5',
        category: 'Objects & Food',
        meanings: ['tea'],
        onReadings: ['チャ', 'サ'],
        kunReadings: [],
        strokeCount: 9,
        radical: '艸 (grass/herb)',
        compounds: [
            { kanji: 'お茶', reading: 'おちゃ', meaning: 'green tea' },
            { kanji: '紅茶', reading: 'こうちゃ', meaning: 'black tea' },
            { kanji: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' }
        ],
        exampleSentence: {
            japanese: '食後に温かいお茶をいただきます。',
            romaji: 'Shokugo ni atatakai ocha o itadakimasu.',
            english: 'I have warm green tea after meals.'
        }
    },

    // ==========================================
    // 09. ACTIONS (Kanji 81–90) [Review 09]
    // ==========================================
    {
        id: 'k_n5_081',
        character: '行',
        level: 'N5',
        category: 'Actions',
        meanings: ['go', 'act', 'conduct'],
        onReadings: ['コウ', 'ギョウ'],
        kunReadings: ['い.く', 'ゆ.く', 'おこな.う'],
        strokeCount: 6,
        radical: '行 (go/walk)',
        compounds: [
            { kanji: '行く', reading: 'いく', meaning: 'to go' },
            { kanji: '旅行', reading: 'りょこう', meaning: 'travel' },
            { kanji: '銀行', reading: 'ぎんこう', meaning: 'bank' }
        ],
        exampleSentence: {
            japanese: '来月京都へ旅行に行きます。',
            romaji: 'Raigetsu Kyouto e ryokou ni ikimasu.',
            english: 'I will go on a trip to Kyoto next month.'
        }
    },
    {
        id: 'k_n5_082',
        character: '来',
        level: 'N5',
        category: 'Actions',
        meanings: ['come', 'next'],
        onReadings: ['ライ'],
        kunReadings: ['く.る', 'きた.る'],
        strokeCount: 7,
        radical: '木 (tree)',
        compounds: [
            { kanji: '来る', reading: 'くる', meaning: 'to come' },
            { kanji: '来週', reading: 'らいしゅう', meaning: 'next week' },
            { kanji: '来年', reading: 'らいねん', meaning: 'next year' }
        ],
        exampleSentence: {
            japanese: '友達が家に遊びに来ました。',
            romaji: 'Tomodachi ga ie ni asobi ni kimashita.',
            english: 'My friend came over to my house to hang out.'
        }
    },
    {
        id: 'k_n5_083',
        character: '帰',
        level: 'N5',
        category: 'Actions',
        meanings: ['return', 'go home'],
        onReadings: ['キ'],
        kunReadings: ['かえ.る', 'かえ.す'],
        strokeCount: 10,
        radical: '巾 (cloth)',
        compounds: [
            { kanji: '帰る', reading: 'かえる', meaning: 'to return home' },
            { kanji: '帰国', reading: 'きこく', meaning: 'returning to one\'s country' }
        ],
        exampleSentence: {
            japanese: '夕方六時に家へ帰ります。',
            romaji: 'Yuugata rokuji ni ie e kaerimasu.',
            english: 'I return home at 6:00 in the evening.'
        }
    },
    {
        id: 'k_n5_084',
        character: '買',
        level: 'N5',
        category: 'Actions',
        meanings: ['buy', 'purchase'],
        onReadings: ['バイ'],
        kunReadings: ['か.う'],
        strokeCount: 12,
        radical: '貝 (shell)',
        compounds: [
            { kanji: '買う', reading: 'かう', meaning: 'to buy' },
            { kanji: '買い物', reading: 'かいもの', meaning: 'shopping' }
        ],
        exampleSentence: {
            japanese: 'デパートで新しい服を買いました。',
            romaji: 'Depaato de atarashii fuku o kaimashita.',
            english: 'I bought new clothes at the department store.'
        }
    },
    {
        id: 'k_n5_085',
        character: '待',
        level: 'N5',
        category: 'Actions',
        meanings: ['wait', 'depend on'],
        onReadings: ['タイ'],
        kunReadings: ['ま.つ'],
        strokeCount: 9,
        radical: '彳 (step)',
        compounds: [
            { kanji: '待つ', reading: 'まつ', meaning: 'to wait' },
            { kanji: '招待', reading: 'しょうたい', meaning: 'invitation' }
        ],
        exampleSentence: {
            japanese: 'ここで十分間待ってください。',
            romaji: 'Koko de juppunkan matte kudasai.',
            english: 'Please wait here for 10 minutes.'
        }
    },
    {
        id: 'k_n5_086',
        character: '会',
        level: 'N5',
        category: 'Actions',
        meanings: ['meet', 'society', 'assembly'],
        onReadings: ['カイ', 'エ'],
        kunReadings: ['あ.う'],
        strokeCount: 6,
        radical: '人 (person)',
        compounds: [
            { kanji: '会う', reading: 'あう', meaning: 'to meet' },
            { kanji: '会社', reading: 'かいしゃ', meaning: 'company' },
            { kanji: '会話', reading: 'かいわ', meaning: 'conversation' }
        ],
        exampleSentence: {
            japanese: '週末に友達と駅で会いました。',
            romaji: 'Shuumatsu ni tomodachi to eki de aimashita.',
            english: 'I met with my friend at the station on the weekend.'
        }
    },
    {
        id: 'k_n5_087',
        character: '立',
        level: 'N5',
        category: 'Actions',
        meanings: ['stand', 'rise', 'set up'],
        onReadings: ['リツ'],
        kunReadings: ['た.つ', 'た.てる'],
        strokeCount: 5,
        radical: '立 (stand)',
        compounds: [
            { kanji: '立つ', reading: 'たつ', meaning: 'to stand' },
            { kanji: '国立', reading: 'こくりつ', meaning: 'national' }
        ],
        exampleSentence: {
            japanese: '名前を呼ばれて席を立ちました。',
            romaji: 'Namae o yobarete seki o tachimashita.',
            english: 'When my name was called, I stood up from my seat.'
        }
    },
    {
        id: 'k_n5_088',
        character: '入',
        level: 'N5',
        category: 'Actions',
        meanings: ['enter', 'insert'],
        onReadings: ['ニュウ'],
        kunReadings: ['はい.る', 'い.れる'],
        strokeCount: 2,
        radical: '入 (enter)',
        compounds: [
            { kanji: '入る', reading: 'はいる', meaning: 'to enter' },
            { kanji: '入口', reading: 'いりぐち', meaning: 'entrance' },
            { kanji: '入学', reading: 'にゅうがく', meaning: 'school admission' }
        ],
        exampleSentence: {
            japanese: '温かいお風呂に入りました。',
            romaji: 'Atatakai ofuro ni hairimashita.',
            english: 'I got into the warm bath.'
        }
    },
    {
        id: 'k_n5_089',
        character: '出',
        level: 'N5',
        category: 'Actions',
        meanings: ['exit', 'leave', 'send'],
        onReadings: ['シュツ'],
        kunReadings: ['で.る', 'だ.す'],
        strokeCount: 5,
        radical: '凵 (container)',
        compounds: [
            { kanji: '出る', reading: 'でる', meaning: 'to exit / appear' },
            { kanji: '出口', reading: 'でぐち', meaning: 'exit' },
            { kanji: '出発', reading: 'しゅっぱつ', meaning: 'departure' }
        ],
        exampleSentence: {
            japanese: '朝七時半に家を出ます。',
            romaji: 'Asa shichijihan ni ie o demasu.',
            english: 'I leave the house at 7:30 in the morning.'
        }
    },
    {
        id: 'k_n5_090',
        character: '手',
        level: 'N5',
        category: 'Actions',
        meanings: ['hand', 'arm'],
        onReadings: ['シュ'],
        kunReadings: ['て', 'た-'],
        strokeCount: 4,
        radical: '手 (hand)',
        compounds: [
            { kanji: '手紙', reading: 'てがみ', meaning: 'letter' },
            { kanji: '上手', reading: 'じょうず', meaning: 'skilled' },
            { kanji: '下手', reading: 'へた', meaning: 'unskilled' },
            { kanji: 'お手洗い', reading: 'おてあらい', meaning: 'restroom' }
        ],
        exampleSentence: {
            japanese: '石鹸で手をきれいに洗いました。',
            romaji: 'Sekken de te o kirei ni arawimashita.',
            english: 'I washed my hands cleanly with soap.'
        }
    },

    // ==========================================
    // 10. DESCRIPTIONS (Kanji 91–97) [Review 10]
    // ==========================================
    {
        id: 'k_n5_091',
        character: '大',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['big', 'large', 'great'],
        onReadings: ['ダイ', 'タイ'],
        kunReadings: ['おお.きい', 'おお.いに'],
        strokeCount: 3,
        radical: '大 (big)',
        compounds: [
            { kanji: '大きい', reading: 'おおきい', meaning: 'big' },
            { kanji: '大学', reading: 'だいがく', meaning: 'university' },
            { kanji: '大人', reading: 'おとな', meaning: 'adult' },
            { kanji: '大変', reading: 'たいへん', meaning: 'very / tough' }
        ],
        exampleSentence: {
            japanese: '東京ドームはとても大きいです。',
            romaji: 'Toukyou doomu wa totemo ookii desu.',
            english: 'Tokyo Dome is very large.'
        }
    },
    {
        id: 'k_n5_092',
        character: '小',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['small', 'little'],
        onReadings: ['ショウ'],
        kunReadings: ['ちい.さい', 'こ-', 'お-'],
        strokeCount: 3,
        radical: '小 (small)',
        compounds: [
            { kanji: '小さい', reading: 'ちいさい', meaning: 'small' },
            { kanji: '小学校', reading: 'しょうがっこう', meaning: 'elementary school' },
            { kanji: '小鳥', reading: 'ことり', meaning: 'small bird' }
        ],
        exampleSentence: {
            japanese: '机の上に小さい花瓶を置きました。',
            romaji: 'Tsukue no ue ni chiisai kabin o okimashita.',
            english: 'I placed a small vase on the desk.'
        }
    },
    {
        id: 'k_n5_093',
        character: '高',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['tall', 'high', 'expensive'],
        onReadings: ['コウ'],
        kunReadings: ['たか.い', 'たか.まる'],
        strokeCount: 10,
        radical: '高 (tall)',
        compounds: [
            { kanji: '高い', reading: 'たかい', meaning: 'high / expensive' },
            { kanji: '高校', reading: 'こうこう', meaning: 'high school' },
            { kanji: '高級', reading: 'こうきゅう', meaning: 'high class' }
        ],
        exampleSentence: {
            japanese: '富士山は日本で一番高い山です。',
            romaji: 'Fujisan wa Nihon de ichiban takai yama desu.',
            english: 'Mount Fuji is the highest mountain in Japan.'
        }
    },
    {
        id: 'k_n5_094',
        character: '安',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['cheap', 'peaceful', 'quiet'],
        onReadings: ['アン'],
        kunReadings: ['やす.い'],
        strokeCount: 6,
        radical: '宀 (roof)',
        compounds: [
            { kanji: '安い', reading: 'やすい', meaning: 'cheap / inexpensive' },
            { kanji: '安心', reading: 'あんしん', meaning: 'relief / peace of mind' },
            { kanji: '安全', reading: 'あんぜん', meaning: 'safe' }
        ],
        exampleSentence: {
            japanese: 'この店の定食は安くて美味しいです。',
            romaji: 'Kono mise no teishoku wa yasukute oishii desu.',
            english: 'This restaurant\'s set meal is cheap and delicious.'
        }
    },
    {
        id: 'k_n5_095',
        character: '長',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['long', 'leader'],
        onReadings: ['チョウ'],
        kunReadings: ['なが.い'],
        strokeCount: 8,
        radical: '長 (long)',
        compounds: [
            { kanji: '長い', reading: 'ながい', meaning: 'long' },
            { kanji: '社長', reading: 'しゃちょう', meaning: 'company president' },
            { kanji: '校長', reading: 'こうちょう', meaning: 'school principal' }
        ],
        exampleSentence: {
            japanese: '夏休みは長くてとても楽しいです。',
            romaji: 'Natsuyasumi wa nagakute totemo tanoshii desu.',
            english: 'Summer vacation is long and very fun.'
        }
    },
    {
        id: 'k_n5_096',
        character: '新',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['new', 'fresh'],
        onReadings: ['シン'],
        kunReadings: ['あたら.しい', 'あら.た'],
        strokeCount: 13,
        radical: '斤 (axe)',
        compounds: [
            { kanji: '新しい', reading: 'あたらしい', meaning: 'new' },
            { kanji: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
            { kanji: '新幹線', reading: 'しんかんせん', meaning: 'bullet train' }
        ],
        exampleSentence: {
            japanese: '新しいスマートフォンを買いました。',
            romaji: 'Atarashii sumaatofon o kaimashita.',
            english: 'I bought a new smartphone.'
        }
    },
    {
        id: 'k_n5_097',
        character: '古',
        level: 'N5',
        category: 'Descriptions',
        meanings: ['old (things)'],
        onReadings: ['コ'],
        kunReadings: ['ふる.い'],
        strokeCount: 5,
        radical: '口 (mouth)',
        compounds: [
            { kanji: '古い', reading: 'ふるい', meaning: 'old' },
            { kanji: '中古', reading: 'ちゅうこ', meaning: 'secondhand' }
        ],
        exampleSentence: {
            japanese: '京都には古い歴史的な建物がたくさんあります。',
            romaji: 'Kyouto ni wa furui rekishiteki na tatemono ga takusan arimasu.',
            english: 'There are many old historical buildings in Kyoto.'
        }
    },

    // ==========================================
    // 11. COMMON EVERYDAY KANJI (Kanji 98–100) [Review 10 / Final]
    // ==========================================
    {
        id: 'k_n5_098',
        character: '多',
        level: 'N5',
        category: 'Common Everyday Kanji',
        meanings: ['many', 'much', 'frequent'],
        onReadings: ['タ'],
        kunReadings: ['おお.い'],
        strokeCount: 6,
        radical: '夕 (evening)',
        compounds: [
            { kanji: '多い', reading: 'おおい', meaning: 'many / numerous' },
            { kanji: '多分', reading: 'たぶん', meaning: 'probably / perhaps' }
        ],
        exampleSentence: {
            japanese: '東京は人がとても多いです。',
            romaji: 'Toukyou wa hito ga totemo ooi desu.',
            english: 'Tokyo has many people.'
        }
    },
    {
        id: 'k_n5_099',
        character: '少',
        level: 'N5',
        category: 'Common Everyday Kanji',
        meanings: ['few', 'little'],
        onReadings: ['ショウ'],
        kunReadings: ['すく.ない', 'すこ.し'],
        strokeCount: 4,
        radical: '小 (small)',
        compounds: [
            { kanji: '少し', reading: 'すこし', meaning: 'a little' },
            { kanji: '少ない', reading: 'すくない', meaning: 'few / scarce' },
            { kanji: '少年', reading: 'しょうねん', meaning: 'boy / juvenile' }
        ],
        exampleSentence: {
            japanese: '日本語が少し話せます。',
            romaji: 'Nihongo ga sukoshi hanasemasu.',
            english: 'I can speak a little Japanese.'
        }
    },
    {
        id: 'k_n5_100',
        character: '白',
        level: 'N5',
        category: 'Common Everyday Kanji',
        meanings: ['white'],
        onReadings: ['ハク', 'ビャク'],
        kunReadings: ['しろ', 'しろ.い'],
        strokeCount: 5,
        radical: '白 (white)',
        compounds: [
            { kanji: '白い', reading: 'しろい', meaning: 'white' },
            { kanji: '白黒', reading: 'しろくろ', meaning: 'black and white' },
            { kanji: '面白', reading: 'おもしろい', meaning: 'interesting' }
        ],
        exampleSentence: {
            japanese: '白いシャツを着て学校へ行きました。',
            romaji: 'Shiroi shatsu o kite gakkou e ikimashita.',
            english: 'I went to school wearing a white shirt.'
        }
    }
];

export default kanjiList;
