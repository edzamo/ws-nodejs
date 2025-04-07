const fs = require("fs");
const readline = require("readline");

// Asegura que el directorio ./files exista
fs.mkdirSync("./files", { recursive: true });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name: ", (answer) => {
  const stream = fs.createWriteStream(`./files/${answer}.txt`);

  rl.setPrompt("What do you want to say? (type 'exit' to quit)\n");
  rl.prompt();

  rl.on("line", (data) => {
    if (data.toLowerCase().trim() === "exit") {
      stream.close();
      rl.close();
    } else {
      stream.write(`${data}\n`);
      rl.prompt();
    }
  });

  rl.on("close", () => {
    console.log(`👋 Goodbye, ${answer}. Your file was saved in ./files/${answer}.txt`);
    process.exit(0);
  });
});