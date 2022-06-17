const express=require("express");
const app=express();
const server = require("http").Server(app);
const cors=require("cors")
const io=require("socket.io")(server ,{
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
});
app.use(cors());
app.get("/",(req,res)=>{
    res.send("running");
})
// io.sockets.on("connection",socket=>{
//    socket.emit("me",socket.id);
//    socket.on("disconnect",()=>{
//        socket.broadcast.emit("callended");
//    })

//    socket.on("calluser",(data)=>{
//        io.to(data.userTocall).emit("callUser",{signal:data.signalData,from:data.from,name:data.name});


//    })


//    socket.on("answercall",(data)=>{
//        io.to(data.to).emit("callAc",data.signal);
//    })


// })
io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});
server.listen(3000,()=>{
    console.log("server started");
})  

