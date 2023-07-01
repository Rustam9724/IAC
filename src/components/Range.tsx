import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function Range() {
    const { language } = useContext(SiteContext);

    return (
        <section className="page__range range">
            <div className="range__container _container">
                <div className="range__body">
                    <div className="range__descripton">
                        <h2>
                            {
                                text.rangeTitle[language as keyof ITextItem]
                            }
                        </h2>
                        <ul className="range__list">
                            <li className="range__list__item">
                                {
                                    text.rangeListFirstItem[language as keyof ITextItem]
                                }
                            </li>
                            <li className="range__list__item">
                                {
                                    text.rangeListSecondItem[language as keyof ITextItem]
                                }
                            </li>
                            <li className="range__list__item">
                                {
                                    text.rangeListThirdItem[language as keyof ITextItem]
                                }
                            </li>
                        </ul>
                        <p className="range__text">
                            {
                                text.rangeText[language as keyof ITextItem]
                            }
                        </p>
                        <div className="range__buttons">
                            <div className="range__button button">
                                {
                                    text.rangeFirstButton[language as keyof ITextItem]
                                }
                            </div>
                            <div className="range__button button_transpared button">
                                {
                                    text.rangeSecondButton[language as keyof ITextItem]
                                }
                            </div>
                        </div>
                    </div>
                    <div className="range__carousel">
                        <div className="range__carousel__item">
                            <img src="./assets/range/product_1.jpg" alt="product"/>
                        </div>
                        <div className="range__carousel__item">
                            <img src="./assets/range/product_2.jpg" alt="product"/>
                        </div>
                        <div className="range__carousel__item">
                            <img src="./assets/range/product_1.jpg" alt="product"/>
                        </div>
                        <div className="range__carousel__item">
                            <img src="./assets/range/product_2.jpg" alt="product"/>
                        </div>
                        <div className="range__carousel__item">
                            <img src="./assets/range/product_1.jpg" alt="product"/>
                        </div>
                    </div>
                </div>
                <div className="range__switcher switcher-range">
                    <div className="range__arrows">
                        <svg className="switcher-range__arrow" width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                        <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                        <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                        <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                        </g>
                    </svg>
                        <svg className="switcher-range__arrow switcher-range__arrow_active" width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                        <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                        <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                        <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                        </g>
                    </svg>
                    </div>
                    <div className="switcher-range__scale">
                        <div className="switcher-range__scale__item switcher-range__scale__item_active"></div>
                        <div className="switcher-range__scale__item"></div>
                        <div className="switcher-range__scale__item"></div>
                        <div className="switcher-range__scale__item"></div>
                        <div className="switcher-range__scale__item"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Range;