
export const switchPlaylist = (newPlaylistId) => {
    setCurrentPlaylistId(newPlaylistId); // Update the current playlist ID
    setLoading(true); // Optionally reset loading state
};


export const handlePlaylistClick = (playlistId) => {
    switchPlaylist(playlistId);
};