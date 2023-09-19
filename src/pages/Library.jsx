import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavPlaylist from "../components/NavPlaylist/NavPlaylist";

const Library = ({token, spotifyApi}) => {
    const [playlists, setPlaylists] = useState([]);
	const [loading, setLoading] = useState(true);
   
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

    return ( <Box id='library' px={{xs: 3, md: 0}} sx={{display: 'flex', bgcolor: '#000000', flex: 1, flexDirection: 'column', overflowY: 'auto'}}>
        <Typography py={3} sx={{color: 'text.primary', fontSize: 30, display:{xs: 'block', md: 'none'}}}>
            Your library
        </Typography>
        {renderPlaylists()}
    </Box> );
}
 
export default Library;