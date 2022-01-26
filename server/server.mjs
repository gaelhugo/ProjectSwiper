import { createServer } from "http";
import { WebSocketServer } from "ws";
import { v4 as uuidv4 } from "uuid";
const port = 1337;
const server = createServer();
const wss = new WebSocketServer({ server: server });

const clients = [];
//
wss.on("connection", (ws) => {
  //Gestion des clients
  const clientName = uuidv4();
  clients[clientName] = ws;
  ws.on("message", (data) => {
    const val = JSON.parse(data);
    for (let clientName in clients) {
      // on envoie que à l'iframe
      if (clientName != val.sender)
        clients[clientName].send(
          JSON.stringify({ project_id: val.project_id })
        );
    }
  });
  // send identification for the firstTime
  clients[clientName].send(JSON.stringify({ client_id: clientName }));
});
server.listen(port);
console.log("server listen to port :1337");
