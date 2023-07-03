function BurgerMenu() {
    return (
        <div className="burger-menu">
            <nav className="burger-menu__nav">
                <ul className="burger-menu__list">
                    <li className="burger-menu__item"><a href="#wellcome-section">О нас</a></li>
                    <li className="burger-menu__item"><a href="#range__title">Товары</a></li>
                    <li className="burger-menu__item"><a href="#clients__container">Нам доверяют</a></li>
                    <li className="burger-menu__item"><a href="#employers__container">Команда</a></li>
                    <li className="burger-menu__item"><a href="#FAQ">FAQ</a></li>
                    <li className="burger-menu__item"><a href="#footer">Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default BurgerMenu;