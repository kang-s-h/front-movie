import { BASE_URL, options, options2 } from '../constants/index.js';

export async function getData(page) {
  const response = await fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=${page}`, options);
  const data = await response.json();
  const $data = data.results;
  console.log($data);
  return $data;
}

export async function getSearchData(input, page) {
  const response2 = await fetch(
    `${BASE_URL}/search/movie?include_adult=false&language=ko-KR&page=${page}&query=${input}`,
    options2
  );
  const data2 = await response2.json();
  const $data2 = data2.results;
  console.log($data2);
  return $data2;
}
