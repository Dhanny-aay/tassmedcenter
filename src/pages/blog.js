import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import arrLeft from './assets/arrleft.svg';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import blog4 from './assets/brachio.svg';

const Blog = () => {

    const blogData = [
        {date:'25 Apr. 2022', title:'When Should I Get A Hair Transplant & What Is The Best Age?', desc:'Hair loss can occur at a very young age, but it can also occur at older ages. In such cases, the first question that comes to mind is “at what age should I have hair transplantation?”.', img:blog1, link:'/blog/When Should_I_Get_A_Hair_Transplant_&_What_Is_The_Best_Age?'},

        {date:'25 Apr. 2022', title:'Non-Surgical Aesthetics with Nose Filling', desc:'You are not satisfied with the appearance of your nose and you do not want to have surgery, or you do not have enough time or budget for this surgery…', img:blog2, link:'/blog/Non-Surgical_Aesthetics_with_Nose_Filling'},

        {date:'25 Apr. 2022', title:'What is Medical Aesthetics?', desc:'Ever wished to enhance your appearance without surgery? Medical aesthetics offers non-invasive and minimally invasive solutions for various concerns, from wrinkles to unwanted fat......', img:blog3, link:'/blog/What_is_Medical_Aesthetics?'},

        {date:'25 Apr. 2022', title:'5 Things to know about Arm Lifts', desc:'A brachioplasty, commonly known as an arm lift, is an increasingly popular procedure for men and women are tired of seeing drooping skin, fat, and tissue on the upper arms. Excess skin can come about...', img:blog4, link:'/blog/5_Things_to_know_about_Arm_Lifts'},

    ]

    return ( 
        <>
        <Navbar/>
        <div className="mt-12 md:mt-16 px-4 md:px-20">
            <p className=" font-Jost font-normal text-lg md:text-xl text-center">Our Blog</p>
            <p className=" font-Jost font-medium text-2xl md:text-5xl mt-3 text-center">Resources and Insights</p>
            <p className=" text-center font-Jost font-normal text-lg md:text-xl mt-2">Keeping you informed with top medical news and innovations.</p>
            <div className=" flex justify-center items-center">
                <input type="text" className=" w-full md:w-[320px] placeholder:text-[#667085] placeholder:font-Jost placeholder:text-base p-2.5 border border-[#D0D5DD] rounded-[50px] mt-8" placeholder="Search" />
            </div>
            <div className=" py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
                {blogData.map((item, index) => (
                    <div key={index} className=" w-full border border-[#EAEBF0] rounded-[10px] flex flex-col relative">
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[180px] bg-[#242424] rounded-t-[10px]">
                        </div>
                        <div className=" px-6 py-4">
                            <p className=' font-Jost text-[#5F6D7E] text-xs font-medium'>{item.date}</p>
                            <p className=' mt-5 text-xl md:text-[18px] md:leading-[30px] font-Jost font-semibold'>{item.title}</p>
                            <p className=' mt-3 text-[#121212CC] text-sm font-normal font-Jost pb-8'>{item.desc}</p>
                            <Link to={item.link}><button className=' flex items-center space-x-2 absolute bottom-6'>
                                <p className=' gradient-text text-[15px] font-Jost font-semibold'>Learn more</p>
                                <img src={ arrLeft } className='' alt="" />
                            </button></Link> 
                        </div>
                    </div>
                ))}   
            </div>
            <div className=" flex justify-center items-center">
                <button className=' bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] px-7 md:px-[18px] py-2 md:py-3 rounded-[50px] mb-8 md:mb-16 text-white font-Jost font-semibold text-sm md:text-base'>Show more</button>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Blog;