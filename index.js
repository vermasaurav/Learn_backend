const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico")
        return res.end();
    const log = `\n ${Date.now()} and ${req.url} is the date of req.`
    const myUrl = url.parse(req.url);
    console.log(myUrl)
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname) {
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                res.end("About Page")
                break;
            case "/service":
                res.end("Service Page")
                break;
            default:
                res.end("404 Error Page")    
        }
      

    })
});

myserver.listen(8000,()=>{
    console.log("server started");
})

