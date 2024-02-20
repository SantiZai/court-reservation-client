export const getClubs = async () => {
  const result = await fetch("http://localhost:4000/clubs");
  return result.json();
};
