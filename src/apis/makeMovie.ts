import { IMAGE_URL } from '../constants/index.js';
import { getData } from '../apis/getData.js';
import { DOM_ELEMENTS } from '../constants/domEle.js';
import { pageNum } from '../listener/listener.js';
import { currentQuery } from '../listener/listener.js';
import { getSearchData } from '../apis/getData.js';
import { notData } from '../errorFunc/error.js';

// 영화 하나의 이미지를 만드는 함수
export function makeImage(img: string) {
  const $img: HTMLImageElement = document.createElement('img');
  $img.className = 'section__main--box-img';
  $img.src = `${IMAGE_URL}${img}`;
  return $img;
}

// 영화 하나의 제목을 만드는 함수
export function makeTitle(title: string) {
  const $title = document.createElement('div');
  $title.innerText = title;
  $title.className = 'section__main--box-title';
  return $title;
}

// 영화 하나의 평점을 만드는 함수
export function makeRate(rate: number) {
  const $rate = document.createElement('span');
  const $rateImg = document.createElement('img');
  const $rateBox = document.createElement('span');

  $rate.className = 'section__main--box-rate';
  $rate.innerText = `${rate}`;
  $rateImg.className = 'section__main--box-rateImg';
  $rateImg.src = '/src/assets/star.svg';
  $rateBox.append($rate, $rateImg);

  return $rateBox;
}

// 인기 영화를 웹사이트에 출력하는 함수
export async function popularMovie(page: number) {
  const data = await getData(page);
  data.forEach((item) => {
    const box = document.createElement('div');
    box.className = 'section__main--box';
    const img = makeImage(item.poster_path);
    const title = makeTitle(item.title);
    const rate = makeRate(item.vote_average);
    box.append(img, title, rate);
    DOM_ELEMENTS.sectionMain?.appendChild(box);
  });
}

// 검색한 영화를 웹사이트에 출력하는 함수
export async function searchMakeMovie(query: string) {
  const data2 = await getSearchData(query, pageNum);
  if (data2.length < 20) {
    DOM_ELEMENTS.$button?.classList.remove('section__button');
    DOM_ELEMENTS.$button?.classList.add('buttonShow');
  } else {
    DOM_ELEMENTS.$button?.classList.remove('buttonShow');
    DOM_ELEMENTS.$button?.classList.add('section__button');
    console.log(data2.length);
  }
  if (data2.length === 0) {
    DOM_ELEMENTS.sectionMain.innerHTML = '';
    DOM_ELEMENTS.sectionTitle.innerText = '';
    DOM_ELEMENTS.sectionMain?.classList.remove('section__main');
    DOM_ELEMENTS.sectionMain?.classList.add('notingData');
    notData();
  } else {
    DOM_ELEMENTS.sectionTitle.innerText = `"${currentQuery}" 검색 결과`;
    DOM_ELEMENTS.sectionMain?.classList.remove('notingData');
    DOM_ELEMENTS.sectionMain?.classList.add('section__main');
  }
  data2.forEach((item) => {
    const box = document.createElement('div');
    box.className = 'section__main--box';
    const img = makeImage(item.poster_path);
    const title = makeTitle(item.title);
    const rate = makeRate(item.vote_average);
    box.append(img, title, rate);
    DOM_ELEMENTS.sectionMain?.appendChild(box);
  });
}
