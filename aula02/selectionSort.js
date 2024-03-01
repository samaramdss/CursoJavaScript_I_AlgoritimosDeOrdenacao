const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.legth; atual++) {
  
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual]; //armazenar as informações na posição atual
  console.log('Livro atual: ', livro[atual]);
  let livroMenorPreco = livros[menor];
  console.log('Livro menor preço: ', livro[menor]);

  livros[atual] = livroMenorPreco;
  livro[menor] = livroAtual;
}

console.log(livros);

