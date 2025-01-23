import { Section } from "../components/Section"

export const Video = () => {
    return <Section title="Demonstration Video">
        <div className="overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/LZ2DdVzXZO0?si=EonlNIGphHUQMK1K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="aspect-video w-full"/>
        </div>
    </Section>
}