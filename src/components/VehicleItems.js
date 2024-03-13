import React, { useState } from 'react';
import '../styles/vehicleItem.css';
import { useRemoveVehicleMutation, useUpdateVehicleMutation } from '../store/apis/vehicleApi';
import UpdateVehicle from './UpdateVehicle';

function VehicleItems({ vehicle }) {
  const [removeVehicle, result] = useRemoveVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const handleClick = () => {
    removeVehicle(vehicle.id);
  }

  const handleUpdateClick = () => {
    setUpdateModalOpen(true);
  }

  const handleModalClose = () => {
    setUpdateModalOpen(false);
  }

  return (
    <div>
      <div className='vehicleItemDiv'>
        <p>{vehicle.id}</p>
        <p>{vehicle.model.modelName}</p>
        <p>{vehicle.model.modelYear}</p>
        <p>{vehicle.brand.name}</p>
        <p>{vehicle.vehicleType.typeName}</p>
        <p>{vehicle.plate}</p>
        <p>{vehicle.nickname}</p>
        <p>{vehicle.color}</p>
        <p>{vehicle.isActive}</p>
        <button onClick={handleClick}>
          {
            result.isLoading ? (
              <>Loading</>
            ) : (
              <>Delete</>
            )
          }
        </button>
        <button onClick={handleUpdateClick}>Update</button>
        {isUpdateModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>&times;</span>
              <UpdateVehicle vehicle={vehicle} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VehicleItems;
