import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../page/home/Home";
import Rooms from "../../page/room/Rooms";
import StandardRoom from "../../page/room/StandardRoom";
import Airport from "../../page/services/airport/Airport";
import Breakfast from "../../page/services/breakfast/Breakfast";
import HomeMassage from "../../page/massage/HomeMassage";
import Contact from "../../page/contact/Contact";
import Searching from "../../page/search/Searching";
import DetailsMassage from "../../page/massage/DetailsMassage";

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
          <Route path="massage/:id" element={<DetailsMassage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search/:search" element={<Searching />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter