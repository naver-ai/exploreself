import { Section } from "../components/Section"

const bibTex = "@inproceedings{song2025exploreself,<br/>\n\
&emsp;&emsp;author = {Inhwa Song and SoHyun Park and Sachin R. Pendse and Jessica Lee Schleider and Munmun De Choudhury and Young-Ho Kim},<br/>\n\
&emsp;&emsp;title = {ExploreSelf: Fostering User-driven Exploration and Reflection on Personal Challenges with Adaptive Guidance by Large Language Models},<br/>\n\
&emsp;&emsp;year = {2025},<br/>\n\
&emsp;&emsp;publisher = {Association for Computing Machinery},<br/>\n\
&emsp;&emsp;address = {New York, NY, USA},<br/>\n\
&emsp;&emsp;url = {https://doi.org/10.1145/3706598.3713883},<br/>\n\
&emsp;&emsp;doi = {10.1145/3706598.3713883},<br/>\n\
&emsp;&emsp;booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},<br/>\n\
&emsp;&emsp;location = {Yokohama, Japan},<br/>\n\
&emsp;&emsp;series = {CHI '25}<br/>\n\
}"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-2 border-gray-300 py-3">
        <div>Inhwa Song, SoHyun Park, Sachin R. Pendse, Jessica Lee Schleider, Munmun De Choudhury, and Young-Ho Kim. 2025.</div>
        <div className="font-bold">ExploreSelf: Fostering User-driven Exploration and Reflection on Personal Challenges with Adaptive Guidance by Large Language Models.</div>
        <div>In CHI Conference on Human Factors in Computing Systems (CHI ’25)</div>
        <div>https://doi.org/10.1145/3706598.3713883</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-2 rounded-lg border-gray-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}