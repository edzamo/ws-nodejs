const colors = require("colors");
const axios = require("axios").default;

console.log('hello'.green)


axios.get('https://rickandmortyapi.com/api/character')
.then((response) => {
console.log(response.data)    
}).catch((err) => {
    console.log(err)
});