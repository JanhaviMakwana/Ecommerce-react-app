import * as actionTypes from '../actionTypes';

export const initialState = {
    userType: null,
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                userType: action.userType,
                user: action.user,
                error: null
            }

        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                userType: null,
                error: action.error
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                userType: null,
                user: null
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducer;
