const generateHours = (): string[] => {
  const LIMITE: number = 24;
  let horas: string[] = [];
  for (let i = 0; i <= LIMITE; i++) {
    if (i < 10) {
      horas.push(`0${i}:00`);
      horas.push(`0${i}:30`);
    } else {
      horas.push(`${i}:00`);
    }
  }
  return horas;
};

export { generateHours };
