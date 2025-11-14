import React, { useState } from "react";
import "../Payment/Payment.css";
import Header from "../../../../shared/layout/Header/Header";
import Footer from "../../../../shared/layout/Footer/Footer";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const [selected, setSelected] = useState("vietqr");
  const [showQRModal, setShowQRModal] = useState(false);
  const navigate = useNavigate();

  const movie = {
    name: "CƯỜI XUYÊN BIÊN GIỚI - T13 - Phụ đề",
    time: "21:25",
    date: "14/11/2024",
    seats: ["B1", "B2"],
    format: "2D",
    room: "12",
    price: 80000,
  };

  const total = movie.seats.length * movie.price;

  const methods = [
    { id: "vietqr", name: "VietQR", img: "/vietqr.png" },
    { id: "vnpay", name: "VNPAY", img: "/vnpay.png" },
    { id: "viettel", name: "Viettel Money", img: "/viettelmoney.png" },
    { id: "payoo", name: "Payoo", img: "/payoo.png" },
  ];

  // Tạo mã QR giả cho demo
  const generateQRCode = (method) => {
    const qrData = {
      vietqr: `https://api.vietqr.io/v2/generate?accountNo=1234567890&accountName=CINEMA&amount=${total}&description=Thanh toan ve phim ${movie.name}`,
      vnpay: `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=${total * 100}&vnp_Command=pay&vnp_CreateDate=20241114102500&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh toan ve phim&vnp_OrderType=other&vnp_ReturnUrl=https://cinema.com&vnp_TmnCode=DEMO&vnp_TxnRef=123456789&vnp_Version=2.1.0`,
      viettel: `viettel://payment?amount=${total}&description=Thanh toan ve phim ${movie.name}&merchant=CINEMA`,
      payoo: `payoo://payment?amount=${total}&description=Thanh toan ve phim ${movie.name}&merchant=CINEMA`
    };
    return qrData[method] || qrData.vietqr;
  };

  const handlePayment = () => {
    setShowQRModal(true);
  };

  const closeQRModal = () => {
    setShowQRModal(false);
  };

  const handlePaymentSuccess = () => {
    setShowQRModal(false);
    navigate("/payment-success");
  };

  const handlePaymentFailure = () => {
    setShowQRModal(false);
    navigate("/payment-failure");
  };

  return (
    <div className="payment-wrapper">
      <Header />

      <main className="content">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* Movie Information Card */}
          <div className="info-card">
            <h3>Thông tin phim</h3>
            <div className="movie-info">
              <div className="info-row">
                <span className="label">Phim</span>
                <span className="value">{movie.name}</span>
              </div>
              <div className="info-row">
                <span className="label">Ngày giờ chiếu</span>
                <span className="value highlight">{movie.time} - {movie.date}</span>
              </div>
              <div className="info-row">
                <span className="label">Định dạng</span>
                <span className="value">{movie.format}</span>
              </div>
              <div className="info-row">
                <span className="label">Ghế</span>
                <span className="value">{movie.seats.join(", ")}</span>
              </div>
              <div className="info-row">
                <span className="label">Phòng chiếu</span>
                <span className="value">{movie.room}</span>
              </div>
            </div>
          </div>

          {/* Payment Information Card */}
          <div className="info-card">
            <h3>Thông tin thanh toán</h3>
            <div className="payment-table">
              <div className="table-header">
                <span>Danh mục</span>
                <span>Số lượng</span>
              </div>
              <div className="table-row">
                <span>Ghế ({movie.seats.join(",")})</span>
                <span>{movie.seats.length}</span>
              </div>
              <div className="total-row">
                <span>Tổng tiền</span>
                <span>{total.toLocaleString("vi-VN")}₫</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* Payment Methods Card */}
          <div className="info-card">
            <h3>Phương thức thanh toán</h3>
            <div className="methods">
              {methods.map((m) => (
                <label
                  key={m.id}
                  className={`method ${selected === m.id ? "selected" : ""}`}
                  onClick={() => setSelected(m.id)}
                >
                  <span className="custom-radio">
                    {selected === m.id && <span className="checkmark"><IoMdCheckmark /></span>}
                  </span>
                  <img src={m.img} alt={m.name} />
                  <span>{m.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Summary Card */}
          <div className="info-card">
            <h3>Thông tin thanh toán</h3>
            <div className="payment-summary">
              <div className="summary-section">
                <h4>Chi tiết</h4>
                <div className="payment-table">
                  <div className="table-row">
                    <span>Ghế ({movie.seats.join(",")})</span>
                    <span>{movie.seats.length}</span>
                  </div>
                  <div className="table-row">
                    <span>Thanh toán</span>
                    <span>{total.toLocaleString("vi-VN")}₫</span>
                  </div>
                  <div className="table-row">
                    <span>Phí</span>
                    <span>0₫</span>
                  </div>
                  <div className="total-row">
                    <span>Tổng cộng</span>
                    <span>{total.toLocaleString("vi-VN")}₫</span>
                  </div>
                </div>
              </div>

              <button className="btn-pay" onClick={handlePayment}>Thanh toán</button>
              <button className="btn-back">Quay lại</button>

              <p className="note">
                <span className="note-label">Lưu ý:</span> Không mua vé cho trẻ em dưới 13 tuổi đối
                với các suất chiếu kết thúc sau 22h00 và không mua vé cho trẻ em
                dưới 16 tuổi đối với các suất chiếu phim kết thúc sau 23h00.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="qr-modal-overlay" onClick={closeQRModal}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="qr-modal-header">
              <h3>Quét mã QR để thanh toán</h3>
              <button className="close-btn" onClick={closeQRModal}>
                <IoClose />
              </button>
            </div>
            
            <div className="qr-modal-content">
              <div className="payment-info">
                <div className="selected-method">
                  <img src={methods.find(m => m.id === selected)?.img} alt={methods.find(m => m.id === selected)?.name} />
                  <span>{methods.find(m => m.id === selected)?.name}</span>
                </div>
                <div className="amount-info">
                  <span className="amount-label">Số tiền:</span>
                  <span className="amount-value">{total.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>
              
              <div className="qr-code-container">
                <div className="qr-code">
                  <img src="/maqrthanhtoan.png" alt="Mã QR thanh toán" className="qr-image" />
                </div>
                <p className="qr-instruction">
                  Mở ứng dụng {methods.find(m => m.id === selected)?.name} và quét mã QR để thanh toán
                </p>
              </div>
              
              <div className="payment-details">
                <div className="detail-row">
                  <span>Phim:</span>
                  <span>{movie.name}</span>
                </div>
                <div className="detail-row">
                  <span>Ghế:</span>
                  <span>{movie.seats.join(", ")}</span>
                </div>
                <div className="detail-row">
                  <span>Thời gian:</span>
                  <span>{movie.time} - {movie.date}</span>
                </div>
              </div>
            </div>
            
            <div className="qr-modal-footer">
              <button className="btn-cancel" onClick={handlePaymentFailure}>
                Hủy thanh toán
              </button>
              <button className="btn-confirm" onClick={handlePaymentSuccess}>
                Đã thanh toán
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
