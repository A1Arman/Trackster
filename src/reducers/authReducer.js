import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INTIAL_STATE = {
    isSignedIn: null,
    fullName: null
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, fullName: action.payload};
        case SIGN_OUT:
            return { ...state, isSignedIn: false, fullName: null};
        default:
            return state;
    }
};