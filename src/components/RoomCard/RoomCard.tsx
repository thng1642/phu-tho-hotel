import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'

function RoomCard(props: any) {
    const nav = useNavigate()
    const [items, setItems] = useState<string[]>()
    useEffect(() => {
        const tmp = Object.keys(props)
        const x = ["name", "id", "price", "img1", "img2", "img3", "img4", "img5", "des"]
        const services = tmp.filter(item => !x.includes(item))
        setItems(services)
    }, [])
    return (
        <div className='layout-room'
            onClick={(e) => {
                nav(`/phongnghi/${props.id}`, { state: props.id })
            }}
        >
            <div className='bg-room-card' style={{ background: `url(${props.img1}) lightgray 50% / cover no-repeat` }}>
                <div></div>
            </div>
            <div className='container-room'>
                <div className="header-room-card">
                    <h3>Phòng {props.name}</h3>
                    <span>{props.price}</span>
                </div>
                <div className='benefit'>
                    {
                        items?.map((item, index) => (
                            <div key={index} className='benefit-items'>
                                <img src={props[item][1]} alt="icon" />
                                {item === "acreage" ? <span>Diện tích {props[item][0]}m<sup>2</sup></span> : <span>{props[item][0]}</span>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default RoomCard