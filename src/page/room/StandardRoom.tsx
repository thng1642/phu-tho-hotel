import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Input } from "antd"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchFeedback } from "../../redux/room/feebackRoomSlice"
import { RootState } from "../../app/store"
import DecoHeader from "../../components/Deco-title/DecoHeader"
import Feedback from "../../components/Feedback/Feedback"
import NewsCard from "../../components/NewsCard/NewsCard"

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
  const feedbackSelector = useAppSelector((state: RootState) => state.feedbackRoom)
  const otherRooms = useAppSelector((state: RootState) => state.rooms)

  useEffect(() => {
    dispatch(fetchFeedback(location.state as string))
  }, [])
  return (
    <section>
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