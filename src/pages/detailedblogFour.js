import { Link } from "react-router-dom";
import Blog from "../components/blog";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import vector from './assets/Vector.svg';
import medic from './assets/medic.svg';

const DetailedBlogFour = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-12 w-full md:mt-16 px-4 md:px-20 font-Jost text-[#121212]">
            <span className=" flex flex-row items- space-x-3">
                <Link to='/'><p className=" text-[#121212] font-normal text-base">Home</p></Link>
                <img src={ vector } alt="" />
                <Link to='/blog'><p className=" text-[#121212] font-normal text-base">Our Blog</p></Link>
            </span>
            <div className=" w-full flex flex-col items-center justify-center mt-8">
                <p className=" font-medium text-3xl md:text-5xl text-center md:px-[10%]">What is Medical Aesthetics?</p>
                <p className=" font-normal text-lg md:text-xl text-center mt-3">22nd December 2023</p>
                <div style={{backgroundImage:`url(${medic})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div>
                <p className=" mt-8 font-normal text-[#676767] text-base">Ever wished to enhance your appearance without surgery? Medical aesthetics offers non-invasive and minimally invasive solutions for various concerns, from wrinkles to unwanted fat. These procedures are quicker, have shorter recovery times, and cater to a wider age range compared to traditional surgery. Whether for aesthetic reasons or addressing specific conditions, medical aesthetics empowers individuals to feel more confident and comfortable in their own skin.</p>
                <div className=" mt-8 w-full py-12 border-y border-[#EAEBF0]">
                    <p className=" text-lg text-black font-semibold">What is Medical Aesthetics?</p>
                    <p className=" text-base text-[#676767] font-normal mt-6">An aesthetic and pleasing appearance is important for everyone. With today’s technology, you can make some changes in both your face and body to make you feel more confident and more comfortable rather than people liking you. Moreover, without resorting to surgical procedures, with medical aesthetic techniques. Years, especially aging, cause the skin to change its former vitality and appearance. Although many people want to make changes in their appearance, they do not dare because of the fear of surgery. With the development of technology, it has become possible to beautify without going under the knife. Many medical aesthetic procedures that do not require surgical procedures have become preferred by many people. There are many privileges that distinguish these methods that make it possible to beautify without going under the knife from normal aesthetics. One of these privileges is the age factor. Since medical aesthetic procedures do not require a surgical procedure, they can meet the demands of a wide age range. Another advantage of medical aesthetics is the time factor. Medical aesthetic procedures do not take as much time as a surgical operation, and the healing process after medical aesthetics is faster than the healing process after going under the knife. After the medical aesthetic procedure, the person can continue his daily life from where he left off. People benefit from medical aesthetic methods optionally. In addition, some of the medical aesthetic applications are methods that doctors may prefer for some ailments.
                    </p>

                    <p className=" mt-12 text-lg text-black font-semibold">How is Medical Aesthetics Done?</p>
                    <p className=" text-base text-[#676767] font-normal mt-6">The world of medical aesthetics offers a diverse range of procedures designed to enhance your appearance and boost your confidence. But have you ever wondered how these seemingly transformative techniques actually work? Let's peek behind the curtain and explore the science behind some popular methods:<br/><br/>
                    1. Injectables: These versatile tools, like Botox and dermal fillers, utilize various compounds to achieve different effects. Botox relaxes targeted muscles, temporarily smoothing wrinkles and lines. Fillers, on the other hand, add volume and plumpness to areas like lips, cheeks, and under-eye circles, restoring a youthful appearance.<br/><br/>
                    2. Lasers: This technology harnesses the power of light to address various concerns. Laser hair removal uses targeted beams to damage hair follicles, leading to permanent hair reduction. Similarly, laser skin resurfacing treatments employ precise laser energy to remove damaged skin layers, promoting collagen production and revealing a smoother, younger-looking complexion.<br/><br/>
                    3. Microneedling: This minimally invasive technique involves creating controlled micro-injuries in the skin using fine needles. This triggers the body's natural healing response, stimulating collagen production and improving skin texture, tone, and elasticity.<br/><br/>
                    4. Energy Devices: Radiofrequency and ultrasound technologies are also making their mark in medical aesthetics. These devices deliver controlled energy waves to heat deeper skin layers, promoting collagen growth and tightening the skin. This can be used for facial rejuvenation, body contouring, and cellulite reduction.<br/><br/>
                    5. Chemical Peels: These treatments involve applying various solutions to the skin to remove its outer layers. Depending on the strength of the peel, this can address concerns like acne scars, sun damage, and uneven skin tone by promoting new cell growth and revealing a brighter, smoother complexion.<br/><br/>
                    It's important to remember that these are just a few examples, and the specific techniques used in each procedure can vary depending on the desired outcome and individual needs. Consulting with our qualified medical professional is crucial to understand the most suitable approach for your unique goals and ensure safe and effective treatment.</p>                    

                    <p className=" mt-6 text-base text-black font-semibold">How is Medical Aesthetics Done?</p>
                    <p className=" text-base text-[#676767] font-normal mt-3">The areas where the patient is not satisfied with the appearance are determined under expert control. The person who wants to have aesthetics is taken into the procedure if deemed appropriate by the specialist after some tests. Depending on the condition of the procedure, the patient can return to his daily life immediately. When it comes to medical aesthetics; procedures such as filling, botox, dermapen, PRP come to mind. All of these procedures are medical aesthetic methods that work for different jobs. Many medical procedures are used in medical procedures as well as aesthetics and provide great benefit. For example, botox treatment is frequently used for diseases such as tooth clenching or migraine and effective results are obtained. The risk and complication risk is low in procedures performed by specialists in a hospital environment. However, performing these procedures in places that are not competent in their work can cause serious and irreversible damage.</p>
                </div>
                <p className=" text-base text-[#676767] font-normal w-full py-8 border-b border-[#EAEBF0]">We offer you the best medical aesthetic service. For all your questions, you can contact us.</p>
            </div>
        </div>
        <Blog/>
        <Footer/>
        </>
     );
}
 
export default DetailedBlogFour;