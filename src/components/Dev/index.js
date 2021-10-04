import Lottie from 'react-lottie';
import * as dev from "../../assets/animated/dev.json"

export const Dev = ({isAnimationPlaying}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: dev.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
       
    };
    
    return (
        <Lottie options={defaultOptions}
            width={300}
            height={300}
            style={{ marginTop: "50px" }}
            isStopped={!isAnimationPlaying}


        /> 
    )
}