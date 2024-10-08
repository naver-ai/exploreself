import { Section } from "../components/Section"

export const Video = () => {
    return <Section title="Demonstration Video">
        <div className="overflow-hidden rounded-xl border-4 border-slate-500/20">
            <iframe src="https://www.youtube-nocookie.com/embed/5V_Z2lmj_XU?si=DfeClVWjJfVAHMKy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="aspect-video w-full"/>
        </div>
    </Section>
}