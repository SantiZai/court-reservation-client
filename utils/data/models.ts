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
}
