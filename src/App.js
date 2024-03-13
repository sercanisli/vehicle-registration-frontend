import './App.css';
import { Routes, Route } from 'react-router-dom';
import Vehicle from './components/Vehicle';
import CreateVehicle from './components/CreateVehicle';
import Brands from './components/Brands';
import UpdateVehicle from './components/UpdateVehicle';
import CreateBrand from './components/CreateBrand';
import VehicleType from './components/VehicleType';
import CreateVehicleType from './components/CreateVehicleType';
import Models from './components/Models';
import CreateModel from './components/CreateModel';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/vehicle' element={<Vehicle />} />
          <Route path='/create-vehicle' element={<CreateVehicle />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/update-vehicle/:id' element={<UpdateVehicle />} />
          <Route path='/create-brand' element={<CreateBrand />} />
          <Route path='/vehicle-type' element={<VehicleType />} />
          <Route path='/create-vehicleType' element={ <CreateVehicleType /> } />
          <Route path='/models' element = {<Models />} />
          <Route path='/create-model' element = {<CreateModel />} />
        </Routes>
    </div>
  );
}

export default App;
