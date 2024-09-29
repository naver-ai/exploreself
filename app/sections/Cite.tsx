import { Section } from "../components/Section"

const bibTex = "@misc{choi2024aacesstalk,<br/>\n\
&emsp;&emsp;title={AACessTalk: Fostering Communication between Minimally Verbal Autistic Children and Parents with Contextual Guidance and Card Recommendation},<br/>\n\
&emsp;&emsp;author={Dasom Choi and SoHyun Park and Kyungah Lee and Hwajung Hong and Young-Ho Kim},<br/>\n\
&emsp;&emsp;year={2024},<br/>\n\
&emsp;&emsp;eprint={2409.09641},<br/>\n\
&emsp;&emsp;archivePrefix={arXiv},<br/>\n\
&emsp;&emsp;primaryClass={cs.HC},<br/>\n\
&emsp;&emsp;url={https://arxiv.org/abs/2409.09641},<br/>\n\
}"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>Dasom Choi, SoHyun Park, Kyungah Lee, Hwajung Hong, and Young-Ho Kim. 2024.</div>
            <div className="font-bold">AACessTalk: Fostering Communication between Minimally Verbal Autistic Children and Parents with Contextual Guidance and Card Recommendation.</div>
            <div>https://doi.org/10.48550/arXiv.2409.09641</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}