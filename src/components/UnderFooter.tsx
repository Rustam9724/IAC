import CallUp from "./CallUp";
import Employers from "./Employers";
import FAQ from "./FAQ";

function UnderFooter() {
    return (
        <div className="underfooter">
            <Employers />
            <FAQ />
            <CallUp />
        </div>
    )
}

export default UnderFooter;