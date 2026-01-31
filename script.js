// قاعدة بيانات الدول الكاملة (مرتبة ومجهزة)
const ALL_COUNTRIES = [
    {n:"Afghanistan",a:"أفغانستان",c:"93",i:"af"},{n:"Albania",a:"ألبانيا",c:"355",i:"al"},{n:"Algeria",a:"الجزائر",c:"213",i:"dz"},
    {n:"Andorra",a:"أندورا",c:"376",i:"ad"},{n:"Angola",a:"أنغولا",c:"244",i:"ao"},{n:"Argentina",a:"الأرجنتين",c:"54",i:"ar"},
    {n:"Armenia",a:"أرمينيا",c:"374",i:"am"},{n:"Australia",a:"أستراليا",c:"61",i:"au"},{n:"Austria",a:"النمسا",c:"43",i:"at"},
    {n:"Azerbaijan",a:"أذربيجان",c:"994",i:"az"},{n:"Bahrain",a:"البحرين",c:"973",i:"bh"},{n:"Bangladesh",a:"بنجلاديش",c:"880",i:"bd"},
    {n:"Belarus",a:"بيلاروسيا",c:"375",i:"by"},{n:"Belgium",a:"بلجيكا",c:"32",i:"be"},{n:"Benin",a:"بنين",c:"229",i:"bj"},
    {n:"Bolivia",a:"بوليفيا",c:"591",i:"bo"},{n:"Bosnia",a:"البوسنة",c:"387",i:"ba"},{n:"Brazil",a:"البرازيل",c:"55",i:"br"},
    {n:"Bulgaria",a:"بلغاريا",c:"359",i:"bg"},{n:"Canada",a:"كندا",c:"1",i:"ca"},{n:"Chad",a:"تشاد",c:"235",i:"td"},
    {n:"Chile",a:"تشيلي",c:"56",i:"cl"},{n:"China",a:"الصين",c:"86",i:"cn"},{n:"Colombia",a:"كولومبيا",c:"57",i:"co"},
    {n:"Comoros",a:"جزر القمر",c:"269",i:"km"},{n:"Croatia",a:"كرواتيا",c:"385",i:"hr"},{n:"Cyprus",a:"قبرص",c:"357",i:"cy"},
    {n:"Czech Republic",a:"التشيك",c:"420",i:"cz"},{n:"Denmark",a:"الدنمارك",c:"45",i:"dk"},{n:"Djibouti",a:"جيبوتي",c:"253",i:"dj"},
    {n:"Egypt",a:"مصر",c:"20",i:"eg"},{n:"Estonia",a:"إستونيا",c:"372",i:"ee"},{n:"Ethiopia",a:"إثيوبيا",c:"251",i:"et"},
    {n:"Finland",a:"فنلندا",c:"358",i:"fi"},{n:"France",a:"فرنسا",c:"33",i:"fr"},{n:"Georgia",a:"جورجيا",c:"995",i:"ge"},
    {n:"Germany",a:"ألمانيا",c:"49",i:"de"},{n:"Ghana",a:"غانا",c:"233",i:"gh"},{n:"Greece",a:"اليونان",c:"30",i:"gr"},
    {n:"Hungary",a:"المجر",c:"36",i:"hu"},{n:"Iceland",a:"آيسلندا",c:"354",i:"is"},{n:"India",a:"الهند",c:"91",i:"in"},
    {n:"Indonesia",a:"إندونيسيا",c:"62",i:"id"},{n:"Iran",a:"إيران",c:"98",i:"ir"},{n:"Iraq",a:"العراق",c:"964",i:"iq"},
    {n:"Ireland",a:"أيرلندا",c:"353",i:"ie"},{n:"Italy",a:"إيطاليا",c:"39",i:"it"},{n:"Japan",a:"اليابان",c:"81",i:"jp"},
    {n:"Jordan",a:"الأردن",c:"962",i:"jo"},{n:"Kazakhstan",a:"كازاخستان",c:"7",i:"kz"},{n:"Kenya",a:"كينيا",c:"254",i:"ke"},
    {n:"Kuwait",a:"الكويت",c:"965",i:"kw"},{n:"Latvia",a:"لاتفيا",c:"371",i:"lv"},{n:"Lebanon",a:"لبنان",c:"961",i:"lb"},
    {n:"Libya",a:"ليبيا",c:"218",i:"ly"},{n:"Malaysia",a:"ماليزيا",c:"60",i:"my"},{n:"Mali",a:"مالي",c:"223",i:"ml"},
    {n:"Malta",a:"مالطا",c:"356",i:"mt"},{n:"Mauritania",a:"موريتانيا",c:"222",i:"mr"},{n:"Mexico",a:"المكسيك",c:"52",i:"mx"},
    {n:"Morocco",a:"المغرب",c:"212",i:"ma"},{n:"Netherlands",a:"هولندا",c:"31",i:"nl"},{n:"New Zealand",a:"نيوزيلندا",c:"64",i:"nz"},
    {n:"Niger",a:"النيجر",c:"227",i:"ne"},{n:"Nigeria",a:"نيجيريا",c:"234",i:"ng"},{n:"Norway",a:"النرويج",c:"47",i:"no"},
    {n:"Oman",a:"عمان",c:"968",i:"om"},{n:"Pakistan",a:"باكستان",c:"92",i:"pk"},{n:"Palestine",a:"فلسطين",c:"970",i:"ps"},
    {n:"Panama",a:"بنما",c:"507",i:"pa"},{n:"Paraguay",a:"باراجواي",c:"595",i:"py"},{n:"Peru",a:"بيرو",c:"51",i:"pe"},
    {n:"Philippines",a:"الفلبين",c:"63",i:"ph"},{n:"Poland",a:"بولندا",c:"48",i:"pl"},{n:"Portugal",a:"البرتغال",c:"351",i:"pt"},
    {n:"Qatar",a:"قطر",c:"974",i:"qa"},{n:"Romania",a:"رومانيا",c:"40",i:"ro"},{n:"Russia",a:"روسيا",c:"7",i:"ru"},
    {n:"Saudi Arabia",a:"السعودية",c:"966",i:"sa"},{n:"Senegal",a:"السنغال",c:"221",i:"sn"},{n:"Serbia",a:"صربيا",c:"381",i:"rs"},
    {n:"Singapore",a:"سنغافورة",c:"65",i:"sg"},{n:"Slovakia",a:"سلوفاكيا",c:"421",i:"sk"},{n:"Somalia",a:"الصومال",c:"252",i:"so"},
    {n:"South Africa",a:"جنوب أفريقيا",c:"27",i:"za"},{n:"Spain",a:"إسبانيا",c:"34",i:"es"},{n:"Sudan",a:"السودان",c:"249",i:"sd"},
    {n:"Sweden",a:"السويد",c:"46",i:"se"},{n:"Switzerland",a:"سويسرا",c:"41",i:"ch"},{n:"Syria",a:"سوريا",c:"963",i:"sy"},
    {n:"Thailand",a:"تايلاند",c:"66",i:"th"},{n:"Tunisia",a:"تونس",c:"216",i:"tn"},{n:"Turkey",a:"تركيا",c:"90",i:"tr"},
    {n:"UAE",a:"الإمارات",c:"971",i:"ae"},{n:"UK",a:"بريطانيا",c:"44",i:"gb"},{n:"Ukraine",a:"أوكرانيا",c:"380",i:"ua"},
    {n:"Uruguay",a:"أوروجواي",c:"598",i:"uy"},{n:"USA",a:"أمريكا",c:"1",i:"us"},{n:"Uzbekistan",a:"أوزبكستان",c:"998",i:"uz"},
    {n:"Vietnam",a:"فيتنام",c:"84",i:"vn"},{n:"Yemen",a:"اليمن",c:"967",i:"ye"},{n:"Zimbabwe",a:"زيمبابوي",c:"263",i:"zw"}
];

