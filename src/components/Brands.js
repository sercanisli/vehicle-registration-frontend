import React from 'react'
import { useFetcAllBrandsQuery } from '../store/apis/brandApi';
import { useNavigate } from 'react-router-dom';
import BrandItems from './BrandItems';

function Brands() {

    const {data, isError, isFetching} = useFetcAllBrandsQuery();

    const navigate = useNavigate();

    const handleBrandAdd = () => {
        navigate('/create-brand');
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
        <button onClick={handleBrandAdd}>Add a Brand</button>
      </div>
        <div>
            {
                data.map((brand) => {
                    return <BrandItems key={brand.id} brand= {brand} />
                })
            }
        </div>
    </div>
  )
}

export default Brands