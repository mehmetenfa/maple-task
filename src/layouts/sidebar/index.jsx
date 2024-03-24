import { useState } from "react";
import { Box, Typography, Select, MenuItem } from '@mui/material';
import logo from '../.././assets/image 6.png';
import { sidebarUsers, sidebar } from '../../utils/consts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink } from "react-router-dom";

export default function Sidebar({ onComponentChange }) {
   const [activeIndex, setActiveIndex] = useState(null);
   const [selectedUser, setSelectedUser] = useState(null);
   const [open, setOpen] = useState(false);
   const [selectedPage, setSelectedPage] = useState('/tasks');
   
   const handleOpen = () => {
	  setOpen(true);
   };
   
   const handleClose = () => {
	  setOpen(false);
   };
   
   const handleChange = (event) => {
	  setSelectedUser(event.target.value);
	  setOpen(false);
   };
   
   const handleItemClick = (index, route) => {
	  setActiveIndex(index);
	  onComponentChange(route);
   };
   
   return (
	   <Box
		   component='div'
		   sx={{
			  height: '100vh',
			  width: 250,
			  borderRight: '1px solid #D8D8D8',
		   }}
	   >
		  <Box component='div' style={{ marginLeft: 40, marginTop: 20 }}>
			 <img
				 src={logo}
				 alt="maple logo"
			 />
		  </Box>
		  <Box component='section' style={{ marginLeft: 15, marginTop: 51 }}>
			 {sidebarUsers.map((user, index) => (
				 <Box
					 key={index}
					 component='div'
					 sx={{
						width: '200px',
						height: '50px',
						display: 'flex',
						flexDirection: 'row',
						gap: 2,
						alignItems: 'center',
						border: '1px solid #E9EDF0',
						borderRadius: 2
					 }}
					 onClick={handleOpen}
				 >
					<img src={user.profileImg} alt='user img' height={32} width={32} style={{ borderRadius: 99, marginLeft: 12 }} />
					<Box component='div' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
					   <Typography variant='body1' style={{ fontWeight: 'bold', fontSize: 14, color: '#213049' }}>{user.userName}</Typography>
					   <Typography variant='body1' style={{ fontWeight: 'normal', fontSize: 11, color: '#979797' }}>{user.userRole}</Typography>
					</Box>
					<Box component='div' style={{ position: 'absolute', left: 160, top: 130, transform: 'translateY(-50%)' }}>
					   <ArrowDropDownIcon sx={{ marginLeft: 2 }} />
					</Box>
				 </Box>
			 ))}
			 {/*<Select*/}
				{/* open={open}*/}
				{/* onClose={handleClose}*/}
				{/* onOpen={handleOpen}*/}
				{/* value={selectedUser}*/}
				{/* onChange={handleChange}*/}
				{/* style={{ display: 'none' }}*/}
			 {/*>*/}
				{/*{users.map((user, index) => (*/}
				{/*	<MenuItem key={index} value={user}>*/}
				{/*	   {user.userName}*/}
				{/*	</MenuItem>*/}
				{/*))}*/}
			 {/*</Select>*/}
		  </Box>
		  <Box component='section' style={{ marginTop: 22, marginLeft: 15 }}>
			 {sidebar.map((item, index) => (
				 <Box
					 key={index}
					 component='div'
					 sx={{ marginBottom: 1, height: 50, width: 250 }}
				 >
					<NavLink to={item.route} style={{ textDecoration: 'none' }}>
					   <button
						   onClick={() => {
							  handleItemClick(index, item.route);
							  setSelectedPage(item.route);
						   }}
						   style={{
							  display: 'flex',
							  alignItems: 'center',
							  justifyContent: 'start',
							  gap: 14,
							  height: 36,
							  width: 220,
							  backgroundColor: activeIndex === index ? '#BEBECD40' : '#fff',
							  border: 'none',
							  borderRadius: 5
						   }}
					   >
						  <Box component='div' style={{ marginLeft: 14 }}>
							 {activeIndex === index ? item.icon.active : item.icon.passive}
						  </Box>
						  <span style={{ fontWeight: 'bold', fontSize: 16, color: activeIndex === index ? '#992040' : '#213049' }}>{item.title}</span>
					   </button>
					</NavLink>
				 </Box>
			 ))}
		  </Box>
	   </Box>
   );
}
