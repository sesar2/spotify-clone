import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import SideNav from '../SideNav/SideNav';
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import Playlist from '../../pages/Playlist';
import Player from '../Player/Player';
import MobileNav from '../MobileNav/MobileNav';
import NavPlaylist from '../NavPlaylist/NavPlaylist';
import Library from '../../pages/Library';

const Dashboard = ({ spotifyApi }) => {
	const [token, setToken] = useState(getAccessTokenFromStorage());
	const [playlists, setPlaylists] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function onMount() {
			await spotifyApi.setAccessToken(token);
		}
		if(token) onMount();
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
		<Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
				<SideNav spotifyApi={spotifyApi} token={token} renderPlaylists={renderPlaylists} />
				<Routes>
					<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} token={token}/>} />
					<Route path="/library" element={<Library spotifyApi={spotifyApi} token={token} renderPlaylists={renderPlaylists}/>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
			{token && <Player spotifyApi={spotifyApi} token={token}/>}
			<MobileNav/>
		</Box>
	);
};
export default Dashboard;
