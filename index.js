// install modules
const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://restcountries.eu/rest/v2/all?fields=name;region;population;capital;currencies')
    .then(res => {
        return res.json();
    })
    .then(data => {
        //console.log(data);
        // change the properties name using map
        let data2 = data.map(element => {
            return {
                name: element.name,
                capital_city: element.capital,
                population: element.population,
                region: element.region,
                currencies: element.currencies.map(e => e.code)
            }
        })
        // change data2 array into Json string
        let result = JSON.stringify(data2);
        // create JSON file called result.json
        fs.writeFile('result.json', result, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
    .catch(err => {
        console.log('err')
    });