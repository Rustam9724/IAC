function WellcomeSection() {
    return (
        <section className="page__wellcome-section wellcome-section">
            <div className="wellcome-section__container _container">
                <div className="wellcome-section__description">
                    <h1>Промышленное оборудование <br /> в странах СНГ с пожизненной гарантией</h1>
                    <p>Оформите заказ и получите в подарок: запчасти, средства по уходу или Kärcher</p>
                    <a className="wellcome-section__button button">ОФОРМИТЬ ЗАКАЗ</a>
                </div>
                <div className="wellcome-section__video">
                    <img src="./assets/wellcome-section/video-preview.jpg" alt="video" className="wellcome-section__video__preview"/>
                    <img src="./assets/wellcome-section/play-btn.svg" alt="" className="wellcome-section__video__play-btn"/>
                </div>
            </div>
        </section>
    )
}

export default WellcomeSection;