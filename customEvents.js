const event = require("events");

const events = new event.EventEmitter();

events.on("clickEvent", () => console.log("event fired"));
events.emit("clickEvent");


// event with parameters

events.on("eventWithParameters", (para, check)=>console.log(para, check));
events.emit("eventWithParameters","parameter event fired","checking")