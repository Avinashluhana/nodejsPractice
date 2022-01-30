const http = require("http");
const server=http.createServer(function(req,res){
res.write("running")
res.end();
}).listen(5000)
const a = 40;

console.log(a);

function varaible() {
  const a = 50;
  console.log(a);
}

varaible();
