import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="menu">
        <div className="logo-group">
          <img src="/src/assets/logo.png" alt="logo" />
          <div className="cinema-text">
            <p className="vn">TRUNG TÂM CHIẾU PHIM QUỐC GIA</p>
            <p className="en">National Cinema Center</p>
          </div>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Trang chủ
          </Link>
          <Link to="/calendar" onClick={() => setIsOpen(false)}>
            Lịch chiếu
          </Link>
          <Link to="/news" onClick={() => setIsOpen(false)}>
            Tin tức
          </Link>
          <Link to="/promotion" onClick={() => setIsOpen(false)}>
            Khuyến mãi
          </Link>
          <Link to="/ticket-price" onClick={() => setIsOpen(false)}>
            Giá vé
          </Link>
          <Link to="/festival" onClick={() => setIsOpen(false)}>
            Liên hoan phim
          </Link>
        </nav>
      </div>

      <div className="btn">
        <button
          className="register"
          onClick={() => navigate("/admin/register")}
        >
          Đăng ký
        </button>
        <button className="login" onClick={() => navigate("/admin/login")}>
          Đăng nhập
        </button>
      </div>

      {/* ICON 3 GẠCH */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Lớp nền mờ khi mở sidebar */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
}
