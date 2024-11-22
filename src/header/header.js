import './header.css';
import { logo } from './logo/logo.js';
import { search } from './search/search';

const $header = document.createElement('header');

export const Header = () => {
  $header.classList.add('header');
  $header.append(logo(), search());
  return $header;
};
