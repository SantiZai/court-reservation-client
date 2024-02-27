const API_BASE = "http://localhost:5000/";

export const getClubs = async () => {
  const result = await fetch(`${API_BASE}clubs`);
  return result.json();
};

export const getFilteredClubs = async (queries: {
  location: string;
  sport: string;
}) => {
  const result = await fetch(
    `${API_BASE}clubs/search/many?location=${queries.location}&sport=${queries.sport}`
  );
  return result.json();
};
