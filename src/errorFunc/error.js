import { DOM_ELEMENTS } from '../constants/domEle.js';
export function notData() {
    var _a;
    DOM_ELEMENTS.sectionMain.innerHTML = '';
    const notSearchImg = document.createElement('img');
    const noSearchTitle = document.createElement('span');
    notSearchImg.src = '/src/assets/not.png';
    notSearchImg.className = 'section__main--notSearchImg';
    noSearchTitle.className = 'section__main--notSearchTitle';
    noSearchTitle.innerText = '검색 결과 없음!!';
    (_a = DOM_ELEMENTS.sectionMain) === null || _a === void 0 ? void 0 : _a.append(notSearchImg, noSearchTitle);
}
