function Employers() {
    return (
        <section className="page__employers employers">
            <div className="employers__container _container">
                <div className="employers__body">
                    <div className="employers__image _ibg">
                        <img src="/assets/employers/employer.jpg" alt="first-employer" />
                    </div>
                    <div className="employers__text">
                        <h2>Каждый из наших специалистов ежегодно проходит обучение по повышению квалификации в разных странах</h2>
                    </div>
                    <div className="employers__description">
                        <p>На фото:</p>
                        <p className="employers__employer">Павел Охлобыстин</p>
                        <p>Монтажник компрессорного оборудования</p>
                    </div>
                </div>
                <div className="employers__switcher switcher-employers">
                    <div className="switcher-employers__arrows">
                        <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                            </g>
                        </svg>
                        <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <rect width="37.8391" height="1.8948" transform="matrix(-1 0 0 1 39.999 12.4209)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(-0.706576 -0.707637 -0.706576 0.707637 14.7158 25.561)" fill="#00814F"/>
                            <rect width="18.9338" height="1.89338" transform="matrix(0.706576 -0.707637 -0.706576 -0.707637 1.33789 14.8423)" fill="#00814F"/>
                            </g>
                        </svg>
                    </div>
                    <div className="switcher-employers__scale">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Employers;