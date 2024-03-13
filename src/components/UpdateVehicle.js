import React, { useState } from 'react';
import { useFetchAllVehicleTypeQuery } from '../store/apis/vehicleTypeApi';
import { useFetcAllBrandsQuery } from '../store/apis/brandApi';
import { useFetchAllModelsQuery } from '../store/apis/modelApi';
import { useUpdateVehicleMutation } from '../store/apis/vehicleApi';


function UpdateVehicle({vehicle}) {
    console.log(vehicle);
    const [id,setId] = useState(vehicle.id);
    const [modelName, setModelName] = useState(0);
    const [brandName, setBrandName] = useState(0);
    const [vehicleTypeName, setVehicleTypeName] = useState(0);
    const [plate, setPlate] = useState('');
    const [nickname, setNickname] = useState('');
    const [color, setColor] = useState('');
    const [isActive, setIsActive] = useState(false);

    const { data: vehicleTypes, isError: vehicleTypesError, isFetching: vehicleTypesFetching } = useFetchAllVehicleTypeQuery();
    const { data: brands, isError: brandsError, isFetching: brandsFetching } = useFetcAllBrandsQuery();
    const { data: models, isError: modelsError, isFetching: modelsFetching } = useFetchAllModelsQuery();
    const [updateVehicle] = useUpdateVehicleMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        const vehicle = {
            Id:id,
            modelId:modelName,
            brandId:brandName,
            vehicleTypeId:vehicleTypeName,
            plate:plate,
            nickname:nickname,
            color:color,
            isActive:isActive
        }

        await updateVehicle(vehicle);
    };

    if (vehicleTypesFetching || vehicleTypes === undefined || brandsFetching || brands === undefined || modelsFetching || models === undefined) {
        return (
            <>Loading..</>
        );
    }

    console.log(vehicleTypes);
    console.log(brands);

    const colors = ['white', 'black', 'gray', 'red', 'blue'];

    return (
        <div>
            <h2>Update Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Model Name:</label>
                    <select value={modelName} onChange={(e) => setModelName(e.target.value)}>
                        {models.map((model, index) => (
                            <option key={model.id} value={vehicle.model.modelName}>{model.modelName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Brand Name:</label>
                    <select value={brandName} onChange={(e) => setBrandName(e.target.value)}>
                        {brands.map((brand, index) => (
                            <option key={brand.id} value={index+1}>{brand.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Vehicle Type Name:</label>
                    <select value={vehicleTypeName} onChange={(e) => setVehicleTypeName(e.target.value)}>
                        {vehicleTypes.map((vehicleType,index) => (
                            <option key={vehicleType.id} value={index+1}>{vehicleType.typeName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Plate:</label>
                    <input type="text" value={plate} onChange={(e) => setPlate(e.target.value)} />
                </div>
                <div>
                    <label>Nickname:</label>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>
                <div>
                    <label>Color:</label>
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                        {colors.map((colorOption, index) => (
                            <option key={index} value={colorOption}>{colorOption}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Is Active:</label>
                    <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
                </div>
                <button type="submit">
                    Update
                </button>
            </form>
        </div>
    );
}

export default UpdateVehicle