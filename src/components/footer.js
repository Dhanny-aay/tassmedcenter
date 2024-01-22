import appoint from './assets/appoint.svg';
import kkk from './assets/kkk.svg';
import map from './assets/map.svg';
import mail from './assets/mail.svg';
import instagram from './assets/Instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className='bg-gradient-to-r from-[#9E8139] to-[#624004] via-[#845d19]'>
            <div className=" w-full pt-8 md:pt-16 px-4 md:px-20 ">
                <div className='  border-b border-[#D7C77B] w-full flex flex-col md:flex-row justify-center md:justify-between items-start pb-12'>
                    <div className=" w-full md:w-[30%] text-white">
                        <button className=" border-[3px] rounded-[10px] border-[#b798438e] w-full flex items-center justify-between px-6 py-4">
                            <span className=" flex items-center space-x-3">
                                <img src={ appoint } className='' alt="" />
                                <p className=' font-Jost text-white font-medium text-lg'>Book an appointment</p>
                            </span>
                            <img src={ kkk } className='' alt="" />
                        </button>

                        <div className=' mt-8 text-white'>
                            <p className=' font-Jost text-xl font-semibold'>Contact us</p>
                            <span className=' flex items-start mt-4 space-x-2'>
                                <img src={ map } alt="" />
                                <p className=' font-Jost font-normal text-base'>
                                Göktürk Merkez Mah. Belediye Cad. No: 24, 34077, Eyüp / İstanbul
                                </p>
                            </span>
                            <span className=' flex items-start mt-1 space-x-2'>
                                <img src={ mail } alt="" />
                                <p className=' font-Jost font-normal text-base'>
                                info@tassmedcenter.com
                                </p>
                            </span>
                        </div>

                        <div className=' text-base mt-8 font-Jost'>
                            <p className=' text-xl font-semibold mb-5 text-[#ffffff]'>About TASS medical center</p>
                            <span className='  mt-3 text-base font-normal'>
                                <p className=' mt-2'>About this Site</p>
                                <p className=' mt-2'>Health Information Policy</p>
                                <p className=' mt-2'>Price Transparency</p>
                            </span>
                        </div>
                    </div>

                    <div className=" mt-8 md:mt-0 w-full md:w-[30%] text-white">

                        <div className=' text-base font-Jost'>
                            <p className=' text-xl font-semibold mb-5 text-[#ffffff]'>Medical Professionals</p>
                            <span className='  mt-3 text-base font-normal'>
                                <p className=' mt-2'>Ask TASS Expert</p>
                                <p className=' mt-2'>Clinical Trials</p>
                                <p className=' mt-2'>Refer a Patient</p>
                            </span>
                        </div>

                        <div className=' text-base mt-8 font-Jost'>
                            <p className=' text-xl font-semibold mb-5 text-[#ffffff]'>Medical Units</p>
                            <span className='  mt-3 text-base font-normal'>
                                <p className=' mt-2'>Cosmetic Dental</p>
                                <p className=' mt-2'>Ear, Nose, Throat</p>
                                <p className=' mt-2'>Laboratory</p>
                                <p className=' mt-2'>Orthopaedics</p>
                                <p className=' mt-2'>Aesthetic Surgery</p>
                                <p className=' mt-2'>Radiology</p>
                                <p className=' mt-2'>Gynecology</p>
                                <p className=' mt-2'>Physical Therapy</p>
                                <p className=' mt-2'>Health Care Services</p>
                                <p className=' mt-2'>Dermatology</p>
                                <p className=' mt-2'>Internal Medicine</p>
                                <p className=' mt-2'>Check-Up</p>
                            </span>
                        </div>
                    </div>

                    <div className=" mt-8 md:mt-0 w-full md:w-[30%] text-white">

                        <div className=' text-base font-Jost'>
                            <p className=' text-xl font-semibold mb-5 text-[#ffffff]'>International Patients</p>
                            <span className='  mt-3 text-base font-normal'>
                                <p className=' mt-2'>Appointments</p>
                                <p className=' mt-2'>Financial Services</p>
                                <p className=' mt-2'>Refer a Patient</p>
                            </span>
                        </div>

                        <div className=' text-base mt-8 font-Jost'>
                            <p className=' text-xl font-semibold mb-5 text-[#ffffff]'>Our Services</p>
                            <span className='  mt-3 text-base font-normal'>
                                <Link to='/procedure/rhinoplasty'><p className=' mt-2'>Rhinoplasty</p></Link>
                                <Link to='/procedure/hair_transplant'><p className=' mt-2'>Hair Transplant</p></Link>
                                <Link to='/procedure/breast_augumentation'><p className=' mt-2'>Breast Augmentation</p></Link>
                                <Link to='/procedure/buttlift'><p className=' mt-2'>Brazilian Butt Lift</p></Link>
                                <Link to='/procedure/tummy_tuck'><p className=' mt-2'>Tummy Tuck</p></Link>
                                <Link to='/procedure/liposuction'><p className=' mt-2'>Liposuction</p></Link>
                                <Link to='/procedure/rhinoplasty'><p className=' mt-2'>Lip Filler</p></Link>
                                <Link to='/procedure/rhinoplasty'><p className=' mt-2'>Ozone Therapy</p></Link>
                                <Link to='/procedure/rhinoplasty'><p className=' mt-2'>Mesotherapy</p></Link>
                                <Link to='/procedure/rhinoplasty'><p className=' mt-2'>Youth Vaccine</p></Link>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className=' py-8 md:py-16 px-4 md:px-20 text-white'>
                <p className=' font-Jost font-semibold text-xl '>Follow TASS Medical Center</p>
                <div className=' mt-8 flex space-x-6'>
                    <button className=' w-[55px] h-[55px] rounded-[50%] border-[3px] border-[#B79843] flex items-center justify-center'>
                        <img src={ instagram } alt="" />
                    </button>
                    <button className=' w-[55px] h-[55px] rounded-[50%] border-[3px] border-[#B79843] flex items-center justify-center'>
                        <img src={ instagram } alt="" />
                    </button>
                    <button className=' w-[55px] h-[55px] rounded-[50%] border-[3px] border-[#B79843] flex items-center justify-center'>
                        <img src={ instagram } alt="" />
                    </button>
                </div>
            </div>

            <div className=' bg-[#FFFDDE] py-8 md:py-12 px-4 md:px-20 w-full'>
                <div className=' flex flex-col md:flex-row space-y-6 md:space-y-0 w-full justify-between text-[#121212] font-Jost font-normal text-lg pb-12 border-b border-[#D7C77B]'>
                    <p className=''>Terms & Conditions</p>
                    <p className=''>Privacy Policy</p>
                    <p className=''>Accessibility Statement</p>
                    <p className=''>Advertising & Sponsorship Policy</p>
                    <p className=''>Site Map</p>
                </div>
                <div className=' pt-8 md:pt-12 flex justify-center items-center'>
                    <p className=' text-[#595959] text-lg font-normal font-Jost'>© 2024 TASS Medical Center. All rights reserved.</p>
                </div>
            </div>

        </div>
        
     );
}
 
export default Footer;