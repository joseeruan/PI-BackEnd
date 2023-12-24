import express, { Application } from "express";
import Server from "./src/index";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = 8080;

app
    .listen(PORT, "localhost", function () {
        console.log(`Servidor está rodando na ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: endereço está em uso");
        } else {
            console.log(err);
        }
    });