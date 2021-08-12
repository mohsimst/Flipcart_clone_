import {navData} from '../../constants/data';
import {Box, makeStyles, Typography} from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';


const useStyle = makeStyles({
    component:{
    //   background: "green",
      display:'flex',
      justifyContent: 'space-between',
      margin: '55px 0px 25px 0',

    },
    container:{
        // background:'red',
        margin:'auto',
        padding:'8px 0 0 0',
        textAlign:'center',
    },
    image:{
        // width: 14,
        width: 64,
    },
    texts: {
        fontSize:14,
        fontWeight:600,
        // background:'yellow'
    }
})
const NavBar = () =>{
    const classes = useStyle();
   return(
       <Box className={classes.component}>
       {
           navData.map(data =>(
            <Box className={classes.container}>
                <img src={data.url} className={classes.image} />
                <Typography className={classes.texts}>{data.text}</Typography>
            </Box>
           ))    
       }
       </Box>
)}

export default NavBar;