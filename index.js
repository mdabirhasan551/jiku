const express= require('express');
const app=express();

app.get('/',function(req,res){

   return res.send("Hello World");
})

app.listen(8080,function(){
    console.log("Server running at port 8080");
});

