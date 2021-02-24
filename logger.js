const EventEmitter = require("events");
const uuid = require("uuid");
console.log(uuid.v4());

class Logger extends EventEmitter{
  log(message){
      this.emit("message",{id : uuid.v4(), message});
 }
}

module.exports= Logger;