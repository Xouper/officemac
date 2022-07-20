const http = require("http");
const fs = require("fs");
const PORT = 3000

let server = http.createServer(function (request, response) {
    let current_url = request.url

    console.log(`Запрошенный адрес: ${current_url}`);
    
    const filePath = current_url.substr(1);
    fs.access(filePath, fs.constants.R_OK, err => {
        if (err) {
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            fs.createReadStream(filePath).pipe(response);
        }
    });
});
server.listen(PORT, () => {
    console.log(`Server started with port: ${PORT}`)
})
