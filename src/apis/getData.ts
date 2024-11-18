import { BASE_URL, options, options2 } from '../constants/index.js';

// 인기 영화 API 가져오는 함수
export async function getData(page: number) {
  const response = await fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=${page}`, options);
  const data = await response.json();
  const $data = data.results;
  return $data;
}
// 검색한 영화 API 가져오는 함수
export async function getSearchData(input: string, page: number) {
  const response2 = await fetch(
    `${BASE_URL}/search/movie?include_adult=false&language=ko-KR&page=${page}&query=${input}`,
    options2
  );
  const data2 = await response2.json();
  const $data2 = data2.results;
  console.log($data2);
  return $data2;
}
