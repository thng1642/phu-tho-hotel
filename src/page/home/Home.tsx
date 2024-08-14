import { Carousel } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import DecoHeader from '../../components/Deco-title/DecoHeader'
import IntroModal from '../../components/Modal/Intro/IntroModal'
import NewsCard from '../../components/NewsCard/NewsCard'
import RoomCard from '../../components/RoomCard/RoomCard'
import { fetchRelative } from '../../redux/home/newsCardSlice'
import { fetchRoom } from '../../redux/room/roomCardSlice'
import './home.scss'
import { useNavigate } from 'react-router-dom'

interface Slide {
    heading: string,
    content: string,
    img: string
}
export interface News {
    id: string,
    author: string,
    dateAt: string,
    "short-des": string,
    img1: string,
    tag: string,
    title: string
}
const slides: Slide[] = [
    {
        heading: "chào mừng đến với khách sạn phú thọ",
        content: "Khách sạn Phú Thọ quận 11 (thuộc Công ty Cổ phần Dịch vụ Du lịch Phú Thọ quản lý),có vị trí nằm ngay ngã tư đường 3 tháng 2 và Lê Đại Hành (Quận 11, TP.HCM). Đối diện khách sạn là khu mua sắm Lotte Mart, và đường vào CVVH Đầm Sen. Khách sạn đã được Phuthotourist cải tạo nâng cấp trong năm 2017.",
        img: "https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/home-slide%2F3ea946430e67205fee54d588c55991a9.png?alt=media&token=1b1b6171-a4ca-49fb-a8e6-b6806ef3679f"
    },
    {
        heading: "chào mừng đến với khách sạn phú thọ",
        content: "Khách sạn Phú Thọ quận 11 (thuộc Công ty Cổ phần Dịch vụ Du lịch Phú Thọ quản lý),có vị trí nằm ngay ngã tư đường 3 tháng 2 và Lê Đại Hành (Quận 11, TP.HCM). Đối diện khách sạn là khu mua sắm Lotte Mart, và đường vào CVVH Đầm Sen. Khách sạn đã được Phuthotourist cải tạo nâng cấp trong năm 2017.",
        img: "https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/home-slide%2Fbad0b7ef22a970a36d129244ed200c74.png?alt=media&token=2015d54a-65ab-414b-962e-9a2d6cb54d63"
    },
    {
        heading: "chào mừng đến với khách sạn phú thọ",
        content: "Khách sạn Phú Thọ quận 11 (thuộc Công ty Cổ phần Dịch vụ Du lịch Phú Thọ quản lý),có vị trí nằm ngay ngã tư đường 3 tháng 2 và Lê Đại Hành (Quận 11, TP.HCM). Đối diện khách sạn là khu mua sắm Lotte Mart, và đường vào CVVH Đầm Sen. Khách sạn đã được Phuthotourist cải tạo nâng cấp trong năm 2017.",
        img: "https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/home-slide%2Fc0f089ccf85024d6a8bd9077ef085567.jpg?alt=media&token=a130189a-0b8e-45c2-ad77-11d538f88c91"
    },
    {
        heading: "chào mừng đến với khách sạn phú thọ",
        content: "Khách sạn Phú Thọ quận 11 (thuộc Công ty Cổ phần Dịch vụ Du lịch Phú Thọ quản lý),có vị trí nằm ngay ngã tư đường 3 tháng 2 và Lê Đại Hành (Quận 11, TP.HCM). Đối diện khách sạn là khu mua sắm Lotte Mart, và đường vào CVVH Đầm Sen. Khách sạn đã được Phuthotourist cải tạo nâng cấp trong năm 2017.",
        img: "https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/home-slide%2Fd36428ce026ac872cdbeadbc496d6565.png?alt=media&token=66e65edb-044d-4d4a-94da-89d1f119fb8e"
    }
]

