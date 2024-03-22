import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Navbar({ handleAddZone }) {
   return (
	   <Box
		   component='div'
		   sx={{
			  height: 70,
			  width: 'calc(100vw - 250px)',
			  borderBottom: '1px solid #D8D8D8',
			  display: 'flex',
			  alignItems: 'center',
			  justifyContent: 'space-between',
		   }}
	   >
		  <Typography variant='body1' style={{ marginLeft: 40, fontWeight: 'bold', fontSize: 20, color: '#213049' }}>
			 Tasks
		  </Typography>
		  <button
			  style={{
				 height: 38,
				 width: 112,
				 border: 'none',
				 borderRadius: 8,
				 backgroundColor: '#992040',
				 fontWeight: 'normal',
				 fontSize: 14,
				 color: '#fff',
				 marginRight: 40,
				 cursor: 'pointer'
			  }}
			  onClick={handleAddZone}
		  >
			 Add Zone
		  </button>
	   </Box>
   )
}
