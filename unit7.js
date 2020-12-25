var http = require('http');

// http.createServer(function (request, response){
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<html>');
//     response.write('<head>');
//     response.write('<title>Hello Page</title>');
//     response.write('</head>')
//     response.write('<body><h1>Hello World!</h1></body>');
//     response.write('</html>')
//     response.end();
// }).listen(8081);
// console.log('Server running at http://localhost:8081/');
http.createServer(function (request, response){
    var param = request.url;
    response.write(param)
    response.end();
}).listen(8081);
console.log('Server running at http://localhost:8081/');
