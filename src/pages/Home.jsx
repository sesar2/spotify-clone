import { Box, Button, Avatar } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{
            flex: 1, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5
        }}>
			<Avatar sizes='large' src="/image0 (2).jpg" alt="profilbild" sx={{ maxHeight: '50%', maxWidth: '50%', height: 200, width: 200}}/>
			<Button size="large" variant="contained" href="https://lively-shortbread-5a5d4f.netlify.app">
				My portfolio
			</Button>
			<Button size="large" variant="contained" href="mailto:isac.danielsson03@gmail.com">
				Contact Me
			</Button>
		</Box>
	);
};

export default Home;
