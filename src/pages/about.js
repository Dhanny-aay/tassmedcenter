import Footer from "../components/footer";
import Navbar from "../components/navbar";
import medicine from './assets/medicin.svg';
import asthe from './assets/aesthe.svg';
import beau from './assets/beau.svg';
import rank from './assets/rank.svg';
import perfect from './assets/perfect.svg';

const About = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-12 md:mt-16 px-4 md:px-20 text-[#121212]">
            <div className="">
                <p className=" font-Jost font-normal text-base md:text-xl">About TASS Medical Center</p>
                <p className=" mt-3 text-2xl md:text-5xl font-Jost font-medium capitalize md:leading-[62.4px]">Advancing the field of aesthetic medicine through innovative techniques.</p>
                <div style={{backgroundImage:`url(${medicine})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full mt-8 h-[390px] md:h-[512px] rounded-[20px]"></div>
            </div>

            <div className=" py-8 md:py-16">
                <p className=" font-Jost text-2xl md:text-5xl text-center font-medium">TASS Medical Center</p>
                <p className=" font-Jost mt-2 text-base md:text-lg text-justify text-[#121212CC] font-normal">Emerging from Istanbul's heart in 2017, TASS Medical Center has carved its name as a premier destination for aesthetic transformation. Our unwavering commitment to patient well-being extends across multiple specialized branches, offering a curated journey towards the you you've always envisioned.<br/>
                Beyond our expansive reach, TASS Medical Center sets itself apart with its dedication to innovation. We boast the largest and most advanced facility in Göktürk, complete with state-of-the-art operating rooms in each branch. Our renowned team of aesthetic specialists, armed with the latest advancements and a deep respect for patient rights, delivers exceptional care with every touch.<br/>
                At TASS, technology is not just a tool, it's an extension of our passion for beauty and innovation. Our health tourism certificate and hair transplant license stand as testaments to our commitment to delivering life-changing transformations, always prioritizing quality and individual needs.<br/>
                Whether you seek a rejuvenating facial treatment or a meticulous hair transplant, TASS Medical Center offers a haven for personalized aesthetic experiences. We are the space where expertise meets your unique vision, and comfort seamlessly intertwines with well-being.</p>
            </div>

            <div className="py-8 md:py-16 flex flex-col md:flex-row justify-between items-center">

                <div style={{backgroundImage:`url(${asthe})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[340px] md:h-[490px] rounded-[10px]"></div>

                <div className=" w-full md:w-[48%] text-[#121212] md:text-right mt-6 md:mt-0">
                    <p className=" font-Jost text-2xl font-normal">Who we are</p>
                    <p className=" font-Jost text-2xl md:text-[40px] capitalize md:leading-[52px] mt-3 font-medium">Transforming aesthetic medicine.</p>
                    <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">At TASS Medical Center, we redefine aesthetic possibilities, shaping a future where cutting-edge beauty advancements are available to all. By relentlessly translating research into exquisite procedures, we inspire confidence and well-being for those seeking transformative enhancements.</p>
                </div>
            </div>

            <div className="py-8 md:py-16 flex flex-col-reverse md:flex-row justify-between items-center">

                <div className=" w-full md:w-[48%] text-[#121212] mt-6 md:mt-0">
                    <p className=" font-Jost text-2xl md:text-[40px] capitalize md:leading-[52px] font-medium">Sculpting the future of beauty.</p>
                    <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">For nearly 5 years, the pioneering spirit of a group of visionary doctors has guided TASS Medical Center. They revolutionized healthcare by establishing an integrated approach, and that trailblazing spirit continues to fuel breakthroughs in aesthetic medicine, like the advanced technologies powering the TASS Medical Center Platform. Today, these innovations empower us to tailor life-changing aesthetic experiences for every patient.</p>
                </div>
                
                <div style={{backgroundImage:`url(${beau})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[340px] md:h-[490px] rounded-[10px]"></div>

            </div>

            <div className="py-16  flex flex-col md:flex-row justify-between items-center">

                <div style={{backgroundImage:`url(${rank})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[340px] md:h-[490px] rounded-[10px]"></div>

                <div className=" w-full md:w-[48%] mt-6 md:mt-0 text-[#121212] md:text-right">
                    <p className=" font-Jost text-2xl md:text-[40px] capitalize md:leading-[52px] font-medium">Top rankings for quality care</p>
                    <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">At TASS Medical Center, our relentless pursuit of aesthetic excellence has been recognized by leading industry experts. We consistently rank among the top clinics for delivering exceptional patient care and transformative results, solidifying our commitment to shaping the future of beauty.</p>
                </div>
            </div>

            <div className="py-8 md:py-16 flex flex-col-reverse md:flex-row justify-between items-center">

                <div className=" w-full md:w-[48%] text-[#121212] mt-6 md:mt-0">
                    <p className=" font-Jost text-2xl font-normal">Our Impact</p>
                    <p className=" font-Jost text-2xl md:text-[40px] capitalize md:leading-[52px] mt-3 font-medium">Building a healthier and perfect world</p>
                    <p className="text-base md:text-lg font-Jost font-normal text-[#121212CC] mt-2">At TASS Medical Center, we don't just redefine beauty, we democratize it. With groundbreaking advancements shared globally, we break down barriers to transformative experiences, fostering inclusivity and diversity in aesthetic medicine. Join us in shaping a future where everyone feels empowered to embrace their unique radiance, and health shines through every shade of beauty.</p>
                </div>
                
                <div style={{backgroundImage:`url(${perfect})`, backgroundPosition:'', backgroundSize:'cover'}} className=" w-full md:w-[48%] h-[340px] md:h-[490px] rounded-[10px]"></div>

            </div>

        </div>
        <Footer/>
        </>
     );
}
 
export default About;