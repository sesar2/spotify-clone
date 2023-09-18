import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/icons-material/LibraryMusic';
import NavPlaylist from '../NavPlaylist/NavPlaylist';
import Library from '../../pages/Library';

const SideNav = ({ spotifyApi, token }) => {
	const [playlists, setPlaylists] = useState([]);
	const [loading, setLoading] = useState(true);

	
	

	const rederPlaylists = () => {
		if (loading) {
			return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((_, i) => (
				<NavPlaylist key={i} loading={loading} />
			));
		}

		return playlists.map((playlist, i) => (
			<NavPlaylist
				owner={playlist.owner.display_name}
				name={playlist.name}
				id={playlist.id}
				key={i}
				loading={loading}
				image={playlist.images.length > 0 ? playlist.images[0].url : '/057f3ec7ec8ce899d57c70d131d2dff9.jpg'}
			/>
		));
	};

	return (
		<Box
			sx={{
				bgcolor: '#000000',
				width: 340,
				height: '100%',
				display: { xs: 'none', md: 'flex'},
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/Spotify_Logo.png" alt="" width={'75%'} />
			</Box>
			<NavItem name="Home" Icon={HomeIcon} target="/" />
			
			<Box px={3} py={1}>
				<Divider sx={{ bgcolor: '#FFFFFF40' }} />
			</Box>

			<Box sx={{ overflowY: 'auto', flex: 1 }}>{<Library spotifyApi={spotifyApi} token={token}/>}</Box>
		</Box>
	);
};

export default SideNav;
