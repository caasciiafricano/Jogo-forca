const apresentacaoService = {

    apresentarPlacar: (placarVidas, placarErros, palavraActual) => {
            console.clear()
            console.log("------------------------------------------------")
            console.log(`           VOCÊ ACERTOU: ${palavraActual}       `)
            console.log("------------------------------------------------")
            console.log("vidas: " + placarVidas + " erros: " + placarErros)
            console.log("------------------------------------------------")
    },

    apresentarLacunas: (arrayLacuna) => {
        let palavra = ""
        palavra = arrayLacuna.join(' ')
        console.log(palavra)
    }, 

    apresentarBoneco: (arrayBoneco) => {
        console.log(arrayBoneco.join('\n'))
    }

}

export default apresentacaoService