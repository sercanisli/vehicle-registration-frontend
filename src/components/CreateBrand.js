import React, { useState } from 'react';
import { useCreateBrandMutation } from '../store/apis/brandApi';

function CreateBrand() {

    const [brandName, setBrandName] = useState('');

    const [createBrand, results] = useCreateBrandMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const brand = {
            name:brandName,
        }

        await createBrand(brand);
    };

    const handleChange = (event) => {
        setBrandName(event.target.value);
    };

  return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={brandName}
                    onChange={handleChange}
                />
                <button type="submit">
                    {
                        results.isLoading ? (
                            <>Loading..</>
                        ) : (
                            <>Submit </>
                        )
                    }
                </button>
            </form>
  )
}

export default CreateBrand