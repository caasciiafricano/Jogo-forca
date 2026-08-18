const operacaoService = {

    inicializacaoArrayLacunas: (arrayLacuna, tamFruta) => {
        for (let i = 0; i < tamFruta; i++) {
            arrayLacuna[i] = "_"
        }
    }

}

export default operacaoService