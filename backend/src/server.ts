import express from "express";
import cors from 'cors';
import path from "path";

import "express-async-errors";  

import errorHandler from "./errors/handler";

import "./database/connection";
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);

//ROta => conjunto
//Recurso => usuário
//Métodos HTTP => GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Query Params: localhost/3333/users?search=helena&page=2
//Route Params: localhost/3333/users/1 (Identificar um recurso)
//Body: localhost/3333/users 


/*app.get('/users', (request, response)=>{
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({message: "Hello"});
})*/
 
 
//Driver nativo, Query builder, ORM
