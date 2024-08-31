import { WebSocketServer, WebSocket } from "ws";

const PORT = 3000;

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const payload = JSON.stringify({
      type: "custom-message",
      payload: data.toString().toUpperCase(),
    });

    // * Todos - incluyente
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(payload, { binary: false });
    //   }
    // });

    // * Todos - excluyente
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    });
  });

  // ws.send("Hola desde el servidor");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(`Server running on port http://localhost:${PORT}`);
