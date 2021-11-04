import { Typography, Box } from "@mui/material";

const TitleComponent = ({name, lastName}) => { 
    return (
        <Typography variant="h2">
            Hola {name} {lastName}
        </Typography>
    );
}
 
export default TitleComponent;