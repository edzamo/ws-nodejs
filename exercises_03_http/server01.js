const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Method", req.method);
  console.log("Url", req.url);
  console.log("Method", req.headers);
  console.log("Hi Server!..");
});

server.listen(3000);
