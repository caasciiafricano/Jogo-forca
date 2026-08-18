import promptSync from "prompt-sync"
import frutaDB from "./frutaDB.js"

const prompt = promptSync()

let index = Math.floor(Math.random() * frutaDB.length)
let frutaActual = frutaDB[index].toLowerCase()
let tamFruta = frutaActual.length

const lacunaFruta = [tamFruta]

for(let i = 0; i < tamFruta; i++){
    lacunaFruta[i] = "_"
}

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

            console.clear()
            console.log("------------------------------------")
            console.log(`    VOCÊ ACERTOU: ${frutaActual}    `)
            console.log("------------------------------------")
            console.log("vidas: " + vidas + " erros: " + erros)
            console.log("------------------------------------")
            console.log(lacunaFruta)
            
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

