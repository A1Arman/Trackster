import { SIGN_IN, SIGN_OUT, CREATE_LEAD, GET_LEADS} from './types';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createLead = (formValues) => dispatch => {
    dispatch({ type: CREATE_LEAD, payload: formValues })
}