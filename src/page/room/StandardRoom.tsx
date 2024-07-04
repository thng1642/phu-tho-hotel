import { useEffect, useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Carousel, Input } from "antd"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchFeedback } from "../../redux/room/feebackRoomSlice"
import { RootState } from "../../app/store"
import DecoHeader from "../../components/Deco-title/DecoHeader"
import Feedback from "../../components/Feedback/Feedback"
import NewsCard from "../../components/NewsCard/NewsCard"
import { fetchingDetailRoom } from "../../redux/room/detailRoomSlice"
import { fetchRoom, roomCardReduces } from "../../redux/room/roomCardSlice"

const { TextArea } = Input
const inputFieldCSS: React.CSSProperties = {
  display: 'flex',
  height: 47,
  width: 808,
  padding: "18px 16px",
  alignItems: 'flex-start',
  background: '#FFF',
  color: '#999',
  fontFamily: 'Lato',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24
}
function StandardRoom() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [nameRoom, setNameRoom] = useState('')
  const [slides, setSlides] = useState([] as string[])
  const feedbackSelector = useAppSelector((state: RootState) => state.feedbackRoom)
  const detailsRoomSelector = useAppSelector((state: RootState) => state.detailRoom)
  const otherRooms = useAppSelector((state: RootState) => state.rooms)
  const [listIconsBenefit, setListIconsBenefit] = useState<React.CSSProperties>({
    display: 'grid'
  })
  useEffect(() => {
    dispatch(fetchFeedback(location.state as string))
    dispatch(fetchingDetailRoom(location.state as string))
  }, [location.pathname])
  useEffect(() => {
    const n = detailsRoomSelector.icons.length
    const numberRows = (n % 2) === 0 ? n / 2 - 1 : Math.ceil(n / 2)
    setListIconsBenefit({
      display: 'grid',
      paddingLeft: 80,
      paddingRight: 119,
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: `repeat(${numberRows}, 27px)`,
      columnGap: 68,
      rowGap: 24
    })
  }, [detailsRoomSelector, location.pathname])
  useEffect(() => {
    if (otherRooms.length === 0) {
      dispatch(fetchRoom())
    }
  }, [otherRooms])
  useEffect(() => {
    if (otherRooms.length !== 0) {
      const roomCurrent = otherRooms.filter(item => item.id === location.state as string)
      setNameRoom(roomCurrent[0].name)
      setSlides(old => [roomCurrent[0].img1, roomCurrent[0].img2, roomCurrent[0].img3, roomCurrent[0].img4, roomCurrent[0].img5])
    }
  }, [otherRooms])
  return (
    <section>
      {/* Slide */}
      <div className="slider-room">
        <DecoHeader name={nameRoom} />
        <div className="carousel-img">
          <Carousel autoplay>
            {
              slides.map((value, index) => (
                <div key={index}>
                  <img src={value} alt="anh" className="img-slide" />
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
      <div className="section-room">
        <div className="details-room-container">
          <div className="details-room-description">
            <h3 className="header-details-room">Thông tin phòng</h3>
            <ul>
              {
                detailsRoomSelector.descriptions.map((value, index) =>
                  <li key={index}>{value}</li>
                )
              }
            </ul>
          </div>
          <div className="details-room-benefit">
            <h3 className="header-details-room">Tiện nghi</h3>
            <div style={listIconsBenefit}>
              {
                detailsRoomSelector.icons.map((value, index) => (
                  <div key={index} className="list-benefit">
                    <img src={value} alt="icon" />
                    <p>{detailsRoomSelector.benefits[index]}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="list-feedback-container">
          <DecoHeader name="phản hồi từ khách hàng" />
          <div className="feedback-customer">
            {
              feedbackSelector.map((value, index) => (
                <Feedback author={value.author} content={value.content} dateAt={value.dateAt} key={index} />
              ))
            }
          </div>
        </div>
        <div className="more-feedback">
          <span>Xem thêm 70 bình luận khác</span>
        </div>
      </div>
      <div className="write-feedback-container">
        <h4>Bình luận</h4>
        <div className="input-fields-container">
          <Input style={inputFieldCSS} placeholder="Họ và tên (Bắt buộc)" />
          <Input style={inputFieldCSS} placeholder="Số điện thoại" />
          <Input style={inputFieldCSS} placeholder="Email" />
          <TextArea placeholder="Lời nhắn ..."
            style={{
              display: 'flex',
              height: 182,
              width: 808,
              padding: "18px 16px",
              alignItems: 'flex-start',
              background: '#FFF',
              color: '#999',
              fontFamily: 'Lato',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 24,
              resize: 'none'
            }}
          />
          <div className="submit-btn">
            Gửi
          </div>
        </div>
      </div>
      <div className="other-rooms-container">
        <DecoHeader name="các loại phòng khác" />
        <div className='list-rooms'>
          {
            otherRooms.map((value: any, index: number) => (
              <NewsCard key={index}
                tag="phòng nghỉ"
                img1={value.img1}
                author="Admin"
                dateAt="20.06.2023"
                id={index.toString()}
                short-des={value.des}
                title={`Phòng ${value.name}`}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default StandardRoom