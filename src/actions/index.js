export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

export const removeFeature = featureName => {
    console.log(featureName);
    return {
        type: REMOVE_FEATURE
    };
};

export const buyItem = item => {
    console.log(item);
    return {
        type: BUY_ITEM,
        payload: item
    };
};