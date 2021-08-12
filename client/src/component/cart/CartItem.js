import { Card, Box, makeStyles, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';

//component
import GroupButtons from './GroupButton';

const useStyle = makeStyles({
    component: {
         display:'flex',
         borderRadius:0,
         borderTop: '1px solid #f0f0f0',
    },
    leftComponent: {
        margin: 20,
        display:'flex',
        flexDirection: 'column',
    },
    rightComponent: {
        margin: 20,
    },
    smallText:{
      fontSize:14,
    },
    greyTextColor:{
      color:'#878787',
    },
    price: {
      fontSize:18,
      fontWeight:600,
    },
    image: {
      height: 110,
      width: 110,
    },
    remove: {
      marginTop:20,
      fontSize:16,
    },
    button: {
      marginTop: 20,
      padding: '12px 70px',
      borderRadius: 2,
    }
})

const CartItem = ({ item, removeItemFromCart }) => {
   const classes = useStyle();
   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


  
    return (
      <Card className={classes.component}>
         <Box className={classes.leftComponent}>
           <img src={item.url} className={classes.image}/>
           <GroupButtons />
         </Box>
         <Box className={classes.rightComponent}>
           <Typography>{item.title.longTitle}</Typography>
           <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop:10}}>Seller: SuperComNet
             <span><img src={fassured} style={{width:50, marginLeft:10}}/></span>
           </Typography>
           <Typography style={{margin: '20px 0'}}>
             <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
             <span clasName={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
             <span style={{color:'#388E3C'}}>{item.price.discount} off</span>
           </Typography>
           <Button className={classes.button} onClick={() => removeItemFromCart(item.id)} className={classes.button}>Remove</Button>
         </Box>
      </Card>
    )
}
export default CartItem;