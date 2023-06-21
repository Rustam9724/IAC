import WellcomeSection from "./WellcomeSection";
import Range from "./Range";
import Sertificates from "./Sertificates";
import Clients from "./Clients";

function Main() {
    return (
        <div className="page">
            <WellcomeSection />
            <Range />
            <Sertificates />
            <Clients />
        </div>
    )
}

export default Main;