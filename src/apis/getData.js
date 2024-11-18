var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BASE_URL, options, options2 } from '../constants/index.js';
export function getData(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=${page}`, options);
        const data = yield response.json();
        const $data = data.results;
        return $data;
    });
}
export function getSearchData(input, page) {
    return __awaiter(this, void 0, void 0, function* () {
        const response2 = yield fetch(`${BASE_URL}/search/movie?include_adult=false&language=ko-KR&page=${page}&query=${input}`, options2);
        const data2 = yield response2.json();
        const $data2 = data2.results;
        console.log($data2);
        return $data2;
    });
}
