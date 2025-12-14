let data = [];

fetch('promo.json')
    .then(res => res.json())
    .then(data => {
        barcodes = data.list;
    });
    
const resultEl = document.getElementById('result');

Dynamsoft.DBR.BarcodeScanner.createInstance()
.then(scanner => {
    scanner.setUIElement(document.getElementById('scanner'));

    scanner.onFrameRead = results => {
        results.forEach(r => {
            console.log(r.barcodeText, r.barcodeFormatString);

            const code = result.text;
                   const found = data.find(p => p.barcode === code);

            if (found) {
                resultEl.innerHTML = `✅ Найдено: ${found.name}`;
                resultEl.style.color = 'green';
            } else {
                resultEl.innerHTML = `❌ Нет в базе: ${code}`;
                resultEl.style.color = 'red';
            } 
        });
    };

    scanner.open();
});
