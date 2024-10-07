import { Box, Avatar, Typography, Skeleton } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { useParams, } from 'react-router-dom';
import SongTable from '../components/SongTable/SongTable';


const Playlist = ({ spotifyApi, token }) => {
	const [playlistInfo, setPlaylistInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	const [songs, setSongs] = useState([]);
	const { id } = useParams();

	const formatSongs = useCallback(
		(items) =>
			items.map((item, i) => {
			const { track } = item;
			track.contextUri = `spotify:playlist:${id}`;
			track.position = i;
			return track;
		}), 
		[id]
	)

	useEffect(() => {
		async function getData() {
			try {
				const playlistData = await spotifyApi.getPlaylist(id);
				setPlaylistInfo({
					name: playlistData.body.name,
					image:
						playlistData.body.images.length > 0
							? playlistData.body.images[0].url
							: '/057f3ec7ec8ce899d57c70d131d2dff9.jpg'
				});
				//format songs
				const { items } = playlistData.body.tracks;
				const formattedSongs = formatSongs(items);
				setSongs(formattedSongs);
				setLoading(false);
			} catch (e) {
				console.error(e);
			}
		}

		getData();
	}, [id, formatSongs, spotifyApi, token]);

	return (
		<Box id="Playlist__page" sx={{ bgcolor: '#121212', flex: 1, overflowY: 'auto' }}>
			<Box
				p={{ xs: 3, md: 4 }}
				sx={{
					width: '100%',
					background: 'linear-gradient(0deg, #121212 0%, #1bd76060 100%)',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
					gap: 3,
					boxSizing: 'border-box',
					flexDirection: { xs: 'column', md: 'row' }
				}}
			>
				{loading ? (
					<Skeleton
						sx={{
							borderRadius: 2,
							boxShadow: 15,
							width: { xs: '100%', md: 235 },
							height: { xs: '100%', md: 235 }
						}}
						variant="rectangular"
					/>
				) : (
					<Avatar
						src={playlistInfo?.image}
						variant="square"
						sx={{
							borderRadius: 2,
							boxShadow: 15,
							width: { xs: '100%', md: 235 },
							height: { xs: '100%', md: 235 }
						}}
					/>
				)}
				<Box>
					
						<Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>
							Playlist
						</Typography>
					{loading ? (
						<Skeleton variant="text" sx={{ width: 300, fontSize: { xs: 42, md: 72 } }} />
					) : (
						<Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 'bold', color: 'text.primary' }}>
							{playlistInfo?.name}
						</Typography>
					)}
				</Box>
			</Box>
			<SongTable songs={songs} loading={loading} spotifyApi={spotifyApi}/>
		</Box>
	);
};

export default Playlist;
