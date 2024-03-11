import Footer from "../components/footer";
import Navbar from "../components/navbar";
import vector from './assets/Vector.svg';
import { Link } from "react-router-dom";

const Policy = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-12 w-full md:mt-16 px-4 md:px-20 font-Jost text-[#121212]">
            <span className=" flex flex-row items- space-x-3">
                <Link to='/'><p className=" text-[#B79843] font-normal text-base">Home</p></Link>
                <img src={ vector } alt="" />
                <Link to='/health-information-policy'><p className=" text-[#121212] font-Jost font-normal text-base">Health Information Policy</p></Link>
            </span>
            <div className=" mt-16 text-justify">
                <p className=" font-Jost text-5xl font-semibold text-center">Health Information Policy</p>

                <div className=" mt-6">
                Mayo Clinic's mission is to inspire hope and promote health. We provide health information to help you make informed decisions about your health.
                <br/>
                Health information includes:<br/>
                Diseases and conditions<br/>
                Symptoms<br/>
                Tests and procedures<br/>
                Drugs and supplements<br/>
                Healthy lifestyle<br/><br/>
                Mayo Clinic is committed to providing health information that is:<br/>

                Accurate and actionable. We write to inform, educate and empower you to make informed decisions about your health.
                Easily understood. We write in plain language that is quickly and easily understood by those of all literacy levels.
                Inclusive and diverse. We use words and images that reflect a global community, inclusive of all ages, races, genders and ability levels.
                Evidence based. Our content is based on the medical literature and Mayo Clinic expert opinion. We list our sources at the end of articles.
                <br/>
                <p className=" font-Jost text-3xl font-semibold text-center mt-6">Our team</p>
                <br/>
                Mayo Clinic is an academic medical center with more than 5,000 physicians and scientists. Nearly 100 serve as medical editors. Medical editors work closely with Mayo editorial staff. They review health information in their area of specialty. Medical editors review materials written by editorial staff to ensure that it's accurate and reflects Mayo's perspective.
                <br/><br/>
                It's a Mayo policy that medical editors disclose financial interests related to an invention, technology, company or product referenced in a piece of content. Disclosure statements appear with the content.
                <p className=" font-Jost text-3xl font-semibold text-center mt-6">Editorial and operations staff</p>

                <br/>Editorial staff have bachelor's and advanced degrees in communications, journalism, English and related areas of study. Senior editorial staff have a minimum of seven years of relevant experience. The content development process includes contributions from multiple disciplines: For this reason, editorial staff members do not receive bylines.<br/>

                Health information process<br/>
Health information on this website is created using a standard process. The process includes editorial research, writing and editing, medical review, copy editing, annotation, visual content creation, and publishing.<br/><br/>

New topics<br/>
Editorial staff determine new health information topics using a variety of inputs. This includes medical editors and other Mayo colleagues. Editorial staff and medical editors make final decisions on new topics. Priority is given to topics of interest to the general public and Mayo Clinic patients.
<br/>
Updates<br/>
Just as medicine evolves, so does health information. For this reason, all published health information is on a review schedule. Faster-evolving topics — diseases, conditions, diagnostic tests and medical procedures — are reviewed at least every two years. Reviews focus on medical accuracy, relevance and supporting evidence. Editorial staff and medical editors closely check evidence-based guidelines in their assigned topic areas. This and other new information that may require revisions before the next scheduled review. When criteria are met, some revisions are processed as a critical update and republished as quickly as possible. Health information review and publishing dates are posted for transparency. Health information is annually checked for accuracy, redundancy and reader engagement. Content may be archived if it is considered out of date, redundant or has low engagement.<br/>

Editorial research<br/>
To ensure accuracy and reliability, editorial staff follow a standardized procedure for selecting, documenting and verifying best-available medical evidence to support original content. Not all scientific evidence is of equal value or strength, so sources are defined and categorized. Health information writers use the strongest sources. These include national and international guidelines, consensus statements, evidence-based databases and peer-reviewed journals. Editorial staff consult with Mayo Clinic experts to help interpret and apply that evidence. Mayo medical specialists also are cited as expert sources. A team of editorial research librarians helps with these activities. Librarians have advanced degrees in the library sciences and a minimum of two years of relevant experience.<br/>

Writing and editing<br/>
Editorial staff write and edit content to adhere to these and other best practices:<br/>

Plain language. Text is written to be understood the first time it's read. We aim for a reading level between 6th and 8th grade.
Editorial style. Content is reviewed for grammar, spelling, punctuation, style, format, term use, clarity and consistency. We generally follow Associated Press style.<br/>
Tone and voice. We use a conversational writing style that is both authorative and compassionate.
Medical review<br/>
Medical editors review health information for accuracy, timeliness and relevance and sources consulted. Medical editors may consult with other experts to ensure that statements are based on the best-available evidence and expert consensus.<br/>

Annotation<br/>
Health information is reviewed by an ontology specialist. Descriptive metadata, such as subject and audience, is added to the content. Descriptive metadata supports the management, organization, delivery and findability of health information.
<br/>
Visual content creation<br/>
A team of specialized staff members creates visual health information, including:<br/>

Editorial or instructional illustrations. Illustrations and images teach or support content concepts. They do not require specialized training in medicine and anatomy.<br/>
Medical illustrations and animations. Custom visuals communicate complex medical or anatomical information. They are created by certified professional medical illustrators or animators.<br/>
Video and animations. Multimedia assets combine live action, text or image animation, and sound to educate and inform.
Content translations<br/>
A team of content linguists translates English language health information created by editorial staff to three target languages: Arabic, Simplified Chinese and Spanish. Content linguists also review the translations of external language service providers to ensure that they meet Mayo's high standards. Standards include glossaries and quality-assurance processes to ensure that translations are correct, readable, clear and consistent. Linguists have advanced degrees in foreign languages, journalism and communications fields, and at least five years of relevant experience.
<br/>
External links and social media<br/>
As a service to readers, we include some links to external websites and social media outlets. External links are identified and evaluated as part of the content development process.<br/>

Editorial staff may choose to link to an external website if it meets these criteria:<br/>

The site provides unbiased, high-quality information that expands on the topic and isn't provided by another Mayo Clinic channel.<br/>
The site is determined to be credible and authoritative by our research librarians. These are typically government sites and sites of medical associations and other nonprofit medical groups.<br/>
Artificial intelligence<br/>
We may use artificial intelligence (AI) tools in the development and translation of health information. For example, AI technology may help authors consistently write in plain language and choose words and images that are inclusive. AI tools also are used to optimize content for search applications and align with Mayo's preferred terminology, editorial style and target reading levels. Content linguists use context-intelligent software that automates storage and reuse of human-translated sentences and confirm quality. AI tools do not replace editorial judgment or oversight.<br/>

Corrections<br/>
Editorial staff are committed to correcting or clarifying published health information that is confusing, misleading or inaccurate. This determination is made by editorial staff in close consultation with medical editors. For transparency, corrections that involve misstatements of fact in health information are listed here for 30 days.<br/>

Accreditations and awards<br/>
Health information on this website has been reviewed by independent evaluators for more than two decades. This has included Consumer Reports Web Watch guidelines, NewsGuard and the HONcode standard for trustworthy information, which ended its services in 2022. View a list of accreditations and awards.<br/>

                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Policy;