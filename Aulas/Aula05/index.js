const express = require('express');

//midlleware de rota
const routerProdutos = require('./router');

const app = express();

app.use(routerProdutos);

app.listen(3000, function(){
    console.log("API está ON")
});


module.exports = app;


