export const lessons = [
    // ===== N5 HIRAGANA =====
    {
        id: 'n5-hiragana-1',
        title: 'Hiragana: Vowels (あいうえお)',
        level: 'N5',
        category: 'hiragana',
        description: 'Learn the five vowel sounds — the foundation of Japanese pronunciation.',
        content: `Hiragana is the most fundamental Japanese writing system. Every sound in Japanese can be written in hiragana, and it's the first thing every learner should master.

The five vowels are the building blocks of all Japanese sounds:

• **あ (a)** — pronounced like "ah" in "father"
• **い (i)** — pronounced like "ee" in "feet"
• **う (u)** — pronounced like "oo" in "food" (but with less lip rounding)
• **え (e)** — pronounced like "e" in "pet"
• **お (o)** — pronounced like "o" in "go"

Unlike English, Japanese vowels are always pronounced the same way. There are no silent vowels or vowel shifts. This makes pronunciation very consistent once you learn these five sounds.

**Tips for Practice:**
1. Say each vowel slowly and clearly
2. Japanese vowels are shorter/crisper than English ones
3. Keep your mouth relaxed — Japanese doesn't use as much jaw movement as English`,
        examples: [
            { japanese: 'あい', romaji: 'ai', english: 'love' },
            { japanese: 'いえ', romaji: 'ie', english: 'house' },
            { japanese: 'うえ', romaji: 'ue', english: 'above' },
            { japanese: 'あおい', romaji: 'aoi', english: 'blue' },
            { japanese: 'おい', romaji: 'oi', english: 'hey' },
        ],
        culturalNote: 'In Japanese calligraphy (書道, shodō), hiragana is written with a brush and has a flowing, elegant style. Many Japanese people practice calligraphy as a form of meditation and art.',
    },
    {
        id: 'n5-hiragana-2',
        title: 'Hiragana: K-row (かきくけこ)',
        level: 'N5',
        category: 'hiragana',
        description: 'Learn the K-consonant sounds combined with the five vowels.',
        content: `The K-row combines the consonant "k" with each of the five vowels:

• **か (ka)** — like "ka" in "karma"
• **き (ki)** — like "key"
• **く (ku)** — like "coo" in "cool"
• **け (ke)** — like "ke" in "kettle"
• **こ (ko)** — like "co" in "coat"

The K-row is your first consonant row, and it's very straightforward. Each character is simply the "k" sound followed by a vowel.

**Dakuten (゛) — Voiced Variant:**
Adding two small dots (dakuten) to K-row characters creates the G-row:
• が (ga), ぎ (gi), ぐ (gu), げ (ge), ご (go)`,
        examples: [
            { japanese: 'かさ', romaji: 'kasa', english: 'umbrella' },
            { japanese: 'きく', romaji: 'kiku', english: 'chrysanthemum / to listen' },
            { japanese: 'くるま', romaji: 'kuruma', english: 'car' },
            { japanese: 'けさ', romaji: 'kesa', english: 'this morning' },
            { japanese: 'こえ', romaji: 'koe', english: 'voice' },
        ],
        culturalNote: 'きく (chrysanthemum) is the imperial symbol of Japan. The Emperor\'s seal is called the Chrysanthemum Seal (菊紋, kikumon), and you can see it on Japanese passports.',
    },
    // ===== N5 GRAMMAR =====
    {
        id: 'n5-grammar-1',
        title: 'Basic Sentence Structure (SOV)',
        level: 'N5',
        category: 'grammar',
        description: 'Understand the fundamental Subject-Object-Verb word order in Japanese.',
        content: `Japanese uses a **Subject-Object-Verb (SOV)** word order, which is different from English's Subject-Verb-Object (SVO).

**English:** I eat sushi. (Subject → Verb → Object)
**Japanese:** わたしは すしを たべます。(Subject → Object → Verb)

In Japanese, the **verb always comes at the end** of the sentence. This is one of the most important rules to remember.

**Particles** are small words that mark the role of each word in the sentence:
• **は (wa)** — marks the topic/subject
• **を (wo/o)** — marks the direct object
• **に (ni)** — marks direction/time/location
• **で (de)** — marks the place of action
• **が (ga)** — marks the subject (more specific than は)

Think of particles as "tags" that tell you what role each word plays.`,
        examples: [
            { japanese: 'わたしは がくせいです。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
            { japanese: 'ねこが います。', romaji: 'Neko ga imasu.', english: 'There is a cat.' },
            { japanese: 'わたしは にほんごを べんきょうします。', romaji: 'Watashi wa nihongo o benkyou shimasu.', english: 'I study Japanese.' },
            { japanese: 'としょかんで ほんを よみます。', romaji: 'Toshokan de hon o yomimasu.', english: 'I read books at the library.' },
        ],
        culturalNote: 'In casual Japanese, the subject is often dropped entirely when it\'s obvious from context. Saying "わたしは" too much can actually sound unnatural!',
    },
    {
        id: 'n5-grammar-2',
        title: 'です/ます — Polite Form',
        level: 'N5',
        category: 'grammar',
        description: 'Learn the polite verb endings used in everyday Japanese.',
        content: `Japanese has different levels of politeness built into the language. The **です/ます form** (also called "polite form" or "masu-form") is what you'll use in most everyday situations.

**です (desu)** is used after nouns and adjectives:
• がくせいです (I am a student)
• おいしいです (It is delicious)

**ます (masu)** is used as the polite verb ending:
• たべます (I eat — polite)
• のみます (I drink — polite)
• いきます (I go — polite)

**Negative forms:**
• です → ではありません / じゃないです
• ます → ません

**Past tense:**
• です → でした
• ます → ました

**Past negative:**
• です → ではありませんでした
• ます → ませんでした

Always use です/ます form when:
- Talking to strangers
- In formal or business settings
- When you're unsure which level to use`,
        examples: [
            { japanese: 'これは ペンです。', romaji: 'Kore wa pen desu.', english: 'This is a pen.' },
            { japanese: 'まいにち にほんごを べんきょうします。', romaji: 'Mainichi nihongo o benkyou shimasu.', english: 'I study Japanese every day.' },
            { japanese: 'きのう えいがを みました。', romaji: 'Kinou eiga o mimashita.', english: 'I watched a movie yesterday.' },
            { japanese: 'コーヒーを のみません。', romaji: 'Koohii o nomimasen.', english: 'I don\'t drink coffee.' },
        ],
        culturalNote: 'Using casual form (dictionary form) with someone you just met can be considered rude in Japanese culture. When in doubt, always use です/ます form — it shows respect and is never inappropriate.',
    },
    {
        id: 'n5-grammar-3',
        title: 'Particles は, が, を, に, で',
        level: 'N5',
        category: 'grammar',
        description: 'Master the essential particles that are the glue of Japanese sentences.',
        content: `Particles are small but mighty words in Japanese. They come **after** the word they mark and tell you how that word relates to the rest of the sentence.

**は (wa) — Topic Marker**
Marks what you're talking about. Often translated as "as for..."
Note: Written with the hiragana は but pronounced "wa" when used as a particle.

**が (ga) — Subject Marker**
Marks the grammatical subject, often emphasizing new information.

**は vs が — The Big Difference:**
• は introduces the topic (known info): ねこは かわいいです。(As for cats, they're cute.)
• が highlights the subject (new info): ねこが います！(There IS a cat!)

**を (o/wo) — Object Marker**
Marks the direct object of a verb.
• パンを たべます。(I eat bread.)

**に (ni) — Direction/Time/Location**
• がっこうに いきます。(I go to school.) [direction]
• 7じに おきます。(I wake up at 7.) [time]
• とうきょうに すんでいます。(I live in Tokyo.) [location]

**で (de) — Location of Action / Means**
• レストランで たべます。(I eat at a restaurant.) [location]
• はしで たべます。(I eat with chopsticks.) [means]`,
        examples: [
            { japanese: 'わたしは せんせいです。', romaji: 'Watashi wa sensei desu.', english: 'I am a teacher.' },
            { japanese: 'だれが きましたか？', romaji: 'Dare ga kimashita ka?', english: 'Who came?' },
            { japanese: 'みずを のみます。', romaji: 'Mizu o nomimasu.', english: 'I drink water.' },
            { japanese: 'えきに いきます。', romaji: 'Eki ni ikimasu.', english: 'I go to the station.' },
            { japanese: 'こうえんで あそびます。', romaji: 'Kouen de asobimasu.', english: 'I play at the park.' },
        ],
        culturalNote: 'The は vs が distinction is one of the most debated topics even among Japanese linguists. Don\'t worry if it takes a while to feel natural — even advanced learners continue to refine their understanding!',
    },
    // ===== N5 VOCABULARY =====
    {
        id: 'n5-vocab-1',
        title: 'Greetings & Daily Expressions',
        level: 'N5',
        category: 'vocab',
        description: 'Essential everyday greetings and common expressions.',
        content: `Japanese greetings change depending on the time of day, your relationship with the person, and the situation. Here are the most important ones:

**Time-based greetings:**
• おはようございます (ohayou gozaimasu) — Good morning (polite)
• こんにちは (konnichiwa) — Hello / Good afternoon
• こんばんは (konbanwa) — Good evening

**Meeting & parting:**
• はじめまして (hajimemashite) — Nice to meet you (first meeting only)
• よろしくおねがいします (yoroshiku onegaishimasu) — Please treat me well (said when introducing yourself)
• さようなら (sayounara) — Goodbye (somewhat formal)
• じゃあね (jaa ne) — See you! (casual)
• またね (mata ne) — See you later! (casual)

**Daily expressions:**
• ありがとうございます (arigatou gozaimasu) — Thank you (polite)
• すみません (sumimasen) — Excuse me / I'm sorry
• いただきます (itadakimasu) — Said before eating
• ごちそうさまでした (gochisousama deshita) — Said after eating
• おやすみなさい (oyasumi nasai) — Good night`,
        examples: [
            { japanese: 'おはようございます！きょうも いいてんきですね。', romaji: 'Ohayou gozaimasu! Kyou mo ii tenki desu ne.', english: 'Good morning! It\'s nice weather today too, isn\'t it?' },
            { japanese: 'はじめまして、たなかです。よろしくおねがいします。', romaji: 'Hajimemashite, Tanaka desu. Yoroshiku onegaishimasu.', english: 'Nice to meet you, I\'m Tanaka. Please treat me well.' },
            { japanese: 'すみません、トイレは どこですか？', romaji: 'Sumimasen, toire wa doko desu ka?', english: 'Excuse me, where is the restroom?' },
        ],
        culturalNote: 'いただきます literally means "I humbly receive" and is a way of expressing gratitude for the food. Every person in Japan says this before eating, whether at home, in a restaurant, or at school. It\'s considered very rude to start eating without saying it.',
    },
    {
        id: 'n5-vocab-2',
        title: 'Numbers & Counting',
        level: 'N5',
        category: 'vocab',
        description: 'Learn Japanese numbers and the basics of the counter system.',
        content: `Japanese has two number systems: native Japanese numbers (wago) and Chinese-origin numbers (kango). The Chinese-origin system is used most often.

**Basic Numbers (1-10):**
• 1: いち (ichi)
• 2: に (ni)
• 3: さん (san)
• 4: し/よん (shi/yon)
• 5: ご (go)
• 6: ろく (roku)
• 7: しち/なな (shichi/nana)
• 8: はち (hachi)
• 9: きゅう/く (kyuu/ku)
• 10: じゅう (juu)

**Building larger numbers:**
• 11 = じゅういち (10 + 1)
• 20 = にじゅう (2 × 10)
• 100 = ひゃく (hyaku)
• 1,000 = せん (sen)
• 10,000 = まん/いちまん (man/ichiman)

**Important:** Japanese uses a counter system. You can't just say "three cats" — you need a counter word:
• ねこが さんびき います (3 cats — ひき is for small animals)
• ほんを にさつ かいました (bought 2 books — さつ is for bound items)`,
        examples: [
            { japanese: 'でんわばんごうは なんですか？', romaji: 'Denwa bangou wa nan desu ka?', english: 'What is your phone number?' },
            { japanese: 'りんごを みっつ ください。', romaji: 'Ringo o mittsu kudasai.', english: 'Three apples, please.' },
            { japanese: 'にひゃくえんです。', romaji: 'Nihyaku en desu.', english: 'It\'s 200 yen.' },
        ],
        culturalNote: 'The number 4 (四) can be read as "shi," which sounds like the word for death (死). Because of this, 4 is considered unlucky. Many hospitals skip room number 4, and some buildings skip the 4th floor!',
    },
    // ===== N5 KANJI =====
    {
        id: 'n5-kanji-1',
        title: 'First Kanji: 一二三四五',
        level: 'N5',
        category: 'kanji',
        description: 'Learn your first five kanji — the numbers 1 through 5.',
        content: `Kanji are Chinese characters used in Japanese writing. Don't worry — we'll start with the simplest ones!

**Number Kanji:**

**一 (いち / ichi)** — One
• Just one horizontal stroke!
• 一つ (ひとつ / hitotsu) — one thing

**二 (に / ni)** — Two
• Two horizontal strokes
• 二つ (ふたつ / futatsu) — two things

**三 (さん / san)** — Three
• Three horizontal strokes
• 三つ (みっつ / mittsu) — three things

**四 (し・よん / shi/yon)** — Four
• 5 strokes, box-like shape
• 四つ (よっつ / yottsu) — four things

**五 (ご / go)** — Five
• 4 strokes
• 五つ (いつつ / itsutsu) — five things

**Key Concept — On'yomi vs Kun'yomi:**
Most kanji have two types of readings:
• **On'yomi (音読み):** Chinese-origin reading, used in compound words
• **Kun'yomi (訓読み):** Native Japanese reading, used when the kanji stands alone

For example, 一 is "ichi" (on'yomi) in いちがつ (January), but "hito" (kun'yomi) in 一人 (ひとり, one person).`,
        examples: [
            { japanese: '一月は いちがつです。', romaji: 'Ichigatsu wa ichigatsu desu.', english: 'January is the first month.' },
            { japanese: 'にほんごの クラスに 三人 います。', romaji: 'Nihongo no kurasu ni sannin imasu.', english: 'There are three people in the Japanese class.' },
            { japanese: 'りんごを 二つ かいました。', romaji: 'Ringo o futatsu kaimashita.', english: 'I bought two apples.' },
        ],
        culturalNote: 'Kanji were originally imported from China over 1,500 years ago. Over time, Japan adapted them and created unique readings. Today, about 2,136 kanji are designated as "常用漢字" (jōyō kanji) — the kanji needed for everyday life.',
    },
    // ===== N4 GRAMMAR =====
    {
        id: 'n4-grammar-1',
        title: 'て-form (Te-form) of Verbs',
        level: 'N4',
        category: 'grammar',
        description: 'Master the versatile て-form — the Swiss Army knife of Japanese grammar.',
        content: `The て-form (te-form) is one of the most important and versatile verb forms in Japanese. It's used to:
- Connect multiple actions
- Make requests
- Describe ongoing actions
- Give/receive permission
- And much more!

**How to make て-form from ます-form:**

**Group 1 (う-verbs):**
• ～きます → ～いて (かきます → かいて)
• ～ぎます → ～いで (およぎます → およいで)
• ～します → ～して (はなします → はなして)
• ～ちます/ります/います → ～って (まちます → まって)
• ～みます/びます/にます → ～んで (よみます → よんで)

**Group 2 (る-verbs):**
• ～ます → ～て (たべます → たべて)

**Irregular:**
• します → して
• きます → きて

**Common uses of て-form:**
1. **Connecting actions:** あさごはんを たべて、がっこうに いきます。
2. **Requests:** すわって ください。(Please sit down.)
3. **Permission:** たべても いいですか？(May I eat?)
4. **Prohibition:** たべては いけません。(You must not eat.)`,
        examples: [
            { japanese: 'てを あらって ください。', romaji: 'Te o aratte kudasai.', english: 'Please wash your hands.' },
            { japanese: 'でんしゃに のって、えきで おります。', romaji: 'Densha ni notte, eki de orimasu.', english: 'I ride the train and get off at the station.' },
            { japanese: 'しゃしんを とっても いいですか？', romaji: 'Shashin o tottemo ii desu ka?', english: 'May I take a photo?' },
        ],
        culturalNote: 'In Japan, you\'ll hear て-form constantly in daily life. Shop clerks say "おまちください" (please wait), and signs say "さわらないでください" (please don\'t touch). Mastering this form opens up a huge part of practical Japanese.',
    },
    {
        id: 'n4-grammar-2',
        title: 'Potential Form — ～られる/～える',
        level: 'N4',
        category: 'grammar',
        description: 'Learn to express ability — "I can do..." in Japanese.',
        content: `The potential form lets you express ability — what you can or can't do.

**How to form it:**

**Group 1 (う-verbs):**
Change the last う-sound to える-sound:
• のむ → のめる (can drink)
• かく → かける (can write)
• はなす → はなせる (can speak)

**Group 2 (る-verbs):**
Replace る with られる:
• たべる → たべられる (can eat)
• みる → みられる (can see)

**Irregular:**
• する → できる (can do)
• くる → こられる (can come)

**Important note:** In casual speech, Group 2 verbs often drop the ら:
• たべられる → たべれる (this is called "ら抜き言葉")
• みられる → みれる

This is technically "incorrect" grammar but is extremely common in spoken Japanese.`,
        examples: [
            { japanese: 'にほんごが はなせます。', romaji: 'Nihongo ga hanasemasu.', english: 'I can speak Japanese.' },
            { japanese: 'おはしで たべられますか？', romaji: 'Ohashi de taberaremasu ka?', english: 'Can you eat with chopsticks?' },
            { japanese: 'あした こられません。', romaji: 'Ashita koraremasen.', english: 'I can\'t come tomorrow.' },
        ],
        culturalNote: 'Japanese people will be genuinely impressed if you can use chopsticks well. "おはしが じょうずですね！" (You\'re good with chopsticks!) is one of the most common compliments foreigners receive in Japan.',
    },
    // ===== N3 GRAMMAR (Scaffold) =====
    {
        id: 'n3-grammar-1',
        title: 'Conditional Forms: ～たら, ～ば, ～と, ～なら',
        level: 'N3',
        category: 'grammar',
        description: 'Four ways to say "if" in Japanese — learn when to use each one.',
        content: `Japanese has four main conditional forms, each with subtle differences:

**～たら (tara) — "If/When" (most versatile)**
Formation: past tense + ら
• いったら (if I go), たべたら (if I eat)
Use for: natural consequences, one-time events, discoveries

**～ば (ba) — "If" (hypothetical)**
Formation: change last vowel to え + ば
• いけば (if I go), たべれば (if I eat)
Use for: general conditions, hypothetical situations

**～と (to) — "When/If" (automatic result)**
Formation: dictionary form + と
• いくと (when I go), たべると (if I eat)
Use for: natural/automatic results, habitual actions

**～なら (nara) — "If it's the case that..."**
Formation: dictionary form + なら
• いくなら (if you're going)
Use for: giving advice, responding to someone's statement

**Quick guide:**
• Not sure? → Use ～たら (safest choice)
• Hypothetical? → Use ～ば
• Automatic result? → Use ～と
• Giving advice? → Use ～なら`,
        examples: [
            { japanese: 'あめが ふったら、いきません。', romaji: 'Ame ga futtara, ikimasen.', english: 'If it rains, I won\'t go.' },
            { japanese: 'やすければ、かいます。', romaji: 'Yasukereba, kaimasu.', english: 'If it\'s cheap, I\'ll buy it.' },
            { japanese: 'このボタンを おすと、ドアが あきます。', romaji: 'Kono botan o osu to, doa ga akimasu.', english: 'When you press this button, the door opens.' },
            { japanese: 'にほんに いくなら、きょうとに いってください。', romaji: 'Nihon ni iku nara, Kyouto ni itte kudasai.', english: 'If you\'re going to Japan, please go to Kyoto.' },
        ],
        culturalNote: 'Mastering conditionals is a turning point in Japanese fluency. It allows you to have much more natural conversations, express nuance, and understand native speakers better.',
    },
    // ===== N2 & N1 Scaffolds =====
    {
        id: 'n2-grammar-1',
        title: 'Formal Expressions & Business Japanese',
        level: 'N2',
        category: 'grammar',
        description: 'Keigo (honorific language) and formal business expressions.',
        content: `N2 grammar introduces complex grammatical structures and formal expressions used in business and academic Japanese.

**Keigo (敬語) — Honorific Language:**
Japanese has three types of keigo:

1. **尊敬語 (sonkeigo) — Respectful language** (elevates the other person)
2. **謙譲語 (kenjougo) — Humble language** (lowers yourself)
3. **丁寧語 (teineigo) — Polite language** (general politeness)

More content coming soon for N2 level...`,
        examples: [
            { japanese: 'ご確認いただけますでしょうか。', romaji: 'Go-kakunin itadakemasu deshou ka.', english: 'Could you please confirm this?' },
            { japanese: 'お忙しいところ恐れ入りますが...', romaji: 'O-isogashii tokoro osore irimasu ga...', english: 'I\'m sorry to bother you when you\'re busy, but...' },
        ],
        culturalNote: 'Keigo is essential for working in Japan. Even native Japanese speakers sometimes struggle with correct keigo usage, so don\'t be too hard on yourself!',
    },
    {
        id: 'n1-grammar-1',
        title: 'Classical Japanese Expressions in Modern Use',
        level: 'N1',
        category: 'grammar',
        description: 'Advanced grammar patterns derived from classical Japanese that appear in formal writing.',
        content: `N1 represents the highest level of Japanese proficiency. At this level, you'll encounter grammar patterns used in literature, formal writing, and academic contexts.

**Classical expressions still used today:**
• ～ざるを得ない (cannot help but...)
• ～にほかならない (nothing other than...)
• ～をもって (by means of...)

More content coming soon for N1 level...`,
        examples: [
            { japanese: '認めざるを得ない。', romaji: 'Mitomezaru o enai.', english: 'I cannot help but acknowledge it.' },
            { japanese: 'これは努力の結果にほかならない。', romaji: 'Kore wa doryoku no kekka ni hoka naranai.', english: 'This is nothing other than the result of effort.' },
        ],
        culturalNote: 'N1 level Japanese opens the door to reading Japanese literature, academic papers, and understanding formal speeches. It\'s the level required for most Japanese universities and professional careers.',
    },
];
