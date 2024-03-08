import { Court, Reservation } from "../data/models";

const generateHours = (): string[] => {
  const LIMIT: number = 21;
  let hours: string[] = [];
  for (let i = 6; i < LIMIT; i++) {
    if (i < 10) {
      hours.push(`0${i}:00`);
      hours.push(`0${i}:30`);
    } else {
      hours.push(`${i}:00`);
      hours.push(`${i}:30`);
    }
  }
  return hours;
};

//TODO: block hours if the turn is large or short
const getDisponibility = (courts: Court[]): string[][] => {
  const allHours: string[] = generateHours();
  const courtsAvailability: string[][] = [];

  courts.forEach((court) => {
    const availableHours: string[] = [...allHours];

    const blocked = court.reservations.map((res) => res.hour);

    blocked.forEach((hour) => {
      const index = availableHours.indexOf(hour);

      if (index !== -1) {
        // Eliminar la hora reservada
        availableHours.splice(index, 1);

        // Eliminar la hora anterior
        if (index >= 0) availableHours.splice(index, 1);

        // Eliminar la hora posterior
        // Como el index sigue igual y el array disminuyó hay que actualizar el index
        if (index - 1 < availableHours.length)
          availableHours.splice(index - 1, 1);
      }
    });

    courtsAvailability.push(availableHours);
  });

  return courtsAvailability;
};

export { generateHours, getDisponibility };
