import { Box, Grid, Typography, Avatar } from '@mui/material';

const Player = ({ spotiftApi }) => {
	return (
		<Box>
			<Grid container px={3} sx={{
                bgcolor: 'background.paper',
                height: 100,
                cursor: {xs: 'pointer', md: 'auto'},
                width: '100%',
                borderTop: '1px solid #292929'
            }}>
				<Grid xs={12} md={4} Item sx={{display:'flex',  alignItems: 'center', justifyContent: 'flex-start'}}>
					<Avatar src={null} variant='square' sx={{width: 56, height: 56, mr: 2, }}/>
					<Box>
						<Typography sx={{color: 'text.primary', fontSize: 14}}>name</Typography>
						<Typography sx={{color: 'text.secondary', fontSize: 10}}>artist</Typography>
					</Box>
				</Grid>
				<Grid
					sx={{
						display: { xs: 'none', md: 'flex' },
						justifyContent: 'center',
						alignItems: 'center'
					}}
					md={4}
					Item
				>
					Play
				</Grid>
				<Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}} xs={6} md={4} Item>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;
