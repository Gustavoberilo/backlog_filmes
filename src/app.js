import express from "express";//importamos o framework
import bodyParser from "body-parser";
import filmeRoutes from "../src/routes/filmesRoutes.js";

const app = express();//objeto app recebendo o framework

app.use(bodyParser.json());//conversão para json

app.use('/' , filmeRoutes);

export default app;//exportando o objeto app