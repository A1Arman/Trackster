import _ from 'lodash';
import {
    GET_LEAD,
    GET_LEADS,
    CREATE_LEAD,
    UPDATE_LEAD,
    DELETE_LEAD
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case GET_LEADS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case GET_LEAD:
            return { ...state, [action.payload.id]: action.payload};
        case CREATE_LEAD:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_LEAD:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_LEAD:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}