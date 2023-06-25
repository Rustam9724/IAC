function Stages() {
    return (
        <section className="page__stages stages">
            <div className="stages__container _container">
                <h2 className="stages__title">Этапы работы</h2>
                <div className="stages__body">
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/01.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Звонок-заявка</h3>
                                <p>Поступление звонка или заявки с сайта и соц сетей</p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>3 дня</p>
                            <div className="term__arrow term__arrow_end ">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/02.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Встреча</h3>
                                <p>Встреча с клиентом и обсуждение деталей предстоящей работы</p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_right">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>7 дней</p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row stages__body__row_reverse">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/03.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Осмотр завода</h3>
                                <p>Осмотр объекта для предстоящих работ</p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal term_reverse">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>3 дня</p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/04.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Подписание договора</h3>
                                <p>Согласование и подписание договора</p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_left">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>3 дня</p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/05.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Оплата</h3>
                                <p>Внесение предоплаты согласно условиям оговорённым в договоре</p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>1 день</p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/06.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Производство</h3>
                                <p>Производство оборудования и запчастей согласно заказу</p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_right">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>2 - 6 месяцев</p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row stages__body__row_reverse">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/07.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Доставка</h3>
                                <p>Доставка оборудования в страну и город клиента</p>
                            </div>
                        </div>
                        <div className="stages__body__term term term_horizontal term_reverse">
                            <div className="term__arrow term__arrow_start">
                            </div>
                            <p>10 - 15 дней</p>
                            <div className="term__arrow term__arrow_end">
                            </div>
                        </div>
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/08.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Монтажные работы</h3>
                                <p>Установка оборудования на объект клиента</p>
                            </div>
                        </div>
                    </div>
                    <div className="stages__body__term term term_vertical term_vertical_left">
                        <div className="term__arrow term__arrow_start">
                        </div>
                        <p>30 дней</p>
                        <div className="term__arrow term__arrow_end">
                        </div>
                    </div>
                    <div className="stages__body__row">
                        <div className="stages__stage stage">
                            <div className="stage__image">
                                <img src="/assets/stages/09.svg" alt="" />
                            </div>
                            <div className="stage__description">
                                <h3>Запуск производства</h3>
                                <p>Полноценное запущенное производство</p>
                            </div>
                        </div>
                        <div className="stages__getstart">
                            <h2>Давайте начнём уже сейчас</h2>
                            <p>Оставьте заявку — мы свяжемся с вами с готовым предложением</p>
                            <button className="stages__button button">НАЧАТЬ СЕЙЧАС</button>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stages;