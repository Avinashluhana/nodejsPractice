const event = require("events");

const events = new event.EventEmitter();

events.on("clickEvent", () => console.log("event fired"));
events.emit("clickEvent");
