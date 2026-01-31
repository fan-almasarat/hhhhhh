// ... (يبقى ثابت بنفس بيانات COUNTRY_DATA الموجودة في ملفك الأصلي) ...
// تأكد من نسخ مصفوفة COUNTRY_DATA كاملة هنا من ملفك الأصلي

const APP_LINK = 'https://abdul3ziz95.github.io/zol/';
const SHARE_MESSAGE = 'جربوا مراسل الواتساب الفوري! أسرع طريقة لبدء محادثة دون حفظ الرقم. الرابط: ' + APP_LINK;

const codeMap = {};
COUNTRY_DATA.forEach(country => codeMap[country.code] = country);

const codeInput = document.getElementById('codeInput'); 
const phoneInput = document.getElementById('phoneInput'); 
const countryInput = document.getElementById('countryInput');
const currentFlagSpan = document.getElementById('currentFlag');

// وظيفة فتح واتساب المحسنة
function openWhatsApp() {
    const code = codeInput.value.replace('+', '').trim(); 
    const localNumber = phoneInput.value.trim().replace(/[\s+-]/g, '');
    
    if (!code || localNumber.length < 6) {
        alert('يرجى التأكد من رقم الهاتف ورمز الدولة');
        return;
    }

    const whatsappLink = `https://wa.me/${code}${localNumber}?text=${encodeURIComponent("السلام عليكم")}`;
    window.open(whatsappLink, '_blank');
}

// التحديد التلقائي للدولة
async function setCountryAuto() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=YOUR_FREE_TOKEN_OPTIONAL'); 
        const data = await response.json();
        const countryInfo = COUNTRY_DATA.find(c => c.iso.toLowerCase() === data.country.toLowerCase());
        if (countryInfo) updateFlag(countryInfo.code);
    } catch (e) {
        updateFlag('249'); // افتراضي: السودان
    }
}

function updateFlag(code) {
    const info = codeMap[code];
    if (info) {
        currentFlagSpan.className = `flag-icon flag-icon-${info.iso.toLowerCase()}`;
        countryInput.value = `${info.name} (+${code})`;
        codeInput.value = `+${code}`;
    }
}

// تهيئة عند التشغيل
window.addEventListener('load', () => {
    // تعبئة الداتا ليست
    const list = document.getElementById('country-options');
    COUNTRY_DATA.forEach(c => {
        const opt = document.createElement('option');
        opt.value = `${c.name} (+${c.code})`;
        list.appendChild(opt);
    });
    setCountryAuto();
});

// وظائف المشاركة
function shareApp(platform) {
    let url = '';
    const msg = encodeURIComponent(SHARE_MESSAGE);
    if(platform === 'whatsapp') url = `https://wa.me/?text=${msg}`;
    if(platform === 'facebook') url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(APP_LINK)}`;
    window.open(url, '_blank');
}
