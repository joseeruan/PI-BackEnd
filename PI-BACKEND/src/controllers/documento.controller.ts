import { Request, Response } from "express";
import axios from "axios";
const FormData = require("form-data");
import fs from "fs";

export default class DocumentoController {
  async sendData(req: Request, res: Response) {
    const imagem = req.file;
    const userID = 73;
    const docClassification = "nfs";
    const token = "8LsOj14ouqioFtwugzhEnDAWGuMz45CQNkMh20WkNe7znZXsHZ";
    const url = "https://homol.extraidados.com.br/api/portalEngines-processApp/process";

    if (!imagem) {
      return res.status(400).send({
        message: "Erro: Nenhum arquivo foi enviado.",
      });
    }

    const formData = new FormData();
    formData.append(
      "image",
      fs.createReadStream("./src/controllers/nfsteste.png")
    );
    formData.append("userId", userID);
    formData.append("documentClassification", docClassification);

    console.log(formData);

    try {
      const resposta = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      const data = resposta.data;

      res.status(200).send(data);
    } catch (error) {
      console.error("Erro:", error);
      res.status(500).send({
        message: "Error: não foi possível enviar os dados do documento.",
      });
    }
  }
}
