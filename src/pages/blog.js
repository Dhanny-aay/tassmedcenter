import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import arrLeft from './assets/arrleft.svg';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';

const Blog = () => {

    const blogData = [
        {date:'25 Apr. 2022', title:'When Should I Get A Hair Transplant & What Is The Best Age?', desc:'Hair loss can occur at a very young age, but it can also occur at older ages. In such cases, the first question that comes to mind is “at what age should I have hair transplantation?”.', img:blog1, link:'/blog/When Should_I_Get_A_Hair_Transplant_&_What_Is_The_Best_Age?'},

        {date:'25 Apr. 2022', title:'Non-Surgical Aesthetics with Nose Filling', desc:'You are not satisfied with the appearance of your nose and you do not want to have surgery, or you do not have enough time or budget for this surgery…', img:blog2, link:''},

        {date:'25 Apr. 2022', title:'Breast Aesthetics', desc:'Breast aesthetics appears as a procedure that has many types and can be performed for many reasons. Whether it is performed for psychological or medical reasons, the effect of breast aesthetics is great.', img:blog3, link:''},

        {date:'25 Apr. 2022', title:'When Should I Get A Hair Transplant & What Is The Best Age?', desc:'Hair loss can occur at a very young age, but it can also occur at older ages. In such cases, the first question that comes to mind is “at what age should I have hair transplantation?”.', img:blog1, link:'/blog/When Should_I_Get_A_Hair_Transplant_&_What_Is_The_Best_Age?'},

        {date:'25 Apr. 2022', title:'Non-Surgical Aesthetics with Nose Filling', desc:'You are not satisfied with the appearance of your nose and you do not want to have surgery, or you do not have enough time or budget for this surgery…', img:blog2 ,link:""},

        {date:'25 Apr. 2022', title:'Breast Aesthetics', desc:'Breast aesthetics appears as a procedure that has many types and can be performed for many reasons. Whether it is performed for psychological or medical reasons, the effect of breast aesthetics is great.', img:blog3, link:''},
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
            <div className=" py-8 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
                {blogData.map((item, index) => (
                    <div key={index} className=" w-full border border-[#EAEBF0] rounded-[10px] flex flex-col relative">
                        <div style={{backgroundImage:`url(${item.img})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[220px] bg-[#242424] rounded-t-[10px]">
                        </div>
                        <div className=" px-8 py-6">
                            <p className=' font-Jost text-[#5F6D7E] text-sm font-medium'>{item.date}</p>
                            <p className=' mt-5 text-xl md:text-[22px] md:leading-[30px] font-Jost font-semibold'>{item.title}</p>
                            <p className=' mt-4 text-[#121212CC] text-base font-normal font-Jost pb-8'>{item.desc}</p>
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