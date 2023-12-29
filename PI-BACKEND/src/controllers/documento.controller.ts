import { Request, Response } from "express";
import { Documento } from "../models/documento.model";
import documentoRepository from "../repositories/documento.repository";


export default class DocumentoController {

    async findAll(req: Request, res: Response) {
        try {
            const documentos = await documentoRepository.retrieveAll();
            res.status(200).send(documentos);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os documentos."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const documento = await documentoRepository.retrieveById(id);
            if (documento) res.status(200).send(documento);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum documento com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o documento com id=${id}.`
            });
        }
    }

    //fazer método de enviar dados para a API
}