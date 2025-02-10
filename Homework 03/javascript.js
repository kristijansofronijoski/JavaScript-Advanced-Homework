/*
Call the countries API for a country by code.
Create a function that gets all the neighbours from a country and returns them in console
When the call to the countries API for a country is made imidietly show the bordering countries in the console
Example:

Call -> MKD

In console:

Country:

macedonia object

Neighbours:

albania object

greece object

bulgaria object

serbia object

CountriesApi;
*/



let input = document.getElementById("input");
let button = document.getElementById("myBtn");
let country = document.getElementById("country");
let borders = document.getElementById("borders")


async function countryQuiz() {
    let countryName = input.value; 
    if (countryName === "") {
        alert("Please enter a country name");
        return;
    }

    let documentsUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
        let response = await fetch(documentsUrl);
        if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
        }
        let data = await response.json();
        console.log(`The name of the country is : ${data[0].name.common}`); 
        country.textContent = `The name of the country is: ${data[0].name.common}`;
        console.log(`The neightbors countrys are: ${data[0].borders}`)
        borders.textContent = `The neightbors of ${data[0].name.common} are: ${data[0].borders}`
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

button.addEventListener("click", function () {
    countryQuiz();
});