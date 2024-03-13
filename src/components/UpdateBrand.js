import React, { useState } from 'react';
import {useUpdateBrandMutation } from '../store/apis/brandApi';


function UpdateBrand({brand}) {
    const [id,setId] = useState(brand.id);
    const [brandName, setBrandName] = useState('');

    const [updateBrand] = useUpdateBrandMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const brand = {
            Id:id,
            name:brandName
        }

        await updateBrand(brand);
    };

    const handleChange = (event) => {
        setBrandName(event.target.value);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={brandName}
                    onChange={handleChange}
                />
                <button type="submit">Update Brand</button>
            </form>
    </div>
  )
}

export default UpdateBrand