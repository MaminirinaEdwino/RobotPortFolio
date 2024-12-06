import FondVideo from "./fondVideo";
import LandingIntro from "./landingIntro";

export default function LandingPage() {
    return <div className="flex h-dvh">
        <FondVideo />
        <div className="m-auto my-auto">
            <LandingIntro/>
        </div>
    </div>
}