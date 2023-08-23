function getDeclaredWantedValue(searchValue,valueWanted,locationID){
    
    const returnLocationID = document.getElementById(`${locationID}`);

    fetch(`http://api.weatherapi.com/v1/current.json?key=0ff54c39295a4402bc9214109231608&q=${searchValue}&aqi=no`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        const value = eval(valueWanted); // Using eval to evaluate the string as code
        
        //console.log(`location is ${searchValue}, we're getting the value by ${valueWanted} and it's value is ${value}`)
        //console.log(value);
        returnLocationID.textContent = value;
    });
}

function createWeatherIcon(searchValue,valueWanted,locationID){
    
    const returnLocationID = document.getElementById(`${locationID}`);

    fetch(`http://api.weatherapi.com/v1/current.json?key=0ff54c39295a4402bc9214109231608&q=${searchValue}&aqi=no`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        const value = eval(valueWanted); // Using eval to evaluate the string as code
        const weatherIcon = document.createElement("img");

        weatherIcon.src = `http:${value}`
        returnLocationID.textContent =""

        returnLocationID.appendChild(weatherIcon);
    });
    
}

async function displaySearch(searchValue){
    
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0ff54c39295a4402bc9214109231608&q=${searchValue}&aqi=no`, {mode: 'cors'});
    const cityData = await response.json();
    console.log(cityData);
    getDeclaredWantedValue(searchValue,"response.location.country","country");
    getDeclaredWantedValue(searchValue,"response.location.name","location-name");
    getDeclaredWantedValue(searchValue,"response.location.localtime","local-time");
    
    createWeatherIcon(searchValue,"response.current.condition.icon","condition-icon")
    getDeclaredWantedValue(searchValue,"response.current.feelslike_f","feelslike-f");
    getDeclaredWantedValue(searchValue,"response.current.condition.text","condition-text");
}
export default displaySearch;