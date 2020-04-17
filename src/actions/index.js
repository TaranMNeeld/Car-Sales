export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';
export const SELECT_CAR = 'SELECT_CAR';

export const removeFeature = item => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    };
};

export const buyItem = (item) => {
    return {
        type: BUY_ITEM,
        payload: item
    };
};

export const selectCar = (car) => {
    return {
        type: SELECT_CAR,
        payload: car
    };
};