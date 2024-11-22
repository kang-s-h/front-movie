import './movies.css';
import { getData, getSearchData } from '../../apis/apis';
import { makeImage, makeTitle, makeRate } from './makeMovie/makeMovie';
import { notData } from '../notData/notData';
import { currentQuery } from '../../header/search/search';
import { makeButton } from '../button/button';
import { $title, setTitle } from '../title/title';

export const $movies = document.createElement('div');
let page = 1;
let previousQuery = '';

export const movies = () => {
  $movies.classList.add('section__main');
  loadMovies();
  return $movies;
};

// 만든 영화 렌더링하는 함수
export async function loadMovies() {
  if (currentQuery !== previousQuery) {
    $movies.innerHTML = '';
    page = 1;
    previousQuery = currentQuery;
  }

  let data = [];
  if (currentQuery) {
    data = await getSearchData(currentQuery, page);
  } else {
    data = await getData(page);
  }

  if (data.length === 0) {
    $title.innerText = '';
    notData();
    makeButton(0);
    return;
  }
  setTitle(currentQuery);
  renderMovies(data);
  page++;

  makeButton(data.length);
}

// 영화 만드는 함수
function renderMovies(data) {
  data.forEach((item) => {
    const box = document.createElement('div');
    box.classList.add('section__main--box');

    const img = makeImage(item.poster_path);
    const title = makeTitle(item.title);
    const rate = makeRate(item.vote_average);

    box.append(img, title, rate);
    $movies.append(box);
  });
}
