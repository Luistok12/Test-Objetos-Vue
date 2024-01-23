// store.js
import { createStore } from 'vuex';

import moduloProducto from './moduloProducto';
// import otroModulo from './otroModulo';

const storeNormal = createStore({
    modules: {
        moduloProducto,
        // otroModulo,
    },
});

export default storeNormal;