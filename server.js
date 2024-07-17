//  to handle incoming requests from some port or domain
// this is the file node.js will execute

var http=require('http');
function onRequest(request,response)
{
    response.writeHead(200,{'Content-Type':'text/plain'});
     //200--->req sucessful...tells node js which response should be given
    response.write('Hello World');//to render some plain text to the screen
    response.end();
}

http.createServer(onRequest).listen(8000); // requests coming from 8000 will be handled by this erver
 