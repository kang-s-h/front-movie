import "./showMovie.css";
import MakeMovie from "./MakeMovie";

function ShowMovie({ movie }) {
  return <MakeMovie data={movie} className="section__main" />;
}

export default ShowMovie;
