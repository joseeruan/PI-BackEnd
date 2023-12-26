import { Documento } from "../models/documento.model";

class DocumentoRepository {
    documentoDB = new Array<Documento>();

    async retrieveAll(): Promise<Array<Documento>> {
        try {
            return this.documentoDB;
        } catch (error) {
            throw new Error("Falha ao retornar os documentos!");
        }
    }

    async retrieveById(documentoId: number): Promise<Documento | null> {
        try {
            var encontrado = false;
            var documentoEncontrado = null;
            this.documentoDB.forEach(element => {
                if (element.id == documentoId){
                    documentoEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return documentoEncontrado;
            } else {
                return null;
            }
        } catch (error) {
            throw new Error("Falha ao buscar o documento!");
        }
    }
}

export default new DocumentoRepository();