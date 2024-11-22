import './title.css';

export const $title = document.createElement('div');

export const title = () => {
  $title.classList.add('section__title');
  $title.innerText = '지금 인기 있는 영화';
  return $title;
};

export function setTitle(input) {
  if (input && input.trim().length !== 0) {
    $title.innerText = `"${input}" 검색 결과`;
  } else {
    $title.innerText = `지금 인기 있는 영화`;
  }
}
