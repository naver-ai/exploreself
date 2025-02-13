export const Demo = () => {
    return <div className="mt-10 rounded-xl overflow-hidden border border-4 border-slate-200 aspect-video">
    <video className="teaser-loop" autoPlay loop muted playsInline>
                    <source src={require('../../public/exploreself-demo-loop.mp4')} type="video/mp4" />
                </video>
</div> 
}