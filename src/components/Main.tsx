import WellcomeSection from "./WellcomeSection";
import Range from "./Range";
import Sertificates from "./Sertificates";
import Clients from "./Clients";
import Stages from "./Stages";
import Exhibitions from "./Exhibitions";
import UnderFooter from "./UnderFooter";
import ModalForm from "./ModalForm";

function Main() {

    return (
        <div className="page">
            <WellcomeSection />
            <Range />
            <Sertificates />
            <Clients />
            <Stages />
            <Exhibitions />
            <UnderFooter />
            <ModalForm />
        </div>
    )
}

export default Main;