// النصوص والترجمات
const TRANSLATIONS = {
    en: {
        title: "Direct Chat", desc: "Start WhatsApp chat without saving contacts.",
        searchPlace: "Search country...", btn: "Start Chat", share: "Share App:",
        langBtn: "العربية", msg: "Hello"
    },
    ar: {
        title: "دردشة مباشرة", desc: "ابدأ محادثة واتساب دون حفظ الرقم.",
        searchPlace: "ابحث عن الدولة...", btn: "بدء المحادثة", share: "شارك التطبيق:",
        langBtn: "English", msg: "Hello"
    }
};

let currentLang = 'en';

// العناصر الأساسية
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const codeField = document.getElementById('codeField');
const flagIcon = document.getElementById('flagIcon');
const phoneField = document.getElementById('phoneField');

// تشغيل التطبيق
window.onload = function() {
    updateTexts();
    setupPWA();
};

// تبديل اللغة
function toggleLang() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateTexts();
    // إعادة تعيين اتجاه الصفحة
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

function updateTexts() {
    const t = TRANSLATIONS[currentLang];
    document.getElementById('appTitle').innerText = t.title;
    document.getElementById('appDesc').innerText = t.desc;
    document.getElementById('lblSearch').innerText = t.searchPlace; // استخدام Label كعنوان للبحث
    searchInput.placeholder = t.searchPlace;
    document.getElementById('btnText').innerText = t.btn;
    document.getElementById('lblShare').innerText = t.share;
    document.getElementById('langBtn').innerText = t.langBtn;
}

