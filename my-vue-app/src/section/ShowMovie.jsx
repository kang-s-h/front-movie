import { useState } from 'react';
import { IMAGE_URL } from '../Config';
import './showMovie.css';
import MakeMovie from './MakeMovie';
import Modal from '../Modal';
import { getDetailMovie } from '../api/API';

function ShowMovie({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [selectedMovie, setSelectedMovie] = useState(null); // makeMovie에서 받은 정보
  const [movieDetail, setMovieDetail] = useState(null);

  const openModal = async (movie) => {
    setSelectedMovie(movie); // 영화 전체 객체 저장
    setIsModalOpen(true);
    await loadModalMovie(movie.id); // 영화 정보 가져오기
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null); // 선택된 영화 초기화
    setMovieDetail(null); // 디테일 초기화
  };

  // 영화 디테일 로드
  const loadModalMovie = async (movieId) => {
    try {
      const movieDetailData = await getDetailMovie(movieId);
      setMovieDetail(movieDetailData);
    } catch (error) {
      console.error('영화 디테일 데이터를 가져오는 중 에러 발생:', error);
    }
  };
  return (
    <>
      {/* MakeMovie에 onMovieClick 전달 */}
      <MakeMovie data={movie} onMovieClick={openModal} />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedMovie && (
            <div className="portal">
              <h3 className="portal__title">{movieDetail?.title}</h3>
              <div className="portal__content">
                <img
                  className="portal__content--img"
                  src={`${IMAGE_URL}${movieDetail?.poster_path}`}
                  alt={movieDetail?.title}
                ></img>
                <div className="portal__content--info">
                  <div className="genre-average">
                    <div className="genre">
                      {movieDetail?.genres.map((genre) => genre.name).join(', ')}
                    </div>
                    <img className="average-img" src="/src/assets/star.svg" alt="rating" />
                    <div className="average">{movieDetail?.vote_average}</div>
                  </div>
                  <div className="content">{movieDetail?.overview}</div>

                  <div className="my_vote">
                    <span className="vote-title">내 평점</span>
                    <span className="star-rating">
                      <img src="/src/assets/star.svg" alt="1 star" className="star" />
                      <img src="/src/assets/star.svg" alt="2 star" className="star" />
                      <img src="/src/assets/star.svg" alt="3 star" className="star" />
                      <img src="/src/assets/starGray.png" alt="4 star" className="star" />
                      <img src="/src/assets/starGray.png" alt="5 star" className="star" />
                      <span className="my-score">6</span>
                      <span className="total-score">보통이에요</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

export default ShowMovie;
