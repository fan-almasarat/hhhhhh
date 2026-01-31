// مصفوفة الدول الشاملة (أمثلة وسوف تتكرر في الداتالست)
const COUNTRIES = [
    { n_ar: "السودان", n_en: "Sudan", code: "249", iso: "sd" },
    { n_ar: "السعودية", n_en: "Saudi Arabia", code: "966", iso: "sa" },
    { n_ar: "الإمارات", n_en: "UAE", code: "971", iso: "ae" },
    { n_ar: "مصر", n_en: "Egypt", code: "20", iso: "eg" },
    { n_ar: "الأردن", n_en: "Jordan", code: "962", iso: "jo" },
    { n_ar: "الكويت", n_en: "Kuwait", code: "965", iso: "kw" },
    { n_ar: "عمان", n_en: "Oman", code: "968", iso: "om" },
    { n_ar: "قطر", n_en: "Qatar", code: "974", iso: "qa" },
    { n_ar: "البحرين", n_en: "Bahrain", code: "973", iso: "bh" },
    { n_ar: "العراق", n_en: "Iraq", code: "964", iso: "iq" },
    { n_ar: "المغرب", n_en: "Morocco", code: "212", iso: "ma" },
    { n_ar: "الجزائر", n_en: "Algeria", code: "213", iso: "dz" },
    { n_ar: "فلسطين", n_en: "Palestine", code: "970", iso: "ps" },
    { n_ar: "أمريكا", n_en: "USA", code: "1", iso: "us" },
    { n_ar: "بريطانيا", n_en: "UK", code: "44", iso: "gb" },
    { n_ar: "تركيا", n_en: "Turkey", code: "90", iso: "tr" }
    // ... القائمة تدعم الإضافة اللانهائية
];

const i18n = {
    ar: {
        title: "دردشة مباشرة",
        desc: "مراسلة فورية عالمية دون حفظ الرقم.",
        lblCountry: "اختر الدولة:",
        lblMsg: "الرسالة:",
        btnChat: "بدء المحادثة",
        btnQR: "مسح باركود واتساب",
        share: "شارك التطبيق:",
        install: "تثبيت",
        msgDefault: "السلام عليكم",
        searchPlace: "بحث عن دولة...",
        phonePlace: "رقم الهاتف",
        close: "إغلاق"
    },
    en: {
        title: "Direct Chat",
        desc: "Global instant messaging without saving contacts.",
        lblCountry: "Select Country:",
        lblMsg: "Message:",
        btnChat: "Start Chat",
        btnQR: "Scan WhatsApp QR",
        share: "Share App:",
        install: "Install",
        msgDefault: "Peace be upon you",
        searchPlace: "Search country...",
        phonePlace: "Phone number",
        close: "Close"
    }
};

let currentLang = localStorage.getItem('userLang') || 'ar';
let html5QrCode;

// تشغيل التطبيق
window.onload = () => {
    updateUI();
    loadCountries();
    setupInstall();
};

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('userLang', currentLang);
    updateUI();
}

function updateUI() {
    const t = i18n[currentLang];
    document.getElementById('appHtml').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('appHtml').lang = currentLang;

    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtDesc').innerText = t.desc;
    document.getElementById('lblCountry').innerText = t.lblCountry;
    document.getElementById('lblMsg').innerText = t.lblMsg;
    document.getElementById('btnChat').innerText = t.btnChat;
    document.getElementById('btnQR').innerText = t.btnQR;
    document.getElementById('txtShare').innerText = t.share;
    document.getElementById('txtInstall').innerText = t.install;
    document.getElementById('langToggle').innerText = currentLang === 'ar' ? 'English' : 'العربية';
    document.getElementById('countryInput').placeholder = t.searchPlace;
    document.getElementById('phoneInput').placeholder = t.phonePlace;
    document.getElementById('messageInput').value = t.msgDefault;
    document.querySelector('.close-qr').innerText = t.close;
    
    loadCountries();
}

function loadCountries() {
    const list = document.getElementById('countriesList');
    list.innerHTML = "";
    COUNTRIES.forEach(c => {
        const name = currentLang === 'ar' ? c.n_ar : c.n_en;
        const opt = document.createElement('option');
        opt.value = `${name} (+${c.code})`;
        list.appendChild(opt);
    });
}

function handleCountrySelection(val) {
    const country = COUNTRIES.find(c => 
        val.includes(`(+${c.code})`)
    );
    if (country) {
        document.getElementById('codeInput').value = `+${country.code}`;
        document.getElementById('currentFlag').className = `flag-icon flag-icon-${country.iso}`;
        document.getElementById('countryInput').value = ""; // تفريغ الحقل فوراً
        document.getElementById('phoneInput').focus();
    }
}

// المشاركة الأصلية للهاتف (Native Share)
async function handleNativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'دردشة مباشرة',
                text: 'أفضل تطبيق لمراسلة واتساب دون حفظ الرقم!',
                url: window.location.href
            });
        } catch (err) { console.log("Share failed"); }
    } else {
        socialShare('wa');
    }
}

function socialShare(platform) {
    const url = encodeURIComponent(window.location.href);
    if (platform === 'wa') window.open(`https://wa.me/?text=${url}`);
    if (platform === 'fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

// الباركود
function startQRScanner() {
    document.getElementById('qrModal').style.display = 'flex';
    html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        qrCodeMessage => {
            if (qrCodeMessage.includes('wa.me')) {
                window.location.href = qrCodeMessage;
            }
            stopQRScanner();
        }
    );
}

function stopQRScanner() {
    if (html5QrCode) {
        html5QrCode.stop().then(() => {
            document.getElementById('qrModal').style.display = 'none';
        });
    }
}

function openWhatsApp() {
    const code = document.getElementById('codeInput').value.replace('+', '');
    const phone = document.getElementById('phoneInput').value.replace(/\D/g, '');
    const msg = encodeURIComponent(document.getElementById('messageInput').value);
    if (phone) window.open(`https://wa.me/${code}${phone}?text=${msg}`, '_blank');
}

// التثبيت الحديث
function setupInstall() {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installButton').style.display = 'block';
    });

    document.getElementById('installButton').addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                document.getElementById('installButton').style.display = 'none';
                deferredPrompt = null;
            });
        }
    });
}
