import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>Expressing stressful experiences in words is proven to improve mental and physical health, but individuals often disengage with writing interventions as they struggle to organize their thoughts and emotions. Reflective prompts have been used to provide direction, and large language models (LLMs) have demonstrated the potential to provide tailored guidance. However, current systems often limit users' flexibility to direct their reflections. We thus present <b>ExploreSelf</b>, an LLM-driven application designed to empower users to control their reflective journey, providing adaptive support through dynamically generated questions. Through an exploratory study with 19 participants, we examine how participants explore and reflect on personal challenges using ExploreSelf. Our findings demonstrate that participants valued the flexible navigation of adaptive guidance to control their reflective journey, leading to deeper engagement and insight. Building on our findings, we discuss the implications of designing LLM-driven tools that facilitate user-driven and effective reflection of personal challenges.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true}  href={"./public/exploreself-chi25.pdf"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2409.09662" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button" href="https://github.com/naver-ai/exploreself-monorepo" target="_blank">
                <GithubIcon size={28}/>
                <span>Source code</span>
            </a>
        </div>
    </Section>
}