// منطق البحث (قائمة منسدلة حقيقية)
searchInput.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    resultsList.innerHTML = '';
    
    if (val.length === 0) {
        resultsList.style.display = 'none';
        return;
    }

    const filtered = ALL_COUNTRIES.filter(c => 
        c.n.toLowerCase().includes(val) || c.a.includes(val) || c.c.includes(val)
    );

    if (filtered.length > 0) {
        resultsList.style.display = 'block';
        filtered.forEach(c => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            const displayName = currentLang === 'en' ? c.n : c.a;
            div.innerHTML = `<span class="flag-icon flag-icon-${c.i}"></span> ${displayName} (+${c.c})`;
            
            div.onclick = function() {
                codeField.value = '+' + c.c;
                flagIcon.className = `flag-icon flag-icon-${c.i}`;
                searchInput.value = ''; // تفريغ الحقل
                resultsList.style.display = 'none'; // إخفاء القائمة
                phoneField.focus();
            };
            resultsList.appendChild(div);
        });
    } else {
        resultsList.style.display = 'none';
    }
});

// إخفاء القائمة عند الضغط خارجها
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !resultsList.contains(e.target)) {
        resultsList.style.display = 'none';
    }
});

// فتح واتساب
function openWhatsApp() {
    const code = codeField.value.replace('+', '');
    const phone = phoneField.value.replace(/\D/g, '');
    const msg = encodeURIComponent(TRANSLATIONS[currentLang].msg); // Hello

    if (phone.length > 5) {
        window.open(`https://wa.me/${code}${phone}?text=${msg}`, '_blank');
    } else {
        alert("Please check the phone number.");
    }
}

// المشاركة
function shareSocial(type) {
    const url = encodeURIComponent(window.location.href);
    if(type === 'wa') window.open(`https://wa.me/?text=${url}`);
    if(type === 'fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

async function shareNative() {
    if (navigator.share) {
        await navigator.share({title: 'Direct Chat', url: window.location.href});
    }
}

// التثبيت PWA
function setupPWA() {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installBtn').style.display = 'block';
    });
    document.getElementById('installBtn').onclick = () => {
        if(deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                document.getElementById('installBtn').style.display = 'none';
            });
        }
    };
}
