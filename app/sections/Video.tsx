import { Section } from "../components/Section"

export const Video = () => {
    return <Section title="Demonstration Video">
        <div className="overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/2E9hSNgIA9o?si=5_rgHcCus6xcEC0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="aspect-video w-full"/>
        </div>
    </Section>
}