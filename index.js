const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req,res)=>{
     
     //build file path
     let filePath = path.join(__dirname,"public",req.url === "/" ? "index.html" : req.url);
      

    //extension of the file
    let extname = path.extname(filePath);
     
    //initial content type 
    let contentType = "text/html";
    switch(extname){
       case ".js" : 
        contentType = "text/javascript";
        break;
       case ".css" : 
         contentType = "text/css";
         break;
       case ".json" : 
         contentType = "application/json";
         break;
      case ".png" : 
         contentType = "image/png";
         break;
      case "jpg" : 
          contentType = "image/jpg";
          break;
         
    }

    fs.readFile(filePath,(err,content)=>{
      if(err){
      if(err.code == "ENOENT"){
         fs.readFile(path.join(__dirname,"public","404.html"),(err,content)=>{
            res.writeHead(200,{contentType: "text/html"});
            res.end(content,"utf8");
         });
      }else{
      res.writeHead(500);
      res.end(`Server error ${err}`);
      }
   }else{
      res.writeHead(200,{contentType});
      res.end(content,"utf8");
   }
    });
 
});

let port = process.env.PORT || 5000;
server.listen(port,()=>{
    console.log(`Server running on ${port}`);
})