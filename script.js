const countryInput = document.getElementById("countryInput");
let searchBtn = document.getElementById("search-btn");
let searchResult = document.getElementById("search-result");
let flag = document.getElementById("flag");
let namee = document.getElementById("name");
let capital = document.getElementById("capital");
let continent = document.getElementById("continent");
let population = document.getElementById("population");
let currency = document.getElementById("currency");
let currencyShort = document.getElementById("currencyshort");
let language = document.getElementById("language");

const performSearch = () => {
    let countryName = countryInput.value.trim();
    if (countryName === "") {
        alert("Vă rugăm să introduceți numele unei țări");
        return;
    }
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 404) {
                alert("Nu s-a găsit o țară cu acest nume");
                return;
            }

            searchResult.style.display = "block";
            let countryData = data[0];
            console.log(countryData);
            flag.src = countryData.flags.svg;
            namee.innerHTML = countryData.name.common;
            capital.innerHTML = countryData.capital;
            continent.innerHTML = countryData.continents;
            population.innerHTML = countryData.population;
            currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name;
            currencyShort.innerHTML = Object.keys(countryData.currencies);
            language.innerHTML = Object.values(countryData.languages).toString().split(",").join(",");
        });
};

searchBtn.addEventListener("click", performSearch);

countryInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

