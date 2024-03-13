import React, { useState } from 'react';
import {useUpdateVehicleTypeMutation } from '../store/apis/vehicleTypeApi';

function UpdateVehicleType({vehicleType}) {

    const [id,setId] = useState(vehicleType.id);
    const [typeName, setTypeName] = useState('');

    const [updateVehicleType] = useUpdateVehicleTypeMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const vehicleType = {
            Id:id,
            typeName:typeName
        }

        await updateVehicleType(vehicleType);
    };

    const handleChange = (event) => {
        setTypeName(event.target.value);
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={typeName}
                    onChange={handleChange}
                />
                <button type="submit">Update Vehicle Type</button>
            </form>
    </div>
  )
}

export default UpdateVehicleType