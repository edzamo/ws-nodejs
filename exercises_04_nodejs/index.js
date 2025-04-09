const express = require("express");

//config.env
require('dotenv').config();

const app = express();

app.get("/contacts", (req, res) => {

    res.send('List of contact')

});


const PORT= process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server listener !..,${PORT}`);
});
