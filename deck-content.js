/* Blue Shores — deck content. Text only; all styling lives in the Design Component. */
(function () {
  function L(he, en) { return { he: he, en: en }; }
  var HERO = "https://static.wixstatic.com/media/1691bd_71cbbd35377e4b3087de3394b0780299~mv2.png/v1/fit/w_1654,h_799,q_90,enc_avif,quality_auto/1691bd_71cbbd35377e4b3087de3394b0780299~mv2.png";
  var K2 = "https://static.wixstatic.com/media/1691bd_4d75feadb096433d953708683ecc892b~mv2.png/v1/fit/w_1654,h_799,q_90,enc_avif,quality_auto/1691bd_4d75feadb096433d953708683ecc892b~mv2.png";
  var K3 = "https://static.wixstatic.com/media/1691bd_5017aa72fe404831a91c75c5dbb40585~mv2.png/v1/fit/w_1654,h_799,q_90,enc_avif,quality_auto/1691bd_5017aa72fe404831a91c75c5dbb40585~mv2.png";
  var K6 = "https://static.wixstatic.com/media/1691bd_c6d360bfb02744d39e604a79628c6052~mv2.png/v1/fit/w_1654,h_799,q_90,enc_avif,quality_auto/1691bd_c6d360bfb02744d39e604a79628c6052~mv2.png";

  var SRC = [
    { h: L('עיריית הרצליה — מצגת הסכם הגג 2026', 'Herzliya Municipality — agreement deck 2026'), d: L('מקור רשמי · 14,100 יח"ד · 5 מיליארד ₪ · תשתיות', 'Official · 14,100 units · ₪5B · infrastructure'), u: "https://www.herzliya.muni.il/uploads/n/1774261436.8977.pdf" },
    { h: L('עיריית הרצליה — שאלות ותשובות', 'Herzliya Municipality — Q&A'), d: L('רשמי · היתרים 2029 · ראש סדר עדיפויות · רק"ל 2030-2033', 'Official · permits 2029 · top priority · LRT 2030-2033'), u: "https://www.herzliya.muni.il/uploads/n/1774261366.6452.pdf" },
    { h: L('קייזר אדריכלים — התוכנית', 'Kaiser Architects — the plan'), d: L('מתכנני חוף התכלת · הדמיות · חזון אדריכלי', 'Blue Shores planners · renderings · architectural vision'), u: "https://www.kaiser-arch.com/projects-1/%D7%93%D7%A8%D7%95%D7%9D%D6%BE%D7%9E%D7%A2%D7%A8%D7%91-%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94" },
    { h: L('מנהל התכנון — הר/2200/א׳', 'Planning Administration — Har/2200/A'), d: L('התוכנית הרשמית במבא"ת · 504-0396994', 'Official plan · 504-0396994'), u: "https://mavat.iplan.gov.il/SV4/1/5000399529/310" },
    { h: L('ynet — אישור התוכנית', 'ynet — plan approval'), d: L('הוועדה המחוזית אישרה סופית · 1,600 דיור בר־השגה', 'District committee final approval · 1,600 affordable units'), u: "https://www.ynet.co.il/economy/article/s1kob5xny" },
    { h: L('ביזפורטל — 12,500 דירות', 'Bizportal — 12,500 apartments'), d: L('אישור התוכנית לאחר עשור', 'Plan approved after a decade'), u: "https://www.bizportal.co.il/realestates/news/article/799615" },
    { h: L('ביזפורטל — הסכם הגג 6 מיליארד', 'Bizportal — ₪6B agreement'), d: L('רמ"י + עירייה · 2026–2032 · חוף התכלת עוגן', 'ILA + municipality · 2026–2032 · Blue Shores anchor'), u: "https://www.bizportal.co.il/realestates/news/article/20024299" },
    { h: L('TheMarker — הסכם הגג', 'TheMarker — the agreement'), d: L('5.5 מיליארד ₪ לתשתיות · 45 אלף דירות בעיר', '₪5.5B for infrastructure · 45K apartments citywide'), u: "https://www.themarker.com/realestate/2025-11-23/ty-article/.highlight/0000019a-b11a-d83e-a19b-f77ef0ab0000" },
    { h: L('חוף התכלת בהסכם — 14,100 יח"ד', 'Blue Shores in the agreement — 14,100 units'), d: L('עדכון מספרים · פארק מרכזי · מחלף רב המכר', 'Updated figures · central park · Rav-Mecher interchange'), u: "https://sdedov.co.il/%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94-%D7%97%D7%AA%D7%9E%D7%94-%D7%A2%D7%9C-%D7%94%D7%A1%D7%9B%D7%9D-%D7%92%D7%92-%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%97%D7%95%D7%A3-%D7%94%D7%AA%D7%9B%D7%9C%D7%AA/" },
    { h: L('נת"ע — הקו הירוק', 'NTA — the Green Line'), d: L('39 ק"מ · 62 תחנות · הרצליה↔ת"א · מקטע דרומי 2028', '39 km · 62 stations · Herzliya↔TA · southern segment 2028'), u: "https://www.nta.co.il/light-rail/%D7%94%D7%A7%D7%95-%D7%94%D7%99%D7%A8%D7%95%D7%A7/" },
    { h: L('תת"ל/71/ג — תקנון (PDF)', 'NTP/71/C — regulations (PDF)'), d: L('תוכנית לאומית מאושרת · הקו הירוק מקטע צפוני', 'Approved national plan · Green Line northern segment'), u: "https://apps.land.gov.il/IturTabotData/takanonim/Artzi/9509574.pdf" },
    { h: L('עיריית ת"א — רכבת קלה', 'Tel Aviv Municipality — light rail'), d: L('רשת מלאה ~2030 · נת"ע אחראית', 'Full network ~2030 · operated by NTA'), u: "https://www.tel-aviv.gov.il/Residents/Transportation/Pages/masstransporttrain.aspx" },
    { h: L('עיריית הרצליה — היטל השבחה', 'Herzliya Municipality — betterment levy'), d: L('עמוד רשמי + טפסים · תצהיר פטור 19(ג) · בירור חבות', 'Official page + forms · §19(c) exemption affidavit · liability check'), u: "http://handasa.herzliya.muni.il/Rishuy_bnia/Pages/hashbaha.aspx" },
    { h: L('כל־זכות — פטור 140 מ"ר', 'Kol-Zchut — 140 sqm exemption'), d: L('סעיף 19(ג) · תנאי מגורים 4 שנים · לשון החוק', '§19(c) · 4-year residency condition · statutory text'), u: "https://www.kolzchut.org.il/he/%D7%A4%D7%98%D7%95%D7%A8_%D7%9E%D7%94%D7%99%D7%98%D7%9C_%D7%94%D7%A9%D7%91%D7%97%D7%94_%D7%9C%D7%91%D7%A0%D7%99%D7%94_%D7%90%D7%95_%D7%94%D7%A8%D7%97%D7%91%D7%94_%D7%A9%D7%9C_%D7%93%D7%99%D7%A8%D7%AA_%D7%9E%D7%92%D7%95%D7%A8%D7%99%D7%9D_%D7%A2%D7%93_140_%D7%9E%22%D7%A8" },
    { h: L('אתר קבוצת שניידר', 'Schneider Group website'), d: L('ביו · מיתוג · פרויקטים', 'Bio · branding · projects'), u: "https://schgroup.co.il" }
  ];

  var DISC = L(
    'כל הנתונים במצגת מגובים במקורות רשמיים (מנהל התכנון, רמ"י, עיריית הרצליה, נת"ע) או בסיקור תקשורתי מהימן. מגמת השווי מוצגת איכותית בלבד ואינה התחייבות; השווי הנוכחי מתעדכן לפי השוק. מספרי שווי מתוך השמאות אינם מוצגים ללקוח (הגבלת השמאי, תקן 22). גודל התוכנית ~2,000 דונם לפי המקור הרשמי והשמאות. היטל השבחה: שיעור ~50% (סעיף 3), פטור 140 מ"ר בתנאי מגורים 4 שנים (סעיף 19(ג)) — התוספת השלישית לחוק התכנון והבנייה, התשכ"ה־1965.',
    'All figures are backed by official sources (Planning Administration, ILA, Herzliya Municipality, NTA) or credible media. Value trends are shown qualitatively only and are not a commitment; current value updates with the market. Appraisal value figures are not shown to clients (appraiser restriction, Standard 22). Plan size ~2,000 dunam per the official source and appraisal. Betterment levy: ~50% rate (§3), 140 sqm exemption subject to a 4-year residency condition (§19(c)) — Third Schedule to the Planning and Building Law, 1965.'
  );

  var SLIDES = [
    {
      type: 'cover',
      label: '01',
      kick: L('דרום־מערב הרצליה · רובע חוף הים', 'Southwest Herzliya · Seaside District'),
      t1: L('חוף', 'Blue'),
      t2: L('התכלת', 'Shores'),
      sub: L('רובע עירוני חדש על קו החוף בהרצליה — הזדמנות השקעה בקרקע פרטית בלב מטרופולין גוש דן.', 'A new seaside urban district in Herzliya — a private-land investment opportunity in the heart of the Gush Dan metropolis.'),
      meta: L('מצגת השקעה · הנתונים מבוססים על מקורות רשמיים ומסמכי תכנון מאושרים', 'Investment presentation · based on official sources and approved planning documents'),
      img: HERO
    },
    {
      type: 'content',
      label: '02',
      pill: L('קבוצת שניידר נדל"ן', 'Schneider Real Estate Group'),
      h: L('שותפות של אנשי מקצוע', 'A Partnership of Professionals'),
      lead: L('מאחורי קבוצת שניידר עומדת קבוצה המורכבת מאנשים איכותיים ביותר — שותפים בעלי אינטרס זהה.', 'Behind Schneider stands a group of top-tier people — partners with one shared interest.'),
      blocks: [
        { t: 'stats', items: [
          { v: L('~30', '~30'), u: L('שנות ניסיון', 'years'), k: L('בנדל"ן, בעיקר בהרצליה', 'in real estate, mainly in Herzliya'), gold: true },
          { v: L('2', '2'), u: L('שכונות', 'neighborhoods'), k: L('האירוסים וזמר העברי — הושלמו', 'Irisim & Zemer Ha\'Ivri — completed') },
          { v: L('1', '1'), u: L('הסכם שיתוף', 'agreement'), k: L('כל השותפים תחת אותם תנאים', 'all partners on identical terms') }
        ] },
        { t: 'p', x: L('חברי הקבוצה נמנים על בעלי מקצוע מהשורה הראשונה — מנכ"לים, מהנדסים ואנשי עסקים. את הקבוצה מלווה משפטית משרד עורכי הדין פירון, מהמובילים בישראל, אשר בין חבריו נמנים גם רוכשים בקבוצה עצמה — כמו כל שותף אחר. כל השותפים חתומים תחת אותו הסכם שיתוף, ומכאן אינטרס משותף אחד: <b>תכנון מיטבי, בנייה איכותית ותוצר סופי של בניינים ודירות ברמה גבוהה.</b>', 'The group brings together first-rate professionals — CEOs, engineers and businesspeople. It is supported legally by Firon, one of Israel\'s leading law firms, several of whose own partners are buyers in the group — just like any other partner. All partners sign the same sharing agreement, creating one shared interest: <b>optimal planning, quality construction and a high-end final product.</b>') },
        { t: 'chips', items: [
          { x: L('ליווי משפטי · משרד עורכי הדין פירון — לחצו לאתר', 'Legal counsel · Firon Law Firm — visit their site'), u: 'https://www.firon.co.il/he/', tone: 'gold' },
          { x: L('מהנדסים ומתכננים', 'Engineers & planners') },
          { x: L('מנכ"לים ואנשי עסקים', 'CEOs & businesspeople') },
          { x: L('אינטרס משותף לתוצר איכותי', 'Shared interest in a quality outcome') }
        ] },
        { t: 'p', x: L('הקבוצה משמשת כחברת הניהול ומלווה את התהליך ליווי מקצועי מלא — מהרכישה ועד רישום הזכויות.', 'The group serves as the management company and provides full professional support throughout the process — from purchase to registration of rights.') }
      ],
      srclabel: L('אתר הקבוצה:', 'The group\'s website:'),
      srcs: [{ t: L('אתר קבוצת שניידר נדל"ן', 'Schneider Real Estate Group site'), u: 'https://schgroup.co.il' }]
    },
    {
      type: 'content',
      label: '03',
      wide: true,
      pill: L('המתחם והחזון · קייזר אדריכלים', 'The Complex & Vision · Kaiser Architects'),
      h: L('רובע עירוני חדש על קו החוף', 'A New Seaside Urban District'),
      lead: L('רצועת חוף פתוחה בין הים לעיר — מהקרקעות המבוקשות בישראל, בין מרינה הרצליה לגבול תל אביב.', 'An open coastal strip between the sea and the city — among the most sought-after land in Israel, between Herzliya Marina and the Tel Aviv boundary.'),
      blocks: [
        { t: 'status',
          tag: L('הסטטוס התכנוני', 'Planning status'),
          big1: L('אושרה', 'Approved'),
          big2: L('למתן תוקף', 'for validity'),
          date: L('פברואר 2022', 'February 2022'),
          ref: L('תוכנית המתאר הר/2200/א׳', 'Master plan Har/2200/A'),
          x: L('הבסיס לוודאות לגבי <b>הייעוד והזכויות</b>. מכאן, הדרך להיתרי בנייה עוברת בהשלמת <b>תוכנית מפורטת הכוללת איחוד וחלוקה</b>.', 'The basis for certainty on <b>land use and rights</b>. From here, the path to building permits runs through completing a <b>detailed plan including consolidation & division</b>.'),
          note: L('במקביל נחתם <b>הסכם גג</b> עם המדינה למימון הפיתוח והתשתיות.', 'In parallel, an <b>agreement</b> was signed with the State to fund development and infrastructure.') },
        { t: 'morph', a: 'assets/land.jpg', b: 'assets/map.jpg',
          hintA: L('לתוכנית המאושרת לחצו', 'Tap for the approved plan'),
          hintB: L('לתמונת הקרקע לחצו', 'Tap for the land photo'),
          cap: L('מבט מדרום · המרינה והעיר ברקע. לחיצה מציגה את תכנית המתחם (הר/2200/א׳) — מסומנים: המרינה, מחלף רב המכר, פארק חופי וגבול תל אביב.', 'View from the south · marina and city in the background. Tap to reveal the master plan (Har/2200/A) — marked: the marina, Rav-Mecher interchange, coastal park and the Tel Aviv boundary.') },
        { t: 'chips', items: [
          { x: L('~2,000 דונם', '~2,000 dunam'), tone: 'gold' },
          { x: L('~10% משטח הרצליה', '~10% of Herzliya') },
          { x: L('~14,100 יח"ד', '~14,100 units') },
          { x: L('~463 אלף מ"ר תעסוקה ומסחר', '~463K sqm employment & commerce') },
          { x: L('פארק עירוני ~700 דונם', '~700-dunam urban park') }
        ] },
        { t: 'p', x: L('כיום הקרקע מסווגת בייעוד חקלאי — אחת מעתודות הקרקע הפתוחות האחרונות על קו החוף במטרופולין. תכנית "חוף התכלת" (הר/2200/א׳), שתוכננה על ידי קייזר אדריכלים עבור עיריית הרצליה, משתרעת על כ־2,000 דונם — כ־10% משטח העיר — ומשלבת מגורים, תעסוקה, מסחר, מלונאות ופארק חופי של כ־700 דונם. בליבה עובר הקו הירוק של הרכבת הקלה, המגיע מרחוב אבן גבירול בתל אביב.', 'Today the land is zoned agricultural — one of the last open coastal land reserves in the metropolis. The Blue Shores plan (Har/2200/A), designed by Kaiser Architects for the Herzliya Municipality, spans about 2,000 dunam — roughly 10% of the city — combining residential, employment, commerce, hospitality and a coastal park of about 700 dunam. The light rail\'s Green Line runs through its core, arriving from Ibn Gvirol Street in Tel Aviv.') },
        { t: 'two', a: K2, b: K3, cap: L('הדמיות: קייזר אדריכלים ומתכנני ערים · עבור עיריית הרצליה', 'Renderings: Kaiser Architects & Urban Planners · for the Herzliya Municipality') }
      ],
      srclabel: L('האדריכלים, התוכנית הרשמית והסיקור:', 'Architects, official plan & coverage:'),
      srcs: [
        { t: L('קייזר אדריכלים — עמוד הפרויקט', 'Kaiser Architects — project page'), u: 'https://www.kaiser-arch.com/projects-1/%D7%93%D7%A8%D7%95%D7%9D%D6%BE%D7%9E%D7%A2%D7%A8%D7%91-%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94' },
        { t: L('מנהל התכנון — הר/2200/א׳ (מבא"ת)', 'Planning Administration — Har/2200/A'), u: 'https://mavat.iplan.gov.il/SV4/1/5000399529/310', gov: true },
        { t: L('ynet — אישור התוכנית', 'ynet — plan approval'), u: 'https://www.ynet.co.il/economy/article/s1kob5xny' },
        { t: L('ביזפורטל — אישור התוכנית', 'Bizportal — plan approval'), u: 'https://www.bizportal.co.il/realestates/news/article/799615' },
        { t: L('קישור ל-GovMap', 'Link to GovMap'), u: 'https://www.govmap.gov.il/?c=180911.33,673087.36&z=8&lay=14&b=2', gov: true }
      ]
    },
    {
      type: 'content',
      label: '04',
      pill: L('גב המדינה · הסכם הגג', 'State Backing · Agreement'),
      h: L('המדינה מממנת את הפיתוח', 'The State Funds the Development'),
      lead: L('הסכם גג נחתם ב־24.11.2025 בין המדינה (רמ"י, האוצר, השיכון) לעיריית הרצליה.', 'An agreement was signed on 24.11.2025 between the State (ILA, Finance, Housing) and the Herzliya Municipality.'),
      blocks: [
        { t: 'stats', items: [
          { v: L('~6', '~6'), u: L('מיליארד ₪', 'billion ₪'), k: L('היקף ההסכם', 'total agreement'), gold: true },
          { v: L('2026–2032', '2026–2032'), ltr: true, k: L('תקופת הביצוע', 'execution period') },
          { v: L('~14,100', '~14,100'), u: L('יח"ד', 'units'), k: L('חוף התכלת — עוגן ההסכם', 'Blue Shores — the anchor') }
        ] },
        { t: 'ul', items: [
          L('מעל <b>5.5 מיליארד ₪</b> מיועדים לתשתיות, תחבורה, חוף הים ושטחים ירוקים בעיר.', 'Over <b>₪5.5 billion</b> earmarked for infrastructure, transport, the seafront and green spaces in the city.'),
          L('כ־<b>200 מיליון ₪</b> ייעודיים לפארק המרכזי בחוף התכלת.', 'About <b>₪200 million</b> dedicated to the central park at Blue Shores.'),
          L('כ־<b>חצי מיליארד ₪</b> למחלף רב המכר — שער תחבורתי למתחמים החדשים.', 'About <b>half a billion ₪</b> for the Rav-Mecher interchange — a transport gateway to the new complexes.'),
          L('במסגרת ההסכם עודכן חוף התכלת ל־<b>~14,100 יח"ד</b> ו־<b>~463 אלף מ"ר</b> תעסוקה ומסחר.', 'Under the agreement, Blue Shores was updated to <b>~14,100 units</b> and <b>~463K sqm</b> of employment and commerce.'),
          L('חוף התכלת מוגדר על ידי העירייה כפרויקט <b>בראש סדר העדיפויות</b>.', 'Blue Shores is defined by the municipality as a <b>top-priority</b> project.')
        ] },
        { t: 'p', x: L('משמעות ההסכם: המדינה נוטלת על עצמה את מימון הפיתוח והתשתיות מראש. מנגנון זה מאיץ את קצב ההתקדמות, וקרקע פרטית בתחום התכנית נהנית ממנו במישרין.', 'What the agreement means: the State takes on the funding of development and infrastructure up front. This mechanism accelerates progress, and private land within the plan benefits from it directly.') }
      ],
      srclabel: L('מקורות רשמיים — עיריית הרצליה:', 'Official sources — Herzliya Municipality:'),
      srcs: [
        { t: L('עיריית הרצליה — מצגת הסכם הגג 2026', 'Herzliya Municipality — agreement deck 2026'), u: 'https://www.herzliya.muni.il/uploads/n/1774261436.8977.pdf', gov: true },
        { t: L('עיריית הרצליה — שאלות ותשובות', 'Herzliya Municipality — Q&A'), u: 'https://www.herzliya.muni.il/uploads/n/1774261366.6452.pdf', gov: true },
        { t: L('ביזפורטל — 6 מיליארד ₪', 'Bizportal — ₪6 billion'), u: 'https://www.bizportal.co.il/realestates/news/article/20024299' }
      ]
    },
    {
      type: 'content',
      label: '05',
      pill: L('נגישות ותחבורה', 'Access & Transport'),
      h: L('הקו הירוק במרכז המתחם', 'The Green Line at the Center'),
      lead: L('תת"ל/71/ג — תוכנית לאומית מאושרת. חיבור ישיר בין הרצליה לתל אביב.', 'NTP/71/C — an approved national plan. A direct link between Herzliya and Tel Aviv.'),
      blocks: [
        { t: 'stats', items: [
          { v: L('39', '39'), u: L('ק"מ', 'km'), k: L('אורך הקו הירוק', 'Green Line length') },
          { v: L('62', '62'), u: L('תחנות', 'stations'), k: L('הרצליה ↔ ת"א ↔ חולון/ראשל"צ', 'Herzliya ↔ TA ↔ Holon/Rishon') },
          { v: L('2030–2033', '2030–2033'), ltr: true, k: L('הפעלה מתוכננת', 'planned operation'), gold: true }
        ] },
        { t: 'p', x: L('הקו הירוק (דנקל) מחבר את הרצליה בצפון עד חולון וראשון לציון בדרום, דרך תל אביב. המקטע הצפוני (תת"ל/71/ג) עובר במרכז חוף התכלת ומגדיר את השלד התחבורתי של הרובע. על פי עיריית הרצליה, הרכבות הקלות וה־BRT צפויים להתחיל לפעול בין השנים 2030–2033.', 'The Green Line (Dankal) connects Herzliya in the north to Holon and Rishon LeZion in the south, via Tel Aviv. The northern segment (NTP/71/C) runs through the center of Blue Shores and defines the district\'s transport backbone. Per the Herzliya Municipality, the light rail and BRT are expected to begin operating between 2030 and 2033.') },
        { t: 'media', src: 'assets/lrail.jpg', cap: L('הדמיית תחנת הרכבת הקלה המתוכננת · לאורך כביש 2, בגבול המזרחי של המתחם, לצד בניין מיקרוסופט והים ברקע', 'Rendering of the planned light-rail station · along Route 2, on the eastern edge of the complex, beside the Microsoft building with the sea behind') }
      ],
      srclabel: L('מקורות רשמיים:', 'Official sources:'),
      srcs: [
        { t: L('נת"ע — הקו הירוק', 'NTA — the Green Line'), u: 'https://www.nta.co.il/light-rail/%D7%94%D7%A7%D7%95-%D7%94%D7%99%D7%A8%D7%95%D7%A7/', gov: true },
        { t: L('עיריית ת"א — רכבת קלה', 'Tel Aviv Municipality — light rail'), u: 'https://www.tel-aviv.gov.il/Residents/Transportation/Pages/masstransporttrain.aspx' },
        { t: L('תת"ל/71/ג — תקנון (PDF)', 'NTP/71/C — regulations (PDF)'), u: 'https://apps.land.gov.il/IturTabotData/takanonim/Artzi/9509574.pdf', gov: true }
      ]
    },
    {
      type: 'content',
      label: '06',
      pill: L('מהות ההשקעה', 'The Investment'),
      h: L('רכישת זכויות בקרקע', 'Acquiring Land Rights'),
      lead: L('מטר קרקע → זכויות בנייה. השקעה בקרקע פרטית עם פוטנציאל מימוש עתידי.', 'A sqm of land → building rights. An investment in private land with future realization potential.'),
      blocks: [
        { t: 'trend', x: L('מטר קרקע = כ־1.5 מ"ר זכויות בנייה (לפי דו"ח שמאי תקן 22)', '1 sqm of land = ~1.5 sqm of building rights (per Appraisal Standard 22)') },
        { t: 'ul', items: [
          L('גוש וחלקה זמניים עד לפרצלציה, ולאחריה — <b>מגרש תמורה</b> במסגרת איחוד וחלוקה.', 'Temporary block and parcel until parcellation, after which — a <b>replacement plot</b> via consolidation and division.'),
          L('רוכשים זכויות בקרקע, אשר בהמשך ייתרגמו לזכויות בנייה.', 'You acquire land rights, which later translate into building rights.'),
          L('הקרקע פרטית ו<b>נרשמת בטאבו על שם הרוכש</b> — סחירה, וניתנת למכירה ברווח בכל שלב.', 'The land is private and <b>registered in the Land Registry (Tabu)</b> in the buyer\'s name — tradeable, and sellable at a profit at any stage.')
        ] },
        { t: 'note', label: L('יתרון מבני:', 'Structural advantage:'), x: L('רכישת קרקע בשלב זה חוסכת עלויות משמעותיות הכלולות ברכישת דירה גמורה — ובהן מע"מ (18%), מס רכישה מוגדל ורווח יזמי.', 'Buying land at this stage saves major costs baked into a finished apartment — including VAT (18%), higher purchase tax and developer profit.') },
        { t: 'media', src: K6, cap: L('הדמיה: קייזר אדריכלים', 'Rendering: Kaiser Architects') }
      ]
    },
    {
      type: 'content',
      label: '07',
      pill: L('מבנה העסקה', 'Deal Structure'),
      h: L('הסכם שיתוף — לא קבוצת רכישה', 'A Sharing Agreement — Not a Purchase Group'),
      lead: L('מבנה עסקה שקוף, בליווי מקצועי ומשפטי מלא.', 'A transparent deal structure with full professional and legal support.'),
      blocks: [
        { t: 'ul', items: [
          L('<b>הסכם שיתוף בין בעלי הקרקע</b> — לא קבוצת רכישה. מבנה זה חוסך כפל מס רכישה, מע"מ ורווח יזמי.', 'A <b>sharing agreement between landowners</b> — not a purchase group. This structure avoids double purchase tax, VAT and developer profit.'),
          L('קבוצת שניידר משמשת כ<b>חברת הניהול</b> ומלווה ליווי מקצועי.', 'Schneider serves as the <b>management company</b> with full professional support.'),
          L('ליווי משפטי של <b>פירון משרד עורכי דין</b>.', 'Legal counsel by <b>Firon Law Firm</b>.'),
          L('הכספים <b>מוחזקים בנאמנות</b> עד לרישום הזכויות בטאבו.', 'Funds are <b>held in trust</b> until the rights are registered in the Land Registry (Tabu).')
        ] }
      ]
    },
    {
      type: 'sources',
      label: '08',
      pill: L('נספח · מקורות רשמיים', 'Appendix · Official Sources'),
      h: L('אימות עצמאי', 'Independent Verification'),
      lead: L('כל נתון במצגת ניתן לאימות במקור רשמי. מומלץ לעיין.', 'Every figure in this deck can be verified against an official source. Review recommended.')
    },
    {
      type: 'closing',
      label: '09',
      pill: L('ליצירת קשר', 'Contact'),
      h: L('נשמח לעמוד לרשותכם', 'We Are Here for You'),
      lead: L('השיווק נעשה בהמלצה אישית בלבד — חבר מביא חבר. לשאלות, לקבלת מסמכים או לתיאום פגישה:', 'Marketing is by personal referral only — friend brings friend. For questions, documents or to schedule a meeting:'),
      contacts: [
        { where: L('בישראל', 'Israel'), name: L('ג׳קי שניידר', 'Jacky Schneider'), tel: '+972505212994', label: L('050-5212994', '+972-50-5212994') },
        { where: L('בארה"ב', 'USA'), name: L('אדיר שניידר', 'Adir Schneider'), tel: '+13053516285', label: L('+1-305-351-6285', '+1-305-351-6285') }
      ],
      siteLabel: L('קבוצת שניידר נדל"ן — schgroup.co.il', 'Schneider Real Estate Group — schgroup.co.il')
    }
  ];

  window.BS = { SLIDES: SLIDES, SRC: SRC, DISC: DISC, L: L };
})();
