import { createServer } from "http";
import { WebSocketServer } from "ws";
const port = 1337;
const server = createServer();
const wss = new WebSocketServer({ server: server });

//
wss.on("connection", (ws) => {
  console.log("new connection", ws);
  ws.on("message", (data) => {
    console.log("received: %s", data);
  });
});
server.listen(port);
console.log("server listen to port :1337");
