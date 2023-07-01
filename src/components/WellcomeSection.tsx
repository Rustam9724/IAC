import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function WellcomeSection() {
    const {language} = useContext(SiteContext);

    return (
        <section className="page__wellcome-section wellcome-section">
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
                    <a className="wellcome-section__button button">
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