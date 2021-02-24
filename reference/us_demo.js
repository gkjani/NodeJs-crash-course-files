const url = require("url");
const myUrl = new URL("http://gkjani.com/profile.html?id=23&status=active");

//serialized url 
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
//hostname
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);
//Serialized query 
console.log(myUrl.search); 
//Param
console.log(myUrl.searchParams);
//Append param
myUrl.searchParams.append("abe","123");
console.log(myUrl.searchParams);
//loop throw param
myUrl.searchParams.forEach((value,name)=>{
   console.log(`${name} : ${value}`);
})