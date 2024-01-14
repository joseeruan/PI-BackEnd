# BACKEND - Di2win/Softex

Este documento contém informações importantes para os desenvolvedores que desejam interagir com a API fornecida .

## Visão Geral

O backend deste projeto fornece uma API RESTful para acessar recursos específicos. Abaixo estão os principais endpoints disponíveis:

### Fazer uma Requisição via POST

- **http://localhost:8080/di2win/extraidados**

## Testando a API com Postman

Para testar a API usando o Postman, você pode baixar a coleção do Postman e importá-la no seu Postman local.

### Como Importar a Coleção no Postman:

1. Baixe a [coleção do Postman](./postman\Di2win.postman_collection.json).
2. Abra o Postman.
3. No canto superior esquerdo, clique em "Import".
4. Selecione "Upload Files" e escolha o arquivo baixado.

## Exemplo de Requisição com Axios

Aqui está um exemplo de como os desenvolvedores frontend podem fazer uma requisição usando Axios em JavaScript:

```javascript
const axios = require('axios');

// Fazer uma requisição POST
axios.post('http://localhost:8080/di2win/extraidados', data {
// Corpo da requisição
})
.then(response => {
  // Manipular a resposta da API
  console.log(response.data);
})
.catch(error => {
  // Lidar com erros de requisição
  console.error('Erro na requisição:', error);
});




