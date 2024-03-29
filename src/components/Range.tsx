import { useContext, useState } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';
import { Link } from 'react-router-dom';

function Range() {
    const {language, setIsModalForm} = useContext(SiteContext);
    const picturesArr = ['first', 'second', 'third', 'fourth', 'fifth'];
    const [pictureShown, setPictureShown] = useState(0)

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
        <section className="page__range range">
            <div className="range__container _container">
                <div className="range__body">
                    <div className="range__descripton">
                        <h2 id="range__title">
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
                            <div className="range__button button" onClick={modalOpen}>
                                {
                                    text.rangeFirstButton[language as keyof ITextItem]
                                }
                            </div>
                            <Link className="range__button button_transpared button" to="/all-products/">
                                {
                                    text.rangeSecondButton[language as keyof ITextItem]
                                }
                            </Link>
                        </div>
                    </div>
                        <div className={`range__carousel ${picturesArr[pictureShown]}-position`}>
                            <div className="range__carousel__item _ibg">
                                <img src="./assets/range/product_1.jpg" alt="product"/>
                            </div>
                            <div className="range__carousel__item _ibg">
                                <img src="./assets/range/product_2.jpg" alt="product"/>
                            </div>
                            <div className="range__carousel__item _ibg">
                                <img src="./assets/range/product_1.jpg" alt="product"/>
                            </div>
                            <div className="range__carousel__item _ibg">
                                <img src="./assets/range/product_2.jpg" alt="product"/>
                            </div>
                            <div className="range__carousel__item _ibg">
                                <img src="./assets/range/product_1.jpg" alt="product"/>
                            </div>
                        </div>
                </div>
                <div className="range__switcher switcher-range">
                    <div className="range__arrows">
                        <svg className={`switcher-range__arrow ${pictureShown > 0 ? 'active' : null}`} width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => flipping('left')}
                        >
                            <g opacity="0.4">
                            <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                            </g>
                        </svg>
                        <svg className={`switcher-range__arrow ${pictureShown < 4 ? 'active' : null}`} width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => flipping('right')}
                        >
                            <g opacity="0.4">
                            <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                            </g>
                        </svg>
                    </div>
                    <div className="switcher-range__scale">
                        <div className={`switcher-range__scale__item ${pictureShown === 0 ? 'active' : null}`}></div>
                        <div className={`switcher-range__scale__item ${pictureShown === 1 ? 'active' : null}`}></div>
                        <div className={`switcher-range__scale__item ${pictureShown === 2 ? 'active' : null}`}></div>
                        <div className={`switcher-range__scale__item ${pictureShown === 3 ? 'active' : null}`}></div>
                        <div className={`switcher-range__scale__item ${pictureShown === 4 ? 'active' : null}`}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Range;