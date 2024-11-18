var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IMAGE_URL } from '../constants/index.js';
import { getData } from '../apis/getData.js';
import { DOM_ELEMENTS } from '../constants/domEle.js';
import { pageNum } from '../listener/listener.js';
import { currentQuery } from '../listener/listener.js';
import { getSearchData } from '../apis/getData.js';
import { notData } from '../errorFunc/error.js';
export function makeImage(img) {
    const $img = document.createElement('img');
    $img.className = 'section__main--box-img';
    $img.src = `${IMAGE_URL}${img}`;
    return $img;
}
export function makeTitle(title) {
    const $title = document.createElement('div');
    $title.innerText = title;
    $title.className = 'section__main--box-title';
    return $title;
}
export function makeRate(rate) {
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
export function popularMovie(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getData(page);
        data.forEach((item) => {
            var _a;
            const box = document.createElement('div');
            box.className = 'section__main--box';
            const img = makeImage(item.poster_path);
            const title = makeTitle(item.title);
            const rate = makeRate(item.vote_average);
            box.append(img, title, rate);
            (_a = DOM_ELEMENTS.sectionMain) === null || _a === void 0 ? void 0 : _a.appendChild(box);
        });
    });
}
export function searchMakeMovie(query) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const data2 = yield getSearchData(query, pageNum);
        if (data2.length < 20) {
            (_a = DOM_ELEMENTS.$button) === null || _a === void 0 ? void 0 : _a.classList.remove('section__button');
            (_b = DOM_ELEMENTS.$button) === null || _b === void 0 ? void 0 : _b.classList.add('buttonShow');
        }
        else {
            (_c = DOM_ELEMENTS.$button) === null || _c === void 0 ? void 0 : _c.classList.remove('buttonShow');
            (_d = DOM_ELEMENTS.$button) === null || _d === void 0 ? void 0 : _d.classList.add('section__button');
            console.log(data2.length);
        }
        if (data2.length === 0) {
            DOM_ELEMENTS.sectionMain.innerHTML = '';
            DOM_ELEMENTS.sectionTitle.innerText = '';
            (_e = DOM_ELEMENTS.sectionMain) === null || _e === void 0 ? void 0 : _e.classList.remove('section__main');
            (_f = DOM_ELEMENTS.sectionMain) === null || _f === void 0 ? void 0 : _f.classList.add('notingData');
            notData();
        }
        else {
            DOM_ELEMENTS.sectionTitle.innerText = `"${currentQuery}" 검색 결과`;
            (_g = DOM_ELEMENTS.sectionMain) === null || _g === void 0 ? void 0 : _g.classList.remove('notingData');
            (_h = DOM_ELEMENTS.sectionMain) === null || _h === void 0 ? void 0 : _h.classList.add('section__main');
        }
        data2.forEach((item) => {
            var _a;
            const box = document.createElement('div');
            box.className = 'section__main--box';
            const img = makeImage(item.poster_path);
            const title = makeTitle(item.title);
            const rate = makeRate(item.vote_average);
            box.append(img, title, rate);
            (_a = DOM_ELEMENTS.sectionMain) === null || _a === void 0 ? void 0 : _a.appendChild(box);
        });
    });
}
