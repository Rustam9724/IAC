import { useContext } from 'react';
import { SiteContext } from '../context';
import { ITextItem } from './text';
import text from './text';

function FAQ() {
    const { language } = useContext(SiteContext);

    return (
        <section className="page__faq faq" id="FAQ">
            <div className="faq__container _container">
                <h2>
                    {
                        text.FAQTitle[language as keyof ITextItem]
                    }
                </h2>
                <p className="faq__subtitle">
                    {
                        text.FAQSubTitle[language as keyof ITextItem]
                    }
                </p>
                <div className="faq__body">
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQFirstTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQFirstText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQSecondTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQSecondText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQThirdTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQThirdText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQFourthTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQFourthText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQFifthTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQFifthText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                    <div className="faq__question">
                        <h3>
                            {
                                text.FAQSixthTitle[language as keyof ITextItem]
                            }
                        </h3>
                        <p>
                            {
                                text.FAQSixthText[language as keyof ITextItem]
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;