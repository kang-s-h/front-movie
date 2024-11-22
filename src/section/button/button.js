import { loadMovies } from '../movies/movies';
import './button.css';

export const $button = document.createElement('button');
export const button = () => {
  $button.innerText = '더보기';
  $button.classList.add('section__button');

  $button.addEventListener('click', () => {
    loadMovies();
  });

  return $button;
};
export function makeButton(dataLength) {
  if (dataLength < 20) {
    $button.style.display = 'none';
  } else {
    $button.style.display = 'block';
  }
}
