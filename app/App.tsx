import { Members } from "./sections/Members";
import { Acknowledgments } from "./sections/Acknowledgments";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Architecture } from "./sections/Architecture";
import { Mockup } from "./sections/Mockup";
import { Demo } from "./sections/Demo";

export function App() {
  return (<>
    <main className="container mx-auto px-4 sm:px-12 pt-6">
      <div>
        <div className="font-bold text-lg text-[#4592ec] mb-3">Research Work</div>
        <img className="mb-2 h-[110px] ml-[-37px]" src={require("../public/images/logos/aacesstalk-logo.svg")}/> 
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl">Fostering Communication between <strong>Minimally Verbal Autistic Children</strong> and <strong>Parents</strong> with Contextual Guidance and Card Recommendation</div>
      </div>
      
      <Demo/>
      <Abstract/>
      <Members/>
      <Cite/>
      <Acknowledgments/>
    </main><Footer/></>
  );
}
