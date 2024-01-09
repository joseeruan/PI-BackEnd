export function transformData(data: any) {
  const transform = [
    { 'bairro': data?.resultados?.[0]?.camposExtraidos?.['bairro->tomador_de_servicos']?.[0]?.text },
    { 'numero_endereco': data?.resultados?.[0]?.camposExtraidos?.['numero_endereco->tomador_de_servicos']?.[0]?.text },
    { 'cpf_cnpj': data?.resultados?.[0]?.camposExtraidos?.['cpf_cnpj->tomador_de_servicos']?.[0]?.text },
    { 'telefone': data?.resultados?.[0]?.camposExtraidos?.['telefone->tomador_de_servicos']?.[0]?.text },
    { 'rua': data?.resultados?.[0]?.camposExtraidos?.['rua->tomador_de_servicos']?.[0]?.text },
    { 'razao_social': data?.resultados?.[0]?.camposExtraidos?.['nome_razao_social->tomador_de_servicos']?.[0]?.text },
    { 'data_emissao': data?.resultados?.[0]?.camposExtraidos?.['data_emissao']?.[1]?.text },
    { 'numero_nota': data?.resultados?.[0]?.camposExtraidos?.numero_nota_fiscal?.[0]?.text },
    { 'codigo_verificacao': data?.resultados?.[0]?.camposExtraidos?.['codigo_verificacao']?.[0]?.text },
  ];

  return transform;
}
