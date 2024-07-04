import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import DecoHeader from "../../components/Deco-title/DecoHeader";
import NewsCard from "../../components/NewsCard/NewsCard";
import { fetchAirportCard } from "../../redux/airport/airportCardSlice";
import { fetchMassageCard } from "../../redux/home/massageCardSlice";
import './index.scss';

import "react-multi-carousel/lib/styles.css";
import { Slider } from "../../components/Slider";
import { useNavigate } from "react-router-dom";

export default function HomeMassage() {
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const airportCardsSelector = useAppSelector((state: RootState) => state.airportCard)
  const massageCardSelector = useAppSelector((state: RootState) => state.massageCard)

  useEffect(() => {
    dispatch(fetchAirportCard())
    dispatch(fetchMassageCard())
  }, [])
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 68,
      alignItems: 'center'
    }}>
      <div className="landing-img-massage">
        <h3>dịch vụ massage khách sạn phú thọ quận 11</h3>
        <DecoHeader name="" />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2EFE8',
        width: '100%',
        padding: '48px 105px',
        alignItems: 'center',
        gap: 32
      }}>
        <DecoHeader name="các loại phòng massage" />
        <div className="list-card-massage">
          <Slider slides={massageCardSelector} visibleItemsNumber={4}>
            {(slide: any) => (
              <div className="card-massage"
                onClick={() => nav(`/massage/${slide.id}`, { state: slide.id })}
              >
                <div style={{
                  position: 'relative',
                  width: 362,
                  height: 200,
                }}>
                  <img src={slide.img} alt="anh" />
                  <div className="hover-card-massage">Xem thêm</div>
                </div>
                <div className="card-massage-content">
                  <div className="card-massage-content-header">
                    <h3>Phòng {slide.name}</h3>
                    <DecoHeader name="" />
                  </div>
                  <p>{slide.description}</p>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div className="intro-massage-container">
        <div className="intro-massage-row">
          <img src="https://plus.unsplash.com/premium_photo-1661274165709-8222ecfef328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh" />
          <div className="intro-massage-content">
            <h3>Khu massage nữ</h3>
            <p>Khu Massage dành cho nữ được thiết kế kín đáo, tiện nghi đầy đủ trong phòng, phù hợp cho các nhóm bạn nữ đi cùng nhau.</p>
          </div>
        </div>
        <div className="intro-massage-row">
          <div className="intro-massage-content">
            <h3>Phòng xông hơi nam</h3>
            <p>Phòng dịch vụ massage dành cho Nam được thiết kế rộng rãi, với hệ thống bồn tắm sục khí, bồn tắm thảo dược của người Dao đỏ vùng Sa Pa, bồn sỏi ngâm chân nước nóng, phòng Sauna tắm hơi.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="anh" />
        </div>
        <div className="intro-massage-row">
          <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="anh" />
          <div className="intro-massage-content">
            <h3>Phòng VIP</h3>
            <p>Không chỉ đơn thuần là đến đây để Massage, quý khách còn có thể tận hưởng không gian riêng cho chính mình. Khách sạn Phú Thọ có 6 phòng VIP massage dành cho khách lựa chọn để tận hưởng những phút giây thư giãn của mình. Điểm đặc biệt là các phòng VIP đều được trang trí thiết kết theo mô típ của các nước như Ai Cập, Nhật Bản, Thái Lan, Trung Quốc… Bên trong đầy đủ các trang thiết bị như buồng Sauna riêng, bồn tắm riêng, và các thiết bị thư giãn khác.</p>
          </div>
        </div>
        <div className="intro-massage-row">
          <div className="intro-massage-content">
            <h3>Phòng thư giản</h3>
            <p>Là nơi thư giãn nghỉ ngơi sau khi quý khách trải qua các bài massage phục hồi sức khỏe. Phòng được thiết kế với các bộ ghế nghỉ ngơi thư giãn, cùng một số thiết bị tập cá nhân, và gội đầu thư giãn.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="anh" />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
        <DecoHeader name="các bài viết liên quan" />
        <div className='services-news'>
          {
            airportCardsSelector.map((value) => (
              <NewsCard key={value.id} title={value.title} author={value.author} dateAt={value.dateAt} short-des={value.des} img1={value.img} id={value.id} tag={"dịch vụ"} />
            ))
          }
        </div>
      </div>
    </section>
  )
}