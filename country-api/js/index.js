// Get country
const lodaContry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
        .then(Response => Response.json())
        .then(countries => dislpayCountries(countries))
}

lodaContry();
// Display County Name
const dislpayCountries = countries =>{
    // console.log(countries)
    countries.forEach(country => {
        // console.log(country)
        const sectionArea = document.getElementById('section-area');
        const div = document.createElement('div');
        div.classList.add('country')
        sectionArea.appendChild(div)
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}
            <button onclick="countryByName('${country.name}')">Details</button>
        `;
    });
}
// Get country by details
const countryByName = name =>{
    const apiUrl = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(apiUrl)
        .then(Response => Response.json())
        .then(country => dislpayCountryDetails(country[0]))
}
// Display country by details
const dislpayCountryDetails = countryDta =>{
    console.log(countryDta)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>${countryDta.name}</h3>
        <p>Population: ${countryDta.population}</p>
        <img width="200px" src="${countryDta.flag}" />
    `;

}
