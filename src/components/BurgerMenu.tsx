import { useContext } from 'react';
import { SiteContext } from '../context';

function BurgerMenu() {
    const {setIsBurgerMenu} = useContext(SiteContext);
    
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
                        <a href="/IAC/#wellcome-section" onClick={burgerMenuClose}>О нас</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#range__title" onClick={burgerMenuClose}>Товары</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#clients__container" onClick={burgerMenuClose}>Нам доверяют</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#employers__container" onClick={burgerMenuClose}>Команда</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#FAQ" onClick={burgerMenuClose}>FAQ</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="/IAC/#footer" onClick={burgerMenuClose}>Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BurgerMenu;