import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function Clients() {
    const {language, setIsModalForm } = useContext(SiteContext);

    function openModalForm() {
        setIsModalForm(true);
        const body = document.querySelector('body')
        if (body) {
            body.style.height = '100vh';
            body.style.overflow = 'hidden';
        }
    }

    return (
        <section className="page__clients clients">
            <div className="clients__container _container">
                <div className="clients__description">
                    <h2>
                        {
                            text.clientsTitle[language as keyof ITextItem]
                        }
                    </h2>
                    <p className="clients__text text">
                        {
                            text.clientsText[language as keyof ITextItem]
                        }
                    </p>
                    <button className="button" onClick={openModalForm}>
                        {
                            text.clientsButton[language as keyof ITextItem]
                        }
                    </button>
                </div>
                <div className="clients__items">
                    <div className="clients__item">
                        <img src="/assets/clients/agromir.jpg" alt="agromir" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/pepsi.jpg" alt="pepsi" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/foodagro.jpg" alt="foodagro" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/marinelle.jpg" alt="marinelle" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/foodagro.jpg" alt="foodagro" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/marinelle.jpg" alt="marinelle" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;