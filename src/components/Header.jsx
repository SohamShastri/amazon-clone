import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

import{
    Toolbar,
    AppBar,
    IconButton,
    Box,
    Typography,
    InputBase,
    Badge
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




function Header(){
    return(
        <>
        <AppBar position="static" className="header">
            <Toolbar className="header_toolbar">

                <Link to="/" className="header__logo">
                    <Typography variant="h5">
                        amazon<span>.in</span>
                    </Typography>
                </Link>

                <Box className="header__location">
                    <LocationOnOutlinedIcon />
                        <Box>
                            <Typography className="header__small">
                                Deliver to
                            </Typography>
                            <Typography className="header__bold">
                                India
                            </Typography>
                        </Box>
                </Box>

                <Box className="header__search">
                    <InputBase placeholder="Search Amazon.in" className="header__input" fullwidth/>
                    
                    <IconButton className = "header__searchIcon">
                        <SearchIcon />
                    </IconButton>
                </Box>

                <Link to="/login" className="header__option">
                    <Typography className="header__small">
                        Hello, sign in
                    </Typography>
                    <Typography className="header__bold">
                        Account & Lists
                        <ArrowDropDownIcon fontSize="small" />
                    </Typography>
                </Link>

                <Box className="header__option">
                    <Typography className="header__small">
                        Returns
                    </Typography>
                    <Typography className="header__bold">
                        & Orders
                    </Typography>
                </Box>

                <Link to="/checkout" className="header__basket">
                    <Badge badgeContent={0} color="warning">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    <Typography className="header__bold">
                        Cart
                    </Typography>
                </Link>

            </Toolbar>

            <Box className="header__bottom">
                <Typography>☰ All</Typography>
                <Typography>Today's Deals</Typography>
                <Typography>Customer Service</Typography>
                <Typography>Registry</Typography>
                <Typography>Gift Cards</Typography>
                <Typography>Sell</Typography>
        </Box>
        </AppBar>

        </>
    );

}

export default Header;

