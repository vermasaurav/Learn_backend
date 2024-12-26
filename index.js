const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico")
        return res.end();

    const log = `\n ${Date.now()} and ${req.url} is the date of req.`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);

    // Append log to the file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }

        // Delay response using setTimeout
        setTimeout(() => {
            switch (myUrl.pathname) {
                case "/":
                    res.end("HomePage");
                    break;
                case "/about":
                    res.end("About Page");

                    break;
                case "/service":
                    res.end("Service Page");
                    break;
                default:
                    res.end("404 Error Page");
            }
        }, 2000);
        console.time("sdjkfdjhjkdfhfjkdgjkdfn"); // Delay of 2 seconds
    });

    console.time("sdjkfdjhjkdfhfjkdgjkdfn");
});

myserver.listen(8000, () => {
    console.log("server started");
});
