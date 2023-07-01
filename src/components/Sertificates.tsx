import text from './text';
import { useContext } from 'react';
import { SiteContext } from '../context';
import { ITextItem } from './text';

function Sertificates() {
    const {language} = useContext(SiteContext);

    return (
        <section className="page__sertificates sertificates">
            <div className="sertificates__container _container">
                <h2 className="sertificates__title">
                    {
                        text.sertificatesTitle[language as keyof ITextItem]
                    }
                </h2>
                <div className="sertificates__body">
                    <div className="sertificates__sertificate sertificate">
                        <div className="sertificate__image">
                            <img src="./assets/sertificates/sertificate.png" alt="sertificate"/>
                        </div>
                        <p>
                            {
                                text.sertificatesText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="sertificates__sertificate">
                        <div className="sertificate__image">
                            <img src="./assets/sertificates/sertificate.png" alt="sertificate"/>
                        </div>
                        <p>
                            {
                                text.sertificatesText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="sertificates__sertificate">
                        <div className="sertificate__image">
                            <img src="./assets/sertificates/sertificate.png" alt="sertificate"/>
                        </div>
                        <p>
                            {
                                text.sertificatesText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="sertificates__sertificate">
                        <div className="sertificate__image">
                            <img src="./assets/sertificates/sertificate.png" alt="sertificate"/>
                        </div>
                        <p>
                            {
                                text.sertificatesText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sertificates;