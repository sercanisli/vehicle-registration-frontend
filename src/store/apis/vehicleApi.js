import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const vehicleApi = createApi({
    reducerPath:'vehicle',
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
            fetchAllVehicle:builder.query({
                providesTags:['Vehicle'],
                query:() =>{
                    return {
                        url:'/api/vehicles/details',
                        method:'GET',
                    };
                },
            }),
            fetchOneVehicle:builder.query({
                query:(id) => {
                   return {
                    url:`/api/vehicles/${id}`,
                    method:'GET',
                   };
                },
            }),
            updateVehicle:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Vehicle'}]
                },
                query : (vehicle) => {
                    return {
                        url : `/api/vehicles/${vehicle.id}`,
                        method : 'PUT',
                        body : {
                            id: vehicle.Id,
                            modelId: vehicle.modelId,
                            brandId: vehicle.brandId,
                            vehicleTypeId : vehicle.vehicleTypeId,
                            plate: vehicle.plate,
                            nickname : vehicle.nickname,
                            color: vehicle.color,
                            isActive : vehicle.isActive 
                        }
                    }
                }
            }),
            removeVehicle:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Vehicle'}]
                },
                query : (id) => {
                    return {
                        url : `/api/vehicles/${id}`,
                        method:'DELETE'
                    }
                }
            }),
            createVehicle:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Vehicle'}]
                },
                query: (vehicle) => {
                    return {
                        url : '/api/vehicles',
                        method : 'POST',
                        body : {
                            modelId: vehicle.modelId,
                            brandId: vehicle.brandId,
                            vehicleTypeId : vehicle.vehicleTypeId,
                            plate: vehicle.plate,
                            nickname : vehicle.nickname,
                            color: vehicle.color,
                            isActive : vehicle.isActive 
                        }
                    };
                },
            }),
        };
    },
});

export const {useFetchAllVehicleQuery, useFetchOneVehicleQuery, useRemoveVehicleMutation, useUpdateVehicleMutation, useCreateVehicleMutation } = vehicleApi;
export {vehicleApi};