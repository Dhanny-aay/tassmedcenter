import { Link } from "react-router-dom";
import Blog from "../components/blog";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import vector from './assets/Vector.svg';
import filler from './assets/filler.svg';

const DetailedBlogThree = () => {
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
                <p className=" font-medium text-3xl md:text-5xl text-center md:px-[10%]">Non-Surgical Aesthetics with Nose Filling</p>
                <p className=" font-normal text-lg md:text-xl text-center mt-3">22nd December 2023</p>
                <div style={{backgroundImage:`url(${filler})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div>
                <p className=" mt-8 font-normal text-[#676767] text-base">You are not satisfied with the appearance of your nose and you do not want to have surgery, or you do not have enough time or budget for this surgery… Then we would like to introduce you to ‘nose fillers’. The nose is one of the most important organs that affect facial beauty and therefore the self-confidence of the person. Aesthetic defects in the nose, either congenital or formed over time, can negatively affect the psychology of the person. Until recent years, nose aesthetics required surgery. In recent years, with the developing technology, non-surgical rhinoplasty has started. Less painful, painless, less costly and faster… Of course, the advantages of technology may differ according to the procedure. First of all, what is non-surgical aesthetics with nose fillers? Let’s explain in detail.
                <br/><br/>
                It is the process of injecting nasal filler into the nose without going under the knife, only with the application of anaesthetic cream. It is a much easier, faster, painless, painless and low-cost procedure compared to nose surgery. Moreover, it is a great advantage that it is an improvable procedure. After the procedure is completed, more fillers can be added or removed if needed. This shows that the procedure can be improved. If there is a problem such as asymmetry, volume or tissue loss in the nose; you can get information from your doctor about the nose fillers procedure. Well, can this procedure be applied for all nasal problems? Unfortunately, it cannot be applied.</p>
                <div className=" mt-8 w-full py-12 border-y border-[#EAEBF0]">
                    <p className=" text-lg text-black font-semibold">Who is Suitable for Non-Surgical Aesthetics with Nose Filler?</p>
                    <p className=" text-base text-[#676767] font-normal mt-6">Nose fillers are suitable for people who want a procedure without a knife, prefer a less risky method with its development, or want a less costly and faster rhinoplasty. However, it is not a suitable method for all nasal defects. It is not a suitable method for nose reduction, excessive curvature and a very prominent nasal arch. The filler to be injected into the nose can only give volume to the nose and correct aesthetic defects that are not very prominent, such as collapse or arch in the nose. Of course, for the most accurate information, we recommend that you consult your doctor.
                    <br/><br/>
                    The permanence of the nasal filler varies according to the quality of the filler used. The quality of the filler is not the only factor. Factors such as alcohol and cigarette consumption, sleep disturbance, stress, age also affect the melting time of the fillers. Keep in mind that your fillers can also dissolve in just a few months. We can say that the fillers of people who lead a healthy life have an average permanence of 1 to 1.5 years. Therefore, it is a procedure that will need to be repeated. It takes only minutes to inject the filler. In this way, the whole process is completed in half an hour.
                    </p>

                </div>
                <p className=" text-base text-[#676767] font-normal py-8 border-b border-[#EAEBF0]">If you want to have a Nose filler, our facility is fully accredited and has been designed for optimal patient comfort and care. Contact us through our website to schedule a consultation and start your journey.</p>
            </div>
        </div>
        <Blog/>
        <Footer/>
        </>
     );
}
 
export default DetailedBlogThree;