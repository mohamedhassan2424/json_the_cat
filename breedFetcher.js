const request =require('request');
const fs=require("fs");


const catName = process.argv[2]
const domainUrl= `https://api.thecatapi.com/v1/breeds/search?q=${catName}`

request(domainUrl, function(error, response ,body){

    if(error){
        console.error('error: ', error);
    };
console.log(typeof body);
const data = JSON.parse(body);
console.log(data);
console.log(typeof data);
console.log('The Request bread has been found!!!!!!!!!')

})


