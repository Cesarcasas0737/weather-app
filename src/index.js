import displaySearch from "./getWeather";

const button = document.querySelector("#generate");
const searchInput = document.getElementById("search"); 



button.addEventListener('click', () => {
    const searchValue = searchInput.value; 
    displaySearch(searchValue);
});

displaySearch("busan");