export function Header() {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__left">
                    <div className="header__logo">
                    </div>
                    <div className="header__description">Производство и продажа промышленного оборудования</div>
                </div>
                <div className="header__right">
                    <div className="header__language">
                        <span>RU</span>
                        <div></div>
                    </div>
                    <div className="header__burger-menu burger-menu">
                        <div className="burger-menu__band"></div>
                        <div className="burger-menu__band"></div>
                        <div className="burger-menu__band"></div>
                    </div>
                </div>
            </div>
        </header> 
    )
}