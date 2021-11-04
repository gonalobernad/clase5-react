import { List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";
import { useState } from "react";


function LeftMenu({open, onOpen, onClose}) {

    const categoriesObj = [
        {
            id: 1,
            name: 'Categoria 1'
        },
        {
            id: 2,
            name: 'Categoria 2'
        },
        {
            id: 3,
            name: 'Categoria 3'
        },
    ]
    const [categories, changeCategories] = useState(categoriesObj);

    return ( 
        <SwipeableDrawer
            open={open}
            onOpen={onOpen}
            onClose={onClose}
        >
            <List>
                {categories.map(({id, name}) => (
                    <ListItem button key={id}>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
     );
}

export default LeftMenu;