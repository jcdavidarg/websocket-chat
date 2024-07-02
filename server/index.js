//  IMPORTO DEPENDENCIAS DE NODE
import express from "express";
import logger from "morgan";

import { Server } from "socket.io";
import { createServer } from "node:http";

//  ESTABLESCO EL PUERTO
const port = process.env.PORT ?? 3000;

//  CREO SERVIDOR HTTP E INTEGRO EXPRESS Y SOCKET.IO
const app = express();
const server = createServer(app);
const io = new Server(server);

//  CUANDO SE CONECTE AL SOCKET IO
io.on("connection", (socket) => {
  console.log("A user has connected!");
  socket.on("disconnect", () => {
    console.log("An user has disconnected");
  });
});

//  QUE EL SERVIDOR USO EL LOGGER
app.use(logger("dev"));

//  CUANDO RECIBA UN GET QUE HAGO ESTO
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

//  ARRANCO EL SERVIDOR PARA QUE ESCUCHE EN EL PUERTO
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
