const http = require('http');

http.createServer((req,res) => {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('nodeeee');
}
 
).listen(3000, () => console.log('Server Work'));
