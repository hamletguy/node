var http = require("http");
var server = http.createServer(function (req, res) {
  res.write("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000);
console.log("Node.js web server at port 3000 is running..");
