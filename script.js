// THB မှ MMK သို့ ပြောင်းရန်
function convertThbToMmk() {
    const rate = parseFloat(document.getElementById('current-rate').value) || 0;
    const thbInput = parseFloat(document.getElementById('thb-input').value) || 0;
    
    const mmkResult = thbInput * rate;
    
    // Number format လုပ်ပြီး output ပြရန် (ဥပမာ - 1,000)
    document.getElementById('mmk-output').innerText = mmkResult.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
}

// MMK မှ THB သို့ ပြောင်းရန်
function convertMmkToThb() {
    const rate = parseFloat(document.getElementById('current-rate').value) || 0;
    const mmkInput = parseFloat(document.getElementById('mmk-input').value) || 0;
    
    let thbResult = 0;
    if (rate > 0) {
        thbResult = mmkInput / rate;
    }
    
    document.getElementById('thb-output').innerText = thbResult.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2});
}

// ပေါက်ဈေး အတိုးအလျော့ လုပ်လိုက်လျှင် နှစ်ဖက်စလုံး ချက်ချင်း လိုက်ပြောင်းရန်
function updateConversion() {
    convertThbToMmk();
    convertMmkToThb();
}
