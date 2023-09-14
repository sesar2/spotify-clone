import { Box, Typography, Button } from '@mui/material';
import { useEffect } from 'react';

const Logout = ({setOpenLogout, handleLogout, openLogout}) => {
    useEffect(() => {
		function handleClickOutside(event) {
			if (openLogout) {
				const logout = document.querySelector('.logout');
				if (!logout.contains(event.target)) {
					setOpenLogout(false);
				}
			}
		}
		// Add event listener when the menu is open
		if (openLogout) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			// Remove event listener when the menu is closed
			document.removeEventListener('mousedown', handleClickOutside);
		}

		// Cleanup the event listener when the component unmounts
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openLogout]);
	return (
		<div className='logout' style={{ borderRadius: 10, height: 300, width: 700, backgroundColor: '#000000', position: 'absolute', opacity: '99%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10000, gap: 120 }}>
			<Typography sx={{fontSize: 22}}>Are you sure you want to log out?</Typography>
			<Box sx={{display: 'flex', alignItems: 'center', gap: 3, }}>
				<Button href='/' onClick={()=>handleLogout()} variant="contained">Yes</Button>
				<Button onClick={()=>setOpenLogout(false)} variant="outlined">Cancel</Button>
			</Box>
		</div>
	);
};

export default Logout;
