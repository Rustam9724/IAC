import { useState, useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';
import BurgerMenu from './BurgerMenu';

export function Header() {
    const [isLanListOpen, setIsLanListOpen] = useState(false);
    const {language, setLanguage, isBurgerMenu, setIsBurgerMenu} = useContext(SiteContext);

    function burgerMenuSwitcher() {
        const burgerMenu: HTMLDivElement | null = document.querySelector('.burger-menu');
        if (burgerMenu) {
            if (!isBurgerMenu) {
                burgerMenu.style.right = '0';
                burgerMenu.style.transition = '0.75s ease'
                setIsBurgerMenu(true);
            } else {
                burgerMenu.style.right = '-100%';
                burgerMenu.style.transition = '0.75s ease'
                setIsBurgerMenu(false);
            }
        }
    }

    function languageSwitcher() {
        const languageList: HTMLDivElement | null = document.querySelector('.header__language__list');
        if (languageList) {
            if (!isLanListOpen) {
                languageList.style.top = '30px';
                languageList.style.opacity = '1';
                languageList.style.transition = '0.2s ease'
                languageList.style.zIndex = '1'
                setIsLanListOpen(true);
            } else {
                languageList.style.top = '-15px';
                languageList.style.opacity = '0';
                languageList.style.zIndex = '-1'
                languageList.style.transition = '0.2s ease'
                setIsLanListOpen(false);
            }
        }
    }


    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__left">
                    <div className="header__logo">
                    </div>
                    <div className="header__description">
                        {
                            text.headerDescription[language as keyof ITextItem]
                        }
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__language" onClick={languageSwitcher}>
                        <span>{language === 'ru' ? 'RU' : 'EN'}</span>
                        <div className={`header__language__arrow ${isLanListOpen ? 'down' : null}`}></div>
                        {
                            <div className="header__language__list">
                                <p onClick={() => setLanguage('ru')}>RU</p>
                                    <p onClick={() => setLanguage('en')}>EN</p>
                            </div>
                        }
                    </div>
                    <div className={`header__burger-menu-btn burger-menu-btn ${isBurgerMenu ? 'open' : null}`} onClick={burgerMenuSwitcher}>
                        <div className="burger-menu-btn__band"></div>
                        <div className="burger-menu-btn__band"></div>
                        <div className="burger-menu-btn__band"></div>
                    </div>
                </div>
            </div>
            <BurgerMenu/>
        </header> 
    )
}