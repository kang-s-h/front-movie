import './section.css';
import { title } from './title/title';
import { currentQuery } from '../header/search/search.js';
import { button } from './button/button';
import { movies } from './movies/movies';
const $section = document.createElement('section');

export const Section = () => {
  $section.classList.add('section');
  $section.append(title(currentQuery), movies(), button());
  return $section;
};
