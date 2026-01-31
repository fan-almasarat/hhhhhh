// القائمة الكاملة لجميع دول العالم (أكثر من 240 دولة وكيان)
const ALL_COUNTRIES = [
    { name_ar: "أفغانستان", name_en: "Afghanistan", code: "93", iso: "af" },
    { name_ar: "ألبانيا", name_en: "Albania", code: "355", iso: "al" },
    { name_ar: "الجزائر", name_en: "Algeria", code: "213", iso: "dz" },
    { name_ar: "ساموا الأمريكية", name_en: "American Samoa", code: "1", iso: "as" },
    { name_ar: "أندورا", name_en: "Andorra", code: "376", iso: "ad" },
    { name_ar: "أنغولا", name_en: "Angola", code: "244", iso: "ao" },
    { name_ar: "أنغويلا", name_en: "Anguilla", code: "1", iso: "ai" },
    { name_ar: "أنتيغوا وباربودا", name_en: "Antigua and Barbuda", code: "1", iso: "ag" },
    { name_ar: "الأرجنتين", name_en: "Argentina", code: "54", iso: "ar" },
    { name_ar: "أرمينيا", name_en: "Armenia", code: "374", iso: "am" },
    { name_ar: "أروبا", name_en: "Aruba", code: "297", iso: "aw" },
    { name_ar: "أستراليا", name_en: "Australia", code: "61", iso: "au" },
    { name_ar: "النمسا", name_en: "Austria", code: "43", iso: "at" },
    { name_ar: "أذربيجان", name_en: "Azerbaijan", code: "994", iso: "az" },
    { name_ar: "الباهاما", name_en: "Bahamas", code: "1", iso: "bs" },
    { name_ar: "البحرين", name_en: "Bahrain", code: "973", iso: "bh" },
    { name_ar: "بنجلاديش", name_en: "Bangladesh", code: "880", iso: "bd" },
    { name_ar: "باربادوس", name_en: "Barbados", code: "1", iso: "bb" },
    { name_ar: "بيلاروسيا", name_en: "Belarus", code: "375", iso: "by" },
    { name_ar: "بلجيكا", name_en: "Belgium", code: "32", iso: "be" },
    { name_ar: "بليز", name_en: "Belize", code: "501", iso: "bz" },
    { name_ar: "بنين", name_en: "Benin", code: "229", iso: "bj" },
    { name_ar: "برمودا", name_en: "Bermuda", code: "1", iso: "bm" },
    { name_ar: "بوتان", name_en: "Bhutan", code: "975", iso: "bt" },
    { name_ar: "بوليفيا", name_en: "Bolivia", code: "591", iso: "bo" },
    { name_ar: "البوسنة والهرسك", name_en: "Bosnia and Herzegovina", code: "387", iso: "ba" },
    { name_ar: "بوتسوانا", name_en: "Botswana", code: "267", iso: "bw" },
    { name_ar: "البرازيل", name_en: "Brazil", code: "55", iso: "br" },
    { name_ar: "بروناي", name_en: "Brunei", code: "673", iso: "bn" },
    { name_ar: "بلغاريا", name_en: "Bulgaria", code: "359", iso: "bg" },
    { name_ar: "بوركينا فاسو", name_en: "Burkina Faso", code: "226", iso: "bf" },
    { name_ar: "بوروندي", name_en: "Burundi", code: "257", iso: "bi" },
    { name_ar: "كمبوديا", name_en: "Cambodia", code: "855", iso: "kh" },
    { name_ar: "الكاميرون", name_en: "Cameroon", code: "237", iso: "cm" },
    { name_ar: "كندا", name_en: "Canada", code: "1", iso: "ca" },
    { name_ar: "الرأس الأخضر", name_en: "Cape Verde", code: "238", iso: "cv" },
    { name_ar: "جزر كايمان", name_en: "Cayman Islands", code: "1", iso: "ky" },
    { name_ar: "جمهورية أفريقيا الوسطى", name_en: "Central African Republic", code: "236", iso: "cf" },
    { name_ar: "تشاد", name_en: "Chad", code: "235", iso: "td" },
    { name_ar: "تشيلي", name_en: "Chile", code: "56", iso: "cl" },
    { name_ar: "الصين", name_en: "China", code: "86", iso: "cn" },
    { name_ar: "كولومبيا", name_en: "Colombia", code: "57", iso: "co" },
    { name_ar: "جزر القمر", name_en: "Comoros", code: "269", iso: "km" },
    { name_ar: "الكونغو", name_en: "Congo", code: "242", iso: "cg" },
    { name_ar: "كوزتاريكا", name_en: "Costa Rica", code: "506", iso: "cr" },
    { name_ar: "كرواتيا", name_en: "Croatia", code: "385", iso: "hr" },
    { name_ar: "كوبا", name_en: "Cuba", code: "53", iso: "cu" },
    { name_ar: "قبرص", name_en: "Cyprus", code: "357", iso: "cy" },
    { name_ar: "التشيك", name_en: "Czech Republic", code: "420", iso: "cz" },
    { name_ar: "الدنمارك", name_en: "Denmark", code: "45", iso: "dk" },
    { name_ar: "جيبوتي", name_en: "Djibouti", code: "253", iso: "dj" },
    { name_ar: "دومينيكا", name_en: "Dominica", code: "1", iso: "dm" },
    { name_ar: "جمهورية الدومينيكان", name_en: "Dominican Republic", code: "1", iso: "do" },
    { name_ar: "الإكوادور", name_en: "Ecuador", code: "593", iso: "ec" },
    { name_ar: "مصر", name_en: "Egypt", code: "20", iso: "eg" },
    { name_ar: "السلفادور", name_en: "El Salvador", code: "503", iso: "sv" },
    { name_ar: "غينيا الاستوائية", name_en: "Equatorial Guinea", code: "240", iso: "gq" },
    { name_ar: "إريتريا", name_en: "Eritrea", code: "291", iso: "er" },
    { name_ar: "إستونيا", name_en: "Estonia", code: "372", iso: "ee" },
    { name_ar: "إثيوبيا", name_en: "Ethiopia", code: "251", iso: "et" },
    { name_ar: "فيجي", name_en: "Fiji", code: "679", iso: "fj" },
    { name_ar: "فنلندا", name_en: "Finland", code: "358", iso: "fi" },
    { name_ar: "فرنسا", name_en: "France", code: "33", iso: "fr" },
    { name_ar: "غابون", name_en: "Gabon", code: "241", iso: "ga" },
    { name_ar: "غامبيا", name_en: "Gambia", code: "220", iso: "gm" },
    { name_ar: "جورجيا", name_en: "Georgia", code: "995", iso: "ge" },
    { name_ar: "ألمانيا", name_en: "Germany", code: "49", iso: "de" },
    { name_ar: "غانا", name_en: "Ghana", code: "233", iso: "gh" },
    { name_ar: "اليونان", name_en: "Greece", code: "30", iso: "gr" },
    { name_ar: "غرينادا", name_en: "Grenada", code: "1", iso: "gd" },
    { name_ar: "غواتيمالا", name_en: "Guatemala", code: "502", iso: "gt" },
    { name_ar: "غينيا", name_en: "Guinea", code: "224", iso: "gn" },
    { name_ar: "غينيا بيساو", name_en: "Guinea-Bissau", code: "245", iso: "gw" },
    { name_ar: "غويانا", name_en: "Guyana", code: "592", iso: "gy" },
    { name_ar: "هايتي", name_en: "Haiti", code: "509", iso: "ht" },
    { name_ar: "هندوراس", name_en: "Honduras", code: "504", iso: "hn" },
    { name_ar: "هونغ كونغ", name_en: "Hong Kong", code: "852", iso: "hk" },
    { name_ar: "المجر", name_en: "Hungary", code: "36", iso: "hu" },
    { name_ar: "آيسلندا", name_en: "Iceland", code: "354", iso: "is" },
    { name_ar: "الهند", name_en: "India", code: "91", iso: "in" },
    { name_ar: "إندونيسيا", name_en: "Indonesia", code: "62", iso: "id" },
    { name_ar: "إيران", name_en: "Iran", code: "98", iso: "ir" },
    { name_ar: "العراق", name_en: "Iraq", code: "964", iso: "iq" },
    { name_ar: "إيرلندا", name_en: "Ireland", code: "353", iso: "ie" },
    { name_ar: "إيطاليا", name_en: "Italy", code: "39", iso: "it" },
    { name_ar: "جامايكا", name_en: "Jamaica", code: "1", iso: "jm" },
    { name_ar: "اليابان", name_en: "Japan", code: "81", iso: "jp" },
    { name_ar: "الأردن", name_en: "Jordan", code: "962", iso: "jo" },
    { name_ar: "كازاخستان", name_en: "Kazakhstan", code: "7", iso: "kz" },
    { name_ar: "كينيا", name_en: "Kenya", code: "254", iso: "ke" },
    { name_ar: "الكويت", name_en: "Kuwait", code: "965", iso: "kw" },
    { name_ar: "قرغيزستان", name_en: "Kyrgyzstan", code: "996", iso: "kg" },
    { name_ar: "لاوس", name_en: "Laos", code: "856", iso: "la" },
    { name_ar: "لاتفيا", name_en: "Latvia", code: "371", iso: "lv" },
    { name_ar: "لبنان", name_en: "Lebanon", code: "961", iso: "lb" },
    { name_ar: "ليسوتو", name_en: "Lesotho", code: "266", iso: "ls" },
    { name_ar: "ليبيريا", name_en: "Liberia", code: "231", iso: "lr" },
    { name_ar: "ليبيا", name_en: "Libya", code: "218", iso: "ly" },
    { name_ar: "ليتوانيا", name_en: "Lithuania", code: "370", iso: "lt" },
    { name_ar: "لوكسمبورغ", name_en: "Luxembourg", code: "352", iso: "lu" },
    { name_ar: "ماكاو", name_en: "Macau", code: "853", iso: "mo" },
    { name_ar: "مقدونيا", name_en: "Macedonia", code: "389", iso: "mk" },
    { name_ar: "مدغشقر", name_en: "Madagascar", code: "261", iso: "mg" },
    { name_ar: "ملاوي", name_en: "Malawi", code: "265", iso: "mw" },
    { name_ar: "ماليزيا", name_en: "Malaysia", code: "60", iso: "my" },
    { name_ar: "المالديف", name_en: "Maldives", code: "960", iso: "mv" },
    { name_ar: "مالي", name_en: "Mali", code: "223", iso: "ml" },
    { name_ar: "مالطا", name_en: "Malta", code: "356", iso: "mt" },
    { name_ar: "موريتانيا", name_en: "Mauritania", code: "222", iso: "mr" },
    { name_ar: "موريشيوس", name_en: "Mauritius", code: "230", iso: "mu" },
    { name_ar: "المكسيك", name_en: "Mexico", code: "52", iso: "mx" },
    { name_ar: "مولدوفا", name_en: "Moldova", code: "373", iso: "md" },
    { name_ar: "موناكو", name_en: "Monaco", code: "377", iso: "mc" },
    { name_ar: "منغوليا", name_en: "Mongolia", code: "976", iso: "mn" },
    { name_ar: "الجبل الأسود", name_en: "Montenegro", code: "382", iso: "me" },
    { name_ar: "المغرب", name_en: "Morocco", code: "212", iso: "ma" },
    { name_ar: "موزمبيق", name_en: "Mozambique", code: "258", iso: "mz" },
    { name_ar: "ميانمار", name_en: "Myanmar", code: "95", iso: "mm" },
    { name_ar: "ناميبيا", name_en: "Namibia", code: "264", iso: "na" },
    { name_ar: "نيبال", name_en: "Nepal", code: "977", iso: "np" },
    { name_ar: "هولندا", name_en: "Netherlands", code: "31", iso: "nl" },
    { name_ar: "نيوزيلندا", name_en: "New Zealand", code: "64", iso: "nz" },
    { name_ar: "نيكاراجوا", name_en: "Nicaragua", code: "505", iso: "ni" },
    { name_ar: "النيجر", name_en: "Niger", code: "227", iso: "ne" },
    { name_ar: "نيجيريا", name_en: "Nigeria", code: "234", iso: "ng" },
    { name_ar: "كوريا الشمالية", name_en: "North Korea", code: "850", iso: "kp" },
    { name_ar: "النرويج", name_en: "Norway", code: "47", iso: "no" },
    { name_ar: "عمان", name_en: "Oman", code: "968", iso: "om" },
    { name_ar: "باكستان", name_en: "Pakistan", code: "92", iso: "pk" },
    { name_ar: "فلسطين", name_en: "Palestine", code: "970", iso: "ps" },
    { name_ar: "بنما", name_en: "Panama", code: "507", iso: "pa" },
    { name_ar: "باراغواي", name_en: "Paraguay", code: "595", iso: "py" },
    { name_ar: "بيرو", name_en: "Peru", code: "51", iso: "pe" },
    { name_ar: "الفلبين", name_en: "Philippines", code: "63", iso: "ph" },
    { name_ar: "بولندا", name_en: "Poland", code: "48", iso: "pl" },
    { name_ar: "البرتغال", name_en: "Portugal", code: "351", iso: "pt" },
    { name_ar: "قطر", name_en: "Qatar", code: "974", iso: "qa" },
    { name_ar: "رومانيا", name_en: "Romania", code: "40", iso: "ro" },
    { name_ar: "روسيا", name_en: "Russia", code: "7", iso: "ru" },
    { name_ar: "رواندا", name_en: "Rwanda", code: "250", iso: "rw" },
    { name_ar: "سانت كيتس ونيفيس", name_en: "Saint Kitts and Nevis", code: "1", iso: "kn" },
    { name_ar: "سانت لوسيا", name_en: "Saint Lucia", code: "1", iso: "lc" },
    { name_ar: "ساموا", name_en: "Samoa", code: "685", iso: "ws" },
    { name_ar: "سان مارينو", name_en: "San Marino", code: "378", iso: "sm" },
    { name_ar: "السعودية", name_en: "Saudi Arabia", code: "966", iso: "sa" },
    { name_ar: "السنغال", name_en: "Senegal", code: "221", iso: "sn" },
    { name_ar: "صربيا", name_en: "Serbia", code: "381", iso: "rs" },
    { name_ar: "سيشل", name_en: "Seychelles", code: "248", iso: "sc" },
    { name_ar: "سيراليون", name_en: "Sierra Leone", code: "232", iso: "sl" },
    { name_ar: "سنغافورة", name_en: "Singapore", code: "65", iso: "sg" },
    { name_ar: "سلوفاكيا", name_en: "Slovakia", code: "421", iso: "sk" },
    { name_ar: "سلوفينيا", name_en: "Slovenia", code: "386", iso: "si" },
    { name_ar: "الصومال", name_en: "Somalia", code: "252", iso: "so" },
    { name_ar: "جنوب أفريقيا", name_en: "South Africa", code: "27", iso: "za" },
    { name_ar: "كوريا الجنوبية", name_en: "South Korea", code: "82", iso: "kr" },
    { name_ar: "إسبانيا", name_en: "Spain", code: "34", iso: "es" },
    { name_ar: "سريلانكا", name_en: "Sri Lanka", code: "94", iso: "lk" },
    { name_ar: "السودان", name_en: "Sudan", code: "249", iso: "sd" },
    { name_ar: "سورينام", name_en: "Suriname", code: "597", iso: "sr" },
    { name_ar: "سوازيلاند", name_en: "Swaziland", code: "268", iso: "sz" },
    { name_ar: "السويد", name_en: "Sweden", code: "46", iso: "se" },
    { name_ar: "سويسرا", name_en: "Switzerland", code: "41", iso: "ch" },
    { name_ar: "سوريا", name_en: "Syria", code: "963", iso: "sy" },
    { name_ar: "تنزانيا", name_en: "Tanzania", code: "255", iso: "tz" },
    { name_ar: "تايلاند", name_en: "Thailand", code: "66", iso: "th" },
    { name_ar: "توغو", name_en: "Togo", code: "228", iso: "tg" },
    { name_ar: "تونغا", name_en: "Tonga", code: "676", iso: "to" },
    { name_ar: "ترينيداد وتوباغو", name_en: "Trinidad and Tobago", code: "1", iso: "tt" },
    { name_ar: "تونس", name_en: "Tunisia", code: "216", iso: "tn" },
    { name_ar: "تركيا", name_en: "Turkey", code: "90", iso: "tr" },
    { name_ar: "تركمانستان", name_en: "Turkmenistan", code: "993", iso: "tm" },
    { name_ar: "أوغندا", name_en: "Uganda", code: "256", iso: "ug" },
    { name_ar: "أوكرانيا", name_en: "Ukraine", code: "380", iso: "ua" },
    { name_ar: "الإمارات", name_en: "UAE", code: "971", iso: "ae" },
    { name_ar: "بريطانيا", name_en: "United Kingdom", code: "44", iso: "gb" },
    { name_ar: "أمريكا", name_en: "USA", code: "1", iso: "us" },
    { name_ar: "أوروغواي", name_en: "Uruguay", code: "598", iso: "uy" },
    { name_ar: "أوزبكستان", name_en: "Uzbekistan", code: "998", iso: "uz" },
    { name_ar: "فنزويلا", name_en: "Venezuela", code: "58", iso: "ve" },
    { name_ar: "فيتنام", name_en: "Vietnam", code: "84", iso: "vn" },
    { name_ar: "اليمن", name_en: "Yemen", code: "967", iso: "ye" },
    { name_ar: "زامبيا", name_en: "Zambia", code: "260", iso: "zm" },
    { name_ar: "زيمبابوي", name_en: "Zimbabwe", code: "263", iso: "zw" }
];

