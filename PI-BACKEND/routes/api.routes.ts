import { Router } from "express";
import apiController from "../controllers/api.controller"

class apiRoutes {
  router = Router();
  controller = new apiController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.post("extract", this.controller.extract);
  }
}

export default new apiRoutes().router;