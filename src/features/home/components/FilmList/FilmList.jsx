import React from "react";
import { Link } from "react-router-dom";
import "./FilmList.css";

export default function FilmList({ title, films }) {
  return (
    <div className="film-section">
      <div className="title">
        <div className="left-group">
          <div className="circle"></div>
          <h2>{title}</h2>
        </div>
        <span className="view-all">Xem tất cả</span>
      </div>

      <div className="film-list">
        {films.map((item, idx) => (
          <Link
            to={'/movie-detail'}
            key={idx}
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={item.poster} alt={item.title} />
            <div className="des">
              <p>{item.genres.join(", ")}</p>
              <p>{item.date}</p>
            </div>
            <h4>{item.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
