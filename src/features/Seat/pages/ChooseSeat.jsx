import { useEffect, useState } from "react";
import Header from "../../../shared/layout/Header/Header";
import Footer from "../../../shared/layout/Footer/Footer";
import "./choose_seat.css";
import room from "../../../assets/room.png";
import { FaTimes } from "react-icons/fa";
import MovieInfo from "../../Movie/components/MovieInfo";
import MovieSchedule from "../../Movie/components/MovieSchedule";
import { Link } from "react-router-dom";

export default function ChooseSeat() {
  const [selected, setSelected] = useState([]);
  const [showtime, setShowtime] = useState("18:00");
  const seatPrice = 90000;

  useEffect(() => {
    const savedTime = localStorage.getItem("selectedTime");
    if (savedTime) setShowtime(savedTime);
  }, []);

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const generatedSeats = [];
    for (let row = 65; row <= 75; row++) {
      const rowSeats = [];
      for (let i = 1; i <= 15; i++) {
        const seatCode = String.fromCharCode(row) + i;
        const booked = Math.random() < 0.1; // giả lập 10% ghế đã đặt
        rowSeats.push({ seatCode, booked });
      }
      generatedSeats.push(rowSeats);
    }
    setSeats(generatedSeats);
  }, []);

  return (
    <>
      <Header />
      <MovieInfo />
      <MovieSchedule onSelectTime={(t) => setShowtime(t)} />
      <section className="seat-section">
        <div className="container">
          <div className="seat-header">
            <p>
              Giờ chiếu: <strong>{showtime}</strong>
            </p>

            <p className="seat-picker">Thời gian chọn ghế: 10:00</p>
          </div>

          <div className="screen">
            <img src={room} alt="room" />
          </div>

          <h2>Phòng chiếu số 2</h2>
          <br />
          <div className="seat-grid">
            {seats.map((row, idx) => (
              <div className="seat-row" key={idx}>
                {row.map(({ seatCode, booked }) => (
                  <button
                    key={seatCode}
                    className={`seat ${booked ? "booked" : "normal"} ${
                      selected.includes(seatCode) ? "selected" : ""
                    }`}
                    onClick={() => !booked && toggleSeat(seatCode)}
                  >
                    {booked ? <FaTimes size={16} /> : seatCode}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="legend">
            <div className="legend-item">
              <span className="seat booked">
                <FaTimes size={16} />
              </span>
              <span>Đã đặt</span>
            </div>
            <div className="legend-item">
              <span className="seat selected"></span>
              <span>Ghế bạn chọn</span>
            </div>
            <div className="legend-item">
              <span className="seat normal"></span>
              <span>Ghế thường</span>
            </div>
            <div className="legend-item">
              <span className="seat vip"></span>
              <span>Ghế VIP</span>
            </div>
            <div className="legend-item">
              <span className="seat double"></span>
              <span>Ghế đôi</span>
            </div>
          </div>

          <div className="summary">
            <div className="seat-choosed">
              <p>
                Ghế đã chọn: <span>{selected.join(", ") || "Chưa chọn"}</span>
              </p>
              <p>
                Tổng tiền:{" "}
                <span>
                  {(selected.length * seatPrice).toLocaleString("vi-VN")}đ
                </span>
              </p>
            </div>
            <div className="actions">
              <button
                className="button btn-outline"
                onClick={() => history.back()}
              >
                Quay lại
              </button>
              <button className="button btn-red">
                <Link to="/payment">Thanh Toán</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
