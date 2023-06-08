async function fetchData(equipment) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3606f20607msheef339fe771ec91p1cb26djsnb444be19876e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const limitedData = result.slice(0, 10); // Limit to 10 objects
      console.log(limitedData);
      return limitedData;
    } catch (error) {
      console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const imgEl = document.getElementById('equip-img');
    const equipment = localStorage.getItem('equipment');
    document.getElementById('equip-name').innerHTML = equipment;
    imgEl.setAttribute('src', localStorage.getItem('imgSrc'));

    try {
        const data = await fetchData(equipment);

        console.log(data)

        let templateSource = document.querySelector('.exerciseTemplate').innerHTML;
        let template = Handlebars.compile(templateSource);
        let filledTemplate = template(data);
        document.querySelector('.exercise-container').innerHTML = filledTemplate;
    }catch (error) {
        console.error(error);
    }
});
  