import { Section } from "../components/Section"

const bibTex = "@inproceedings{yoo2025elmi,<br/>\n\
&emsp;&emsp;author = {Yoo, Suhyeon and Truong, Khai N and Kim, Young-Ho},<br/>\n\
&emsp;&emsp;title = {ELMI: Interactive and Intelligent Sign Language Translation of Lyrics for Song Signing},<br/>\n\
&emsp;&emsp;year = {2025},<br/>\n\
&emsp;&emsp;publisher = {Association for Computing Machinery},<br/>\n\
&emsp;&emsp;address = {New York, NY, USA},<br/>\n\
&emsp;&emsp;url = {https://doi.org/10.1145/3706598.3713973},<br/>\n\
&emsp;&emsp;doi = {10.1145/3706598.3713973},<br/>\n\
&emsp;&emsp;booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},<br/>\n\
&emsp;&emsp;location = {Yokohama, Japan},<br/>\n\
&emsp;&emsp;series = {CHI '25}<br/>\n\
}"

export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-2 border-gray-300 py-3">
        <div>Suhyeon Yoo, Khai N. Truong, and Young-Ho Kim. 2025.</div>
        <div className="font-bold">ELMI: Interactive and Intelligent Sign Language Translation of Lyrics for Song Signing.</div>
        <div>In CHI Conference on Human Factors in Computing Systems (CHI ’25)</div>
        <div>https://doi.org/10.1145/3706598.3713973</div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-2 rounded-lg border-gray-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}