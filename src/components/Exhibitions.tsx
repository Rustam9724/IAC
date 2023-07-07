import { useContext } from 'react';
import { SiteContext } from '../context';
import text from './text';
import { ITextItem } from './text';

function Exhibitions() {
    const { language } = useContext(SiteContext);

    return (
        <section className="page__exhibitions exhibitions">
            <div className="exhibitions__container _container">
                <h1>
                    {
                        text.exhibitionsTitle[language as keyof ITextItem]
                    }
                </h1>
                <div className="exhibitions__body">
                    <div className="exhibitions_left">
                        <div className="exhibitions__left__top">
                            <div className="exhibitions__left__top__first-image _ibg">
                                <img src="./assets/exhibitions/left_top_left.jpg" alt="" />
                            </div>
                            <div className="exhibitions__left__top__second-image _ibg">
                                <img src="./assets/exhibitions/left_top_right.jpg" alt="" />
                            </div>
                        </div>
                        <div className="exhibitions__left__bottom _ibg">
                            <img src="./assets/exhibitions/left_bottom.jpg" alt="" />
                        </div>
                    </div>
                    <div className="exhibitions__right">
                        <div className="exhibitions__right__left">
                            <div className="exhibitions__right__left__first-image _ibg">
                                <img src="./assets/exhibitions/right_left_top.jpg" alt="" />
                            </div>
                            <div className="exhibitions__right__left__second-image _ibg">
                                <img src="/assets/exhibitions/right_left_bottom.jpg" alt="" />
                            </div>
                        </div>
                        <div className="exhibitions__right__right">
                            <div className="exhibitions__right__right__first-image _ibg">
                                <img src="./assets/exhibitions/right_right_top.jpg" alt="" />
                            </div>
                            <div className="exhibitions__right__right__second-image _ibg">
                                <img src="./assets/exhibitions/right_right_bottom.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exhibitions;