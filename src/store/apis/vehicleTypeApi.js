import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const vehicleTypeApi = createApi({
    reducerPath:'vehicleType',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://localhost:7253',
        prepareHeaders:(headers, {getState}) => {
            headers['Content-Type'] = 'application/json';
            return headers;
        },
        fetchFn:(...args) => {
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchAllVehicleType:builder.query({
                query:() => {
                    return {
                        url:'/api/vehicletypes/GetAllVehicleTypesAsync',
                        method:'GET',
                    };
                },
            }),
            fetchOneVehicleType:builder.query({
                query:(id) => {
                    return {
                        url:`/api/vehicletypes/${id}`,
                        method:'GET',
                    };
                },
            }),
            updateVehicleType:builder.mutation({
                query:(id, vehicleType) => {
                    return {
                        url : `/api/vehicletypes/${id}`,
                        method : 'PUT',
                        body : {
                            id : vehicleType.id,
                            typeName: vehicleType.typeName
                        }
                    };
                },
            }),
            removeVehicleType:builder.mutation({
                query: (id) => {
                    return {
                        url : `/api/vehicletypes/${id}`,
                        method:'DELETE'
                    };
                },
            }),
            createVehicleType:builder.mutation({
                query: (vehicleType) => {
                    return {
                        url : '/api/vehicles',
                        method : 'POST',
                        body : {
                            typeName:vehicleType.typeName
                        }
                    };
                },
            }),
        }
    }
})

export const { useFetchAllVehicleTypeQuery, useFetchOneVehicleTypeQuery, useUpdateVehicleTypeMutation, useRemoveVehicleTypeMutation, useCreateVehicleTypeMutation } = vehicleTypeApi;
export {vehicleTypeApi};