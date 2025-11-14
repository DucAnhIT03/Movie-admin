import React from "react";
import "./Home.css";
import Header from "../../../shared/layout/Header/Header.jsx";
import Footer from "../../../shared/layout/Footer/Footer.jsx";
import FilmList from "../components/FilmList/FilmList";
import Promo from "../components/Promotion/Promo";
import Event from "../components/Event/Event";
import Space from "../../../shared/layout/Space/Space"
import Banner from "../components/Banner/Banner";
import { nowShowing, comingSoon, promos, events, movies } from "../../../data/filmData";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner banner={"/banner.jpg"} />
      <div className="content">
        <div className="left">
          <FilmList title="Phim đang chiếu" films={nowShowing} />
          <Space />
          <FilmList title="Phim sắp chiếu" films={comingSoon} />
        </div>
        <div className="right">
          <Promo promos={promos} />
          <Event events={events} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
