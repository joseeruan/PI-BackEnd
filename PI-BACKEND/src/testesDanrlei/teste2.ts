import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import fetch from 'node-fetch';
import { Request } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('image'), async (req: Request, res) => {
    try {
       const imageUrl = `${req.protocol}://${req.get('host')}/api/image/${req.file.filename}`;
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
         }
       );

       // ... lógica para lidar com a resposta da API
    } catch (error) {
        // ... lógica para lidar com erros
    }
});

app.get('/api/image/:id', (req, res) => {
    const id = req.params.id;
    const imagePath = path.join(__dirname, 'uploads', id);

    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).json({ error: 'Imagem não encontrada' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});