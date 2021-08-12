import { useState, useContext } from 'react';
import{Box, Button, makeStyles, Typography, Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

//component
import LoginDialog from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles({
login :{
  background:'#ffffff',
  color: '#2874f0',
  textTransform:'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '3px 40px',
  boxShadow: 'none'
},
wrapper:{
  margin:"0 7% 0 auto",
  display : 'flex',
  '& > *': {
      marginRight:50,
      fontSize: 15,
      alignItems:'center',
      fontWeight: 600,
      textDecoration: 'none',
      color:'#fff',
  }
},
container:{
  display:  'flex'
}

})
const HeaderButton = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const {account, setAccount} = useContext(LoginContext);

  const { cartItems } = useSelector(state => state.cart);

  const openLoginDialog = () => {
    setOpen(true);
  }
   return (
       <Box className={classes.wrapper}>
          {
            account ? <Profile account={account} setAccount={setAccount} />
            :
            <Link>
               <Button variant='contained' onClick = {() => openLoginDialog()} className={classes.login}>Log in</Button>
            </Link> 
          }
          <Link><Typography style={{marginTop:5}}>More</Typography></Link> 
           <Link to='/cart' className={classes.container}>
           <Badge badgeContent={cartItems.length} color="secondary">
               <ShoppingCart/>
           </Badge>
               <Typography style={{marginLeft:10, fontWeight:600, fontSize:15}}>Cart</Typography>
           </Link>
           <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
       </Box>
   )
}

export default HeaderButton;