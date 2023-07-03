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
                isModalForm: payload.action,
            }
        case 'SET_IS-BURGER_MENU': 
            return {
                ...state,
                isBurgerMenu: payload.isBurgerMenu,
            } 
        default: 
            return state;
    }
}