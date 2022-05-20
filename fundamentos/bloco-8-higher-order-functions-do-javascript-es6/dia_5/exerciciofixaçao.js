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

//console.log(numerosPares); // [6, 8, 10, 12];

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality1 = 'Brazilian' } = person;

//console.log(nationality1);

const getNationality = ({ firstName, nationality2 }) => `${firstName} is ${nationality2}`;

const person1 = {
  firstName: 'João',
  lastName: 'Jr II',
};

const {nationality2 = 'Brazilian'} = person1;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality2: 'Russian',
};
//console.log(nationality2);
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person1));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => number * value;

console.log(multiply(8));