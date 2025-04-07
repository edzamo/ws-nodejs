const fs = require("fs");
const fsPromise = require("fs/promises");

//fs.readdir the versionasyn
//fs.readdirSync syncrona

const files = fs.readdirSync("./files");

console.log("array of files SYNC", files);

//Async with callback

fs.readdir("./files", (err, files) => {
  console.log("Async ", files);
  console.log("Async ", files);
});

//Async with promise
fsPromise
  .readdir("./files")
  .then((files) => console.log("Promise", files))
  .catch((err) => console.log(err));

async () => {
  const filePromiseAwait = await fsPromise.readdir("./files");
  console.log(filePromiseAwait);
};
