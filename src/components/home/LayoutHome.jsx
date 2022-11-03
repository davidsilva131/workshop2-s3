import { Logout } from "@mui/icons-material";
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { UserContext } from "../../routes/Router";
import { useNavigate } from "react-router-dom";
import './LayoutHome.scss'
import { protectedRoute } from "../../utils/session";
import Footer from "./Footer";

function LayoutHome() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseSession = () => {
        setUser({
            user: '',
            password: '',
            img: '',
            name: ''
        })
        sessionStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        protectedRoute(navigate, setUser)
    }, []);

    const pago = () => {
        navigate("/payment");
      }; 
    
    

    return (
        <>
            <header className="header">
                <div>
                    <h1>Home</h1>
                    <h3>¡Qué bueno verte {user.name}!</h3>
                </div>

                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 50, height: 50 }} src={user.image} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 50,
                                    height: 50,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleCloseSession}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Cerrar sesión
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            </header>

            <Outlet />
            <button className="boton__pago" onClick={pago}>m</button>
            <Footer/>
        </>
    )
}
export default LayoutHome;
