import { Application } from "express";
import documentoRoutes from "./documento.routes";


export default class Routes {
    constructor(app: Application) {
        app.use("/extraidados", documentoRoutes);
    }
}