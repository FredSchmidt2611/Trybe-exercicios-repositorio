const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const mesesAno = ({winter, spring, summer, autumn}) => [...winter, ...spring, ...summer, ...autumn];

  console.log(mesesAno(yearSeasons));