import './makeMovie.css';
import starIcon from '../../../assets/star.svg';
// 영화 하나의 이미지를 만드는 함수
export function makeImage(img) {
  const $img = document.createElement('img');
  $img.classList.add('section__main--box-img');
  $img.src = `${process.env.IMAGE_URL}${img}`;
  return $img;
}

// 영화 하나의 제목을 만드는 함수
export function makeTitle(title) {
  const $title = document.createElement('div');
  $title.innerText = title;
  $title.classList.add('section__main--box-title');
  return $title;
}

// 영화 하나의 평점을 만드는 함수
export function makeRate(rate) {
  const $rate = document.createElement('span');
  const $rateImg = document.createElement('img');
  const $rateBox = document.createElement('span');

  $rate.classList.add('section__main--box-rate');
  $rate.innerText = `${rate}`;
  $rateImg.classList.add('section__main--box-rateImg');
  $rateImg.src = starIcon;
  $rateBox.append($rate, $rateImg);

  return $rateBox;
}
