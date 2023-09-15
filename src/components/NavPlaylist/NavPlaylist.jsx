import { Box, Skeleton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './NavPlaylist.css'

const NavPlaylist = ({name, id, loading, owner, image, }) => {


    return <NavLink className='playlist__navlink' to={loading ? '' : `/playlist/${id}`} style={{textDecoration: 'none', }}>
        <Box px={3} py={1} sx={{
                cursor: 'pointer',
                '&:hover': {color: 'white'},
                transition: 'color 0.2s ease-in-out',
                fontSize: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
            {loading ? <Skeleton sx={{width: 42, height: 42, borderRadius: 2}} variant="retangular"/> : <img style={{height: 42, width: 42, borderRadius: 2}} src={image} alt="" />}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                {loading ? <Skeleton sx={{fontSize: 16, width: '120px'}} variant="text"/> : <Typography sx={{fontSize: 16}}>{name}</Typography>}
                {loading ? <Skeleton sx={{fontSize: 12, width: '50px'}} variant="text"/> : <Typography sx={{fontSize: 12}}>{owner}</Typography>}
                </Box>
            </Box>
    </NavLink>
}

export default NavPlaylist