import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import DecoHeader from "../../../components/Deco-title/DecoHeader";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { fetchAirportCard } from "../../../redux/airport/airportCardSlice";

export default function Breakfast() {
  const dispatch = useAppDispatch()
  const airportCardsSelector = useAppSelector((state: RootState) => state.airportCard)
  useEffect(() => {
    dispatch(fetchAirportCard())
  }, [])
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 68,
      alignItems: 'center'
    }}>
      <div className="landing-img-breakfast">
        <h3>nhà hàng điểm tâm</h3>
        <DecoHeader name="" />
      </div>
      <div className="intro-breakfast-container">
        <div className="intro-breakfast-row">
          <img src="https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" alt="anh" />
          <div className="intro-breakfast-content">
            <h3>Tiện nghi</h3>
            <p>Bàn ăn được sắp xếp ngay ngắn, ngay cửa ra vào của khách sạn. Thuận tiện cho khách lưu trú dùng bữa sáng, hoặc các bữa ăn trong ngày.</p>
          </div>
        </div>
        <div className="intro-breakfast-row">
          <div className="intro-breakfast-content">
            <h3>Sang trọng</h3>
            <p>Nhà hàng của khách sạn Phú Thọ được thiết kế ấm cúng, dành cho khách lưu trú và khách vãng lai. Các bàn ghế được làm bằng gỗ sang trọng phục vụ các cuộc tiếp khách của khách lưu trú.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" alt="anh" />
        </div>
        <div className="intro-breakfast-row">
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHww" alt="anh" />
          <div className="intro-breakfast-content">
            <h3>Sạch sẽ</h3>
            <p>Nhà hàng luôn đặt vấn đề an toàn vệ sinh thực phẩm lên hàng đầu. Tất cả các món buffet của nhà hàng đều được chuẩn bị kỹ lưỡng, cũng như chén đĩa đều được lau rửa sạch sẽ, sắp xếp ngăn nắp trước khi đưa lên thực khách.</p>
          </div>
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