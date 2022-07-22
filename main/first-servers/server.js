const http = require('http');
const html = `
    <!DOCTYPE html>

    <head>
        <title>My Website</title>
        <script src="server.js"></script>
        <script src="body.js"></script>
        <meta charset="utf-8">
        <link rel="stylesheet" href="scr.css">
    </head>
    <body>
        <p>Hi</p>
    </body>
    </html>
`
const css = `
    

`

http.createServer((req, res) => {
    res.writeHead(200,{ 'Content-Type': 'text/file'});
    res.end('server.html')
}).listen(3000, () => console.log(`Сервер работает`));