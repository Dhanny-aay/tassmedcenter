import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bf1 from './assets/bf1.svg';
import bf2 from './assets/bf2.svg';
import bf3 from './assets/bf3.svg';
import af2 from './assets/af2.svg';
import af3 from './assets/af3.svg';
import arrLeft from './assets/arrleft.svg';
import { Link } from "react-router-dom";

const LowerFace = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-12 md:mt-20 px-4 md:px-20 font-Jost">
            <p className=" font-Jost font-normal text-lg md:text-xl text-center">Our Gallery</p>
            <p className=" font-Jost font-medium text-2xl md:text-5xl mt-3 text-center capitalize">Lower face/neck lift</p>
            <div className=" mt-6 md:mt-8 w-full border-y border-[#DADADA] py-4 md:py-6 flex items-center justify-between font-Jost">
                <span className="">
                    <p className=" text-lg md:text-[22px] font-semibold text-[#272D37]">Age</p>
                    <p className=" text-[#121212CC] text-sm md:text-base font-normal mt-2">60-69</p>
                </span>

                <span className="">
                    <p className=" text-lg md:text-[22px] font-semibold text-[#272D37]">Procedure</p>
                    <p className=" text-[#121212CC] text-sm md:text-base font-normal mt-2">Facelift</p>
                </span>

                <span className="">
                    <p className=" text-lg md:text-[22px] font-semibold text-[#272D37]">Gender</p>
                    <p className=" text-[#121212CC] text-sm md:text-base font-normal mt-2">Female</p>
                </span>
            </div>
            <div className=" w-full border-b border-[#DADADA] py-4 md:py-6 flex items-center font-Jost">
                <p className=" text-lg md:text-[22px] font-semibold text-[#272D37]">Procedure Details</p>
            </div>
            <div className=" py-4 md:py-6">
                <p className=" text-base md:text-xl font-medium text-[#272D37]">Oblique</p>
                <div className=" mt-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div style={{backgroundImage:`url(${bf1})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">Before</p>
                    </div>
                    <div style={{backgroundImage:`url(${bf1})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">After</p>
                    </div>
                </div>
            </div>

            <div className=" py-4 md:py-6">
                <p className=" text-base md:text-xl font-medium text-[#272D37]">Side</p>
                <div className=" mt-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div style={{backgroundImage:`url(${bf2})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">Before</p>
                    </div>
                    <div style={{backgroundImage:`url(${af2})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">After</p>
                    </div>
                </div>
            </div>

            <div className=" py-4 md:py-6">
                <p className=" text-base md:text-xl font-medium text-[#272D37]">Front</p>
                <div className=" mt-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div style={{backgroundImage:`url(${bf3})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">Before</p>
                    </div>
                    <div style={{backgroundImage:`url(${af3})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[200px] md:h-[250px] rounded-[10px] relative">
                        <p className=" absolute top-4 left-4 md:top-8 md:left-8 text-2xl font-semibold text-white font-Jost">After</p>
                    </div>
                </div>
            </div>

            <div className=" py-8 md:py-16">
                <p className="text-center  font-Jost text-2xl md:text-5xl font-medium capitalize">view Other Galleries</p>
                <p className="text-center text-[#121212CC] font-Jost text-base md:text-xl mt-2">We solve the world's most serious and complex medical challenges.</p>

                <div className=" w-full flex flex-col md:flex-row justify-between">

                <Link className='md:w-[48%] border border-[#EAEBF0] rounded-[10px] mt-6 md:mt-11 flex flex-col' to='/gallery/lowerface'>
                    <div className=" w-full">
                        <div className=" w-full h-[150px] md:h-[200px] galle rounded-t-[10px]">
                        </div>
                        <div className=" px-4 md:px-8 py-3 md:py-6">
                            <p className=" text-base md:text-[22px] font-semibold font-Jost text-[#272D37]">Lower Face/ Neck lift</p>
                            <p className=" text-[#121212CC] font-Jost text-sm md:text-base font-normal mt-4">Age: 60-69</p>
                            <p className=" text-[#121212CC] font-Jost text-sm md:text-base font-normal">Gender: Female</p>
                            <button className=" flex items-center space-x-3 mt-6">
                                <p className=" gradient-text text-[15px] font-Jost font-semibold">View more</p>
                                <img src={ arrLeft } alt="" />
                            </button>
                        </div>
                    </div>
                </Link>

                <Link className='md:w-[48%] border border-[#EAEBF0] rounded-[10px] mt-6 md:mt-11 flex flex-col' to='/gallery/augumentation'>
                    <div className=" w-full">
                        <div className=" w-full h-[150px] md:h-[200px] galle1 rounded-t-[10px]">
                        </div>
                        <div className=" px-4 md:px-8 py-3 md:py-6">
                            <p className=" text-base md:text-[22px] font-semibold font-Jost text-[#272D37]">Breast Augmentation</p>
                            <p className=" text-[#121212CC] font-Jost text-sm md:text-base font-normal mt-4">Age: 18-29</p>
                            <p className=" text-[#121212CC] font-Jost text-sm md:text-base font-normal">Gender: Female</p>
                            <button className=" flex items-center space-x-3 mt-6">
                                <p className=" gradient-text text-[15px] font-Jost font-semibold">View more</p>
                                <img src={ arrLeft } alt="" />
                            </button>
                        </div>
                    </div>
                </Link>

                </div>

            </div>
            
        </div>
        <Footer/>
        </>
     );
}
 
export default LowerFace;