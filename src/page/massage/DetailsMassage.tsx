import { useLocation, useParams } from "react-router-dom";
import DecoHeader from "../../components/Deco-title/DecoHeader";
import { fetchMassageCard, Massage } from "../../redux/home/massageCardSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { News } from "../home/Home";
import NewsCard from "../../components/NewsCard/NewsCard";

const tmpCollection = [
  "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlY29yYXRpb24lMjByb29tfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1535312800630-1c173409799a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlY29yYXRpb24lMjByb29tfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1511401139252-f158d3209c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRlY29yYXRpb24lMjByb29tfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1501877008226-4fca48ee50c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRlY29yYXRpb24lMjByb29tfGVufDB8fDB8fHwy",
]

export default function DetailsMassage() {
  const typesMassage = useAppSelector((state: RootState) => state.massageCard)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [typeOther, setTypeOther] = useState([] as News[])
  const dispatch = useAppDispatch()

  const param = useParams();
  useEffect(() => {

    if (typesMassage.length === 0) {
      dispatch(fetchMassageCard())
    } else {

      const current = typesMassage.filter(item => item.id === param.id)
      const others = typesMassage.filter(item => item.id !== param.id)
      const cards = [] as News[]
      for (let i = 0; i < 4; i++) {
        cards.push({
          "short-des": others[i].description,
          author: "admin",
          dateAt: '16.04.2023',
          id: others[i].id,
          img1: others[i].img,
          tag: "massage",
          title: others[i].name
        })
      }
      setTypeOther([...cards])
      setName(current[0].name)
      setDescription(current[0].description)
    }
  }, [param.id])
  return (
    <section>
      <div className="landing-img-massage">
        <h3>{name}</h3>
        <DecoHeader name={''} />
      </div>
      <div className="details-massage">
        <div className="des-massage">
          <DecoHeader name="Mô tả" />
          <p>{description}</p>
          <div className="collection-massage">
            <div>
              {
                tmpCollection.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="Phu Tho Hotel Massage" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="des-massage">
          <DecoHeader name="phòng tắm và sauna" />
          <p>Không gian phòng rộng rãi, khép kín với các tiện ích như máy lạnh, nước nóng, phòng xông hơi, bồn tắm,
            giường massage, phòng vệ sinh, phòng tắm, bàn trà, ghế nghỉ.
            Phòng tắm và vệ sinh được thiết kế với các thiết bị vệ sinh cao cấp.
            Phòng Sauna xông hơi độc lập trong phòng, được thiết kế bằng gỗ, đúng tiêu chuẩn một phòng xông hơi quốc tế.</p>
          <div className="collection-massage">
            <div>
              {
                tmpCollection.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="Phu Tho Hotel Massage" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32
        }}>
          <DecoHeader name="các phòng massage khác" />
          <div className='services-news'>
            {
              typeOther.map((value) => (
                <NewsCard key={value.id} {...value} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}