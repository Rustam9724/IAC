import { useContext } from 'react';
import { SiteContext } from '../context';
import { ITextItem } from './text';
import text from './text';

function Stages() {
    const {language, setIsModalForm } = useContext(SiteContext);

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
        <section className="page__stages stages">
            <div className="stages__container _container">
                <h2 className="stages__title">
                    {
                        text.stagesTitle[language as keyof ITextItem]
                    }
                </h2>
                <div className="stages__body">
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/01.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesFirstStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesFirstStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>
                                3 { text.stagesDaysFirst[language as keyof ITextItem]}
                            </p>
                            <div className="term__arrow term__arrow_end ">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/02.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesSecondStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesSecondStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_right">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>
                            7 { text.stagesDaysSecond[language as keyof ITextItem] }
                        </p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row stages__body__row_reverse">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/03.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesThirdStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesThirdStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal term_reverse">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>
                                3 { text.stagesDaysFirst[language as keyof ITextItem] }
                            </p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/04.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesFourthStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesFourthStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_left">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>
                            3 { text.stagesDaysFirst[language as keyof ITextItem] }
                        </p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/05.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesFifthStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesFifthStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>
                                1 { text.stagesDay[language as keyof ITextItem] }
                            </p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/06.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesSixthStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesSixthStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_right">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>
                            2 - 6 { text.stagesMonth[language as keyof ITextItem] }
                        </p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row stages__body__row_reverse">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/07.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesSeventhStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesSeventhStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal term_reverse">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>
                                10 - 15 { text.stagesDaysSecond[language as keyof ITextItem] }
                            </p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/08.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesEighthStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesEighthStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_left">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>
                            30 { text.stagesDaysSecond[language as keyof ITextItem] }
                        </p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="./assets/stages/09.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>
                                    {
                                        text.stagesNinthStageTitle[language as keyof ITextItem]
                                    }
                                </h3>
                                <p>
                                    {
                                        text.stagesNinthStageText[language as keyof ITextItem]
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="stages__getstart">
                            <h2>
                                {
                                    text.stagesGetStartTitle[language as keyof ITextItem]
                                }
                            </h2>
                            <p>
                                {
                                    text.stagesGetStartText[language as keyof ITextItem]
                                }
                            </p>
                            <button className="stages__button button" onClick={modalOpen}>
                                {
                                    text.stagesButton[language as keyof ITextItem]
                                }
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stages;