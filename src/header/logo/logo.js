import './logo.css';
import image from '../../assets/logo.png';

export const logo = () => {
  const $logo = document.createElement('img');
  $logo.classList.add('header__logo');
  $logo.src = image;

  $logo.addEventListener('click', () => {
    location.reload();
  });

  return $logo;
};
