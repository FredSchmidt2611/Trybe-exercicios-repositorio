const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  

  function containsA() {
    return names.reduce( (acc, curr) => 
 acc + curr.split('').reduce( (sum, name) => {
     if (name === 'A' || name === 'a') return sum + 1;
         return sum;
        }, 0), 0)
  }

  console.log(containsA());