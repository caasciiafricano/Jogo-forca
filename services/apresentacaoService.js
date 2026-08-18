const apresentacaoService = {

    apresentarPlacar: (placarVidas, placarErros, frutaActual) => {
            console.clear()
            console.log("------------------------------------------------")
            console.log(`           VOCÊ ACERTOU: ${frutaActual}         `)
            console.log("------------------------------------------------")
            console.log("vidas: " + placarVidas + " erros: " + placarErros)
            console.log("------------------------------------------------")
    },

    apresentarLacunas: (arrayLacuna) => {
        console.log(lacunaFruta)
    }

    

}

export default apresentacaoService