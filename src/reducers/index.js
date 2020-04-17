import { REMOVE_FEATURE, BUY_ITEM, SELECT_CAR } from '../actions';

export const initialState = {
    additionalPrice: 0,
    cars: [
        {
            id: 1,
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        {
            id: 2,
            price: 99999,
            name: ' 1980 Super Cool Car Name',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        }
    ],
    car: {},
    allFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car, features: state.car.features.filter(item => !(item.id === action.payload.id))
                },
                store: [...state.store, action.payload]
                ,
                additionalPrice: state.additionalPrice - action.payload.price
            };
        case BUY_ITEM:
            return {
                ...state,
                car: {
                    ...state.car, features: [...state.car.features, action.payload],
                },
                store: state.store.filter(item => item !== action.payload)
                ,
                additionalPrice: state.additionalPrice + action.payload.price
            };
        case SELECT_CAR:
            return {
                ...state,
                store : [...state.allFeatures],
                car: action.payload,
                additionalPrice: 0
            }
        default:
            return state;
    }
};