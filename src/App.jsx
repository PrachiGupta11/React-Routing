import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Mounting from './Component/Mounting';
import Unmounting from './Component/Unmounting';
import Updating from './Component/Updating';
import Home from './Component/Home';

export default function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} > 
            <Route path='Mounting' element={<Mounting/>} />
            <Route path='Updating' element={<Updating/>} />
            <Route path='Unmounting' element={<Unmounting/>} />
          </Route>
        </Routes>
      </BrowserRouter>
   </div>
  )
}
