import "./movie_info.css";

export default function MovieInfo() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="main-content">
          <div className="top-row">
            <img
              src="/src/assets/cuoixuyenbiengioi.png"
              alt="Cười Xuyên Biên Giới"
            />
            <div className="top-side">
              <h1>
                CƯỜI XUYÊN BIÊN GIỚI - T13 <span className="tag">2D</span>
              </h1>
              <p>
                Hài &nbsp; | &nbsp; Hàn Quốc &nbsp; | &nbsp; 113 phút
                &nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>

        <div className="movie-infor">
          <h1>
            CƯỜI XUYÊN BIÊN GIỚI - T13 <span className="tag">2D</span>
          </h1>
          <p className="meta">
            Hài &nbsp; | &nbsp; Hàn Quốc &nbsp; | &nbsp; 113 phút
            &nbsp;&nbsp;&nbsp; Đạo diễn: <strong>KIM Chang-ju</strong>
          </p>
          <p className="cast">
            Diễn viên: Ryu Seung-ryong, Jin Sun-kyu, Igor Rafael PEDROSO, Luan B
            RUM DE ABREU E LIMA, JB João Batista GOMES DE OLIVEIRA, Yeom Hye-ran
            và Go Kyoung-pyo, Lee Soon-won
          </p>
          <p>Khởi chiếu: 15/11/2024</p>
          <p className="desc">
            Cười Xuyên Biên Giới kể về hành trình của Jin-bong (Ryu Seung-ryong)
            - cựu vô địch bắn cung quốc gia, sau khi nghỉ hưu, anh đã trở thành
            một nhân viên văn phòng bình thường. Đứng trước nguy cơ bị sa thải,
            Jin-bong phải nhận một nhiệm vụ bất khả thi là bay đến nửa kia của
            trái đất trong nỗ lực tuyệt vọng để sinh tồn.
          </p>
          <p className="rating">
            <span className="highlight">
              Kiểm duyệt: T13 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 13 TUỔI
              TRỞ LÊN (13+)
            </span>
          </p>
          <div className="actions">
            {" "}
            <button className="button btn-outline">
              Chi tiết nội dung
            </button>{" "}
            <button className="button btn-yellow">Xem trailer</button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
