import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function WellcomeSection() {
    const {language, setIsModalForm, setIsModalVideo} = useContext(SiteContext);
    const body = document.querySelector('body')

    function modalFormOpen() {
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

    function modalVideoOpen() {
        const modalVideo: HTMLDivElement | null = document.querySelector('.modal-video');
        if (body && modalVideo) {
            body.style.height = '100vh';
            body.style.overflow = 'hidden';
            body.style.marginRight = '16px';
            modalVideo.style.top = '20px';
            modalVideo.style.transition = '1s ease';
            setIsModalVideo(true);
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
                    <a className="wellcome-section__button button" onClick={modalFormOpen}>
                        {
                            text.wellcomeButton[language as keyof ITextItem]
                        }
                    </a>
                </div>
                <div className="wellcome-section__video">
                    <img src="./assets/wellcome-section/video-preview.jpg" alt="video" className="wellcome-section__video__preview"/>
                    <svg width="116" height="120" viewBox="0 0 116 120" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={modalVideoOpen}>
                        <ellipse opacity="0.15" cx="57.9587" cy="60" rx="57.9587" ry="60" fill="white"/>
                        <ellipse opacity="0.4" cx="57.9587" cy="60" rx="46.367" ry="48" fill="white"/>
                        <ellipse cx="57.9588" cy="60" rx="28.9793" ry="30" fill="white"/>
                        <path d="M70.6973 61.9377L52.2585 73.0025C50.6937 73.9405 48.6855 72.8047 48.6855 70.9136V48.784C48.6855 46.896 50.6908 45.7571 52.2585 46.6982L70.6973 57.7629C71.0532 57.9731 71.3491 58.2769 71.5549 58.6435C71.7607 59.0101 71.8691 59.4264 71.8691 59.8503C71.8691 60.2742 71.7607 60.6906 71.5549 61.0572C71.3491 61.4238 71.0532 61.7275 70.6973 61.9377Z" fill="#00814F"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default WellcomeSection;