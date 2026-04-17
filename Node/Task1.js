// Task 1

// const fs = require ('fs');

// // Sync

// try{
//     // write
//     fs.writeFileSync('data.txt' , "Hi im Sync write ");

//     // read 
//     const data = fs.readFileSync('data.txt','utf8');

//     // print 
//     console.log(data);
// }catch(err)
// {
//     console.error("Sync Error:",err);
// }

// //  Async

// // write
// fs.writeFile('data_async.txt',"hi im async write",(err)=>
// {
//     if(err){
//         console.log("Async write error", err);
//         return;
//     }
//     // read 
//     fs.readFile('data_async.txt','utf8',(err,data)=>{
//         if(err)
//     {
//         console.error("Async Read Error",err);
//         return;
//     }

//     //  print 
//     console.log(data);
//     });
    
// });

// --------------------------------------------------------------------

// Task 2

const http = require('http');

const server = http.createServer((req,res)=>{
    // rout 1 (Home)
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});

        res.end(
            `
            <h2>Name: Doaa Arfa</h2>
            <h3>Field: Information System</h3>
            <p> لو مش ذاكرت هتفضل في مصر </p>
            <a href="/api">API</a>
            `
        );
    }

    // route 2 (API)
    else if(req.url=='/api')
    {
        res.writeHead(200,{'Content-Type' : 'application/json'});

        const data = {
            name : "Shams",
            field : "CS",
            goal : "Become a backend developer",
            message : "Keep going, you're doing great"
        };

        res.end(JSON.stringify(data));
    }

    // rout 3 (Not Found)
    else {
        res.writeHead(404,{'Content-Type': 'text/html'});

        res.end(
            `
            <h1>404 Not Found :(</h1>
            `
        );
    }
});

server.listen(3000,()=>{
    console.log("Running");
});