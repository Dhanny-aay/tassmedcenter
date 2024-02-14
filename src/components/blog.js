import { Link } from 'react-router-dom';
import arrLeft from './assets/arrleft.svg';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';

const Blog = () => {

    const blogData = [
        {date:'25 Apr. 2022', title:'When Should I Get A Hair Transplant & What Is The Best Age?', desc:'Hair loss can occur at a very young age, but it can also occur at older ages. In such cases, the first question that comes to mind is “at what age should I have hair transplantation?”.', img:blog1, link:'/blog/When Should_I_Get_A_Hair_Transplant_&_What_Is_The_Best_Age?'},
        
        {date:'25 Apr. 2022', title:'Non-Surgical Aesthetics with Nose Filling', desc:'You are not satisfied with the appearance of your nose and you do not want to have surgery, or you do not have enough time or budget for this surgery…', img:blog2, link:''},

        {date:'25 Apr. 2022', title:'Breast Aesthetics', desc:'Breast aesthetics appears as a procedure that has many types and can be performed for many reasons. Whether it is performed for psychological or medical reasons, the effect of breast aesthetics is great.', img:blog3, link:''},
    ]
    return ( 
        <>
        <div className=" px-4 md:px-20 py-8 md:py-16 flex justify-center  items-center text-[#121212] flex-col">
            <p className=" text-center  font-Jost text-2xl md:text-5xl font-medium">Our Blog</p>
            <p className=" text-center text-[#121212CC] font-Jost text-base md:text-xl mt-2">We solve the world's most serious and complex medical challenges.</p>

            <div className=" w-full flex flex-col md:flex-row justify-between">
                {blogData.map((item, index) => (
                    <div key={index} className=" w-full md:w-[32%] border border-[#EAEBF0] rounded-[10px] mt-6 md:mt-11 flex flex-col relative">
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

            <Link to='/blog'>
            <button className=' bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] px-7 md:px-[18px] py-2 md:py-3 rounded-[50px] mt-8 md:mt-16 text-white font-Jost font-semibold text-sm md:text-base'>Show more</button>
            </Link>
        </div>
        </>
     );
}
 
export default Blog;