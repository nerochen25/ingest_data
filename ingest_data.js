// import "isomorphic-fetch";
const fetch = require('node-fetch')


const endPoint = 'https://api.ngs.nfl.com/league/schedule?season=2018&seasonType=REG';
let bigData;

async function getData() {
    const response = await fetch(endPoint);
    const data = await response.json();

    return data;
}

async function assignData() {
    bigData = await getData();
}


assignData();

setTimeout(function(){
    console.log(bigData)
}, 1000);

