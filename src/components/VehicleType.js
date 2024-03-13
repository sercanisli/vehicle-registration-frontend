import React from 'react'
import { useFetchAllVehicleTypeQuery } from '../store/apis/vehicleTypeApi';
import { useNavigate } from 'react-router-dom';
import VehicleTypeItems from './VehicleTypeItems';

function VehicleType() {
    const {data, isError, isFetching} = useFetchAllVehicleTypeQuery();

    const navigate = useNavigate();

    const handleVehicleTypeAdd = () => {
        navigate('/create-vehicleType');
    };

    if(isFetching || data  === undefined){
        return (
          <>
            Loading..
          </>
        )
    }
    else if (isError)
    {
      return (
        <>Something went wrong.</>
      )
    }
  return (
    <div>
      <div>
        <button onClick={handleVehicleTypeAdd}>Add a VehicleType</button>
      </div>
        <div>
            {
                data.map((vehicleType) => {
                    return <VehicleTypeItems key={vehicleType.id} vehicleType= {vehicleType} />
                })
            }
        </div>
    </div>
  )
}

export default VehicleType