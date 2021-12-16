import {configureStore} from '@reduxjs/toolkit';
import {CryptoApi} from '../services/CryptoApi';
import {NewsApi} from '../services/NewsApi';

export default configureStore({
    reducer:{
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [NewsApi.reducerPath]: NewsApi.reducer
    },
});