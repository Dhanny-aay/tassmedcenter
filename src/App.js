import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about";
import Augumentation from "./pages/augumentation";
import Buttlift from "./pages/bbl";
import Blog from "./pages/blog";
import BreastAug from "./pages/breastaugumentation";
import Gallery from "./pages/gallery";
import HairTransplant from "./pages/hairtransplant";
import Landing from "./pages/landing";
import Lipo from "./pages/lipo";
import LowerFace from "./pages/lowerface";
import Rhinoplasty from "./pages/rhinoplasty";
import TummyTuck from "./pages/tummyTuck";
import { useEffect } from "react";
import Contact from "./pages/contact";
import DetailedBlogOne from "./pages/detailedblogOne";
import DetailedBlogTwo from "./pages/detailedblogTwo";
import DetailedBlogThree from "./pages/detailedblogThree";
import DetailedBlogFour from "./pages/detailedblogFour";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/gallery/lowerface' element={<LowerFace/>}/>
      <Route path='/gallery/augumentation' element={<Augumentation/>}/>
      <Route path='/procedure/rhinoplasty' element={<Rhinoplasty/>}/>
      <Route path='/procedure/breast_augumentation' element={<BreastAug/>}/>
      <Route path='/procedure/buttlift' element={<Buttlift/>}/>
      <Route path='/procedure/tummy_tuck' element={<TummyTuck/>}/>
      <Route path='/procedure/liposuction' element={<Lipo/>}/>
      <Route path='/procedure/hair_transplant' element={<HairTransplant/>}/>
      <Route path='/blog/When Should_I_Get_A_Hair_Transplant_&_What_Is_The_Best_Age?' element={<DetailedBlogOne/>}/>
      <Route path='/blog/5_Things_to_know_about_Arm_Lifts' element={<DetailedBlogTwo/>}/>
      <Route path='/blog/Non-Surgical_Aesthetics_with_Nose_Filling' element={<DetailedBlogThree/>}/>
      <Route path='/blog/What_is_Medical_Aesthetics?' element={<DetailedBlogFour/>}/>


      {/* <HairTransplant/> */}
    </Routes>
    </>
  );
}

export default App;
