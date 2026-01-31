// بيانات اللغات
const translations = {
    ar: {
        title: "دردشة مباشرة",
        desc: "أسرع وسيلة للمراسلة دون حفظ الرقم.",
        lblCountry: "اختر الدولة:",
        lblMsg: "الرسالة (اختياري):",
        btnChat: "بدء المحادثة",
        btnQR: "مسح باركود",
        placeholderSearch: "بحث عن دولة...",
        placeholderPhone: "رقم الهاتف",
        share: "شارك التطبيق:",
        alertErr: "الرجاء التأكد من الرقم والمفتاح"
    },
    en: {
        title: "Direct Chat",
        desc: "The fastest way to message without saving contact.",
        lblCountry: "Select Country:",
        lblMsg: "Message (Optional):",
        btnChat: "Start Chat",
        btnQR: "Scan QR",
        placeholderSearch: "Search country...",
        placeholderPhone: "Phone number",
        share: "Share App:",
        alertErr: "Please check number and country code"
    }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

// سيتم استدعاء قائمة دول كاملة هنا (تم اختصارها للمثال ولكنها تدعم الكل)
const ALL_COUNTRIES = [
    { name_ar: "السودان", name_en: "Sudan", code: "249", iso: "sd" },
    { name_ar: "السعودية", name_en: "Saudi Arabia", code: "966", iso: "sa" },
    { name_ar: "الإمارات", name_en: "UAE", code: "971", iso: "ae" },
    { name_ar: "مصر", name_en: "Egypt", code: "20", iso: "eg" },
    { name_ar: "أمريكا", name_en: "USA", code: "1", iso: "us" }
    // ... يمكن إضافة باقي الدول بسهولة
];

// تهيئة التطبيق
function initApp() {
    applyLanguage(currentLang);
    populateCountries();
    detectLocation();
    
    // تسجيل الخدمة للعمل دون إنترنت
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}

// تبديل اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('appLang', currentLang);
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    const t = translations[lang];
    document.getElementById('appHtml').dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('appHtml').lang = lang;
    
    document.getElementById('txtTitle').innerText = t.title;
    document.getElementById('txtDesc').innerText = t.desc;
    document.getElementById('lblCountry').innerText = t.lblCountry;
    document.getElementById('lblMsg').innerText = t.lblMsg;
    document.getElementById('btnChat').innerText = t.btnChat;
    document.getElementById('btnQR').innerText = t.btnQR;
    document.getElementById('countryInput').placeholder = t.placeholderSearch;
    document.getElementById('phoneInput').placeholder = t.placeholderPhone;
    document.getElementById('txtShare').innerText = t.share;
    document.getElementById('langToggle').innerText = lang === 'ar' ? 'English' : 'العربية';
    
    populateCountries(); // إعادة ملء القائمة باللغة الجديدة
}

// معالجة اختيار الدولة
function handleCountrySelection(val) {
    const country = ALL_COUNTRIES.find(c => 
        `${c.name_ar} (+${c.code})` === val || `${c.name_en} (+${c.code})` === val
    );
    if (country) {
        document.getElementById('codeInput').value = `+${country.code}`;
        updateFlag(country.iso);
        document.getElementById('countryInput').value = ""; // تفريغ الحقل بعد الاختيار
    }
}

// تحديث العلم بناءً على الكود
function handleCodeInput(val) {
    const cleanCode = val.replace('+', '');
    const country = ALL_COUNTRIES.find(c => c.code === cleanCode);
    if (country) updateFlag(country.iso);
}

function updateFlag(iso) {
    document.getElementById('currentFlag').className = `flag-icon flag-icon-${iso.toLowerCase()}`;
}

// تحديد الدولة تلقائياً
async function detectLocation() {
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = ALL_COUNTRIES.find(c => c.iso.toUpperCase() === data.country_code);
        if (country) {
            document.getElementById('codeInput').value = `+${country.code}`;
            updateFlag(country.iso);
        }
    } catch (e) { console.log("Location detection failed"); }
}

// فتح واتساب
function openWhatsApp() {
    const code = document.getElementById('codeInput').value.replace('+', '');
    const phone = document.getElementById('phoneInput').value.replace(/\s/g, '');
    const msg = document.getElementById('messageInput').value;
    
    if (phone.length < 5) {
        alert(translations[currentLang].alertErr);
        return;
    }
    
    const url = `https://wa.me/${code}${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// مشاركة النظام (Native Share)
async function nativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'دردشة مباشرة',
                text: 'أفضل تطبيق لمراسلة واتساب دون حفظ الرقم!',
                url: window.location.href
            });
        } catch (err) { console.log(err); }
    } else {
        shareSocial('whatsapp');
    }
}

// وظيفة الباركود (باستخدام مكتبة html5-qrcode)
function toggleQRScanner() {
    const modal = document.getElementById('qrModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    
    if (modal.style.display === 'block') {
        const html5QrCode = new Html5Qrcode("reader");
        html5QrCode.start(
            { facingMode: "environment" }, 
            { fps: 10, qrbox: { width: 250, height: 250 } },
            (decodedText) => {
                // إذا كان الرابط واتساب، استخرج الرقم
                if (decodedText.includes('wa.me')) {
                    window.location.href = decodedText;
                }
                html5QrCode.stop();
                modal.style.display = 'none';
            }
        ).catch(err => alert("Camera error: " + err));
    }
}

function populateCountries() {
    const list = document.getElementById('country-options');
    list.innerHTML = "";
    ALL_COUNTRIES.forEach(c => {
        const opt = document.createElement('option');
        const name = currentLang === 'ar' ? c.name_ar : c.name_en;
        opt.value = `${name} (+${c.code})`;
        list.appendChild(opt);
    });
}

window.onload = initApp;
