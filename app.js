import promptSync from "prompt-sync"

import frutaDB from "./database/frutaDB.js"
import apresentacaoService from "./services/apresentacaoService.js"
import operacaoService from "./services/operacaoService.js"

const prompt = promptSync()

let index = Math.floor(Math.random() * frutaDB.length)
let frutaActual = frutaDB[index].toLowerCase()
let tamFruta = frutaActual.length

const lacunaFruta = [tamFruta]

// inicialização das lacunas
operacaoService.inicializacaoArrayLacunas(lacunaFruta, tamFruta)

let vidas = 6
let erros = 0
let letra = "A"
const posicaoLetras = []

while( vidas || !(letra === 0) ){

    console.log("vidas: " + vidas + " erros: " + erros)
    console.log(lacunaFruta)
    letra = prompt("Chute a letra: ").toLowerCase()

    if(!frutaActual.includes(letra)){

        vidas -= 1
        erros += 1
        console.clear()
        
    }else{

        // pegar as posicoes em que o caracter se encontra
        for(let i=0; i < tamFruta; i++){
            if(frutaActual[i] === letra)
                posicaoLetras.push(i)
        }

        // preencher o lacuna de frutas com os caracteres correspondentes
        for(let i=0; i < posicaoLetras.length; i++){
            lacunaFruta[posicaoLetras[i]] = letra
        }
        posicaoLetras.splice(0)

        // verificar se vetor está preenchido
        if(!lacunaFruta.includes("_")){
            apresentacaoService.apresentarPlacar(vidas, erros, frutaActual)
            apresentacaoService.apresentarLacunas(lacunaFruta)
            break
        }

        console.log("PRECIONE 0 PARA TERMINAR...")
        
    }
    
    console.clear()
    // terminar o jogo.
    if(Number(letra) === 0)
        break
}

console.log("JOGO TERMINADO COM SUCESSO...")

