import tickets from '../components/tickets.json';
import { SET_FILTERS_FORM_STATE } from "../constants/tickets";

const initialState = {
    tickets: tickets.tickets,
    filtersForm: {
        all: false,
        withoutChange: false,
        one: false,
        two: false,
        three: false,
    },
};

export const ticketsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_FILTERS_FORM_STATE:
            return {
                ...state,
                filtersForm: payload.filterFormState,
            };

        default:
            return state;
    }
};