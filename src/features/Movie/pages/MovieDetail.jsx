import Header from "../../../shared/layout/Header/Header";
import Footer from "../../../shared/layout/Footer/Footer";
import MovieInfo from "../components/MovieInfo";
import MovieSchedule from "../components/MovieSchedule";
import "./movie_detail.css";
import { useNavigate } from "react-router-dom";

export default function MovieDetail() {
  const navigate = useNavigate();

  const goToChooseTicket = (time) => {
    localStorage.setItem("selectedTime", time);
    navigate("/choose-seat");
  };

  return (
    <>
      <Header />
      <MovieInfo />
      <MovieSchedule goToChooseTicket={goToChooseTicket} />
      <Footer />
    </>
  );
}
