import WellcomeSection from "./WellcomeSection";
import Range from "./Range";
import Sertificates from "./Sertificates";
import Clients from "./Clients";
import Stages from "./Stages";

function Main() {
    return (
        <div className="page">
            <WellcomeSection />
            <Range />
            <Sertificates />
            <Clients />
            <Stages />
        </div>
    )
}

export default Main;