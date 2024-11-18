var _a, _b, _c;
import { DOM_ELEMENTS } from '../constants/domEle.js';
import { searchMakeMovie } from '../apis/makeMovie.js';
import { popularMovie } from '../apis/makeMovie.js';
export let pageNum = 1;
export let num = 1;
export let currentQuery = '';
(_a = DOM_ELEMENTS.$button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if (currentQuery) {
        pageNum++;
        searchMakeMovie(currentQuery);
    }
    else {
        num++;
        popularMovie(num);
    }
});
(_b = DOM_ELEMENTS.search) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', (event) => {
    var _a, _b, _c;
    if (event.key === 'Enter') {
        const query = (_a = DOM_ELEMENTS.search) === null || _a === void 0 ? void 0 : _a.value.trim();
        currentQuery = query;
        num = 0;
        if (query) {
            DOM_ELEMENTS.sectionMain.innerHTML = '';
            (_b = DOM_ELEMENTS.$button) === null || _b === void 0 ? void 0 : _b.classList.remove('buttonShow');
            (_c = DOM_ELEMENTS.$button) === null || _c === void 0 ? void 0 : _c.classList.add('section__button');
            searchMakeMovie(query);
            pageNum = 1;
        }
        DOM_ELEMENTS.search.value = '';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    popularMovie(1);
});
(_c = DOM_ELEMENTS.logo) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    location.reload();
});
