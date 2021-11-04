import { Button, Container, Box } from '@mui/material';
import { useState } from 'react';
import TitleComponent from './title/title';

const Catalogo = (props) => {
    const [name, setName] = useState('Gonzalo');
    const [lastName, setLastName] = useState('Bernad');

    function updateName(){
        setName('Carlos');
        setLastName('Gutierrez')
        console.log(new Date())
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
                <Button
                    variant="contained"
                    size="large"
                    onClick={updateName}
                >Cambiar Nombre</Button>
            </Box>
        </Container>
    );
}
 
export default Catalogo;