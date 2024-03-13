import React, { useState } from 'react';
import { useFetcAllBrandsQuery } from '../store/apis/brandApi';
import { useUpdateModelMutation } from '../store/apis/modelApi';


function UpdateModel({model}) { 
    const [id,setId] = useState(model.id);
    const [modelName, setModelName] = useState('');
    const [modelYear, setModelYear] = useState('');
    const [brandName, setBrandName] = useState(0);

    const { data, isError, isFetching } = useFetcAllBrandsQuery();
    const [updateModel] = useUpdateModelMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const model = {
            Id:id,
            brandId:brandName,
            modelName:modelName,
            modelYear:modelYear
        }

        await updateModel(model);
    };

    if (isFetching || data===undefined ) {
        return (
            <>Loading..</>
        );
    }
    const handleChangeModelName = (event) => {
        setModelName(event.target.value);
    };
    const handleChangeModelYear = (event) => {
        setModelYear(event.target.value);
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Brand Name:</label>
            <select value={brandName} onChange={(e) => setBrandName(e.target.value)}>
                {data.map((brand, index) => (
                    <option key={brand.id} value={index+1}>{brand.name}</option>
                ))}
            </select>
        </div>
        <div>
            <label>Model Name:</label>
            <input
                type="text"
                value={modelName}
                onChange={handleChangeModelName}
            />
        </div>
        <div>
            <label>Model Year:</label>
            <input
                type="text"
                value={modelYear}
                onChange={handleChangeModelYear}
            />
        </div>
        <button type="submit">
            Update
        </button>
    </form>
  )
}

export default UpdateModel