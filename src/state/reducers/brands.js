import {INITIAL_STATE} from "../constant";

const brandsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_BRANDS_DATA':
            return {brands: payload};
        case 'UPDATE_BRAND_NAME':
            return {
                ...state,
                brands: state.brands.map((item) => {
                        if(item.id === payload.id){
                            return {...item, displayName: payload.displayName}
                        }else{
                            return item;
                        }
                    }
                )
            };
        case 'DELETE_BRAND':
            return {
                ...state,
                brands: state.brands.filter(item => (item.id !== payload.id))
            };
        default:
            return state;
    }
};
export default brandsReducer;
