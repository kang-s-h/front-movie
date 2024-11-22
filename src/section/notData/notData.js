import './notData.css';
import { $movies } from '../movies/movies';
import notDataImg from '../../assets/not.png';

export function notData() {
  const $noDataImage = document.createElement('img');
  $noDataImage.src = notDataImg;
  $noDataImage.classList.add('section__main--notSearchImg');
  $movies.innerHTML = '';
  $movies.append($noDataImage);
}
