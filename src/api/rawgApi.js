const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const getGamesSearchUrl = (query) => {
  return `${BASE_URL}/games?key=${API_KEY}&search=${query}`;
};

export const getGameDetails = async (query) => {
  const url = getGamesSearchUrl(query);

  const result = await fetch(url);
  if (!result.ok) {
    throw new Error(`RAWG API error: ${result.status} ${result.statusText}`);
  }

  const data = await result.json();
  return data;
};
