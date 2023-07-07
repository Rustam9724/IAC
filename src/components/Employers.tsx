import {useContext, useState} from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function Employers() {
    const { language } = useContext(SiteContext);
    const picturesArr = ['first', 'second', 'third', 'fourth', 'fifth'];
    const [pictureShown, setPictureShown] = useState(0);

    function flipping(side: string) {
        if (side === 'right') {
            if (pictureShown < 4) {
                setPictureShown(pictureShown + 1)
            }
        } else if (side === 'left') {
            if (pictureShown > 0) {
                setPictureShown(pictureShown - 1);
            }
        }
    }

    return (
        <section className="page__employers employers">
            <div className="employers__container _container" id="employers__container">
                <div className="employers__body">
                    <div className='employers__carousel'>
                        <div className={`employers__images ${picturesArr[pictureShown]}-position`}>
                            <img src="/assets/employers/employer.jpg" alt="first-employer" />
                            <img src="/assets/employers/employer.jpg" alt="second-employer" />
                            <img src="/assets/employers/employer.jpg" alt="third-employer" />
                            <img src="/assets/employers/employer.jpg" alt="fourth-employer" />
                            <img src="/assets/employers/employer.jpg" alt="fifth-employer" />
                        </div>
                        <div className="employers__carousel__substrate"></div>
                        <div className="employers__switcher switcher-employers">
                            <div className="switcher-employers__arrows">
                                <svg className={`switcher-employers__arrow ${pictureShown > 0 ? 'active' : null}`} width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => flipping('left')}
                                >
                                    <g opacity="0.4">
                                    <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                                    <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                                    <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                                    </g>
                                </svg>
                                <svg className={`switcher-employers__arrow ${pictureShown < 4 ? 'active' : null}`} width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => flipping('right')}
                                >
                                    <g opacity="0.4">
                                    <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                                    <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                                    <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="switcher-employers__scale">
                                <div className={`switcher-employers__scale__item ${pictureShown === 0 ? 'active' : null}`}></div>
                                <div className={`switcher-employers__scale__item ${pictureShown === 1 ? 'active' : null}`}></div>
                                <div className={`switcher-employers__scale__item ${pictureShown === 2 ? 'active' : null}`}></div>
                                <div className={`switcher-employers__scale__item ${pictureShown === 3 ? 'active' : null}`}></div>
                                <div className={`switcher-employers__scale__item ${pictureShown === 4 ? 'active' : null}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="employers__text">
                        <h2>
                            {
                                text.employersTitle[language as keyof ITextItem]
                            }
                        </h2>
                        <div className="employers__description">
                            <p>
                                {
                                    text.employersInPhoto[language as keyof ITextItem]
                                }
                            </p>
                            <p className="employers__employer">
                                {
                                    text[`employer${picturesArr[pictureShown]}Name`][language as keyof ITextItem]
                                }
                            </p>
                            <p>
                                {
                                    text[`employers${picturesArr[pictureShown]}JobTitle`][language as keyof ITextItem]
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Employers;