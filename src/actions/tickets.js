import { SET_FILTERS_FORM_STATE } from "../constants/tickets";

export const setFilterFormState = (filterFormState) => {
    return {
        type: SET_FILTERS_FORM_STATE,
        payload: {
            filterFormState
        }
    }
};