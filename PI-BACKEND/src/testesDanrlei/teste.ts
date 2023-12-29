import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';

//                   LER ABAIXO!
//
//
//
//USAR O COMANDO npx tsx teste.ts PARA EXECUTAR O CÓDIGO.
//LEMBRAR DE ABRIR O TERMINAL NA PASTA SRC.
//
//
//
//

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('image'), async (req, res) => {
 try {
    const imageUrl = URL.createObjectURL(req.file);
    const userId = req.body.userId; //73
    const documentClassification = req.body.documentClassification; //nfs

    // Lógica para processar a imagem e obter os dados
    // Por exemplo, chamando uma API externa

    const response = await fetch(
      "https://homol.extraidados.com.br/api/portalEngines-processApp/process",
      {
        method: "POST",
        body: JSON.stringify({
          imageUrl,
          userId,
          documentClassification,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "8LsOj14ouqioFtwugzhEnDAWGuMz45CQNkMh20WkNe7znZXsHZ",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Image upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    const jsonData = data.resultados[0].camposExtraidos;

    res.send({ message: 'Imagem enviada com sucesso!', jsonData });
 } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send({ message: 'Erro no upload da imagem' });
 }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});