import { Router, Request, Response } from "express";

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Teste de ambiente.") });
  }
}

export default new HomeRoutes().router;