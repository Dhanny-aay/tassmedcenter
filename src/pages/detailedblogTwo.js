import { Link } from "react-router-dom";
import Blog from "../components/blog";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import vector from './assets/Vector.svg';
import brachio from './assets/brachio.svg';

const DetailedBlogTwo = () => {
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
                <p className=" font-medium text-3xl md:text-5xl text-center md:px-[10%]">5 Things to know about Arm Lifts</p>
                <p className=" font-normal text-lg md:text-xl text-center mt-3">22nd December 2023</p>
                <div style={{backgroundImage:`url(${brachio})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div>
                <p className=" mt-8 font-normal text-[#676767] text-base">A brachioplasty, commonly known as an arm lift, is an increasingly popular procedure for men and women are tired of seeing drooping skin, fat, and tissue on the upper arms. Excess skin can come about as a result of significant weight loss or as a natural consequence of age but can be repaired with this custom surgical procedure.
                <br/><br/>
                Because arm lifts aren’t as commonly understood as some other procedures, many people have questions – so, here are the answers to five frequently asked questions about brachioplasty!</p>
                <div className=" mt-8 w-full py-12 border-y border-[#EAEBF0]">
                    <p className=" text-lg text-black font-semibold">How do I prepare for arm lift surgery?</p>
                    <p className=" text-base text-[#676767] font-normal mt-6">While everyone has different circumstances and conditions, some critical steps to take in the weeks before a brachioplasty are:
                    <ul>
                        <li>Get a medical evaluation to ensure the procedure is right for you</li><br/>
                        <li>Ensure that your weight is stable, and you aren’t continuing to lose weight that could result in further drooping skin</li><br/>
                        <li>Discuss any medications you may be taking with your surgeon to ensure your safety during surgery
                        Stop smoking</li><br/>
                        <li>Avoid any drugs and supplements that can increase bleeding, such as ibuprofen, aspirin, and various herbal supplements. Discuss all medications, supplements, and herbs you take with our surgeon ahead of time to make sure nothing gets missed.</li><br/>
                    </ul>
                    </p>

                    <p className=" mt-12 text-lg text-black font-semibold">Are there any risks?</p>
                    <p className=" text-base text-[#676767] font-normal mt-6">Like any surgical procedure, a brachioplasty does have a slight degree of risk. Some complications that have arisen from brachioplasties in the past include anesthesia risks, infections, excessive bleeding, and some others. You will be informed of all risks before your surgery. According to studies done on patients who underwent brachioplasty, complications were rare, and the procedure is very safe when performed correctly.</p>

                    <p className=" mt-6 text-base text-black font-semibold">What are some tips for a smooth recovery?</p>
                    <span className=" text-base text-[#676767] font-normal mt-3">When you arrive for brachioplasty at Stephens Plastic Surgery, you will be given detailed instructions for the aftercare and limitations of movement needed to ensure a proper recovery. There are, however, some key points to keep in mind:
                    <br/><br/>
                    <ul>
                    <li>Rest: Your body will heal naturally after the procedure, and your main activity should be rest. You should prepare for at least a week after your procedure to be filled with a lot of resting and relaxation to let your body get “over the hump” on the healing process before doing anything that might tax it.</li>
                    <li>Follow your surgeon’s instructions: There are exact steps you need to take as far as cleaning, dressing, and otherwise caring for your arm after surgery. Following these exactly will greatly help your recovery and avoid complications.</li>
                    <li>Avoid strenuous motion and exercise: Your surgeon will provide you with a timeline regarding when you should start to use your arm again for anything strenuous – follow that and don’t start anything too soon.</li>
                    <li>Wear your compression garment: After the surgery, you will be provided with a compression garment for your arm to help with the healing process. Wear it as much as you can and follow your surgeon’s instructions.</li>
                    <li>Report anything unusual to your surgeon: If you notice any excessive bleeding, unusual pain, sensation, or anything that concerns you, alert your surgeon right away. Any complications that arise can be resolved easily if caught early enough, so don’t be shy!</li>
                    </ul>
                    </span>
                    

                    <p className=" mt-6 text-base text-black font-semibold">Can I build muscle following my Brachioplasty?</p>
                    <p className=" text-base text-[#676767] font-normal mt-3">Yes! In fact, we recommend our brachioplasty patients to engage in light arm exercises and gradually build up muscle in the arm once it is fully healed. There is no limit to how fit and toned you can get your arms after an arm lift.</p>

                    <p className=" mt-6 text-base text-black font-semibold">How much do Arm Lifts usually cost?</p>
                    <p className=" text-base text-[#676767] font-normal mt-3">While each patient has different needs, and the procedure is always quoted individually, you can expect an arm list to cost in the range of $5,000.</p>
                </div>
                <p className=" text-base text-[#676767] font-normal py-8 border-b border-[#EAEBF0]">If you want to have a brachioplasty, our facility is fully accredited and has been designed for optimal patient comfort and care. Contact us through our website to schedule a consultation and start your journey.</p>
            </div>
        </div>
        <Blog/>
        <Footer/>
        </>
     );
}
 
export default DetailedBlogTwo;