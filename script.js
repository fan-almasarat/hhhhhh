// قائمة الدول الكاملة (بيانات دقيقة)
const ALL_COUNTRIES = [
    {n:"Afghanistan",a:"أفغانستان",c:"93",i:"af"},{n:"Albania",a:"ألبانيا",c:"355",i:"al"},{n:"Algeria",a:"الجزائر",c:"213",i:"dz"},
    {n:"Andorra",a:"أندورا",c:"376",i:"ad"},{n:"Angola",a:"أنغولا",c:"244",i:"ao"},{n:"Argentina",a:"الأرجنتين",c:"54",i:"ar"},
    {n:"Armenia",a:"أرمينيا",c:"374",i:"am"},{n:"Australia",a:"أستراليا",c:"61",i:"au"},{n:"Austria",a:"النمسا",c:"43",i:"at"},
    {n:"Azerbaijan",a:"أذربيجان",c:"994",i:"az"},{n:"Bahrain",a:"البحرين",c:"973",i:"bh"},{n:"Bangladesh",a:"بنجلاديش",c:"880",i:"bd"},
    {n:"Belgium",a:"بلجيكا",c:"32",i:"be"},{n:"Benin",a:"بنين",c:"229",i:"bj"},{n:"Bolivia",a:"بوليفيا",c:"591",i:"bo"},
    {n:"Bosnia",a:"البوسنة",c:"387",i:"ba"},{n:"Brazil",a:"البرازيل",c:"55",i:"br"},{n:"Bulgaria",a:"بلغاريا",c:"359",i:"bg"},
    {n:"Canada",a:"كندا",c:"1",i:"ca"},{n:"Chad",a:"تشاد",c:"235",i:"td"},{n:"Chile",a:"تشيلي",c:"56",i:"cl"},
    {n:"China",a:"الصين",c:"86",i:"cn"},{n:"Colombia",a:"كولومبيا",c:"57",i:"co"},{n:"Comoros",a:"جزر القمر",c:"269",i:"km"},
    {n:"Croatia",a:"كرواتيا",c:"385",i:"hr"},{n:"Cyprus",a:"قبرص",c:"357",i:"cy"},{n:"Denmark",a:"الدنمارك",c:"45",i:"dk"},
    {n:"Djibouti",a:"جيبوتي",c:"253",i:"dj"},{n:"Egypt",a:"مصر",c:"20",i:"eg"},{n:"Estonia",a:"إستونيا",c:"372",i:"ee"},
    {n:"Ethiopia",a:"إثيوبيا",c:"251",i:"et"},{n:"Finland",a:"فنلندا",c:"358",i:"fi"},{n:"France",a:"فرنسا",c:"33",i:"fr"},
    {n:"Georgia",a:"جورجيا",c:"995",i:"ge"},{n:"Germany",a:"ألمانيا",c:"49",i:"de"},{n:"Ghana",a:"غانا",c:"233",i:"gh"},
    {n:"Greece",a:"اليونان",c:"30",i:"gr"},{n:"Hungary",a:"المجر",c:"36",i:"hu"},{n:"Iceland",a:"آيسلندا",c:"354",i:"is"},
    {n:"India",a:"الهند",c:"91",i:"in"},{n:"Indonesia",a:"إندونيسيا",c:"62",i:"id"},{n:"Iran",a:"إيران",c:"98",i:"ir"},
    {n:"Iraq",a:"العراق",c:"964",i:"iq"},{n:"Ireland",a:"أيرلندا",c:"353",i:"ie"},{n:"Italy",a:"إيطاليا",c:"39",i:"it"},
    {n:"Japan",a:"اليابان",c:"81",i:"jp"},{n:"Jordan",a:"الأردن",c:"962",i:"jo"},{n:"Kazakhstan",a:"كازاخستان",c:"7",i:"kz"},
    {n:"Kenya",a:"كينيا",c:"254",i:"ke"},{n:"Kuwait",a:"الكويت",c:"965",i:"kw"},{n:"Latvia",a:"لاتفيا",c:"371",i:"lv"},
    {n:"Lebanon",a:"لبنان",c:"961",i:"lb"},{n:"Libya",a:"ليبيا",c:"218",i:"ly"},{n:"Malaysia",a:"ماليزيا",c:"60",i:"my"},
    {n:"Mali",a:"مالي",c:"223",i:"ml"},{n:"Mauritania",a:"موريتانيا",c:"222",i:"mr"},{n:"Mexico",a:"المكسيك",c:"52",i:"mx"},
    {n:"Morocco",a:"المغرب",c:"212",i:"ma"},{n:"Netherlands",a:"هولندا",c:"31",i:"nl"},{n:"New Zealand",a:"نيوزيلندا",c:"64",i:"nz"},
    {n:"Niger",a:"النيجر",c:"227",i:"ne"},{n:"Nigeria",a:"نيجيريا",c:"234",i:"ng"},{n:"Norway",a:"النرويج",c:"47",i:"no"},
    {n:"Oman",a:"عمان",c:"968",i:"om"},{n:"Pakistan",a:"باكستان",c:"92",i:"pk"},{n:"Palestine",a:"فلسطين",c:"970",i:"ps"},
    {n:"Panama",a:"بنما",c:"507",i:"pa"},{n:"Peru",a:"بيرو",c:"51",i:"pe"},{n:"Philippines",a:"الفلبين",c:"63",i:"ph"},
    {n:"Poland",a:"بولندا",c:"48",i:"pl"},{n:"Portugal",a:"البرتغال",c:"351",i:"pt"},{n:"Qatar",a:"قطر",c:"974",i:"qa"},
    {n:"Romania",a:"رومانيا",c:"40",i:"ro"},{n:"Russia",a:"روسيا",c:"7",i:"ru"},{n:"Saudi Arabia",a:"السعودية",c:"966",i:"sa"},
    {n:"Senegal",a:"السنغال",c:"221",i:"sn"},{n:"Serbia",a:"صربيا",c:"381",i:"rs"},{n:"Singapore",a:"سنغافورة",c:"65",i:"sg"},
    {n:"Slovakia",a:"سلوفاكيا",c:"421",i:"sk"},{n:"Somalia",a:"الصومال",c:"252",i:"so"},{n:"South Africa",a:"جنوب أفريقيا",c:"27",i:"za"},
    {n:"Spain",a:"إسبانيا",c:"34",i:"es"},{n:"Sudan",a:"السودان",c:"249",i:"sd"},{n:"Sweden",a:"السويد",c:"46",i:"se"},
    {n:"Switzerland",a:"سويسرا",c:"41",i:"ch"},{n:"Syria",a:"سوريا",c:"963",i:"sy"},{n:"Thailand",a:"تايلاند",c:"66",i:"th"},
    {n:"Tunisia",a:"تونس",c:"216",i:"tn"},{n:"Turkey",a:"تركيا",c:"90",i:"tr"},{n:"UAE",a:"الإمارات",c:"971",i:"ae"},
    {n:"UK",a:"بريطانيا",c:"44",i:"gb"},{n:"Ukraine",a:"أوكرانيا",c:"380",i:"ua"},{n:"USA",a:"أمريكا",c:"1",i:"us"},
    {n:"Yemen",a:"اليمن",c:"967",i:"ye"},{n:"Zambia",a:"زامبيا",c:"260",i:"zm"},{n:"Zimbabwe",a:"زيمبابوي",c:"263",i:"zw"}
];

