export enum USER_TYPES {
  superadmin,
  admin,
  user,
}

export enum SPORTS {
  tenis,
  futbol,
  basquet,
  voleibol,
  hockey,
  rugby,
}

export enum SURFACES {
  polvo_de_ladrillo,
  cemento,
  cesped,
  parquet,
  arena,
  alfombra,
}

export interface Club {
  id: string;
  createdAt: string;
  name: string;
  location: string;
  adminId: string;
  courts: Court[];
  sports: SPORTS[];
}

export interface Court {
  id: string;
  createdAt: string;
  name: string;
  surface: SURFACES;
  clubId: string;
  sport: SPORTS;
  reservations: Reservation[];
}

export interface Reservation {
  id: string;
  createdAt: string;
  date: string;
  hour: string;
  courtId: string;
  userId: string;
}

export interface User {
  id: string;
  createdAt: string;
  email: string;
  fullname: string;
  reservations: Reservation[];
  userType: USER_TYPES;
  club?: Club;
}
