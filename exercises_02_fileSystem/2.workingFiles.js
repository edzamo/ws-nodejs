const file = require("fs/promises"); // lib from  promise
const pathTxt = "./files/github-page.txt";

//read to file

file
  .readFile(pathTxt, "utf-8")
  .then((file) => console.log("file:", file))
  .catch((err) => console.log(err));

async function addInfoToFile() {
  try {
    await file.appendFile(pathTxt, "\n data add 2");
    const dataFile = await file.readFile("./files/github-page.txt", "utf-8");

    console.log("dataFile:", dataFile);
  } catch (error) {
    console.log(error);
  }
}

addInfoToFile();



