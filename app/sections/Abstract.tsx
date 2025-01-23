import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        d/Deaf and hearing song-signers have become prevalent across video-sharing platforms, but translating songs into sign language remains cumbersome and inaccessible.
Our formative study revealed the challenges song-signers face, including semantic, syntactic, expressive, and rhythmic considerations in translations.
We present ELMI, an accessible song-signing tool that assists in translating lyrics into sign language. ELMI enables users to edit glosses line-by-line, with real-time synced lyric and music video snippets. Users can also chat with a large language model-driven AI to discuss meaning, glossing, emoting, and timing.
Through an exploratory study with 13 song-signers, we examined how ELMI facilitates their workflows and how song-signers leverage and receive an LLM-driven chat for translation.
Participants successfully adopted ELMI to song-signing, with active discussions throughout. They also reported improved confidence and independence in their translations, finding ELMI  encouraging, constructive, and informative.
We discuss research and design implications for accessible and culturally sensitive song-signing translation tools.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4" aria-disabled={true} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper (Coming Soon)</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4" href="https://arxiv.org/abs/2409.09760" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button" href="https://github.com/naver-ai/elmi-monorepo" target="_blank">
                <GithubIcon size={28}/>
                <span>Source code</span>
            </a>
        </div>
    </Section>
}