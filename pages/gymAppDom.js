

function onScanSuccess(decodedText, decodedResult) {
    console.log(decodedText);
    console.log(decodedResult);
    localStorage.setItem('equipment', decodedText);
    
    if(decodedText === "barbell"){
        var url = "./equipment.html"
        window.location.href = url;
    }
    else if(decodedText === 'cable'){
        var url = "./equipment.html"
        window.location.href = url;
    }

}

if (window.location.pathname.includes('scan.html')) {
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });

    html5QrcodeScanner.render(onScanSuccess);
}









