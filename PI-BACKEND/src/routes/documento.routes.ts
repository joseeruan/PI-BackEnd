import { Router } from "express";
import DocumentoController from "../controllers/documento.controller";
import multer from "multer";
import { Storage } from "../multerConfig";

const upload = multer({storage: Storage});


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
    //this.router.get("/extraiDados/:id", this.controller.findOne);

    //retorna todos os documentos
    this.router.post("/extraiDados", upload.single('file'), this.controller.sendData);
    //this.router.post("/testar", upload.single("file"), this.controller.sendData);    

}
}

export default new DocumentoRoutes().router;