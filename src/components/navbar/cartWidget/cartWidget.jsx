import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const CartWidget = () => {
    return ( 
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
        >
            <ShoppingCartIcon />
        </IconButton>
    );
}

export default CartWidget;