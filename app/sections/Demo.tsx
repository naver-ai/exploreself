import Lottie from 'react-lottie';

const animData = require('../../public/settings-anim.json')

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animData
}

export const Demo = () => {
    return <div className="mt-10 rounded-xl overflow-hidden">
        <Lottie options={lottieOptions}/>
    </div>
}