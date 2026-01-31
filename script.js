// قائمة الدول كاملة مأخوذة من بياناتك الأصلية
const COUNTRY_DATA = [
    { name: 'السودان', code: '249', iso: 'sd' },
    { name: 'السعودية', code: '966', iso: 'sa' },
    { name: 'الإمارات', code: '971', iso: 'ae' },
    { name: 'مصر', code: '20', iso: 'eg' },
    { name: 'الكويت', code: '965', iso: 'kw' },
    { name: 'قطر', code: '974', iso: 'qa' },
    { name: 'عُمان', code: '968', iso: 'om' },
    { name: 'الأردن', code: '962', iso: 'jo' },
    { name: 'فلسطين', code: '970', iso: 'ps' },
    { name: 'المغرب', code: '212', iso: 'ma' },
    { name: 'الجزائر', code: '213', iso: 'dz' },
    { name: 'تونس', code: '216', iso: 'tn' },
    { name: 'ليبيا', code: '218', iso: 'ly' },
    { name: 'العراق', code: '964', iso: 'iq' },
    { name: 'لبنان', code: '961', iso: 'lb' },
    { name: 'اليمن', code: '967', iso: 'ye' },
    { name: 'تركيا', code: '90', iso: 'tr' },
    { name: 'أمريكا', code: '1', iso: 'us' },
    { name: 'بريطانيا', code: '44', iso: 'gb' }
];

// وظيفة عند كتابة المفتاح يدوياً: تغير العلم والبحث فوراً
function onCodeInput(val) {
    const cleanCode = val.replace('+', '').trim();
    const found = COUNTRY_DATA.find(c => c.code === cleanCode);
    const flagIcon = document.getElementById('flagIcon');
    const countrySearch = document.getElementById('countrySearch');

    if (found) {
        flagIcon.className = `flag-icon flag-icon-${found.iso}`;
        countrySearch.value = `${found.name} (+${found.code})`;
    } else {
        flagIcon.className = 'fas fa-globe'; // أيقونة افتراضية في حال لم يجد الدولة
    }
}

// وظيفة عند اختيار دولة من القائمة: تغير المفتاح والعلم
function onCountrySelect(val) {
    const found = COUNTRY_DATA.find(c => `${c.name} (+${c.code})` === val);
    if (found) {
        document.getElementById('countryCode').value = found.code;
        document.getElementById('flagIcon').className = `flag-icon flag-icon-${found.iso}`;
    }
}

// فتح واتساب مع تنظيف الرقم
function openWhatsApp() {
    const code = document.getElementById('countryCode').value.replace('+', '').trim();
    let num = document.getElementById('phoneInput').value.trim();

    if (!code || num.length < 5) {
        alert("يرجى التأكد من كود الدولة ورقم الهاتف");
        return;
    }

    // إزالة الصفر الأول من الرقم المحلي إذا وجد (مثلاً 055 يصبح 55)
    num = num.replace(/^0+/, '');
    const fullLink = `https://wa.me/${code}${num}`;
    window.open(fullLink, '_blank');
}

// مشاركة التطبيق
function shareApp(platform) {
    const url = window.location.href;
    const msg = "أداة رائعة لفتح واتساب دون حفظ الرقم:";
    if(platform === 'whatsapp') window.open(`https://wa.me/?text=${msg} ${url}`);
    if(platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

// تعبئة القائمة المنسدلة عند التحميل
window.onload = () => {
    const list = document.getElementById('country-options');
    COUNTRY_DATA.forEach(c => {
        let opt = document.createElement('option');
        opt.value = `${c.name} (+${c.code})`;
        list.appendChild(opt);
    });
};
