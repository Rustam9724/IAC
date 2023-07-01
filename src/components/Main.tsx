import WellcomeSection from "./WellcomeSection";
import Range from "./Range";
import Sertificates from "./Sertificates";
import Clients from "./Clients";
import Stages from "./Stages";
import Exhibitions from "./Exhibitions";
import UnderFooter from "./UnderFooter";
import { useContext } from 'react';
import { SiteContext } from '../context';
import ModalForm from "./ModalForm";

function Main() {
    const { isModalForm } = useContext(SiteContext);

    return (
        <div className="page">
            <WellcomeSection />
            <Range />
            <Sertificates />
            <Clients />
            <Stages />
            <Exhibitions />
            <UnderFooter />
            {
                isModalForm && <ModalForm />
            }
        </div>
    )
}

export default Main;