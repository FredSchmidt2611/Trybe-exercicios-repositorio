const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([Modelo, Marca, Ano]) => ({Modelo, Marca, Ano});

console.log(toObject(palio));