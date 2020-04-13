export const setBrandsData = (payload) => {
    return {
        type: 'SET_BRANDS_DATA',
        payload: payload
    }
};

export const updateBrandName = (payload) => {
    return {
        type: 'UPDATE_BRAND_NAME',
        payload: payload
    }
};

export const deleteBrand = (payload) => {
    return {
        type: 'DELETE_BRAND',
        payload: payload
    }
};
