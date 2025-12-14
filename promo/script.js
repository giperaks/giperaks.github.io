let data = [];

fetch('promo.json')
    .then(res => res.json())
    .then(data => {
        barcodes = data.list;
    });
    
const resultEl = document.getElementById('result');

const codeReader = new ZXing.BrowserBarcodeReader();

codeReader.decodeFromVideoDevice(null, 'preview', (result, err) => {
    if (result) {
        const code = result.text;

        const found = data.find(p => p.barcode === code);

        if (found) {
            resultEl.innerHTML = `✅ Найдено: ${found.name}`;
            resultEl.style.color = 'green';
        } else {
            resultEl.innerHTML = `❌ Нет в базе: ${code}`;
            resultEl.style.color = 'red';
        }
    }
});
