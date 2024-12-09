import express from 'express';
import { initializeApp } from 'firebase-admin/app'; 
import { routes } from './routes/index';
import { erroHandler } from './middlewares/error-handler.middleware';
import { pageNotFound } from './middlewares/page-not-found.middleware';

initializeApp();
const app = express();


routes(app);
pageNotFound(app); //foi colocado aqui por ser um item global, mas tbm poderia ser colocado nos arquivos de rotas
erroHandler(app);



app.listen(3000, () => {
    console.log("Servidor na porta 3000")
});