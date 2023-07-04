export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: payload.language === 'ru' ? 'ru' : 'en',
            }
        case 'SET_MODAL-FORM': 
            return {
                ...state,
                isModalForm: payload.modalFormAction,
            }
        case 'SET_IS-BURGER_MENU': 
            return {
                ...state,
                isBurgerMenu: payload.isBurgerMenu,
            }
        case 'SET_MODAL-VIDEO': 
            return {
                ...state,
                isModalVideo: payload.modalVideoAction,
            } 
        default: 
            return state;
    }
}