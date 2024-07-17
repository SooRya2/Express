import http from 'http';

const PORT=8080;

const users=[
    {
        id:1,
        name:"John"
    },
    {
        id:2,
        name:"Wick"
    }
];
//BUILDING APIS IN NODE JS

const server=http.createServer((req,res)=>{
    if(req.url='/user' && req.method === 'GET')
    {
        res.setHeader('Content-Type','application/json');//setheader is used when end() is used else writeHead method is used
        res.write(JSON.stringify(users));
        res.end();
    }
    else
    {
        res.setHeader('Content-Type','text/plain');
        res.write("No data");
        res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`);
});