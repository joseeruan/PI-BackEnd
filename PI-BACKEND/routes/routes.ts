import { Application } from "express";
import apiRoutes from "./api.routes";
import homeRoutes from "./home.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/di2win", apiRoutes);
    app.use("/di2win", homeRoutes);
  }
}