import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayerControls from '../PlayerControls/PlayerControls';
import { renderNames } from '../../utils/renderNames';

const PlayerOverlay = ({ active, playerOverlayIsOpen, closeOverlay, progress, current_track, player, duration, is_paused }) => {
	console.log(playerOverlayIsOpen);
	return (
		<Box
			id="PlayerOverlay"
			sx={{
				width: '100%',
				height: 'calc(100vh - 75px)',
				bgcolor: '#121212',
				display: { xs: 'block', md: 'none' },
				position: 'fixed',
				top: 0,
				left: 0,
				transition: 'all 0.3s',
				transform: playerOverlayIsOpen ? 'translateY(0)' : 'translateY(100vh)'
			}}
		>
			<Container sx={{ height: '100%', background: 'linear-gradient(0deg,  #121212 0%, #39d47250 100%)' }}>
				<Grid container justifyContent="space-between" sx={{ height: '100%' }} direction={'column'}>
					<Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
						<IconButton
							onClick={() => closeOverlay()}
							sx={{
								paddingLeft: '0px'
							}}
						>
							<KeyboardArrowDownIcon fontSize="large" sx={{ color: 'text.primary' }} />
						</IconButton>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{
							backgroundImage: `url("${current_track?.album.images[0].url}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover'
						}}
					></Grid>
					<Grid item xs={1}>
						<Typography sx={{ color: 'text.primary', fontSize: 28 }}>{current_track?.name}</Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 18 }}>
							{!current_track ? '' : renderNames(current_track.artists)}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						{active ? (
							<PlayerControls
								duration={duration}
								progress={progress}
								player={player}
								is_paused={is_paused}
							/>
						) : (
							<Box>Please Transfer Playback!</Box>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default PlayerOverlay;
