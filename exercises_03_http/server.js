const http = require("http");
const fsPromise = require("fs/promises");
const path = require("path");

const server = http.createServer(async (req, res) => {
  if (req.url == "/") {
    const data = await fsPromise.readFile("./public/index.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else {
    res.writeHead(404,{ "Content-Type": "text/html" });
    res.end('404 NOT FOUND')
  }
});

server.listen(3000);
