import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-12 md:mt-20 px-4 md:px-20">
            <p className=" font-Jost font-normal text-lg md:text-xl text-center">Contact Us</p>
            <p className=" font-Jost font-medium text-2xl md:text-5xl mt-3 text-center tracking-tight">Have a question, or want to chat?</p>
            <p className=" text-center font-Jost font-normal text-lg md:text-xl mt-2">Your transformation starts with a conversation.</p>


            <div className=" my-8 w-full text-[#1E1E1EB2]">
                <div className=" w-full">
                    <div className=" w-full flex flex-col md:flex-row justify-between mb-6">
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">First name</label>
                            <input type="text" id="first-name" placeholder="John" class=" h-[45px] mt-2 bg-[#F5F5F4] text-black font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Last name</label>
                            <input type="text" id="mail" placeholder="Doe" class=" h-[45px] mt-2 bg-[#F5F5F4] text-black font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                    </div>
                    <div className=" w-full flex flex-col md:flex-row justify-between mb-6">
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Phone Number</label>
                            <input type="text" id="first-name" placeholder="+1" class=" h-[45px] mt-2 bg-[#F5F5F4] text-black font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Email Address</label>
                            <input type="text" id="mail" placeholder="Johndoe@mail.com" class=" h-[45px] mt-2 bg-[#F5F5F4] text-black font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                    </div>

                    <div className="flex flex-col items-start">
                        <label className=" text-base font-medium" for="first-name">Message</label>
                        <textarea name="" id="" cols="8" className="mt-2 bg-[#F5F5F4] text-black font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" rows="10"></textarea>
                    </div>
                    

                    <label className="flex items-center mt-3">
                        <input
                        type="checkbox"
                        className="form-checkbox bg-[#f5f5f4] h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-base text-[#1E1E1E99] font-medium">
                        You agree with our friendly Privacy Policy
                        </span>
                    </label>

                    <button className=" w-full flex h-[45px] mt-6 rounded-[30px] bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] hover:bg-opacity-75 transition-all justify-center items-center">
                        <p className=" text-base text-white font-semibold">Send Message</p>
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Contact;