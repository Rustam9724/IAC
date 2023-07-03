import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function WellcomeSection() {
    const {language, setIsModalForm} = useContext(SiteContext);

    function modalOpen() {
        const body = document.querySelector('body')
        const modalForm: HTMLDivElement | null = document.querySelector('.modal-form');
        if (body && modalForm) {
            body.style.height = '100vh';
            body.style.overflow = 'hidden';
            body.style.marginRight = '16px';
            modalForm.style.top = '20px';
            modalForm.style.transition = '1s ease';
            setIsModalForm(true);
        }
    }

    return (
        <section className="page__wellcome-section wellcome-section" id="wellcome-section">
            <div className="wellcome-section__container _container">
                <div className="wellcome-section__description">
                    <h1>
                        {
                            text.wellcomeTitle[language as keyof ITextItem]
                        }
                    </h1>
                    <p className="description__text text">
                        {
                            text.wellcomeSubTitle[language as keyof ITextItem]
                        }
                    </p>
                    <a className="wellcome-section__button button" onClick={modalOpen}>
                        {
                            text.wellcomeButton[language as keyof ITextItem]
                        }
                    </a>
                </div>
                <div className="wellcome-section__video">
                    <img src="./assets/wellcome-section/video-preview.jpg" alt="video" className="wellcome-section__video__preview"/>
                    <img src="./assets/wellcome-section/play-btn.svg" alt="" className="wellcome-section__video__play-btn"/>
                </div>
            </div>
        </section>
    )
}

export default WellcomeSection;