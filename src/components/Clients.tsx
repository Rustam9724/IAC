function Clients() {
    return (
        <section className="page__clients clients">
            <div className="clients__container _container">
                <div className="clients__description">
                    <h2>Нам доверяют крупные компании</h2>
                    <p className="clients__text text">Оставьте заявку — мы свяжемся с вами и проведём БЕСПЛАТНУЮ ЭКСКУРСИЮ</p>
                    <button className="button">ПОЛУЧИТЬ ЭКСКУРСИЮ</button>
                </div>
                <div className="clients__items">
                    <div className="clients__item">
                        <img src="/assets/clients/agromir.jpg" alt="agromir" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/pepsi.jpg" alt="pepsi" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/foodagro.jpg" alt="foodagro" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/marinelle.jpg" alt="marinelle" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/foodagro.jpg" alt="foodagro" />
                    </div>
                    <div className="clients__item">
                        <img src="/assets/clients/marinelle.jpg" alt="marinelle" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;