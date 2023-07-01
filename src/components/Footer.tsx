import { useContext } from 'react';
import { SiteContext } from '../context';
import { ITextItem } from './text';
import text from './text';

function Footer() {
    const { language } = useContext(SiteContext);

    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__logo _ibg">
                    <img src="/assets/footer/logo.svg" alt="logo" />
                </div>
                <div className="footer__contacts">
                    <h2>
                        {
                            text.footerContactsTitle[language as keyof ITextItem]
                        }
                    </h2>
                    <div className="footer__contacts__body">
                        <div className="footer__contacts__left">
                            <p>
                                {
                                    text.footerAddress[language as keyof ITextItem]
                                }
                            </p>
                        </div>
                        <div className="footer__contacts__right">
                            <p>+998 99 999 99 99</p>
                            <p>info@iac.uz</p>
                        </div>
                    </div>
                </div>
                <div className="footer__social-media">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.996 7.01141C10.7369 7.01141 7.29966 10.3112 7.29966 14.4C7.29966 18.4888 10.7369 21.7886 14.996 21.7886C19.255 21.7886 22.6923 18.4888 22.6923 14.4C22.6923 10.3112 19.255 7.01141 14.996 7.01141ZM14.996 19.202C12.2417 19.202 9.99393 17.0442 9.99393 14.4C9.99393 11.7558 12.2417 9.59796 14.996 9.59796C17.7503 9.59796 19.998 11.7558 19.998 14.4C19.998 17.0442 17.7503 19.202 14.996 19.202ZM23.0075 4.98684C22.0131 4.98684 21.2101 5.75776 21.2101 6.71241C21.2101 7.66705 22.0131 8.43797 23.0075 8.43797C24.0019 8.43797 24.8049 7.67065 24.8049 6.71241C24.8052 6.48572 24.7589 6.26121 24.6687 6.05172C24.5785 5.84224 24.4461 5.6519 24.2791 5.49161C24.1122 5.33132 23.9139 5.20423 23.6957 5.11761C23.4775 5.03099 23.2436 4.98656 23.0075 4.98684ZM29.9983 14.4C29.9983 12.4115 30.0171 10.4409 29.9008 8.45598C29.7844 6.15043 29.2366 4.10424 27.4804 2.4183C25.7205 0.728763 23.5929 0.20641 21.1913 0.0947348C19.1199 -0.0169407 17.0673 0.00107152 14.9997 0.00107152C12.9284 0.00107152 10.8758 -0.0169407 8.80815 0.0947348C6.40658 0.20641 4.27517 0.732365 2.51902 2.4183C0.759114 4.10785 0.215007 6.15043 0.0986802 8.45598C-0.0176462 10.4445 0.00111615 12.4151 0.00111615 14.4C0.00111615 16.3849 -0.0176462 18.3591 0.0986802 20.344C0.215007 22.6496 0.762867 24.6958 2.51902 26.3817C4.27893 28.0712 6.40658 28.5936 8.80815 28.7053C10.8795 28.8169 12.9321 28.7989 14.9997 28.7989C17.0711 28.7989 19.1237 28.8169 21.1913 28.7053C23.5929 28.5936 25.7243 28.0676 27.4804 26.3817C29.2403 24.6922 29.7844 22.6496 29.9008 20.344C30.0208 18.3591 29.9983 16.3885 29.9983 14.4ZM26.6962 22.8945C26.4222 23.5502 26.092 24.0401 25.5629 24.5445C25.0338 25.0524 24.5272 25.3694 23.8443 25.6324C21.8705 26.3853 17.1837 26.216 14.996 26.216C12.8083 26.216 8.1177 26.3853 6.1439 25.636C5.46095 25.373 4.95062 25.056 4.42527 24.5481C3.89618 24.0401 3.56596 23.5538 3.29203 22.8981C2.51152 20.9997 2.68788 16.5002 2.68788 14.4C2.68788 12.2998 2.51152 7.79674 3.29203 5.90186C3.56596 5.24622 3.89618 4.75628 4.42527 4.25194C4.95437 3.7476 5.46095 3.42699 6.1439 3.16401C8.1177 2.4147 12.8083 2.58402 14.996 2.58402C17.1837 2.58402 21.8742 2.4147 23.848 3.16401C24.531 3.42699 25.0413 3.744 25.5667 4.25194C26.0958 4.75989 26.426 5.24622 26.6999 5.90186C27.4804 7.79674 27.3041 12.2998 27.3041 14.4C27.3041 16.5002 27.4804 20.9997 26.6962 22.8945Z" fill="white"/>
                </svg>
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72727 0C1.23545 0 0 1.18604 0 2.61818V26.1818C0 27.614 1.23545 28.8 2.72727 28.8H27.2727C28.7645 28.8 30 27.614 30 26.1818V2.61818C30 1.18604 28.7645 0 27.2727 0H2.72727ZM2.72727 2.61818H27.2727V26.1818H20.1982V17.3455H23.7355L24.2468 13.4182H20.1995V10.8812C20.1995 9.73702 20.4914 8.95942 22.2014 8.95942H24.4173V5.4C24.0395 5.35418 22.7291 5.27695 21.2223 5.27695C18.0791 5.27695 15.9382 7.09265 15.9382 10.4727V13.4182H12.3586V17.3455H15.9368V26.1818H2.72727V2.61818Z" fill="white"/>             
                </svg>
                    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.779 0.192102C27.4085 0.217979 27.0449 0.301421 26.7022 0.439174H26.6976C26.3687 0.564372 24.8049 1.1959 22.4274 2.15317L13.9078 5.59777C7.79444 8.0685 1.78498 10.5015 1.78498 10.5015L1.85654 10.475C1.85654 10.475 1.44221 10.6057 1.00942 10.8904C0.742045 11.0538 0.511968 11.2675 0.333112 11.5186C0.120755 11.8178 -0.0500533 12.2754 0.0134228 12.7485C0.117293 13.5484 0.657417 14.0281 1.0452 14.2929C1.4376 14.5611 1.81153 14.6863 1.81153 14.6863H1.82076L7.45629 16.5088C7.70904 17.2877 9.1736 21.9101 9.52561 22.9748C9.73335 23.6108 9.93532 24.0085 10.1881 24.3121C10.3104 24.4672 10.4535 24.5969 10.6255 24.701C10.7149 24.7509 10.8102 24.7903 10.9094 24.8184L10.8517 24.8051C10.869 24.8096 10.8828 24.8229 10.8955 24.8273C10.9417 24.8395 10.9729 24.8439 11.0317 24.8528C11.9239 25.112 12.6406 24.5802 12.6406 24.5802L12.6809 24.5492L16.0083 21.6408L21.5849 25.748L21.7119 25.8001C22.8741 26.2898 24.0513 26.0172 24.6733 25.5364C25.3 25.0522 25.5435 24.4329 25.5435 24.4329L25.5839 24.3332L29.8934 3.13924C30.0157 2.61629 30.0469 2.12658 29.9118 1.65127C29.7726 1.17023 29.4511 0.756498 29.0105 0.491247C28.6405 0.275325 28.2115 0.171105 27.779 0.192102ZM27.6625 2.46339C27.6578 2.53319 27.6717 2.52544 27.6394 2.6595V2.67169L23.3703 23.6451C23.3519 23.675 23.3207 23.7404 23.2353 23.8058C23.1453 23.8745 23.0737 23.9177 22.6986 23.7748L15.8778 18.7546L11.7577 22.3599L12.6232 17.0528L23.7673 7.08132C24.2267 6.67138 24.0732 6.58496 24.0732 6.58496C24.1055 6.08195 23.3796 6.4376 23.3796 6.4376L9.3271 14.7948L9.32248 14.7727L2.58709 12.5956V12.5911L2.56978 12.5878C2.58159 12.584 2.59315 12.5796 2.6044 12.5745L2.64133 12.5568L2.67711 12.5446C2.67711 12.5446 8.69118 10.1116 14.8045 7.64083C17.8652 6.40325 20.949 5.15681 23.3207 4.19511C25.6924 3.23896 27.4455 2.53763 27.5447 2.49996C27.6394 2.4645 27.5944 2.4645 27.6625 2.4645V2.46339Z" fill="white"/>
                </svg>
                </div>
            </div>
        </footer>
    )
}

export default Footer;