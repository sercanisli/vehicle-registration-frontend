import React, { useState } from 'react';
import { useRemoveVehicleTypeMutation, useUpdateVehicleTypeMutation, vehicleTypeApi } from '../store/apis/vehicleTypeApi';
import UpdateVehicleType from './UpdateVehicleType';
import '../styles/vehicleItem.css';

function VehicleTypeItems({vehicleType}) {

    const [removeVehicleType, result] = useRemoveVehicleTypeMutation();
    const [updateVehicleType] = useUpdateVehicleTypeMutation();
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

    const handleClick = () => {
        removeVehicleType(vehicleType.id);
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
            <p>{vehicleType.id}</p>
            <p>{vehicleType.typeName}</p>
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
              <UpdateVehicleType vehicleType={vehicleType} />
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default VehicleTypeItems