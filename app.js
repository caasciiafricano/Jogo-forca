import promptSync from "prompt-sync"

import frutaDB from "./src/database/frutasDB.js"
import componenteDB from "./src/database/componentesDB.js"

import apresentacaoService from "./src/services/apresentacaoService.js"
import operacaoService from "./src/services/operacaoService.js"

const prompt = promptSync()

let index = Math.floor(Math.random() * componenteDB.length)
let palavraAtual = frutaDB[index].toLowerCase()
//let palavraAtual = componenteDB[index].toLowerCase()
let tamPalavra = palavraAtual.length

const lacunaPalavra = [tamPalavra]

// inicialização das lacunas
operacaoService.inicializacaoArrayLacunas(lacunaPalavra, tamPalavra)

let vidas = 6
let erros = 0
let letra = "A"
const posicaoLetras = []

while( vidas || !(letra === 0) ){

    console.log("\n\n")
    console.log("vidas: " + vidas + " erros: " + erros)
    console.log("\n")
    apresentacaoService.apresentarLacunas(lacunaPalavra)
    console.log("\n")
    letra = prompt("Chute a letra: ").toLowerCase()

    if(!palavraAtual.includes(letra)){

        vidas -= 1
        erros += 1
        console.clear()
        console.log(`A palavra era: ${palavraAtual}`)
    }else{

        // pegar as posicoes em que o caracter se encontra
        for(let i=0; i < tamPalavra; i++){
            if(palavraAtual[i] === letra)
                posicaoLetras.push(i)
        }

        // preencher o lacuna de frutas com os caracteres correspondentes
        operacaoService.colocarLetraLacuna(lacunaPalavra, posicaoLetras, letra)

        // verificar se vetor está preenchido
        if(!lacunaPalavra.includes("_")){
            apresentacaoService.apresentarPlacar(vidas, erros, palavraAtual)
            apresentacaoService.apresentarLacunas(lacunaPalavra)
            break
        }

        console.log("PRECIONE 0 PARA TERMINAR...")
        
    }
    
    console.clear()
    // terminar o jogo.
    if(Number(letra) === 0)
        break
}


console.log(`A palavra era: ${palavraAtual}`)
console.log("JOGO TERMINADO COM SUCESSO...")

