import { Request, Response } from "express";
import axios from "axios";
const FormData = require("form-data");
import fs from "fs";
import { transformData } from "../models/document.model";

export default class DocumentoController {
  async sendData(req: Request, res: Response) {
    const image = req.file;
    const userID = 73;
    const docClassification = "nfs";
    const token = "8LsOj14ouqioFtwugzhEnDAWGuMz45CQNkMh20WkNe7znZXsHZ";
    const url = "https://homol.extraidados.com.br/api/portalEngines-processApp/process";

    if (!image) {
      return res.status(400).send({
        message: "Erro: Nenhum arquivo foi enviado.",
      });
    }

    const formData = new FormData();
    formData.append("image", fs.createReadStream(image.path), {
      filename: image.originalname,
      contentType: image.mimetype,
    });
    formData.append("userId", userID);
    formData.append("documentClassification", docClassification);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      const data = transformData(response.data);

      res.status(200).send(data);
    } catch (error) {
      console.error("Erro:", error);
      res.status(500).send({
        message: "Error: não foi possível enviar os dados do documento.",
      });
    }
  }
}