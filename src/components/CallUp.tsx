import { useContext } from 'react';
import { SiteContext } from '../context';
import { ITextItem } from './text';
import text from './text';

function CallUp() {
    const { language } = useContext(SiteContext);

    return <section className="page__call-up call-up">
        <div className="call-up__container _container">
            <div className="call-up__map">
                <div className="call-up__map__image" style={{position: 'relative', overflow: 'hidden'}}>
                    <a 
                        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>
                            Ташкент
                    </a>
                    <a
                        href="https://yandex.uz/maps/10335/tashkent/house/YkAYdAFnQUwAQFprfX9xcn1gZQ==/?ll=69.267897%2C41.303131&utm_medium=mapframe&utm_source=maps&z=16.52"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>
                            Улица Афросиаб, 2 — Яндекс Карты
                    </a>
                    <iframe
                        src="https://yandex.uz/map-widget/v1/?ll=69.267897%2C41.303131&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTExMDA2Ei5Pyrt6YmVraXN0b24sIFRvc2hrZW50LCBBZnJvc2l5b2Iga2_Ku2NoYXNpLCAyIgoNKomKQhVoNiVC&z=16.52"
                        width="560"
                        height="400"
                        frameBorder="1"
                        style={{position: 'relative'}}>
                    </iframe>
                </div>
                <div className="call-up__map__substrate"></div>
            </div>
            <form className="call-up__form">
                <h2>
                    {
                        text.callUpTitle[language as keyof ITextItem]
                    }
                </h2>
                <div className="call-up__labels">
                    <label>
                        <p>
                            {
                                text.callUpName[language as keyof ITextItem]
                            }
                        </p>
                        <input type="text" placeholder={language === 'ru' ? 'Фамилия Имя' : 'Full name'}/>
                    </label>
                    <label>
                        <p>
                            {
                                text.callUpPhone[language as keyof ITextItem]
                            }
                        </p>
                        <input type="phone"/>
                    </label>
                </div>
                <div className="call-up__form__time time-form">
                    <p>
                        {
                            text.callUpConvenientTime[language as keyof ITextItem]
                        }
                    </p>
                    <div className="time-form__selects">
                        <select>
                            <option>08:00</option>
                            <option>08:30</option>
                            <option>09:00</option>
                            <option>09:30</option>
                            <option>10:00</option>
                            <option>10:30</option>
                            <option>11:00</option>
                            <option>11:30</option>
                            <option>12:00</option>
                            <option>12:30</option>
                            <option>13:00</option>
                            <option>13:30</option>
                            <option>14:00</option>
                            <option>14:30</option>
                            <option>15:00</option>
                            <option>15:30</option>
                            <option>16:00</option>
                            <option>16:30</option>
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                        </select>
                        <p>{language === 'ru' ? 'до' : 'to'}</p>
                        <select>
                            <option>08:00</option>
                            <option>08:30</option>
                            <option>09:00</option>
                            <option>09:30</option>
                            <option>10:00</option>
                            <option>10:30</option>
                            <option>11:00</option>
                            <option>11:30</option>
                            <option>12:00</option>
                            <option>12:30</option>
                            <option>13:00</option>
                            <option>13:30</option>
                            <option>14:00</option>
                            <option>14:30</option>
                            <option>15:00</option>
                            <option>15:30</option>
                            <option>16:00</option>
                            <option>16:30</option>
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                        </select>
                    </div>
                    <button className="call-up__button button">
                        {
                            text.callUpButton[language as keyof ITextItem]
                        }
                    </button>
                </div>
            </form>
        </div>
    </section>
}

export default CallUp;