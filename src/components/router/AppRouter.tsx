import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../page/home/Home";
import Rooms from "../../page/room/Rooms";
import StandardRoom from "../../page/room/StandardRoom";
import Airport from "../../page/services/airport/Airport";
import Breakfast from "../../page/services/breakfast/Breakfast";
import HomeMassage from "../../page/massage/HomeMassage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="phongnghi" element={<Rooms />} />
          <Route path="phongnghi/:id" element={<StandardRoom />} />
          <Route path="dichvu" element={<Airport />} />
          <Route path="diemtam" element={<Breakfast />} />
          <Route path="massage" element={<HomeMassage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter