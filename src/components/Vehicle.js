import React from 'react'
import { useFetchAllVehicleQuery } from '../store/apis/vehicleApi';
import VehicleItems from './VehicleItems';
import { useNavigate } from 'react-router-dom';

function Vehicle() {

    const {data, isError, isFetching} = useFetchAllVehicleQuery();

    const navigate = useNavigate();

    const handleVehicleAdd = () => {
        navigate('/create-vehicle');
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

    console.log(data);
  return (
    <div>
      <div>
        <button onClick={handleVehicleAdd}>Add a Vehicle</button>
      </div>
        <div>
            {
                data.map((vehicle) => {
                    return <VehicleItems key={vehicle.id} vehicle= {vehicle} />
                })
            }
        </div>
    </div>
  )
}

export default Vehicle