import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent.jsx';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent.jsx';
import CategoryComponent from './components/CategoryComponent.jsx';

//axios
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';
function AppLayout() {

  const [activeHeader, setActiveHeader] = useState(true);  

  return (
    <>
    {activeHeader && <HeaderComponent setActiveHeader={setActiveHeader} />}
    <NavbarComponent />
    <CategoryComponent />

     <Outlet />
    </>
  )
}

export default AppLayout
