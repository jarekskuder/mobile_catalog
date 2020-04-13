import {LS_ACTIONS} from "../constant";

const LS = store => next => action => {
    const result = next(action);
    if(LS_ACTIONS.includes(action.type)){
        localStorage.setItem('brands', JSON.stringify(store.getState().brands));
    }
    return result;
};

export default LS;
