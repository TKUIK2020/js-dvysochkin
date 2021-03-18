var http = require("http");
var generateImage = require("random-image-creator");
 
http.createServer(function(request, response){
     
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.writeHead(200, {
    "Content-Type": "text/html"
  });
    const lad = generateImage(280,400);
     
    response.end("<img src='"+lad+"'>");
}).listen(3000);