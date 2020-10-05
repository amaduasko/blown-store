import shopActionTypes from './shop.type'
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: '',
}

const shopReducer = (state = INITIAL_STATE, action) => {
    const {
        FETCH_COLLECTIONS_START,
        FETCH_COLLECTIONS_SUCCESS,
        FETCH_COLLECTIONS_FAILURE,
    } = shopActionTypes
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}

export default shopReducer
