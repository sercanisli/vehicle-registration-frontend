import React from 'react'
import { useFetchAllModelsQuery } from '../store/apis/modelApi';
import { useNavigate } from 'react-router-dom';
import ModelItems from './ModelItems';

function Models() {

    const {data, isError, isFetching} = useFetchAllModelsQuery();

    const navigate = useNavigate();

    const handleModelAdd = () => {
        navigate('/create-model');
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
        <button onClick={handleModelAdd}>Add a Model</button>
      </div>
        <div>
            {
                data.map((model) => {
                    return <ModelItems key={model.id} model= {model} />
                })
            }
        </div>
    </div>
  )
}

export default Models