import { Grid, Box, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow';
import { formatTime } from '../../utils/formatTime';
import { renderNames } from '../../utils/renderNames';

const SongTable = ({ songs, loading, spotifyApi }) => {
	const renderSongs = () => {
		if (loading) {
			return [1, 2, 3, 4, 5, 6, 7].map((e, i) => <SongRow loading={loading} key={i} i={i} images={null} />);
		}
		return songs.map((song, i) => (
			<SongRow
				spotifyApi={spotifyApi}
				position={song.position}
				contextUri={song.contextUri}
				album={song.album.name}
				images={song.album.images}
				i={i}
				artist={renderNames(song.artists)}
				title={song.name}
				duration={formatTime(song.duration_ms)}
			/>
		));
	};
	return (
		<Box
			p={{ xs: 3, md: 4 }}
			sx={{
				flex: 1,
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Grid container px={2} py={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid sx={{ width: 35, display: 'flex', alignItems: 'center' }} item>
					#
				</Grid>
				<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
					Title
				</Grid>
				<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' } }}>
					Album
				</Grid>
				<Grid xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} item>
					<AccessTimeIcon sx={{ height: 20, width: 20 }} />
				</Grid>
			</Grid>
			<Box pb={2}>
				<Divider sx={{ width: '100%', height: 1 }} />
			</Box>
			{renderSongs()}
		</Box>
	);
};

export default SongTable;
