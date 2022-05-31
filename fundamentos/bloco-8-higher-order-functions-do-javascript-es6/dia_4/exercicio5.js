const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  
 // 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

 const letters = names.splice('');
  function containsA() {
     return names.reduce( (acc, curr) => 
 acc + curr.split('').reduce( (sum, name) => {
     if (name === 'A' || name === 'a') return sum + 1;
         return sum;
        }, 0), 0)  
  
  /* const x = letters.reduce((acc, letter) => (letter === 'a' || letter === 'A')? acc + 1: acc + 0)
  return x.length       */
  }

  console.log(letters);