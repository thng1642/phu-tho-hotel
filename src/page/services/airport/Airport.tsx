import { useEffect } from "react"
import DecoHeader from "../../../components/Deco-title/DecoHeader"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import { fetchAirportCard } from "../../../redux/airport/airportCardSlice"
import NewsCard from "../../../components/NewsCard/NewsCard"

function Airport() {
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
      <div className="landing-img-airport">
        <h3>dịch vụ đưa đón sân bay</h3>
        <DecoHeader name="" />
      </div>
      <div className="intro-airport-container">
        <div className="intro-airport-row">
          <img src="https://images.unsplash.com/photo-1596014747759-c8fcf9698e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvcnQlMjB0YXhpfGVufDB8fDB8fHww" alt="anh" />
          <div className="intro-airport-content">
            <h3>An toàn</h3>
            <p>Nhà hàng luôn đặt vấn đề an toàn vệ sinh thực phẩm lên hàng đầu. Tất cả các món buffet của nhà hàng đều được chuẩn bị kỹ lưỡng, cũng như chén đĩa đều được lau rửa sạch sẽ, sắp xếp ngăn nắp trước khi đưa lên thực khách.</p>
          </div>
        </div>
        <div className="intro-airport-row">
          <div className="intro-airport-content">
            <h3>Nhanh chóng</h3>
            <p>Nhà hàng của khách sạn Phú Thọ được thiết kế ấm cúng, dành cho khách lưu trú và khách vãng lại. Các bàn ghế được làm bằng gỗ sang trọng phục vụ các cuộc tiếp khách của khách lưu trú.</p>
          </div>
          <img src="https://plus.unsplash.com/premium_photo-1664476396308-61a1a90d9d74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh" />
        </div>
        <div className="intro-airport-row">
          <img src="https://images.unsplash.com/photo-1599278340576-bff6a4c8f3a1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh" />
          <div className="intro-airport-content">
            <h3>Uy tín</h3>
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
export default Airport