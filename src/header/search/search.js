import './search.css';
import { loadMovies } from '../../section/movies/movies';
export let currentQuery = '';

export const search = () => {
  const $search = document.createElement('input');
  $search.classList.add('header__search');
  $search.placeholder = '검색';

  $search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value.trim();
      if (inputValue) {
        currentQuery = inputValue;
        loadMovies();
        $search.value = '';
      } else {
        currentQuery = '';
        loadMovies();
      }
    }
  });

  return $search;
};
