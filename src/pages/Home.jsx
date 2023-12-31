import { Box, Button, Avatar } from '@mui/material';
import Logout from '../components/Logout/Logout';
import { useState, useEffect } from 'react';

const Home = () => {
	const [openLogout, setOpenLogout] = useState(false);

	const handleLogout = () => {
		sessionStorage.removeItem('spotifyToken');
	};

	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<Avatar
				sizes="large"
				src="/image0 (2).jpg"
				alt="profilbild"
				sx={{ maxHeight: '50%', maxWidth: '50%', height: 200, width: 200 }}
			/>
			<Button size="large" variant="contained" href="https://lively-shortbread-5a5d4f.netlify.app">
				My portfolio
			</Button>
			{openLogout ? (
				<Logout openLogout={openLogout} setOpenLogout={setOpenLogout} handleLogout={handleLogout} />
			) : (
				<></>
			)}
			<Button size="large" variant="contained" href="mailto:isac.danielsson03@gmail.com">
				Contact Me
			</Button>
			<Button onClick={() => setOpenLogout(!openLogout)} size="large" variant="outlined">
				log out
			</Button>
		</Box>
	);
};

export default Home;
