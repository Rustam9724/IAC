function AllProducts() {
    return (
        <div className="all-products">
            <div className="all-products__container _container">
                <select value="Выбрать категорию">
                    <option>
                        <select value="Технологические линии">
                            <option>Сушка овощей и фруктов</option>
                            <option>Консервирование грибов</option>
                            <option>Сушка абрикосов</option>
                            <option>Переработка овощей</option>
                        </select>
                    </option>
                </select>
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