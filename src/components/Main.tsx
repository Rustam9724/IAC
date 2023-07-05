import WellcomeSection from "./WellcomeSection";
import Range from "./Range";
import Sertificates from "./Sertificates";
import Clients from "./Clients";
import Stages from "./Stages";
import Exhibitions from "./Exhibitions";
import UnderFooter from "./UnderFooter";
import ModalForm from "./ModalForm";
import ModalVideo from "./ModalVideo";
import BurgerMenu from "./BurgerMenu";

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
            <ModalVideo />
        </div>
    )
}

export default Main;