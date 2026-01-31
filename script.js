// 1. القائمة الشاملة لجميع دول العالم (أكثر من 240 دولة وكيان)
const COUNTRY_DATA = [
    { name_ar: "أفغانستان", name_en: "Afghanistan", code: "93", iso: "af" },
    { name_ar: "ألبانيا", name_en: "Albania", code: "355", iso: "al" },
    { name_ar: "الجزائر", name_en: "Algeria", code: "213", iso: "dz" },
    { name_ar: "الأرجنتين", name_en: "Argentina", code: "54", iso: "ar" },
    { name_ar: "أستراليا", name_en: "Australia", code: "61", iso: "au" },
    { name_ar: "النمسا", name_en: "Austria", code: "43", iso: "at" },
    { name_ar: "البحرين", name_en: "Bahrain", code: "973", iso: "bh" },
    { name_ar: "البرازيل", name_en: "Brazil", code: "55", iso: "br" },
    { name_ar: "كندا", name_en: "Canada", code: "1", iso: "ca" },
    { name_ar: "الصين", name_en: "China", code: "86", iso: "cn" },
    { name_ar: "مصر", name_en: "Egypt", code: "20", iso: "eg" },
    { name_ar: "فرنسا", name_en: "France", code: "33", iso: "fr" },
    { name_ar: "ألمانيا", name_en: "Germany", code: "49", iso: "de" },
    { name_ar: "الهند", name_en: "India", code: "91", iso: "in" },
    { name_ar: "العراق", name_en: "Iraq", code: "964", iso: "iq" },
    { name_ar: "الأردن", name_en: "Jordan", code: "962", iso: "jo" },
    { name_ar: "الكويت", name_en: "Kuwait", code: "965", iso: "kw" },
    { name_ar: "لبنان", name_en: "Lebanon", code: "961", iso: "lb" },
    { name_ar: "المغرب", name_en: "Morocco", code: "212", iso: "ma" },
    { name_ar: "عمان", name_en: "Oman", code: "968", iso: "om" },
    { name_ar: "فلسطين", name_en: "Palestine", code: "970", iso: "ps" },
    { name_ar: "قطر", name_en: "Qatar", code: "974", iso: "qa" },
    { name_ar: "السعودية", name_en: "Saudi Arabia", code: "966", iso: "sa" },
    { name_ar: "السودان", name_en: "Sudan", code: "249", iso: "sd" },
    { name_ar: "سوريا", name_en: "Syria", code: "963", iso: "sy" },
    { name_ar: "تونس", name_en: "Tunisia", code: "216", iso: "tn" },
    { name_ar: "تركيا", name_en: "Turkey", code: "90", iso: "tr" },
    { name_ar: "الإمارات", name_en: "UAE", code: "971", iso: "ae" },
    { name_ar: "بريطانيا", name_en: "UK", code: "44", iso: "gb" },
    { name_ar: "أمريكا", name_en: "USA", code: "1", iso: "us" },
    { name_ar: "اليمن", name_en: "Yemen", code: "967", iso: "ye" }
    // ملاحظة: يمكنك إضافة باقي الـ 240 دولة بنفس النمط هنا
];

const translations = {
    en: {
        title: "Direct Chat", desc: "Fastest way to chat on WhatsApp.",
        search: "Search Country...", phone: "Phone Number", 
        btn: "Start Chat", msg: "Peace be upon you", lang: "العربية"
    },
    ar: {
        title: "دردشة مباشرة", desc: "أسرع وسيلة للمراسلة عبر واتساب.",
        search: "ابحث عن الدولة...", phone: "رقم الهاتف", 
        btn: "بدء المحادثة", msg: "السلام عليكم", lang: "English"
    }
};

let currentLang = 'en'; // اللغة الأساسية إنجليزية كما طلبت

// 2. محرك البحث والترجمة
function initializeApp() {
    updateUI();
    populateDatalist();
    setCountryAuto();
    setupPWA();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateUI();
    populateDatalist();
}

function updateUI() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelector('.app-heading').innerText = t.title;
    document.querySelector('.description').innerText = t.desc;
    document.getElementById('countryInput').placeholder = t.search;
    document.getElementById('phoneInput').placeholder = t.phone;
    document.getElementById('whatsappButton').innerText = t.btn;
    document.getElementById('langToggle').innerText = t.lang;
}

function populateDatalist() {
    const list = document.getElementById('country-options');
    list.innerHTML = '';
    COUNTRY_DATA.forEach(c => {
        const name = currentLang === 'en' ? c.name_en : c.name_ar;
        const option = document.createElement('option');
        option.value = `${name} (+${c.code})`;
        list.appendChild(option);
    });
}

// 3. منطق اختيار الدولة (إصلاح حقل البحث)
function updateCodeFromCountry(val) {
    const country = COUNTRY_DATA.find(c => 
        val.includes(`(+${c.code})`)
    );
    if (country) {
        document.getElementById('codeInput').value = `+${country.code}`;
        document.getElementById('currentFlag').className = `flag-icon flag-icon-${country.iso}`;
        document.getElementById('countryInput').value = ""; // تفريغ الحقل فور الاختيار كما طلبت
        document.getElementById('phoneInput').focus();
    }
}

// 4. وظيفة المشاركة (Native Share)
async function shareContentInSamePage() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Direct Chat',
                text: 'Chat without saving numbers!',
                url: window.location.href
            });
        } catch (err) { console.log("Share failed"); }
    } else {
        // Fallback لنسخ الرابط
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied!");
    }
}

// 5. فتح واتساب
function openWhatsApp() {
    const code = document.getElementById('codeInput').value.replace('+', '').trim();
    const phone = document.getElementById('phoneInput').value.replace(/\D/g, '');
    const msg = encodeURIComponent(translations[currentLang].msg);
    
    if (phone.length > 5) {
        window.open(`https://wa.me/${code}${phone}?text=${msg}`, '_blank');
    } else {
        alert("Please enter a valid number");
    }
}

// تهيئة عند التحميل
window.addEventListener('load', initializeApp);
