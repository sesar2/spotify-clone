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
	const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 3000); // 5000 milliseconds (5 seconds)
    
        return () => clearTimeout(timer); // Clear the timer on unmount
      }, []);
   
    const renderPlaylists = () => {
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
	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			setPlaylists(data.body.items);
			console.log(data.body.items);
			setLoading(false);
		}

		getPlaylists();
	}, [spotifyApi, token]);


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
			<Box px={3}>{loading ? isVisible && <p>If the playlists continue to load endlessly, attempt using the app as a phone with the dev tools (spotifyAPI bug)</p> : <></>}</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylists()}</Box>
		</Box>
	);
};

export default SideNav;
