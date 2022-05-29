console.log(window.location.origin)
const video= 
navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(stream=>{
    console.log("got Media stream: ",stream)
    document.getElementById("user").srcObject=stream; 
}).catch(error=>{
    console.log(error);
})
