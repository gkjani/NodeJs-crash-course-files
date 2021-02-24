const fs = require("fs");
const path = require("path");
/*
fs.writeFile(path.join(__dirname,"/test","hollo.txt"),'Hello Jani!',(err)=>{
    if(err){
      throw err; 
    }
    console.log("File written");
    //File append 
    fs.appendFile(path.join(__dirname,"/test","hollo.txt"),'I love nodejs',(err)=>{
      if(err){
        throw err; 
      }
      console.log("Text appended");
    });
});


fs.readFile(path.join(__dirname,"/test","hollo.txt"),"utf8",(err,data)=>{
  console.log(data);
});
*/
fs.rename(path.join(__dirname,"/test","hollo.txt"),path.join(__dirname,"/test","hello.txt"),(err)=>{
    if(err){
       console.log(err);
    }
    console.log("File renamed");
});