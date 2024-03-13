import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const modelApi = createApi({
    reducerPath:'model',
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
            fetchAllModels:builder.query({
                query:() => {
                    return {
                        url: '/api/models/details',
                        method : 'GET',
                    };
                },
            }),
            fetchOneModel:builder.query({
                query:(id) => {
                    return {
                        url:`/api/models/${id}`,
                        method : 'GET',
                    };
                },
            }),
            updateModel:builder.mutation({
                query:(id, model) => {
                    return {
                        url : `/api/models/${id}`,
                        method : 'PUT',
                        body : {
                            id: model.Id,
                            brandId: model.brandId,
                            modelName : model.modelName,
                            modelYear : model.modelYear
                        }
                    };        
                },
            }),
            removeModel:builder.mutation({
                query:(id) => {
                    return {
                        url : `/api/models/${id}`,
                        method:'DELETE'
                    };
                },
            }),
            createModel: builder.mutation({
                query:(model) =>{
                    return {
                        url : '/api/models',
                        method : 'POST',
                        body : {
                            brandId: model.brandId,
                            modelName : model.modelName,
                            modelYear: model.modelYear
                        }
                    };
                },
            }),
        }
    }
})

export const { useFetchAllModelsQuery, useFetchOneModelQuery, useRemoveModelMutation, useUpdateModelMutation, useCreateModelMutation} = modelApi;
export {modelApi};