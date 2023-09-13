import { Box, Button } from '@mui/material';
import { accessUrl } from '../config/config';
const Login = () => {
	return (
		<Box
			sx={{
				bgcolor: '#121212',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>
			<img
				src="/Spotify_Logo.png"
				alt="Techover spotify"
				style={{ marginBottom: 300, width: '70%', maxWidth: 500 }}
			/>
			<Button href={accessUrl} size="large" variant="contained">
				Login to Spotify
			</Button>
		</Box>
	);
};

export default Login;
