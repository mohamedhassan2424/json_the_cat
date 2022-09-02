const request =require('request');
const fs=require("fs");

const breedDescription = fetchBreedDescription('Siberian');
const fetchBreedDescription = function(breedName, callback) {
    const domainUrl= `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

    request(domainUrl, function(error, response ,body){
    
        if(error){
            callback('error: ', error);
        };
    
    console.log(typeof body);
    const data = JSON.parse(body);
    const catDetails= data[0];
    if(catDetails){
        callback(null,catDetails.description)
    }else{
        callback(`The cat breed details is not found ${breedName}`,null)
    }
    console.log(data);
    console.log(typeof data);
    console.log('The Request bread has been found!!!!!!!!!');
    
});
};



module.exports = { fetchBreedDescription };


