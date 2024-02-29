const http = require('http');
const express = require('express');
const path = require('path');
// after installing the socket.io we need to import it
 const {Server} = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server); // will handle all socket io
app.use(express.static(path.resolve("./public")));
// to attach the socket.io with express we can't do server.listen
// so we will use http module "const http = require('http');"
//now we can make server "const server = http.createServer(app);"
// now we can connect server

io.on("connection", (socket)=>{
socket.on('user-message', message => {
    io.emit('message', message);
   //io means all the connection
});
});
// io.on is whenever you make connection from frontend
//we will get a socket(client, and have the info of client)
//now in backend socket is installed we need to go for frontend
app.get("/", (req,res)=>{
    return res.sendFile('./public/index.html')
})
server.listen(9000, () => console.log(`Server Started`));