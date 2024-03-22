import React, {useState} from "react";
import Box from '@mui/material/Box';
import Sidebar from './sidebar/index';
import Navbar from "./navbar/index.jsx";
import {NavLink} from "react-router-dom";

import Tasks from "../pages/tasks/index.jsx";
import Checklist from "../pages/checklist/index.jsx";
import Visit from '../pages/visit/index'
import Shop from '../pages/shop/index'
import Goal from '../pages/goal/index'
import Analytics from '../pages/analytics/index'
import Settings from '../pages/settings/index'

const components = {
   '/tasks': Tasks,
   '/checklist': Checklist,
   '/visit': Visit,
   '/shop': Shop,
   '/goal': Goal,
   '/analytics': Analytics,
   '/settings': Settings
};

export default function MainLayout() {
   const [selectedComponent, setSelectedComponent] = useState('/tasks');
   const [showZone, setShowZone] = useState(false);
   const [zonesCount, setZonesCount] = useState(0);
   
   const Component = components[selectedComponent];
   
   const handleAddZone = () => {
	  if (zonesCount < 5) {
		 setShowZone(true);
		 setZonesCount(zonesCount + 1);
	  }
   };
   
   const handleDeleteZone = (index) => {
	  setZonesCount((prevZonesCount) => prevZonesCount - 1);
   };
   
   return (
	   <Box component='section' sx={{display: 'flex', height: '100vh', width: '100vw'}}>
		  <Sidebar onComponentChange={setSelectedComponent}/>
		  <Box component='div'>
			 <Navbar handleAddZone={handleAddZone}/>
			 {Component && <Component showZone={showZone} zonesCount={zonesCount} handleDeleteZone={handleDeleteZone}/>}
		  </Box>
	   </Box>
   )
}
