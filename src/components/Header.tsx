import { useState, useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';
import BurgerMenu from './BurgerMenu';

export function Header() {
    const [isLanListOpen, setIsLanListOpen] = useState(false);
    const {language, setLanguage} = useContext(SiteContext);
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);

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
                    <div className="header__language" onClick={() => setIsLanListOpen(!isLanListOpen)}>
                        <span>{language === 'ru' ? 'RU' : 'EN'}</span>
                        <div className={`header__language__arrow ${isLanListOpen ? 'down' : null}`}></div>
                        {
                            isLanListOpen 
                                && <div className="header__language__list">
                                        <p onClick={() => setLanguage('ru')}>RU</p>
                                        <p onClick={() => setLanguage('en')}>EN</p>
                                    </div>
                        }
                    </div>
                    <div className="header__burger-menu-btn burger-menu-btn" onClick={burgerMenuSwitcher}>
                        <div className="burger-menu-btn__band"></div>
                        <div className="burger-menu-btn__band"></div>
                        <div className="burger-menu-btn__band"></div>
                    </div>
                </div>
            </div>
            {
                <BurgerMenu />
            }
        </header> 
    )
}