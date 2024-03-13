import React, { useState } from 'react';
import { useRemoveBrandMutation, useUpdateBrandMutation } from '../store/apis/brandApi';
import UpdateBrand from './UpdateBrand';
import '../styles/vehicleItem.css';

function BrandItems({brand}) {

    const [removeBrand, result] = useRemoveBrandMutation();
    const [updateBrand] = useUpdateBrandMutation();
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

    const handleClick = () => {
        removeBrand(brand.id);
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
            <p>{brand.id}</p>
            <p>{brand.name}</p>
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
              <UpdateBrand brand={brand} />
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default BrandItems