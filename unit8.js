var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
    response.writeHead('200', {'content-type': 'text/html'});
    fs.readFile('hello.html', 'utf8', function(err, data){
        if (err) throw err;
        response.write(data);
        response.end();
    })
}).listen(8081);


// var fs = require('fs');
// console.log("Going to write into existing file");
// fs.writeFile('files/hello.txt', 'Simply easy learing!', function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Data written successfully!');
//     fs.readFile('files/hello.txt', function (err, data){
//         if (err) {
//             return console.error(err);
//         }
//         console.log('Data of file: ' + data.toString());
//     });
// });
