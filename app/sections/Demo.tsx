export const Demo = () => {
    return <div className="mt-10 rounded-xl overflow-hidden border border-4 border-slate-200">
        <video className="teaser-loop" autoPlay loop muted playsInline>
                        <source src={require('../../public/elmi_demo_loop.mp4')} type="video/mp4" />
                    </video>
    </div> 
}