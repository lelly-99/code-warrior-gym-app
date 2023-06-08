function onScanSuccess(decodedText, decodedResult) {
    console.log(decodedText);
    console.log(decodedResult);
    localStorage.setItem('equipment', decodedText);
    
    if(decodedText === "barbell"){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', '../images/arms-barbell s.jpg');
    }
    else if(decodedText === 'cable'){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', '../images/cable.jpg');
    }
    else if(decodedText === 'wheel roller'){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', '../images/ab-roller.jpg');
    }
    else if(decodedText === 'dumbbell'){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', '../images/dumbell.jpg');
    }
    else if(decodedText === 'smith machine'){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', 'https://cdn.shopify.com/s/files/1/0010/4280/8889/products/SmithMachineUSAProlinePL7317-WEB_large.jpg?v=1600818625');
    }
    else if(decodedText === 'elliptical machine'){
        var url = "./equipment.html"
        window.location.href = url;

        localStorage.setItem('imgSrc', 'https://media.livingfit.co.za/wp-content/uploads/658325618518-apex-elliptical-machine.jpg');
    }
}

if (window.location.pathname.includes('scan.html')) {
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });

    html5QrcodeScanner.render(onScanSuccess);
}









