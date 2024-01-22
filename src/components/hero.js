import sweep from './assets/sweep.svg';
import sweep1 from './assets/sweep1.svg';
import sweep2 from './assets/sweep2.svg';
import sweep3 from './assets/sweep3.svg';
import sweepMob from './assets/sweepmob.svg';
import left from './assets/left.svg';

const Hero = () => {
    return ( 
        <>
        <div className=" w-full h-[80vh] background1 px-4 md:px-20 relative">
            <img src={ sweep } className=' centered hidden md:block' alt="" />
            <img src={ sweepMob } className=' centered block md:hidden z-10' alt="" />
            
            <span className=' absolute bottom-20 text-[#624004] space-y-1 z-10 md:space-y-6'>
                <p className=' font-Jost text-2xl md:text-6xl font-medium text-[#624004]'>Hair Transplant</p>
                <p className=' font-Jost font-normal text-sm md:text-xl'>Natural, permanent and reliable results to the problems<br/> of baldness, performed by highly experienced team.</p>
                <button className=' flex items-center justify-center space-x-1'>
                    <p className=' font-Jost font-medium text-base md:text-2xl'>Learn more</p>
                    <img src={ left } className=' h-6 w-6 md:w-auto md:h-auto' alt="" />
                </button>
            </span>
        </div>
        

        {/* <div className=" w-full h-[80vh] background2 px-4 md:px-20 relative">
            <img src={ sweep1 } className=' centered hidden md:block' alt="" />
            <img src={ sweep1 } className=' centered block md:hidden z-10' alt="" />
            
            <span className=' absolute bottom-20 text-[#624004] space-y-1 z-10 md:space-y-6'>
                <p className=' font-Jost text-2xl md:text-6xl font-medium text-[#624004]'>Medical Aesthetic</p>
                <p className=' font-Jost font-normal text-sm md:text-xl'>With the development of technology, it is now possible<br/> to be beautiful without going under the knife!</p>
                <button className=' flex items-center justify-center space-x-1'>
                    <p className=' font-Jost font-medium text-base md:text-2xl'>Learn more</p>
                    <img src={ left } className=' h-6 w-6 md:w-auto md:h-auto' alt="" />
                </button>
            </span>
        </div>
        */}

        {/* <div className=" w-full h-[80vh] background3 px-4 md:px-20 relative">
            <img src={ sweep2 } className=' centered hidden md:block' alt="" />
            <img src={ sweep2 } className=' centered block md:hidden z-10' alt="" />
            
            <span className=' absolute bottom-20 text-[#624004] space-y-1 z-10 md:space-y-6'>
                <p className=' font-Jost text-2xl md:text-6xl font-medium text-[#624004]'>Plastic Surgery</p>
                <p className=' font-Jost font-normal text-sm md:text-xl'>It is the correction of congenital and acquired<br/> deformities and dysfunctions.</p>
                <button className=' flex items-center justify-center space-x-1'>
                    <p className=' font-Jost font-medium text-base md:text-2xl'>Learn more</p>
                    <img src={ left } className=' h-6 w-6 md:w-auto md:h-auto' alt="" />
                </button>
            </span>
        </div> */}
        
        {/* <div className=" w-full h-[80vh] background4 px-4 md:px-20 relative">
            <img src={ sweep3 } className=' centered hidden md:block' alt="" />
            <img src={ sweep3 } className=' centered block md:hidden z-10' alt="" />
            
            <span className=' absolute bottom-20 text-[#624004] space-y-1 z-10 md:space-y-6'>
                <p className=' font-Jost text-2xl md:text-6xl font-medium text-[#624004]'>Cosmetic Dental</p>
                <p className=' font-Jost font-normal text-sm md:text-xl'>Transform your smile and boost your self-assurance with<br/> our expert cosmetic dentistry services.</p>
                <button className=' flex items-center justify-center space-x-1'>
                    <p className=' font-Jost font-medium text-base md:text-2xl'>Learn more</p>
                    <img src={ left } className=' h-6 w-6 md:w-auto md:h-auto' alt="" />
                </button>
            </span>
        </div> */}
        </>
     );
}
 
export default Hero;