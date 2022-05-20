//const numbers = [2, 6, 7, 45, 9, 82];

const sum  = ( (...numbers) => numbers.reduce( (acu, number) => acu + number, 0) );
    

console.log(sum(2, 6, 7, 45, 9, 82));