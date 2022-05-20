const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const nameJobs = {...user, ...jobInfos}

const { name, age, nationality, profession, squad, squadInitials} = nameJobs

//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const arrays = [ola] = saudacoes

//console.log(ola);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const newArray = [comida, animal, bebida];
const recombinacaoArray = [animal, bebida, comida] = newArray

//console.log(recombinacaoArray); // arroz gato água

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];