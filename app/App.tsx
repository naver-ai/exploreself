import { Members } from "./sections/Members";
import { Acknowledgments } from "./sections/Acknowledgments";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Demo } from "./sections/Demo";
import { Video } from "./sections/Video";

export function App() {
  return (<>
    <main className="container mx-auto px-4 sm:px-12 pt-6">
      <div>
        <div className="font-bold text-lg text-[#4592ec] mb-3">CHI 2025 Paper</div>
        <div className="font-bold text-5xl ml-[-3px] mb-3 text-slate-700">ExploreSelf</div>
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl text-slate-600">Fostering <strong>User-driven Exploration</strong> and Reflection on <strong>Personal Challenges</strong> with <strong>Adaptive Guidance</strong> by Large Language Models</div>
      </div>
      
      <Demo/>
      <Abstract/>
      <Video/>
      <Members/>
      <Cite/>
      <Acknowledgments/>
    </main><Footer/></>
  );
}
