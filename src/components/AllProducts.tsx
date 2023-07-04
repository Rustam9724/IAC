import { useState } from 'react';

function AllProducts() {
    const [isFirstLevelOpen, setIsFirstLevelOpen] = useState(false);
    const [isSecondLevelOpen, setIsSecondLevelOpen] = useState(false);
    const [isThirdLevelOpen, setIsThirdLevelOpen] = useState(false);

    const fisrtLevelClickHandler = () => {
        setIsFirstLevelOpen(!isFirstLevelOpen);
        setIsSecondLevelOpen(!isSecondLevelOpen);
    }

    return (
        <div className="all-products">
            <div className="all-products__container _container">
                <div className="all-products__categories categories">
                    <div className={`categories__first-level ${isFirstLevelOpen ? 'open' : null}`} onClick={fisrtLevelClickHandler}>
                        <p>Выбрать категорию</p>
                        <div></div>
                    </div>
                    <div className={`categories__second-level ${isSecondLevelOpen ? 'open' : null}`} onClick={() => setIsThirdLevelOpen(!isThirdLevelOpen)}>
                        <p>Технологическе линии</p>
                        <div className={`${isThirdLevelOpen ? 'open' : null}`}></div>
                    </div>
                    <div className={`categories__third-level ${isThirdLevelOpen ? 'open' : null}`}>
                        <p>Сушка овощей и фруктов</p>
                        <p>Консервирование грибов</p>
                        <p>Сушка абрикосов</p>
                        <p>Переработка овощей</p>
                    </div>
                </div>
                <div className="all-products__body">
                    <h2>Всё оборудование</h2>
                    <hr />
                    <div className="all-products__products products">
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/01.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/02.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/03.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/03.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/01.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/02.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/02.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/03.jpg" alt="" />
                        </div>
                        <div className="produtcs__item _ibg">
                            <img src="/assets/all-products/01.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts;