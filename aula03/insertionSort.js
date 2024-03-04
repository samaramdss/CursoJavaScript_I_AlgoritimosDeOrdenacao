const livros = require("./listaLivros");

function insertionSort(lista) {
  for (let atual = 0; atual < lista.leght; atual++) {
    let analise = atual;
    while (
      analise > 0 &&
      lista[analise].preco < lista[analise - 1].preco
    ) {
      let itemAnalisando = lista[analise];
      let itemAnterior = lista[analise -1];

      lista[analise] = itemAnterior;
      lista[analise - 1] = itemAnalisando;
      analise--;
    }
  }
  console.log(lista);
}
insertionSort(livros);
