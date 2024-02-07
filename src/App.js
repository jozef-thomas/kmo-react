import logo from './logo.svg';
import './App.css';
import ViewData from './component/ViewData';

import Appbar from './component/Appbar';
import { Route, Routes } from 'react-router-dom';
import AddData from './component/AddData';

function App() {
  return (
    <div className="App">
      {/* <ViewData/> */}
      <Appbar/>
      <Routes>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>

      </Routes>
    </div>
  );
}

export default App;
