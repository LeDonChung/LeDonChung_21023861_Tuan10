import { configureStore } from '@reduxjs/toolkit';
import BikeSlice from './slices/BikeSlice';

    const store = configureStore({
        reducer: {
            bikes: BikeSlice,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

    export default store;