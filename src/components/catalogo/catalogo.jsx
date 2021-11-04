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
        <div>
            <TitleComponent name={name} lastName={lastName}/>
            <button type='button' onClick={updateName}>Click Me</button>
        </div>
    );
}
 
export default Catalogo;