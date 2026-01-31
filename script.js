// بيانات الدول (مختصرة - أكملها من ملفك الأصلي)
const COUNTRY_DATA = [
    { name: 'السودان', code: '249', iso: 'sd' },
    { name: 'السعودية', code: '966', iso: 'sa' },
    { name: 'مصر', code: '20', iso: 'eg' }
];

let history = JSON.parse(localStorage.getItem('chat_history')) || [];

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
}
setInterval(updateClock, 1000);

function handleCountryChange(val) {
    const country = COUNTRY_DATA.find(c => `${c.name} (+${c.code})` === val);
    if (country) {
        document.getElementById('countryCode').value = `+${country.code}`;
        document.getElementById('flagIcon').className = `flag-icon flag-icon-${country.iso}`;
    }
}

function processChat() {
    const code = document.getElementById('countryCode').value.replace('+', '');
    const num = document.getElementById('phoneNumber').value.trim();
    
    if (num.length < 5) return alert("الرقم غير صحيح");

    const fullNumber = code + num;
    
    // حفظ في السجل
    if (!history.includes(fullNumber)) {
        history.unshift(fullNumber);
        if (history.length > 5) history.pop();
        localStorage.setItem('chat_history', JSON.stringify(history));
        renderHistory();
    }

    window.open(`https://wa.me/${fullNumber}`, '_blank');
}

function renderHistory() {
    const container = document.getElementById('historyList');
    container.innerHTML = history.map(num => `
        <div class="history-item" onclick="directChat('${num}')">
            <span><i class="fab fa-whatsapp" style="color:#25D366"></i> +${num}</span>
            <i class="fas fa-chevron-left" style="font-size: 0.8rem; opacity: 0.5;"></i>
        </div>
    `).join('');
}

function directChat(num) {
    window.open(`https://wa.me/${num}`, '_blank');
}

function clearHistory() {
    localStorage.removeItem('chat_history');
    history = [];
    renderHistory();
}

window.onload = () => {
    updateClock();
    renderHistory();
    // تعبئة القائمة
    const dl = document.getElementById('countries');
    COUNTRY_DATA.forEach(c => {
        let opt = document.createElement('option');
        opt.value = `${c.name} (+${c.code})`;
        dl.appendChild(opt);
    });
};
