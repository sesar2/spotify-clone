import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import './NavItem.css'

const NavItem = ({name, Icon, target}) => {
    return(
        <NavLink className='navlink' to={target} style={{textDecoration: 'none',}}>
            <Box px={3} py={1} sx={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
                '&:hover': {color: 'white'},
                transition: 'color 0.2s ease-in-out',
                fontSize: 18
            }}>

                {Icon && <Icon sx={{fontSize: 32, marginRight: 1}} />}
                {name}
            </Box>
        </NavLink>
    )
}

export default NavItem