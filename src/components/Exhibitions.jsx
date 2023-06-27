function Exhibitions() {
    return (
        <section className="page__exhibitions exhibitions">
            <div className="exhibitions__container _container">
                <h1>Мы уже 4 года учавствуем в крупных выставках Узбекистана</h1>
                <div className="exhibitions__body">
                    <div className="exhibitions_left">
                        <div className="exhibitions__left__top">
                            <img src="/assets/exhibitions/left_top_left.jpg" alt="" />
                            <img src="/assets/exhibitions/left_top_right.jpg" alt="" />
                        </div>
                        <div className="exhibitions__left__bottom">
                            <img src="/assets/exhibitions/left_bottom.jpg" alt="" />
                        </div>
                    </div>
                    <div className="exhibitions__right">
                        <div className="exhibitions__right__left">
                            <img src="/assets/exhibitions/right_left_top.jpg" alt="" />
                            <img src="/assets/exhibitions/right_left_bottom.jpg" alt="" />
                        </div>
                        <div className="exhibitions__right__right">
                            <img src="/assets/exhibitions/right_right_top.jpg" alt="" />
                            <img src="/assets/exhibitions/right_right_bottom.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exhibitions;