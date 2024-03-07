const Contato = require('./modelo.js')

const contatos = [];

function adcionarContato (nome, email, telefone) {
    const novoContato = new Contato(nome, email, telefone); 
    contatos.push(novoContato);
}

function listarContatos() {
    contatos.forEach((contato) =>
    console.log(contato.nome, "-", contato.email, "-", contato.telefone)); 
}

function buscarContato(nome) {
    const buscou = contatos.find((contato) => contato.nome === nome);
    return buscou;
}

function atualizarContato (nome, email, telefone) {
    const buscou = buscarContato(nome)
    if (buscou) {
buscar.email = email;
buscar.telefone = telefone; 
    } else {
        console.log("Contato não encontrado")
    }
}


function removerContato(nome) {
    const posicao = contato.findIndex((contato) => contato.nome === nome);
    if (posicao >= 0){
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não encontrado");
    }
}

module.exports = {adicionarContatos, listarContatos, buscarContato, atualizarContato, removerContato};