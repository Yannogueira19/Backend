const express = require('express');

const app = express();

app.listen(3000, function() {
    console.log("API deu bom!");
});

module.exports = app;

app.get("/", function(req, res) {
    res.send("Funcionou");
});

app.post("/", function(req, res){
    res.status(201).send("Eu sou o Cara!");
    console.log(req.body);
})

app.put("/", function(req, res){
    res.json({status: "200", message: "Sou o único" })
})

app.delete("/", function(req, res){
    res.status(204).end();
});