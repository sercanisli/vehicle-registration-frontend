import React, { useState } from 'react';
import { useRemoveModelMutation, useUpdateModelMutation } from '../store/apis/modelApi';
import UpdateModel from './UpdateModel';
import '../styles/vehicleItem.css';

function ModelItems({model}) {

    const [removeModel, result] = useRemoveModelMutation();
    const [updateModel] = useUpdateModelMutation();
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

    const handleClick = () => {
        removeModel(model.id);
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
            <p>{model.id}</p>
            <p>{model.brand.name}</p>
            <p>{model.modelName}</p>
            <p>{model.modelYear}</p>
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
              <UpdateModel model={model} />
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default ModelItems