import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Lipo = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-12 md:mt-16 px-4 md:px-20 font-Jost">
            <p className=" gradient-text font-medium text-base text-center">Updated December 21, 2023</p>
            <p className=" text-[#121212] text-2xl md:text-4xl md:px-[12%] font-medium text-center mt-5">The Power of Precision: Liposuction - Targeted Fat Removal for Lasting Results</p>
            <p className=" text-center md:px-[8%] mt-3 text-base md:text-lg text-[#121212CC]">A balanced fat distribution and proportional contour are among the fundamental aspects of an attractive human body.</p>
            <div className=" w-full flex items-center justify-center">
                <button className=" py-2 px-4 rounded-[50px] text-center mt-3 bg-[#a183305b]">
                    <p className=" gradient-text">Body Surgery</p>
                </button>
            </div>
            <div className=" w-full h-[290px] mt-6 rounded-[30px] bg-[#b79843af]"></div>
            <div className=" md:px-[15%] mt-8 mb-[64px] ">
                <div className="  text-justify border-y py-6">
                    <p className=" text-base font-semibold text-[#121212]">What is liposuction?</p>
                    <div className=" mt-3 text-[#676767] text-sm">
                        Liposuction is a surgical intervention applied to reshape and regulate the unbalanced fat deposition in your body. Liposuction, which is especially an effective solution for regional fat deposition, is also utilized as an auxiliary element in many aesthetic surgery procedures. For example, liposuction is used in gynecomasty operations applied for augmented breast problem in men. In knock-knee correction operations, fatty tissue can be collected from another part of the patient and added to the problematic area in order to disguise the knock-knee. In short, liposuction is a very common procedure used to improve and render more effective the results of an aesthetic surgical procedure.<br/><br/>


                        And if liposuction surgeries are used without any other procedure, they are performed mainly for persistent regional fat depositions that are resistant against diet and exercise. This region that causes fatty and bulging area can be removed by liposuction application and reshaped like a sculpture in order to restore a natural contour.
                        Today, there are many different types of liposuction used in aesthetic surgery. The purpose of all liposuction types is to dispose of the fat and provide contour correction for the patient or to support another aesthetic surgical intervention. They vary in terms of benefits and effectiveness.<br/><br/>


                        In Turmescent Liposuction, an anesthetic solution is injected to the problematic area to dilate the region in order to minimize bleeding and post-operative discomfort.<br/><br/>
                        In Ultrasound Liposuction, ultrasound energy is utilized to remove larger amounts of fat in an easier and faster way by loosening the fatty tissue.<br/><br/>


                        And Laser Liposuction is performed by using laser technologies known by the brand names of Smartlipo or Slimlipo. In addition, there are liposculpture methods.
                    </div>

                    <p className=" text-base font-semibold text-[#121212] mt-6">How liposuction is performed?</p>
                    <div className=" mt-3 text-[#676767] text-sm">
                        Liposuction can be performed under local anesthesia when it is used solely and not as an auxiliary technique for another aesthetic surgery. General anesthesia may also be preferred. Your aesthetic surgeon will decide the mode of anesthesia and procedure areas are restricted by drawings with pen. One or more incisions are performed close to the treatment area. Thin canulas or very thin tubes are inserted through these incisions depending on the technique to be used. With the guidance of the surgeon, vibration of the device melts the subcutaneous fat tissues and enables them to be removed from the body. Duration of the procedure depends on the size of the area and the amount of fat subject to suction.
                    </div>

                    <p className=" text-base font-semibold text-[#121212] mt-6">Post-liposuction</p>
                    <div className=" mt-3 text-[#676767] text-sm">
                    With today’s liposuction techniques, swelling, bruise and ripples on the skin are minimized. Most of the patients can continue their daily lives from where they left off a few days after the procedure depending on the extent of the procedure and physical intensity of their daily lives. Although pain depends on your pain threshold, many patients can get through their recovery periods without any pain medication.<br/>
                    If needed, your surgeon may recommend you to wear a corset after liposuction. This is a precautionary application aimed to prevent skin contraction and swelling. The scars of small incisions recover within a few weeks and they completely disappear after one year.
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Lipo;