import React, { useState } from 'react';
import { useCreateVehicleTypeMutation } from '../store/apis/vehicleTypeApi';


function CreateVehicleType() {

    const [typeName, setTypeName] = useState('');

    const [CreateVehicleType, results] = useCreateVehicleTypeMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const vehicleType = {
            typeName:typeName,
        }

        await CreateVehicleType(vehicleType);
    };

    const handleChange = (event) => {
        setTypeName(event.target.value);
    };

  return (
    <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={typeName}
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

export default CreateVehicleType