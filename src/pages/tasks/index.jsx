import React, {useState} from "react";
import Box from "@mui/material/Box";
import {stores, users} from '../../utils/consts';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoneIcon from '@mui/icons-material/Done';
import Checkbox from '@mui/material/Checkbox';

export default function Tasks({showZone, zonesCount, handleDeleteZone}) {
   const [isHovering, setIsHovering] = useState(Array(zonesCount).fill(false));
   const [zoneModals, setZoneModals] = useState(Array(zonesCount).fill(false));
   const [checkedUsers, setCheckedUsers] = useState([]);
   
   console.log(checkedUsers);
   
   const handleMouseEnter = (index) => {
	  setIsHovering((prevHovering) => {
		 const newHovering = [...prevHovering];
		 newHovering[index] = true;
		 return newHovering;
	  });
   };
   
   const handleMouseLeave = (index) => {
	  setIsHovering((prevHovering) => {
		 const newHovering = [...prevHovering];
		 newHovering[index] = false;
		 return newHovering;
	  });
   };
   
   const handleZoneClick = (index) => {
	  setZoneModals((prevModals) => {
		 const newModals = [...prevModals];
		 newModals[index] = !newModals[index];
		 return newModals;
	  });
   };
   
   // const handleCloseModal = () => {
   //   setIsModalOpen(false);
   //   setSelectedZone(null);
   // };
   
   // const handleCheckboxChange = (index) => {
   //   const newCheckedUsers = [...checkedUsers];
   //   newCheckedUsers[index] = !newCheckedUsers[index];
   //   setCheckedUsers(newCheckedUsers);
   // };
   
   const Modal = ({index}) => {
	  
	  const handleCheckboxChange = (index, item) => {
		 const userNew = {...item}
		 const newCheckedUsers = [...checkedUsers];
		 newCheckedUsers[index] = !newCheckedUsers[index];
		 newCheckedUsers[index] ? newCheckedUsers[index] = userNew : null
		 setCheckedUsers(newCheckedUsers);
		 console.log('new check', Object.values(item));
	  };
	  
	  return (
		  <Box component='div'>
			 {zoneModals[index] && (
				 <Box
					 component='div'
					 style={{
						position: 'absolute',
						left: 700,
						top: 200,
					 }}
				 >
					<Box
						component='div'
						style={{
						   backgroundColor: '#eaeaea',
						   height: 600,
						   width: 700,
						   borderRadius: 20,
						   overflow: 'hidden',
						   position: 'relative',
						}}
					>
					   <Box
						   component='div'
						   sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 4, marginTop: 3, marginRight: 4, marginBottom: 3}}
					   >
						  <Typography variant='body1' style={{fontWeight: 'bold', fontSize: 20, color: '#4C4B5E'}}>
							 Zone {index + 1}
						  </Typography>
						  <IconButton
							  aria-label="delete"
						  >
							 <AddOutlinedIcon sx={{color: "#4C4B5E", fontSize: 30}}/>
						  </IconButton>
					   </Box>
					   <Box sx={{width: 700, height: '1px', backgroundColor: '#ccc'}}/>
					   <Box
						   component='div'
						   sx={{
							  display: 'flex',
							  alignItem: 'center',
							  justifyContent: 'space-between',
							  width: 640,
							  height: 40,
							  border: '2px solid #ccc',
							  marginLeft: 3.5,
							  marginTop: 3,
							  borderRadius: 1
						   }}
					   >
						  <input
							  type='text'
							  placeholder='Search'
							  style={{
								 width: 600,
								 height: 35,
								 backgroundColor: '#eaeaea',
								 border: 'none',
								 outline: 'none',
								 textIndent: '10px'
							  }}
						  />
						  <SearchOutlinedIcon sx={{color: "#4C4B5E", fontSize: 25, marginTop: 0.7, marginRight: 0.7}}/>
					   </Box>
					   <Box
						   component='div'
						   sx={{
							  display: 'flex',
							  flexDirection: 'column',
							  alignItems: 'start',
							  justifyContent: 'space-between',
							  marginLeft: 4,
							  marginTop: 7,
							  marginRight: 4,
							  marginBottom: 3,
							  gap: 3
						   }}
					   >
						  {users.map((item, index) => (
							  <Box
								  key={index}
								  component='div'
								  sx={{
									 display: 'flex',
									 flexDirection: 'row',
									 alignItems: 'center',
									 justifyContent: 'center',
									 gap: 5
								  }}
							  >
								 <Checkbox
									 id={`checkbox-${index}`}
									 checked={checkedUsers[index]}
									 onChange={() => handleCheckboxChange(index, item)}
								 />
								 <img src={item.profileImg} height={48} width={48} style={{borderRadius: 99, marginLeft: 12}}/>
								 <Typography
									 variant='body1'
									 style={{
										fontWeight: 'normal',
										fontSize: 16,
										color: '#4C4B5E',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										gap: 10
									 }}
								 >
									{item.userName} {checkedUsers[index] ? <DoneIcon sx={{color: "#0ac75d", fontSize: 30}}/> : ""}
								 </Typography>
							  </Box>
						  ))}
					   </Box>;
					   <button
						   onClick={() => handleZoneClick(index)}
						   style={{
							  position: 'absolute',
							  bottom: 20,
							  right: 20,
							  width: 134,
							  height: 40,
							  backgroundColor: '#D12B57',
							  border: 'none',
							  color: '#fff',
							  borderRadius: 4,
						   }}
					   >
						  Close
					   </button>
					</Box>
				 </Box>
			 )}
		  </Box>
	  
	  );
   };
   
   return (
	   <Box
		   component='main'
		   sx={{
			  backgroundColor: '#F3F3FA',
			  height: 'calc(100vh - 70px)',
			  width: 'calc(100vw - 250px)',
		   }}
	   >
		  <Box component='div' style={{paddingTop: 18}}>
			 <Box
				 component='div'
				 style={{
					backgroundColor: '#FFFFFF',
					marginLeft: 40,
					marginRight: 40,
					borderRadius: 10,
					display: 'flex',
					flexDirection: 'column',
					gap: 5
				 }}
			 >
				<Box
					component='div'
					style={{
					   display: 'flex',
					   flexDirection: 'row',
					   gap: 5
					}}
				>
				   {stores.map((item) => (
					   <Box
						   component='div'
						   style={{
							  backgroundColor: item.bgColor,
							  height: 92,
							  width: 368,
							  display: 'flex',
							  flexDirection: 'row',
							  alignItems: 'center',
							  justifyContent: 'center',
							  gap: 60,
							  marginTop: 24,
							  marginLeft: 20,
							  borderRadius: 10,
						   }}
					   >
						  <Box
							  component='div'
							  style={{
								 display: 'flex',
								 justifyContent: 'center',
								 alignItems: 'center'
							  }}
						  >
							 {item.icon}
						  </Box>
						  <Typography variant='body1' style={{fontWeight: 'normal', fontSize: 20, color: item.textColor}}>{item.title}</Typography>
						  <Typography variant='body1' style={{fontWeight: 'bold', fontSize: 30, color: item.textColor}}>{item.number}</Typography>
					   </Box>
				   ))}
				</Box>
				<Box
					component='div'
					sx={{
					   padding: 2,
					   backgroundColor: '#000',
					   color: '#FFFFFF',
					   width: 368,
					   marginTop: 3,
					   marginLeft: 2.5,
					   borderRadius: 2,
					   textAlign: 'center'
					}}
				>
				   <Typography variant='body1' sx={{fontWeight: 'bold', fontSize: 20, color: '#FFFFFF'}}>ZORLU CENTER</Typography>
				</Box>
				<Box component="div" sx={{display: 'flex', flexDirection: 'row', marginLeft: 2.5, gap: 1.5}}>
				   {Array.from({length: zonesCount}, (_, index) => (
					   <>
						  <Box
							  component="div"
							  key={index}
							  sx={{
								 display: "flex",
								 flexDirection: "column",
								 alignItems: "center",
								 justifyContent: "center",
								 gap: 3,
								 position: "relative",
								 cursor: isHovering[index] ? "pointer" : "default",
							  }}
							  onMouseEnter={() => handleMouseEnter(index)}
							  onMouseLeave={() => handleMouseLeave(index)}
							  onClick={() => handleZoneClick(index)}
						  >
							 <Box
								 component="div"
								 sx={{
									padding: 2,
									backgroundColor: "#ccc",
									width: 370,
									height: 320,
									marginTop: 2,
									borderRadius: 2,
									opacity: isHovering[index] ? 0.7 : 1,
									transition: "opacity 0.2s ease-in-out",
									display: "flex",
									flexDirection: "column",
									alignItems: "start",
									justifyContent: "center",
									gap: 3.5,
								 }}
							 >
								{checkedUsers.map((item) => (
									<Box
										component='div'
										style={{
										   display: 'flex',
										   gap: 15,
										   alignItems: 'center',
										   justifyContent: 'center'
										}}
									>
									   <img src={item.profileImg} height={48} width={48} style={{borderRadius: 99, marginLeft: 12}}/>
									   <Typography
										   variant='body1'
										   style={{
											  fontWeight: 'normal',
											  fontSize: 16,
											  color: '#4C4B5E',
											  display: 'flex',
											  alignItems: 'center',
											  justifyContent: 'center',
											  gap: 10
										   }}
									   >
										  {item.userName}
									   </Typography>
									</Box>
								))}
							 </Box>
							 <Typography variant="body1" sx={{fontWeight: "normal", fontSize: 30, color: "#992040"}}>
								Zone {index + 1}
							 </Typography>
							 {isHovering[index] && (
								 <>
									<IconButton
										aria-label="delete"
										onClick={() => handleDeleteZone(index)}
										sx={{position: "absolute", top: 25, right: 25}}
									>
									   <DeleteIcon sx={{color: "#000", fontSize: 40}}/>
									</IconButton>
									<Typography variant="body2" sx={{fontWeight: "normal", fontSize: 30, color: "#000", position: "absolute", top: 160, right: 70}}>
									   Tap to add users
									</Typography>
								 </>
							 )}
						  </Box>
						  <Modal index={index}/>
					   </>
				   ))}
				</Box>
				<Box component="div" sx={{display: 'flex', flexDirection: 'row', gap: 3, marginLeft: 2.5, marginTop: 4}}>
				   <Box component="div" sx={{width: 60, height: 60, backgroundColor: "#000", borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
					  BA
				   </Box>
				   <Box component="div" sx={{width: 60, height: 60, backgroundColor: "#992040", borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
					  SV
				   </Box>
				   <Box component="div" sx={{width: 60, height: 60, backgroundColor: "#fff", borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', border: '2px solid black'}}>
					  MARK
				   </Box>
				</Box>
				<Box component="div" sx={{display: 'flex', flexDirection: 'column', gap: 2, marginLeft: 2.5, marginTop: 2, marginBottom: 2}}>
				   <Box component="div" sx={{display: 'flex', flexDirection: 'row', gap: 3}}>
					  <Box component="div" sx={{width: 170, height: 30, backgroundColor: "#0a75ad", borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
						 ERKEK PARFÜM
					  </Box>
					  <Box component="div" sx={{width: 170, height: 30, backgroundColor: "#992040", borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
						 KADIN PARFÜM
					  </Box>
				   </Box>
				   <Box component="div" sx={{display: 'flex', flexDirection: 'row', gap: 3}}>
					  <Box component="div" sx={{width: 170, height: 30, backgroundColor: "#FFD700", borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
						 MAKYAJ
					  </Box>
					  <Box component="div" sx={{width: 170, height: 30, backgroundColor: "#008000", borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>
						 CİLT BAKIM
					  </Box>
				   </Box>
				</Box>
			 
			 </Box>
		  </Box>
	   </Box>
   )
}
