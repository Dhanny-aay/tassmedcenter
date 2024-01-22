import { Link } from 'react-router-dom';
import arrLeft from './assets/arrleft.svg';

const Gallery = () => {
    return ( 
        <>
        <div className=" px-4 md:px-20 py-8 md:py-16 flex justify-center  items-center text-[#121212] flex-col">
            <p className="text-center  font-Jost text-2xl md:text-5xl font-medium">Our Gallery</p>
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

            <Link to='/gallery'>
                <button className=' bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] px-7 md:px-[18px] py-2 md:py-3 rounded-[50px] mt-8 md:mt-16 text-white font-Jost font-semibold text-sm md:text-base'>Show more</button>
            </Link>
        </div>
        </>
     );
}
 
export default Gallery;