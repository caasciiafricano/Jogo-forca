const operacaoService = {

    inicializacaoArrayLacunas: (arrayLacuna, tamPalavra) => {
        for (let i = 0; i < tamPalavra; i++) {
            arrayLacuna[i] = "_"
        }
    },

    colocarLetraLacuna: (arrayLacuna, arrayPosicao, letra) => {
        for (let i = 0; i < arrayPosicao.length; i++) {
            arrayLacuna[arrayPosicao[i]] = letra
        }
        arrayPosicao.splice(0)
    },

    enforcarBoneco: (erros, arrayBoneco) => {

        switch (erros) {
            case 1:
                arrayBoneco.push(" O")
                break;
            case 2:
                arrayBoneco.splice(1)
                arrayBoneco.push(" O")
                arrayBoneco.push(" |")
                break;
            case 3:
                arrayBoneco.splice(1)
                arrayBoneco.push(" O")
                arrayBoneco.push("/|")
                break;
            case 4:
                arrayBoneco.splice(1)
                arrayBoneco.push(" O")
                arrayBoneco.push("/|\\")
                break;
            case 5:
                arrayBoneco.splice(1)
                arrayBoneco.push(" O")
                arrayBoneco.push("/|\\")
                arrayBoneco.push("/")
                break;
            case 6:
                arrayBoneco.splice(1)
                arrayBoneco.push(" O")
                arrayBoneco.push("/|\\")
                arrayBoneco.push("/ \\")
                break;
        }


    }
}

export default operacaoService