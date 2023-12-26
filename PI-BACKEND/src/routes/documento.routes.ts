import { Router } from "express";
import DocumentoController from "../controllers/documento.controller";


class DocumentoRoutes {
    router = Router();
    controller = new DocumentoController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
    //enviar dados para a api
    //this.router.post("/extraiDados", this.controller.sendData);

    //retorna um documento pelo id
    this.router.get("/extraiDados/:id", this.controller.findOne);

    //retorna todos os documentos
    this.router.post("/extraiDados", this.controller.findAll);
    }
}


export default new DocumentoRoutes().router;