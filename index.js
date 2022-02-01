const http = require("http");
const server = http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>running</h1>");
    res.write("<h1>added nodemon pakage for the automation of server</h1>");
    res.end();
  })
  .listen(5000);
const a = 40;

console.log(a);

function varaible() {
  const a = 50;
  console.log(a);
}

varaible();
