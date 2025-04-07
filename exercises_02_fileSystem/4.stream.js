const file = require("fs");

const stream = file.createReadStream("./files/datos_usuarios.txt", "utf-8");
let body = "";


stream.on("data", chunk => {
  console.log("retrieve date..");
  body += chunk;
});

stream.on("end", () => {
    console.log(`retrieve date.. body: ${body.length}`);
  
  });
  