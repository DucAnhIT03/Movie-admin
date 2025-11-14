import React, { useState } from "react";
import "./Calendar.css";
import Header from "../../../shared/layout/Header/Header.jsx";
import Footer from "../../../shared/layout/Footer/Footer.jsx";
import { movies } from "../../../data/filmData.js";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState("12-11-2024");
  const dates = ["12-11-2024", "13-11-2024", "14-11-2024", "15-11-2024"];

  return (
    <div className="calendar-page">
      <Header />

      <div className="app">
        <h1 className="movie-title">Phim đang chiếu</h1>

        <div className="date-buttons">
          {dates.map((d) => (
            <button
              key={d}
              className={`date-btn ${selectedDate === d ? "active" : ""}`}
              onClick={() => setSelectedDate(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <p className="note">
          <span className="note-label">Lưu ý:</span> Khán giả dưới 13 tuổi chỉ
          chọn suất chiếu kết thúc trước 22h và dưới 16 tuổi chỉ chọn suất chiếu
          kết thúc trước 23h.
        </p>

        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.title} className="movie-card">
              <img
                src={movie.img}
                alt={movie.title}
                className="poster"
              />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>
                  <b>Thể loại:</b> {movie.genre} ({movie.duration} phút)
                </p>
                <p>
                  <b>Xuất xứ:</b> {movie.origin}
                </p>
                <p>
                  <b>Khởi chiếu:</b> {movie.release}
                </p>
                <p className="age">{movie.type} - Phim phổ biến theo độ tuổi</p>
                <div className="times">
                  {movie.times.map((time) => (
                    <button key={time} className="time-btn">
                      {time}
                    </button>
                  ))}
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Calendar;
