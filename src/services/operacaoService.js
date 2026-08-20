const operacaoService = {

    inicializacaoArrayLacunas: (arrayLacuna, tamPalavra) => {
        for (let i = 0; i < tamPalavra; i++) {
            arrayLacuna[i] = "_"
        }
    },

    colocarLetraLacuna: (arrayLacuna, arrayPosicao, letra) => {
        for(let i=0; i < arrayPosicao.length; i++){
            arrayLacuna[arrayPosicao[i]] = letra
        }
        arrayPosicao.splice(0)
    }

}

export default operacaoService