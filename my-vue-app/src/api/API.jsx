import { BASE_URL, options, options2 } from "../Config.jsx";

async function fetchApi(endpoint, options) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    return null;
  }
}

export function getPopularMovies(page) {
  const endpoint = `/movie/popular?language=ko-KR&page=${page}`;
  return fetchApi(endpoint, options);
}

export function getSearchMovies(page, input) {
  const endpoint = `/search/movie?include_adult=false&language=ko-KR&page=${page}&query=${input}`;
  return fetchApi(endpoint, options2);
}
