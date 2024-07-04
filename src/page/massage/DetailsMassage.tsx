import { useLocation } from "react-router-dom";
import DecoHeader from "../../components/Deco-title/DecoHeader";
import { Massage } from "../../redux/home/massageCardSlice";
import { useEffect } from "react";


export default function DetailsMassage() {
  const location = useLocation()
  useEffect(() => {

  }, [])
  return (
    <section>
      <div className="landing-details-massage">
        <DecoHeader name={''} />
      </div>
    </section>
  )
}