// منطق التطبيق
const translations = {
    ar: {
        title: "دردشة مباشرة",
        desc: "تواصل عالمياً دون الحاجة لحفظ الأرقام.",
        lblCountry: "ابحث عن الدولة:",
        lblMsg: "رسالة جاهزة (يمكن حذفها):",
        btnChat: "بدء المحادثة",
        btnQR: "مسح باركود واتساب",
        placeholderSearch: "اكتب اسم الدولة هنا (مثلاً: السودان)...",
        placeholderPhone: "رقم الجوال",
        share: "شارك التطبيق:",
        alertErr: "يرجى كتابة رقم هاتف صحيح"
    },
    en: {
        title: "Global Direct Chat",
        desc: "Connect globally without saving contacts.",
        lblCountry: "Search for Country:",
        lblMsg: "Ready message (Editable):",
        btnChat: "Start Chat",
        btnQR: "Scan WhatsApp QR",
        placeholderSearch: "Type country name (e.g., USA)...",
        placeholderPhone: "Phone number",
        share: "Share with friends:",
        alertErr: "Please enter a valid phone number"
    }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

function initApp() {
    applyLanguage(currentLang);
    detectLocation();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('appLang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    const t = translations[lang];
    const html = document.getElementById('appHtml');
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang;
    
    document.querySelector('.app-heading').innerText = t.title;
    document.querySelector('.description').innerText = t.desc;
    document.getElementById('lblCountry').innerText = t.lblCountry;
    document.getElementById('lblMsg').innerText = t.lblMsg;
    document.getElementById('btnChatText').innerText = t.btnChat;
    document.getElementById('btnQRText').innerText = t.btnQR;
    document.getElementById('countryInput').placeholder = t.placeholderSearch;
    document.getElementById('phoneInput').placeholder = t.placeholderPhone;
    document.getElementById('txtShare').innerText = t.share;
    document.getElementById('langToggle').innerText = lang === 'ar' ? 'English' : 'العربية';
    
    populateCountries();
}

function populateCountries() {
    const list = document.getElementById('country-options');
    list.innerHTML = "";
    // ترتيب الأبجدي حسب اللغة المختارة
    const sorted = [...ALL_COUNTRIES].sort((a, b) => {
        const nameA = currentLang === 'ar' ? a.name_ar : a.name_en;
        const nameB = currentLang === 'ar' ? b.name_ar : b.name_en;
        return nameA.localeCompare(nameB);
    });

    sorted.forEach(c => {
        const opt = document.createElement('option');
        const name = currentLang === 'ar' ? c.name_ar : c.name_en;
        opt.value = `${name} (+${c.code})`;
        list.appendChild(opt);
    });
}

function handleCountrySelection(val) {
    const country = ALL_COUNTRIES.find(c => 
        `${c.name_ar} (+${c.code})` === val || `${c.name_en} (+${c.code})` === val
    );
    if (country) {
        document.getElementById('codeInput').value = `+${country.code}`;
        updateFlag(country.iso);
        document.getElementById('countryInput').value = ""; // تفريغ فوري فور الاختيار
        document.getElementById('phoneInput').focus(); // توجيه المستخدم لكتابة الرقم مباشرة
    }
}

function updateFlag(iso) {
    document.getElementById('currentFlag').className = `flag-icon flag-icon-${iso.toLowerCase()}`;
}

async function detectLocation() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = ALL_COUNTRIES.find(c => c.iso.toUpperCase() === data.country_code);
        if (country) {
            document.getElementById('codeInput').value = `+${country.code}`;
            updateFlag(country.iso);
        }
    } catch (e) { console.log("Defaulting to manual selection"); }
}

async function nativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: translations[currentLang].title,
                url: window.location.href
            });
        } catch (err) {}
    } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`);
    }
}

function openWhatsApp() {
    const code = document.getElementById('codeInput').value.replace('+', '');
    const phone = document.getElementById('phoneInput').value.replace(/\D/g, '');
    const msg = document.getElementById('messageInput').value;
    
    if (phone.length < 5) {
        alert(translations[currentLang].alertErr);
        return;
    }
    
    window.open(`https://wa.me/${code}${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = initApp;
