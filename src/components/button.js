import {Button} from "@mui/material"

export default function GradientButton({title, style, onClick}){
    return(
        <Button style={
            {...{
                background: 'linear-gradient(to right, #025464, #1B2CC1)',
                fontSize: '1rem', color: '#fbfffe', 
                fontFamily: 'Catamaran-Bold', 
                textTransform:'none', 
            },
            ...{style}}
        }>
        <h2 style={{margin:'0pt', color:"#fbfffe"}}>
        {title}
        </h2>
        </Button>
    )
}