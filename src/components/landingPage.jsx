import FondVideo from "./fondVideo";
import LandingIntro from "./landingIntro";

export default function LandingPage() {
    
    return <div className="flex h-dvh" id="home">
        <FondVideo />
        <div 
        
        className="m-auto my-auto overflow-hidden">
            <LandingIntro/>
        </div>
    </div>
}