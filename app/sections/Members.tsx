import { Section } from "../components/Section"
import { HomeIcon } from '@heroicons/react/20/solid'

const members = [
    {
        name: "Dasom Choi",
        affiliation: "KAIST",
        role: "PhD Candidate",
        thumb: require("../../public/images/thumb-dschoi.jpg"),
        web: "https://dasomchoi.com/",
        note: "*Research intern at NAVER AI Lab"
    },
    {
        name: "SoHyun Park",
        affiliation: "NAVER Cloud",
        role: "Researcher",
        thumb: require("../../public/images/thumb-shpark.jpg")
    },
    {
        name: "Kyungah Lee",
        affiliation: "Dodakim Child Development Center",
        role: "Licensed Counselor",
        thumb: require("../../public/images/thumb-kalee.jpg"),
    },
    {
        name: "Hwajung Hong",
        affiliation: "KAIST",
        role: "Associate Professor",
        thumb: require("../../public/images/thumb-hjhong.jpg"),
        web: "https://galaxytourist.notion.site/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
    },
    {
        name: "Young-Ho Kim",
        affiliation: "NAVER AI Lab",
        role: "Research Scientist",
        thumb: require("../../public/images/thumb-yhkim.jpg"),
        web: "http://younghokim.net"
    }
]

export const Members = () => {
    return <Section title="Contributors">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
            members.map(member => {
                return <div key={member.name} className="flex items-center">
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                        <img className="fill" alt={`Thumbnail of ${member.name}`} src={member.thumb}/>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="text-xl font-semibold flex items-center">
                            <span>{member.name}</span>
                            {
                                member.web != null ? <a href={member.web} target="_blank"><HomeIcon className="w-5 h-5 text-gray-500 mb-0.5 ml-1"/></a> : null
                            }
                        </div>
                        
                        <div className="font-light">{member.role}</div>
                        <div className="font-light">{member.affiliation}</div>
                        {member.note != null ? <div className="font-light italic text-sm text-purple-500">{member.note}</div> : null }
                    </div>
                </div>
            })
        }
        </div>
        <div className="mt-8 flex items-center gap-6 gap-y-8 flex-wrap">
            <a href="https://clova.ai/en/ai-research" target="_black"><img className="w-[200px]" alt="NAVER logo" src={require("../../public/images/logos/ai_lab_logo_vertical.png")} width={1728} height={552}/></a>
            <a href="https://www.kaist.ac.kr/en/" target="_blank"><img className="w-[200px]" alt="KAIST logo" src={require("../../public/images/logos/kaist_logo_trans.png")}/></a>
            <a href="https://www.navercloudcorp.com/" target="_blank"><img className="w-[135px]" alt="NAVER Cloud logo" src={require("../../public/images/logos/naver-cloud-logo-vertical.png")}/></a>
            
        </div>
    </Section>
}