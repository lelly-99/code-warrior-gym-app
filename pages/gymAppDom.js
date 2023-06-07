// async function fetchData(equipment) {
//     const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/' + equipment;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3606f20607msheef339fe771ec91p1cb26djsnb444be19876e',
//             'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    console.log(decodedResult);

    if(decodedText === "barbell"){
        var url = "./equipment.html"
        window.location.href = url;
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);