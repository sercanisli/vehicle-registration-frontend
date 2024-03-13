import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { vehicleApi } from "./apis/vehicleApi";
import { brandApi } from "./apis/brandApi";
import { vehicleTypeApi } from "./apis/vehicleTypeApi";
import { modelApi } from './apis/modelApi';

export const store = configureStore({
    reducer:{
        [vehicleApi.reducerPath]: vehicleApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [vehicleTypeApi.reducerPath]: vehicleTypeApi.reducer,
        [modelApi.reducerPath]: modelApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(vehicleApi.middleware)
            .concat(brandApi.middleware)
            .concat(vehicleTypeApi.middleware)
            .concat(modelApi.middleware);
    },
});

setupListeners(store.dispatch);

export {useFetchAllVehicleQuery, useFetchOneVehicleQuery, useRemoveVehicleMutation, useUpdateVehicleMutation, useCreateVehicleMutation} from './apis/vehicleApi';
export {useFetcAllBrandsQuery, useFetchOneBrandQuery, useRemoveBrandMutation, useUpdateBrandMutation, useCreateBrandMutation} from './apis/brandApi';
export {useFetchAllVehicleTypeQuery, useFetchOneVehicleTypeQuery, useRemoveVehicleTypeMutation, useUpdateVehicleTypeMutation, useCreateVehicleTypeMutation} from './apis/vehicleTypeApi';
export {useFetchAllModelsQuery, useFetchOneModelQuery, useRemoveModelMutation, useUpdateModelMutation, useCreateModelMutation} from './apis/modelApi';

