export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: payload.language === 'ru' ? 'ru' : 'en',
            }
        default: 
            return state;
    }
}