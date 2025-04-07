const file = require("fs/promises");
const fileSync = require("fs");

//execute automatic
(async () => {
  try {
    if (!fileSync.existsSync("./files/config")) {
      await file.mkdir("./files/config");
    } else {
      console.log("File Exists");
    }
    await file.appendFile("./files/config/example.txt", "\n hi!..");
    file
      .readFile("./files/config/example.txt",'utf-8')
      .then((file) => console.log(file))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
})();
