import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function BurgerMenu() {
    const {setIsBurgerMenu, language} = useContext(SiteContext);

    function burgerMenuClose() {
        const burgerMenu: HTMLDivElement | null = document.querySelector('.burger-menu');
        if (burgerMenu) {
            burgerMenu.style.right = '-100%';
            burgerMenu.style.transition = '0.75s ease'
            setIsBurgerMenu(false);
        }
    }

    return (
        <div className="burger-menu">
            <nav className="burger-menu__nav">
                <ul className="burger-menu__list">
                    <li className="burger-menu__item">
                        <a href="/IAC/#wellcome-section" onClick={burgerMenuClose}>
                            {
                                text.burgerMenuAboutUs[language as keyof ITextItem]
                            }
                        </a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#range__title" onClick={burgerMenuClose}>
                            {
                                text.burgerMenuGoods[language as keyof ITextItem]
                            }
                        </a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#clients__container" onClick={burgerMenuClose}>
                            {
                                text.burgerMenuConfidence[language as keyof ITextItem]
                            }
                        </a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#employers__container" onClick={burgerMenuClose}>
                            {
                                text.burgerMenuTeam[language as keyof ITextItem]
                            }
                        </a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#FAQ" onClick={burgerMenuClose}>FAQ</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#footer" onClick={burgerMenuClose}>
                            {
                                text.burgerMenuContacts[language as keyof ITextItem]
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BurgerMenu;