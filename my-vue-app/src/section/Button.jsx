import "./button.css";

function Button({ onClick }) {
  return (
    <button className="section__button" onClick={onClick}>
      더 보기
    </button>
  );
}

export default Button;
