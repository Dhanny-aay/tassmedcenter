import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Soon = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-12 w-full md:mt-16 px-4 md:px-20 font-Jost text-[#121212] flex flex-col justify-center items-center">
            <p className=" font-Jost font-semibold text-4xl mb-16 md:px-[15%] text-center">Please Contact Us for More Information</p>
        </div>
        <Footer/>
        </>
     );
}
 
export default Soon;