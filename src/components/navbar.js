import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import logoMob from './assets/logomob.svg';
import menu from './assets/menu.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" px-4 md:px-20 py-6 flex justify-between items-center">
            <img src={ logo } className=' hidden md:block' alt="" />
            <img src={ logoMob } className=' md:hidden block' alt="" />

            <span className='hidden lg:flex flex-row items-center text-[#121212] space-x-11'>
                <Link to='/'><p className=' font-Jost font-normal text-base'>Home</p></Link>
                <Link to='/about'><p className=' font-Jost font-normal text-base'>About Us</p></Link>
                <Link to='/gallery'><p className=' font-Jost font-normal text-base'>Our Gallery</p></Link>
                <Link to='/blog'><p className=' font-Jost font-normal text-base'>Our Blog</p></Link>
                <Link to='/contact'><p className=' font-Jost font-normal text-base'>Contact Us</p></Link>
            </span>
            
            <Link to='/contact'><button className=' hidden lg:block bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] px-6 py-3 rounded-[30px] font-Jost font-medium text-white text-base'>Book an appointment</button></Link>

            <img src={ menu } className=' block lg:hidden' alt="" />
        </div>
        </>
     );
}
 
export default Navbar;