export default function Home() {
    const dispatch = useAppDispatch()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const bodyRef = useRef<HTMLElement | null>(null)
    const listRoom = useSelector((state: RootState) => state.rooms)
    const relativeNews = useSelector((state: RootState) => state.relative)
    const nav = useNavigate()
    useEffect(() => {

        dispatch(fetchRoom())

        dispatch(fetchRelative())
    }, [])

    return (
        <>
            <Carousel arrows infinite autoplay className='carousel-home'>
                {
                    slides.map((value, index) => {
                        return (
                            <>
                                <div className='home-slides' key={index} style={{
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${value.img}) lightgray -117px -130.203px / 106.094% 125.392% no-repeat`
                                }}>
                                    <div className='home-slides--content'>
                                        <h3 className='home-slides--heading'>{value.heading}</h3>
                                        <DecoHeader name='' />
                                        <p>
                                            {value.content}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </Carousel>
            <div className='scrollTo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="40" viewBox="0 0 49 40" fill="none" onClick={() => {
                    const body = document.getElementsByClassName('home-body')[0] as HTMLElement
                    if (!body) return
                    window.scroll({
                        top: body.offsetTop - 100,
                        behavior: 'smooth'
                    })
                }}>
                    <g clipPath="url(#clip0_1549_1788)">
                        <path d="M39.6094 20L24.375 32.5L9.14062 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M39.6094 7.5L24.375 20L9.14062 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1549_1788">
                            <rect width="48.75" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <section className='home-body' ref={bodyRef}>
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
                <section className='utilities-container'>
                    <DecoHeader name='các bài tiện ích khác' />
                    <div>
                        <div className='items-intro'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/item1.jpg?alt=media&token=afe9e189-bd8a-470b-b1ef-47d429fd3c3a" alt="hình ảnh" />
                            <div>
                                <h3 className='item-title'>Nhà hàng</h3>
                                <p>Nhà hàng của khách sạn Phú Thọ quận 11 phục vụ các món ăn<br /> Việt Nam, Âu, Á dưới nhiều hình thức tiệc buffet, tiệc sinh nhật,<br /> liên hoan họp mặt.</p>
                                <div className='btn'>
                                    Khám phá ngay
                                </div>
                            </div>
                        </div>
                        <div className='items-intro'>
                            <div>
                                <h3 className='item-title'>Massage</h3>
                                <p>Massage vốn được xem là một trong những dịch vụ không thể bỏ qua <br /> tại khách sạn Phú Thọ quận 11. Những bài xoa bóp trị liệu cơ xương<br /> khớp, sẽ giúp quý khách phục hồi sức khỏe nhanh chóng.</p>
                                <div className='btn'
                                    onClick={() => nav('/massage')}
                                >
                                    Khám phá ngay
                                </div>
                            </div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/item2.png?alt=media&token=87e50e90-cba4-4144-a6b6-cf4f10bf4406" alt="hình ảnh" />
                        </div>
                    </div>
                </section>
                <section className='vd-intro'>
                    <div onClick={() => {
                        setIsOpenModal(true)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="40" fill="black" fill-opacity="0.5" />
                            <path d="M60.5 40.0002L30.5 57.3207L30.5 22.6797L60.5 40.0002Z" fill="#DBA765" />
                        </svg>
                    </div>
                    <h3>Khách sạn Phú Thọ Quận 11</h3>
                    <p>Giới thiệu khách sạn Phú Thọ quận 11, trực thuộc Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</p>
                </section>
                <section className='relative-news-container'>
                    <DecoHeader name='các bài viết mới' />
                    <div className='home-list-news'>
                        {
                            relativeNews.map((value, index) => (
                                <NewsCard key={value.id} {...value} />
                            ))
                        }
                    </div>
                </section>
                <section>
                    {/* <APIProvider apiKey={} >

                </APIProvider> */}
                </section>
                <IntroModal isOpen={isOpenModal} handleClose={() => {
                    setIsOpenModal(false)
                }} />
            </section>
        </>
    )
}