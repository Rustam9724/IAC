import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function ModalForm() {
    const { language } = useContext(SiteContext);

    return (
        <div className="modal-form">
            <h2 className="modal-form__title">
                {
                    text.modalFormTitle[language as keyof ITextItem]
                }
            </h2>
            <p className="modal-form__sub-title">
                {
                    text.modalFormSubTitle[language as keyof ITextItem]
                }
            </p>
            <form className="modal-form__form">
                <label>
                    <p>
                        {
                            text.modalFormName[language as keyof ITextItem]
                        }
                    </p>
                    <input type="text" placeholder={text.modalFormName[language as keyof ITextItem]} required/>
                </label>
                <label>
                    <p>
                        {
                            text.modalFormPhone[language as keyof ITextItem]
                        }
                    </p>
                    <input type="phone" required/>
                </label>
                <button className="modal-form__button button">
                    {
                        text.modalFormButton[language as keyof ITextItem]
                    }
                </button>
            </form>
        </div>
    )
}

export default ModalForm;