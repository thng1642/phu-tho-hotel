import { useSelector } from "react-redux"
import { useEffect } from "react"

import DecoHeader from "../../components/Deco-title/DecoHeader"
import { RootState } from "../../app/store"
import RoomCard from "../../components/RoomCard/RoomCard"
import NewsCard from "../../components/NewsCard/NewsCard"
import { useAppDispatch } from "../../app/hooks"
import { fetchRoom } from "../../redux/room/roomCardSlice"
import { fetchRelative } from "../../redux/home/newsCardSlice"

import './room.scss'

function Rooms() {
  const dispatch = useAppDispatch()
  const listRoom = useSelector((state: RootState) => state.rooms)
  const relativeNews = useSelector((state: RootState) => state.relative)
  useEffect(() => {
    dispatch(fetchRoom())
    dispatch(fetchRelative())
  }, [])
  return (
    <section>
      <div className="landing-img-room">
        <div className="landing-room-content">
          <h3>các loại phòng nghỉ khách sạn phú thọ quận 11</h3>
          <DecoHeader name="" />
          <p>Khách sạn Phú Thọ có 35 phòng nghỉ các loại Standard, Deluxe, Suite. Mỗi phòng đều đầy đủ tiện nghi cao cấp, giúp quý khách có những giấc ngủ ngon sau những hành trình dài.</p>
        </div>
      </div>
      <section className='intro-container-room'>
        {/* Title intro rooms */}
        <div className='title-intro'>
          <DecoHeader name={"các loại phòng nghỉ"} />
          <div className="title-intro-content">
            <p>Khách sạn Phú Thọ có 35 phòng nghỉ các loại Standard, Deluxe, Suite.<br /> Mỗi phòng đều đầy đủ tiện nghi cao cấp, giúp quý khách có những giấc ngủ ngon sau những hành trình dài.</p>
          </div>
        </div>
        <div className='list-rooms'>
          {
            listRoom.map((value: any, index: number) => (
              <RoomCard key={index} {...value} />
            ))
          }
        </div>
      </section>
      <section className='relative-news-container room'>
        <DecoHeader name="các bài viết liên quan" />
        <div className='home-list-news'>
          {
            relativeNews.map((value, index) => (
              <NewsCard key={value.id} {...value} />
            ))
          }
        </div>
      </section>
    </section>
  )
}
export default Rooms