const http = require("http");
const fs = require("fs");
const path = require ("path");


let filepath_home = path.join(__dirname + "\\index.html")
let filepath_services = path.join(__dirname + "\\services.html")
let filepath_contact = path.join(__dirname + "\\contact.html")
let filepath_about = path.join(__dirname + "\\about.html")


let home = fs.readFileSync(filepath_home);
let services = fs.readFileSync(filepath_services);
let contact = fs.readFileSync(filepath_contact);
let about = fs.readFileSync(filepath_about);




const server = http.createServer((req,resp)=>{
    resp.statusCode =200;
    resp.setHeader ('content-Type' , 'text/html');
    

    url = req.url;
    if(url == "/")
    { resp.end(home)}

    else if (url == "/services")
    {resp.end(services)}

    else if (url == "/about")
    {resp.end(about)}

    else if (url == "/contact")
    {resp.end(contact)}

    else{resp.end("<h1>404 Not found </h1>")    }
})
port = 80;
hostname = "127.0.0.1";

server.listen(port ,hostname ,()=>{
    console.log(`listening at port ${port} and ip address : ${hostname}`);
})


