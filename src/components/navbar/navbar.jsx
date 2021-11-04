import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './cartWidget/cartWidget';
import ProductSearch from './productsSearch/productsSearch';
import LeftMenu from './leftMenu/leftMenu';

const NavBar = () =>  {

  const [openLeftMenu, changeOpenLeftMenu] = React.useState(false);

  const handleSidebarOpen = () => {
    changeOpenLeftMenu(true);
  };

  const handleSidebarClose = () => {
    changeOpenLeftMenu(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            eCommerce
          </Typography>
          <ProductSearch />
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
      <LeftMenu 
        open={openLeftMenu}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose} 
      />
    </React.Fragment>
  );
}

export default NavBar;