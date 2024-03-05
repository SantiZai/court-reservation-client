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
      hours.push(`${i}:30`)
    }
  }
  return hours;
};

//TODO: block hours if the turn is large or short
const getDisponibility = (court: Court): string[] => {
  const allHours: string[] = generateHours();
  const blocked: string[] = court.reservations.map((res: Reservation) => res.hour);
  let notAvailable: string[] = [];
  allHours.forEach((hour: string, i: number) => {
    if (blocked.includes(hour)) {
      notAvailable.push(hour);
      notAvailable.push(allHours[i + 1]);
      notAvailable.push(allHours[i - 1]);
    }
  });
  return allHours.filter((hour) => !notAvailable.includes(hour));
};

export { generateHours, getDisponibility };
