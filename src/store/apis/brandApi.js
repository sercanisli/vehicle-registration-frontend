import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const brandApi = createApi({
    reducerPath:'brand',
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
            fetcAllBrands : builder.query ({
                providesTags:['Brand'],
                query: () => {
                    return {
                        url: '/api/brands/GetAllBrandsAsync',
                        method : 'GET',
                    };
                },
            }),
            fetchOneBrand:builder.query({
                query:(id) => {
                    return {
                        url:`/api/brands/${id}`,
                        method : 'GET',
                    };
                },
            }),
            updateBrand:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Brand'}]
                },
                query: (id, brand) => {
                    return {
                        url : `/api/brands/${id}`,
                        method : 'PUT',
                        body : {
                            id: brand.Id,
                            name : brand.Name
                        }
                    };              
                },
            }),
            removeBrand:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Brand'}]
                },
                query:(id) => {
                    return {
                        url : `/api/brands/${id}`,
                        method:'DELETE'
                    };
                },
            }),
            createBrand:builder.mutation({
                invalidatesTags:() => {
                    return [{type:'Brand'}]
                },
                query: (brand) => {
                    return {
                        url : '/api/brands',
                        method : 'POST',
                        body : {
                            name : brand.name 
                        }
                    };
                },
            }),
        }
    }
})

export const { useFetcAllBrandsQuery, useFetchOneBrandQuery, useRemoveBrandMutation, useUpdateBrandMutation, useCreateBrandMutation} = brandApi;
export {brandApi};