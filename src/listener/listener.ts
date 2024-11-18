import { DOM_ELEMENTS } from '../constants/domEle.js';
import { searchMakeMovie } from '../apis/makeMovie.js';
import { popularMovie } from '../apis/makeMovie.js';

export let pageNum: number = 1;
export let num: number = 1;
export let currentQuery: string = '';

DOM_ELEMENTS.$button?.addEventListener('click', () => {
  if (currentQuery) {
    pageNum++;
    searchMakeMovie(currentQuery);
  } else {
    num++;
    popularMovie(num);
  }
});

DOM_ELEMENTS.search?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = DOM_ELEMENTS.search?.value.trim();

    currentQuery = query;
    num = 0;

    if (query) {
      DOM_ELEMENTS.sectionMain.innerHTML = '';
      DOM_ELEMENTS.$button?.classList.remove('buttonShow');
      DOM_ELEMENTS.$button?.classList.add('section__button');
      searchMakeMovie(query);
      pageNum = 1;
    }
    DOM_ELEMENTS.search.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  popularMovie(1);
});

DOM_ELEMENTS.logo?.addEventListener('click', () => {
  location.reload();
});
