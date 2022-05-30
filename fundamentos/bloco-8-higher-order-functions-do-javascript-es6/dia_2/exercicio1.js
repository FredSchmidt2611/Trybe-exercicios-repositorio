const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

 //  1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(array) {
  return array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
}

// console.log(formatedBookNames(books));

/* 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
 */

function nameAndAge() {
  return books.map((element) =>({
    age: element.releaseYear - element.author.birthYear,
    author: element.author.name,
  })).sort((a, b) => a.age - b.age);
}

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered() {
  const currentYear = 2022
  return books.filter((element)  => element.releaseYear < currentYear - 60).sort((a, b) =>  a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered());
  //1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  
  function authorBornIn1947() {
    return books.find((element) => element.author.birthYear === 1947)
  }

  //console.log(authorBornIn1947());

 // 2 - Retorne o nome do livro de menor nome.

 function smallerName() {
  let nameBook;
   books.forEach ( (element) => {
     if (!nameBook || element.name.length < nameBook.length){
       nameBook = element.name
     }
   } )
  
  return nameBook;
}

//console.log(smallerName());

function getNamedBook() {
  return books.find( (book) => book.name.length === 26).name
}

//console.log(getNamedBook());

//4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  return books.sort( (a, b) => b.releaseYear - a.releaseYear )
}

//console.log(booksOrderedByReleaseYearDesc());

//5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every( (element) => element.author.birthYear <= 2000);
}

//console.log(everyoneWasBornOnSecXX());

//6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear>=1980 && element.releaseYear <= 1989 )
}

//console.log(someBookWasReleaseOnThe80s());

