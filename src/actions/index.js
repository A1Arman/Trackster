import { SIGN_IN, SIGN_OUT, CREATE_LEAD, GET_LEADS} from './types';
import TokenService from '../services/token-service';

export const signIn = (userId, fullName) => dispatch => {
    fetch(`http://localhost:8000/api/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId,
            fullName
        })
    })
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(user => {
            TokenService.saveAuthToken(user.authToken)
            dispatch({type: SIGN_IN, payload: {userId, fullName}});
        })
        .catch(err => {
            console.log(err)
        })
};

export const signOut = () => dispatch => {
    TokenService.clearAuthToken();
    dispatch({ type: SIGN_OUT })
};

export const createLead = (formValues) => dispatch => {
    dispatch({ type: CREATE_LEAD, payload: formValues })
}