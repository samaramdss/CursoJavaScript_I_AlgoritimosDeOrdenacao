const arrProdutos = require('./listaLivros');


function menorValor(arrProdutos, posicaoInicial){
  let maisBarato = posicaoInicial; //guarda o indice do array que tem o valor menor

  for (atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

console.log(`O livro mais barato custa ${arrProdutos[maisBarato].preco} e o título é ${arrProdutos[maisBarato].titulo}`);