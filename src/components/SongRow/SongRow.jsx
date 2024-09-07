import { Avatar, Grid, Box, Typography, Skeleton } from '@mui/material';
import SpotifyWebApi from 'spotify-web-api-node';

const SongRow = ({ images, title, artist, album, duration, i, loading , spotifyApi, position, contextUri}) => {
	const image = images?.length > 0 ? images[0].url : null;


    const onRowClick = async () => {
        const song = { context_uri: contextUri, offset: {position: position}, position_ms: 0 }
        await spotifyApi.play(song)
    }
	return (
		<Grid
            container
            onClick={()=>onRowClick()}
			px={2}
			py={1}
			sx={{
                cursor: 'pointer',
				width: '100%',
				color: 'text.secondary',
				fontSize: 14,
				'&:hover': { bgcolor: '#ffffff10' },
				borderRadius: 1,
				alignItems: 'center'
			}}
		>
			<Grid sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }} item>
				{i + 1}
			</Grid>
			<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
				{loading ? (
					<Skeleton variant="rectangular" sx={{ width: 40, height: 40 }} />
				) : (
					<Avatar src={image} variant="square" />
				)}
				<Box>
					
						{loading ? <Skeleton variant="text" width={130} height={24} /> : <Typography sx={{ fontSize: 16, color: 'text.primary',  }}>{title}</Typography>}
					
					
						{' '}
						{loading ? <Skeleton variant="text" width={50} height={18} /> : <Typography sx={{ fontSize: 14, color: 'text.secondary',  textWrap: 'nowrap'}}>{artist}</Typography>}
					
				</Box>
			</Grid>
			<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' } }}>
            {loading ? <Skeleton variant="text" width={50} height={24}/> : album}
			</Grid>
			<Grid xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textWrap: 'nowrap' }} item>
            {loading ? <Skeleton variant="text" width={26} height={24}/> : duration}
			</Grid>
		</Grid>
	);
};

export default SongRow;
