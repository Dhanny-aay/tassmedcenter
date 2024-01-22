import Blog from "../components/blog";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import left from './assets/left.svg';
import sbr from './assets/sbr.svg';
import globe from './assets/globe.svg';
import { Link } from "react-router-dom";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>

        <div className=" mt-8 pb-8 md:mt-16 md:pb-16 px-4 md:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className=" w-full md:w-[48%] text-[#121212]">
                <p className=" font-Jost text-2xl md:text-5xl font-medium">Transformation Starts Here.</p>
                <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">At TASS Medical Center, we're dedicated to delivering dependable and serene healthcare services by merging our deep-rooted commitment to quality care with the latest technological advancements in the field. Our goal is to ensure that every patient receives compassionate and comprehensive medical attention, while also feeling calm and at ease throughout their experience with us. Trust TASS Medical Center for top-notch healthcare that prioritizes your comfort and well-being.</p>
                <Link to='/about'>
                    <button className=" flex items-center space-x-6 mt-6 md:mt-9">
                        <span className=" flex items-center space-x-2">
                            <img src={ globe } className=" h-6 w-6 md:w-auto md:h-auto" alt="" />
                            <p className=" font-Jost text-[#624004] text-lg font-normal">Learn more about us</p>
                        </span>
                        <img src={ left } className="" alt="" />
                    </button>
                </Link>
            </div>
            <div className=" w-full md:w-[48%] h-[340px] md:h-[490px] mt-6 md:mt-0 rounded-[10px] place"></div>
        </div>
        
        <div className=" mt-8 pb-8 md:mt-16 md:pb-16 px-4 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className=" w-full md:w-[48%] h-[340px] mt-6 md:mt-0 md:h-[490px] rounded-[10px] class"></div>
            <div className=" w-full md:w-[48%] text-[#121212] md:text-right">
                <p className=" font-Jost text-2xl md:text-5xl font-medium">World-class care for global patients</p>
                <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">We make it easy for patients around the world to get care from TASS Medical Clinic.</p>
                <Link to='/about'>
                    <button className=" flex items-center space-x-6 mt-6 md:mt-9 md:ml-auto">
                        <span className=" flex items-center space-x-2">
                            <img src={ globe } className=" h-6 w-6 md:w-auto md:h-auto" alt="" />
                            <p className=" font-Jost text-[#624004] text-lg font-normal">Learn more about us</p>
                        </span>
                        <img src={ left } className="" alt="" />
                    </button>
                </Link>
            </div>
        </div>

        <div className=" mt-8 pb-8 md:mt-16 md:pb-16 px-4 md:px-20 flex flex-col md:flex-row justify-between item-start">
            <div className="text-[#121212] w-full md:w-[40%]">
                <p className="font-Jost text-2xl md:text-5xl font-medium">Featured care areas</p>
                <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">We solve the world's most serious and complex medical challenges.</p>
            </div>
            
            <div className=" w-full md:w-[57%] mt-6 md:mt-0 flex flex-col md:flex-row justify-between items-start">

                <div className="w-full md:w-[48%] flex flex-col text-[#121212]">
                    <Link to='/procedure/rhinoplasty'>
                        <button className=" border-y border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Rhinoplasty</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/buttlift'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Brazilian Butt Lift</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/liposuction'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Liposuction</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/rhinoplasty'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Hollywood Smile</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>
                    
                    <Link to='/procedure/rhinoplasty'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Zirconium</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                </div>

                <div className=" w-full md:w-[48%] flex flex-col text-[#121212]">
                    
                    <Link to='/procedure/breast_augumentation'>
                        <button className=" border-b md:border-y border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Breast Augmentation</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/tummy_tuck'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Tummy Tuck</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/hair_transplant'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Hair Transplant</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/rhinoplasty'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Mesotherapy</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                    <Link to='/procedure/rhinoplasty'>
                        <button className=" border-b border-[#B698434D] w-full py-5 px-3 flex justify-between items-center">
                            <p className=" font-normal text-lg md:text-xl font-Jost">Youth Vaccine</p>
                            <img src={ left } className=" w-[8px] md:w-auto" alt="" />
                        </button>
                    </Link>

                </div>

            </div>
        </div>
        <Gallery/>
        <Blog/>
        <div className=" w-full mt-8 md:mt-16">
            <div className=" w-full bg-[#624004] px-4 md:px-20 py-8 md:py-16">
                <p className=" font-Jost font-medium text-2xl md:text-5xl text-white">Start your Transformtion now</p>
                <div className=" w-full flex justify-between items-center mt-6">
                    <p className=" text-white font-Jost text-base md:text-2xl font-normal">Request an appointment</p>
                    <img src={ sbr } className=" w-3 md:w-auto" alt="" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Landing;