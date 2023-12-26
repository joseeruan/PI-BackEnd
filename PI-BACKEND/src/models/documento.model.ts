export class Documento {

    id: number;
    codigoVerificacao: string;
    dataEmissao: string;
    razaoSocial: string;
    cpfCnpj: string;
    telefone: string;
    valorNota: string;
    rua: string;
    numeroEndereco: string;
    cep: string;

    constructor(id: number, codigoVerificacao: string, dataEmissao: string, razaoSocial: string, cpfCnpj: string, 
        telefone: string, valorNota: string, rua: string, numeroEndereco: string, cep: string) {
            this.id = id;
            this.codigoVerificacao = codigoVerificacao;
            this.dataEmissao = dataEmissao;
            this.razaoSocial = razaoSocial;
            this.cpfCnpj = cpfCnpj;
            this.telefone = telefone;
            this.valorNota = valorNota;
            this.rua = rua;
            this.numeroEndereco = numeroEndereco;
            this.cep = cep;
    
        }

}

