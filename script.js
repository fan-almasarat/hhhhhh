// قاعدة بيانات الدول
const ALL_COUNTRIES = [
    {n:"Saudi Arabia",a:"السعودية",c:"966",i:"sa"},{n:"Egypt",a:"مصر",c:"20",i:"eg"},
    {n:"UAE",a:"الإمارات",c:"971",i:"ae"},{n:"Kuwait",a:"الكويت",c:"965",i:"kw"},
    {n:"Qatar",a:"قطر",c:"974",i:"qa"},{n:"Bahrain",a:"البحرين",c:"973",i:"bh"},
    {n:"Oman",a:"عمان",c:"968",i:"om"},{n:"Jordan",a:"الأردن",c:"962",i:"jo"},
    {n:"Yemen",a:"اليمن",c:"967",i:"ye"},{n:"Sudan",a:"السودان",c:"249",i:"sd"},
    {n:"Iraq",a:"العراق",c:"964",i:"iq"},{n:"Algeria",a:"الجزائر",c:"213",i:"dz"},
    {n:"Morocco",a:"المغرب",c:"212",i:"ma"},{n:"Tunisia",a:"تونس",c:"216",i:"tn"},
    {n:"Libya",a:"ليبيا",c:"218",i:"ly"},{n:"Palestine",a:"فلسطين",c:"970",i:"ps"},
    {n:"Syria",a:"سوريا",c:"963",i:"sy"},{n:"Lebanon",a:"لبنان",c:"961",i:"lb"},
    {n:"USA",a:"أمريكا",c:"1",i:"us"},{n:"UK",a:"بريطانيا",c:"44",i:"gb"},
    {n:"India",a:"الهند",c:"91",i:"in"},{n:"Turkey",a:"تركيا",c:"90",i:"tr"},
    {n:"Germany",a:"ألمانيا",c:"49",i:"de"},{n:"France",a:"فرنسا",c:"33",i:"fr"},
    {n:"Spain",a:"إسبانيا",c:"34",i:"es"},{n:"Italy",a:"إيطاليا",c:"39",i:"it"},
    {n:"Canada",a:"كندا",c:"1",i:"ca"},{n:"Australia",a:"أستراليا",c:"61",i:"au"},
    {n:"Russia",a:"روسيا",c:"7",i:"ru"},{n:"China",a:"الصين",c:"86",i:"cn"},
    {n:"Japan",a:"اليابان",c:"81",i:"jp"},{n:"Indonesia",a:"إندونيسيا",c:"62",i:"id"},
    {n:"Malaysia",a:"ماليزيا",c:"60",i:"my"},{n:"Pakistan",a:"باكستان",c:"92",i:"pk"},
    {n:"Philippines",a:"الفلبين",c:"63",i:"ph"},{n:"Afghanistan",a:"أفغانستان",c:"93",i:"af"},
    {n:"Somalia",a:"الصومال",c:"252",i:"so"}
];

// الترجمات
const STRINGS = {
    ar: { title: "Direct Chat", desc: "راسل فوراً دون حفظ الرقم", lblCountry: "الدولة", lblPhone: "رقم الهاتف", search: "ابحث عن دولتك...", btn: "ابدأ المحادثة", share: "مشاركة التطبيق", contact: "اتصل بي", msg: "السلام عليكم" },
    en: { title: "Direct Chat", desc: "Chat instantly without saving", lblCountry: "Country", lblPhone: "Phone Number", search: "Search country...", btn: "Start Chat", share: "Share App", contact: "Contact Me", msg: "Hello" }
};

let currentLang = 'ar';

// العناصر
const searchInput = document.getElementById('countrySearch');
const dropdown = document.getElementById('countriesDropdown');
const codeDisplay = document.getElementById('codeText');
const flagDisplay = document.getElementById('flagIcon');
const phoneInput = document.getElementById('phoneNumber');

window.onload = function() {
    updateUI();
    detectUserCountry(); // الميزة الجديدة: تحديد الدولة تلقائياً
    setupPWA();
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) dropdown.style.display = 'none';
    });
};

// تحديد الدولة تلقائياً عبر API
async function detectUserCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const userIso = data.country_code.toLowerCase();
        
        // البحث عن الدولة في قائمتنا
        const country = ALL_COUNTRIES.find(c => c.i === userIso);
        if (country) {
            selectCountry(country);
        }
    } catch (error) {
        console.log("Auto-detect failed, using default.");
    }
}

function selectCountry(c) {
    codeDisplay.innerText = '+' + c.c;
    flagDisplay.className = `flag-icon flag-icon-${c.i}`;
    searchInput.value = '';
    dropdown.style.display = 'none';
}

function toggleAppLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateUI();
}

function updateUI() {
    const t = STRINGS[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.getElementById('appTitle').innerText = t.title;
    document.getElementById('appDesc').innerText = t.desc;
    document.getElementById('lblCountry').innerText = t.lblCountry;
    document.getElementById('lblPhone').innerText = t.lblPhone;
    searchInput.placeholder = t.search;
    document.getElementById('btnText').innerText = t.btn;
    document.getElementById('txtShare').innerText = t.share;
    document.getElementById('txtContact').innerText = t.contact;
    document.getElementById('langBtn').querySelector('span').innerText = currentLang === 'ar' ? 'EN' : 'عربي';
}

// منطق البحث
searchInput.addEventListener('input', function() {
    const val = this.value.toLowerCase();
    dropdown.innerHTML = '';
    
    if (val.length === 0) { dropdown.style.display = 'none'; return; }

    const filtered = ALL_COUNTRIES.filter(c => c.n.toLowerCase().includes(val) || c.a.includes(val) || c.c.includes(val));
    
    if (filtered.length > 0) {
        dropdown.style.display = 'block';
        filtered.forEach(c => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `<span class="flag-icon flag-icon-${c.i}"></span> <span>${currentLang === 'ar' ? c.a : c.n} (+${c.c})</span>`;
            div.onclick = () => { selectCountry(c); phoneInput.focus(); };
            dropdown.appendChild(div);
        });
    } else { dropdown.style.display = 'none'; }
});

searchInput.addEventListener('focus', function() { if(this.value) dropdown.style.display = 'block'; });

function startWhatsAppChat() {
    const code = codeDisplay.innerText.replace('+', '');
    const phone = phoneInput.value.replace(/\D/g, '');
    const msg = encodeURIComponent(STRINGS[currentLang].msg);
    
    if (phone.length > 4) {
        window.open(`https://wa.me/${code}${phone}?text=${msg}`, '_blank');
    } else {
        alert(currentLang === 'ar' ? "الرجاء كتابة الرقم بشكل صحيح" : "Invalid Phone Number");
    }
}

async function shareAppNative() {
    if (navigator.share) {
        await navigator.share({ title: 'Direct Chat', url: window.location.href });
    } else {
        prompt("انسخ الرابط:", window.location.href);
    }
}

function setupPWA() {
    let promptEvent;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        promptEvent = e;
        document.getElementById('installBtn').style.display = 'flex';
    });
    document.getElementById('installBtn').onclick = () => {
        if(promptEvent) {
            promptEvent.prompt();
            promptEvent.userChoice.then(() => {
                document.getElementById('installBtn').style.display = 'none';
            });
        }
    };
}
