import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        As minimally verbal autistic (MVA) children communicate with parents through few words and nonverbal cues, parents often struggle to encourage their children to express subtle emotions and needs and to grasp their nuanced signals. We present AACessTalk, a tablet-based, AI-mediated communication system that facilitates meaningful exchanges between an MVA child and a parent. AACessTalk provides real-time guides to the parent to engage the child in conversation and, in turn, recommends contextual vocabulary cards to the child. Through a two-week deployment study with 11 MVA child-parent dyads, we examine how AACessTalk fosters everyday conversation practice and mutual engagement. Our findings show high engagement from all dyads, leading to increased frequency of conversation and turn-taking. AACessTalk also encouraged parents to explore their own interaction strategies and empowered the children to have more agency in communication. We discuss the implications of designing technologies for balanced communication dynamics in parent-MVA child interaction.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true} href={"./public/aacesstalk-arxiv24.pdf"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2409.09641" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button" href="#">
                <GithubIcon size={28}/>
                <span>Source code (Coming Soon)</span>
            </a>
        </div>
    </Section>
}