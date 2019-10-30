import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_LEAD, 
    GET_LEADS,
    GET_LEAD,
    UPDATE_LEAD,
    DELETE_LEAD
    } from './types';
import TokenService from '../services/token-service';
import leadgen from '../apis/leadgen';
import auth from '../apis/auth';

export const signIn = (userId, fullName) => async dispatch => {
    const user = { userId, fullName }
    const response = await auth.post('/auth/login', user)
    TokenService.saveAuthToken(response.data.authToken);

    dispatch({type: SIGN_IN, payload: fullName});
};

export const signOut = () => dispatch => {
    TokenService.clearAuthToken();
    dispatch({ type: SIGN_OUT })
};

export const createLead = formValues => async dispatch => {
    const response = await leadgen.post('/leads', formValues);
    dispatch({ type: CREATE_LEAD, payload: response.data })
};

export const getLeads = () => async dispatch => {
    const response = await leadgen.get('/leads');

    dispatch({ type: GET_LEADS, payload: response.data });
};

export const getLead = (id) => async dispatch => {
    const response = await leadgen.get(`/leads/${id}`);

    dispatch({ type: GET_LEAD, payload: response.data });
};

export const updateLead = (id, formValues) => async dispatch => {
    const response = await leadgen.put(`/leads/${id}`);

    dispatch({ type: UPDATE_LEAD, payload: response.data });
};

export const deleteLead = (id) => async dispatch => {
    await leadgen.delete(`/leads/${id}`);

    dispatch({ type: DELETE_LEAD, payload: id });
}