// نصوص الترجمة الشاملة (كل شيء في الصفحة)
const TRANSLATIONS = {
    en: {
        title: "Direct Chat",
        desc: "Chat on WhatsApp without saving numbers.",
        lblCountry: "Select Country",
        searchPlace: "Search country...",
        phonePlace: "Phone Number",
        btnChat: "Start Chat",
        lblShare: "Share App",
        btnShare: "Share with friends",
        langBtn: "العربية",
        msg: "Hello"
    },
    ar: {
        title: "دردشة مباشرة",
        desc: "تواصل عبر واتساب بدون حفظ الرقم.",
        lblCountry: "اختر الدولة",
        searchPlace: "ابحث عن الدولة...",
        phonePlace: "رقم الهاتف",
        btnChat: "بدء المحادثة",
        lblShare: "شارك التطبيق",
        btnShare: "مشاركة مع الأصدقاء",
        langBtn: "English",
        msg: "Hello"
    }
};

let currentLang = 'en';

// العناصر (DOM Elements)
const countrySearch = document.getElementById('countrySearch');
const countriesDropdown = document.getElementById('countriesDropdown');
const codeText = document.getElementById('codeText');
const flagIcon = document.getElementById('flagIcon');
const phoneNumber = document.getElementById('phoneNumber');

