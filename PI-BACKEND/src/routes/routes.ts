import { Application } from "express";
import documentRoutes from "./document.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/di2win", documentRoutes);
  }
}
