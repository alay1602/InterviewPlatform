const express=require("express");
const app=express();
const server = require("http").Server(app);

// const io=require("socket.io")(server ,{
// 	cors: {
// 		origin: "http://localhost:3000",
// 		methods: [ "GET", "POST" ]
// 	}
// });


io.sockets.on("connection",socket=>{
   socket.emit("me",socket.id);
   socket.on("disconnect",()=>{
       socket.broadcast.emit("callended");
   })

   socket.on("calluser",(data)=>{
       io.to(data.userTocall).emit("callUser",{signal:data.signalData,from:data.from,name:data.name});


   })


   socket.on("answercall",(data)=>{
       io.to(data.to).emit("callAc",data.signal);
   })


})

server.listen(3000,()=>{
    console.log("server started");
})