// عند التحميل
window.onload = function() {
    updateLanguage();
    setupInstall();
    
    // إخفاء القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            countriesDropdown.style.display = 'none';
        }
    });
};

// تبديل اللغة
function toggleAppLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const t = TRANSLATIONS[currentLang];
    
    // تحديث الاتجاه واللغة
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // تحديث جميع النصوص
    document.getElementById('mainTitle').innerText = t.title;
    document.getElementById('subTitle').innerText = t.desc;
    document.getElementById('lblCountry').innerText = t.lblCountry;
    countrySearch.placeholder = t.searchPlace;
    phoneNumber.placeholder = t.phonePlace;
    document.getElementById('btnChatText').innerText = t.btnChat;
    document.getElementById('shareLabel').innerText = t.lblShare;
    document.getElementById('btnShareText').innerText = t.btnShare;
    document.getElementById('langBtn').innerText = t.langBtn;
}

// منطق البحث والقائمة المنسدلة (Custom Dropdown)
countrySearch.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    countriesDropdown.innerHTML = '';
    
    if (val.length === 0) {
        countriesDropdown.style.display = 'none';
        return;
    }

    // تصفية الدول (بحث بالاسم العربي أو الإنجليزي أو الكود)
    const filtered = ALL_COUNTRIES.filter(c => 
        c.n.toLowerCase().includes(val) || 
        c.a.includes(val) || 
        c.c.includes(val)
    );

    if (filtered.length > 0) {
        countriesDropdown.style.display = 'block';
        filtered.forEach(c => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            
            const name = currentLang === 'en' ? c.n : c.a;
            item.innerHTML = `
                <span class="flag-icon flag-icon-${c.i}"></span>
                <span>${name} (+${c.c})</span>
            `;

            // عند الضغط على دولة
            item.onclick = () => {
                codeText.innerText = '+' + c.c;
                flagIcon.className = `flag-icon flag-icon-${c.i}`;
                countrySearch.value = ''; // تفريغ الحقل فوراً
                countriesDropdown.style.display = 'none';
                phoneNumber.focus(); // توجيه المؤشر للرقم
            };
            
            countriesDropdown.appendChild(item);
        });
    } else {
        countriesDropdown.style.display = 'none';
    }
});

// فتح القائمة عند التركيز على الحقل (اختياري)
countrySearch.addEventListener('focus', function() {
    if(this.value.length > 0) countriesDropdown.style.display = 'block';
});

// فتح واتساب
function startWhatsAppChat() {
    const code = codeText.innerText.replace('+', '');
    const phone = phoneNumber.value.replace(/\D/g, '');
    const msg = encodeURIComponent(TRANSLATIONS[currentLang].msg);

    if (phone.length > 5) {
        window.open(`https://wa.me/${code}${phone}?text=${msg}`, '_blank');
    } else {
        alert(currentLang === 'en' ? "Please check phone number" : "تأكد من رقم الهاتف");
    }
}

// المشاركة (Native Only)
async function shareAppNative() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Direct Chat',
                text: 'Chat on WhatsApp without saving numbers!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback في حال عدم دعم المتصفح
        prompt(currentLang === 'en' ? "Copy link:" : "انسخ الرابط:", window.location.href);
    }
}

// منطق التثبيت (PWA)
function setupInstall() {
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
                deferredPrompt = null;
            });
        }
    };
}
