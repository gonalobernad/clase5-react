import { Button, Container, Box, Typography, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import TitleComponent from './title/title';

const Catalogo = (props) => {
    const [name, setName] = useState('Gonzalo');
    const [lastName, setLastName] = useState('Bernad');
    const [edad, setEdad] = useState(33);
    const [users, setUsers] = useState([]);
    
    // useEffect(() => {
    //     const users = [
    //         {id: 1, name: 'Alfredo'},
    //         {id: 2, name: 'Gustavo'},
    //         {id: 3, name: 'Javier'}
    //     ]
    //     setUsers(users);
    // },[]);

    function updateName(){
        setName('Carlos');
        setLastName('Gutierrez')
        console.log(new Date())
    }

    function setAge(){
        setEdad(edad + 1);
    }
    
    return ( 
        <Container maxWidth="xl">
            <Box sx={{
                    flexGrow: 1,
                    mx: 'auto',
                    marginTop: 5,
                    textAlign: 'center'
                }}
            >
                <TitleComponent name={name} lastName={lastName}/>
                <Typography variant='h4'>{edad} años</Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={updateName}
                >Nombre</Button>

                <Button
                    sx={{ml: 2}}
                    variant="contained"
                    size="large"
                    onClick={setAge}
                >Edad</Button>

                <List>
                    {users.map(({id, name}) => <ListItem key={id}> {name}</ListItem>)}
                </List>
            </Box>
        </Container>
    );
}
 
export default Catalogo;