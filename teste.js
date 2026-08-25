const pessoa = {nome: "Carlos", idade: 10}

const pessoaEditada = {
    nome: "Carlos Avelino",
    idade: "23"
}

const resultado = {...pessoa, ...pessoaEditada}
console.log(resultado)