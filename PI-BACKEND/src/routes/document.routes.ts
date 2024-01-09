import { Router } from "express";
import DocumentoController from "../controllers/document.controller";
import multer from "multer";
import { Storage } from "../middleware/multerConfig";

const upload = multer({ storage: Storage });

class DocumentRoutes {
  router = Router();
  controller = new DocumentoController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/extraiDados",
      upload.single("file"),
      this.controller.sendData
    );
  }
}

export default new DocumentRoutes().router;
