import express from "express";

const app = express();


/**
 * GET = Busca
 * POST = Criação
 * PUT = Alteração
 * DELETE = Exclusão
 * PATCH = Alterar uma informação especifica
 */

app.get("/", (request, response) =>{
    return response.json({
        message: "Olá Mundo!"
    })
})

app.post("/", (request, response) =>{
    return response.json({ message: "Usuário salvo com sucesso"})
})

app.listen(3333, () => console.log('Server is running on port 3333'));