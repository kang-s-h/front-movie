// App.jsx
import { useState, useEffect } from "react";
import Header from "./header/Header";
import Title from "./section/Title";
import Button from "./section/Button";
import ShowMovie from "./section/ShowMovie";
import { getPopularMovies, getSearchMovies } from "./api/API";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [button, setButton] = useState(true);
  const [message, setMessage] = useState("");

  // 초기 로딩 - 인기 영화
  useEffect(() => {
    loadPopularMovies(1);
  }, []);

  // 검색어 변경 처리
  useEffect(() => {
    if (search === "") {
      loadPopularMovies(1);
    } else {
      loadSearchMovies(1, search);
    }
  }, [search]);

  // 인기 영화 로드
  const loadPopularMovies = async (currentPage) => {
    const popularMovies = await getPopularMovies(currentPage);
    if (currentPage === 1) {
      setMovies(popularMovies);
    } else setMovies((prev) => [...prev, ...popularMovies]);
    setMessage("지금 인기 있는 영화");
    setButton(popularMovies.length >= 20);
    setPage(currentPage);
  };

  // 검색 영화 로드
  const loadSearchMovies = async (currentPage, query) => {
    const searchMovies = await getSearchMovies(currentPage, query);
    if (searchMovies.length === 0) {
      setMovies([]);
      setMessage("검색 결과 없음");
      setButton(false); // 검색 결과 없으면 버튼 숨김
    } else {
      if (currentPage === 1) {
        setMovies(searchMovies);
      } else setMovies((prev) => [...prev, ...searchMovies]);
      setMessage(`"${query}"의 검색 결과`);
      setButton(searchMovies.length >= 20); //버튼 숨김
    }
    setPage(currentPage);
  };

  //버튼
  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (search === "") loadPopularMovies(nextPage);
    else loadSearchMovies(nextPage, search);
  };

  return (
    <>
      <Header setSearch={setSearch} />
      <div className="section">
        <Title search={search} message={message} />
        <ShowMovie movie={movies} />
        {button && <Button onClick={handleLoadMore} />}
      </div>
    </>
  );
}

export default App;
