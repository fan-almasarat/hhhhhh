const DATA = [
    { n: 'السودان', c: '249', i: 'sd' },
    { n: 'السعودية', c: '966', i: 'sa' },
    { n: 'الإمارات', c: '971', i: 'ae' },
    { n: 'مصر', c: '20', i: 'eg' },
    { n: 'الكويت', c: '965', i: 'kw' },
    { n: 'قطر', c: '974', i: 'qa' },
    { n: 'عُمان', c: '968', i: 'om' },
    { n: 'الأردن', c: '962', i: 'jo' },
    { n: 'المغرب', c: '212', i: 'ma' },
    { n: 'الجزائر', c: '213', i: 'dz' },
    { n: 'تونس', c: '216', i: 'tn' },
    { n: 'البحرين', c: '973', i: 'bh' },
    { n: 'العراق', c: '964', i: 'iq' },
    { n: 'تركيا', c: '90', i: 'tr' },
    { n: 'بريطانيا', c: '44', i: 'gb' },
    { n: 'أمريكا', c: '1', i: 'us' }
];

const countrySearch = document.getElementById('countrySearch');
const countryCodeInput = document.getElementById('countryCode');
const flagIcon = document.getElementById('flagIcon');
const phoneNumber = document.getElementById('phoneNumber');
const historyList = document.getElementById('recentHistory');

// تهيئة القائمة المنسدلة
function init() {
    const list = document.getElementById('countries-list');
    DATA.forEach(item => {
        let opt = document.createElement('option');
        opt.value = `${item.n} (+${item.c})`;
        list.appendChild(opt);
    });
    renderHistory();
}

// عند كتابة كود الدولة يدوياً
function onCodeInput(val) {
    const cleanCode = val.replace('+', '').trim();
    const found = DATA.find(item => item.c === cleanCode);
    if (found) {
        flagIcon.className = `flag-icon flag-icon-${found.i}`;
        countrySearch.value = `${found.n} (+${found.c})`;
    } else {
        flagIcon.className = `fas fa-question-circle`; // علم غير معروف
    }
}

// عند اختيار دولة من القائمة
function onCountrySelect(val) {
    const found = DATA.find(item => `${item.n} (+${item.c})` === val);
    if (found) {
        countryCodeInput.value = found.c;
        flagIcon.className = `flag-icon flag-icon-${found.i}`;
    }
}

function openWhatsApp() {
    const code = countryCodeInput.value.replace('+', '');
    const num = phoneNumber.value.trim().replace(/^0+/, ''); // حذف الأصفار في بداية الرقم

    if (!code || num.length < 5) {
        alert("يرجى التأكد من الكود والرقم");
        return;
    }

    const fullNum = code + num;
    addToHistory(fullNum);
    window.open(`https://wa.me/${fullNum}`, '_blank');
}

function addToHistory(num) {
    let history = JSON.parse(localStorage.getItem('zol_history') || '[]');
    if (!history.includes(num)) {
        history.unshift(num);
        localStorage.setItem('zol_history', JSON.stringify(history.slice(0, 5)));
        renderHistory();
    }
}

function renderHistory() {
    let history = JSON.parse(localStorage.getItem('zol_history') || '[]');
    historyList.innerHTML = history.map(num => `
        <div class="history-chip" onclick="quickChat('${num}')">
            <span>+${num}</span>
            <i class="fab fa-whatsapp" style="color:#25D366"></i>
        </div>
    `).join('');
}

function quickChat(num) {
    window.open(`https://wa.me/${num}`, '_blank');
}

function shareApp(p) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("جرب هذا التطبيق الرائع للمراسلة الفورية!");
    if(p === 'whatsapp') window.open(`https://wa.me/?text=${text}%20${url}`);
    if(p === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

window.onload = init;
