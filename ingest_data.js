// import "isomorphic-fetch";
const fetch = require('node-fetch')


const endPoint = 'https://api.ngs.nfl.com/league/schedule?season=2018&seasonType=REG';

async function getData() {
    const response = await fetch(endPoint);
    const data = await response.json();
    dataObj = data;

    return data;
}

let bigData = [];

getData()
    .then(response => console.log(response));

