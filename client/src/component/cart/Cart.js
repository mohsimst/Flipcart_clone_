import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';


// component
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';


const useStyle = makeStyles({
  component: {
    display: 'flex',
    marginTop: 55,
    padding: '30px 135px',
  },
  leftcomponent:{
    width: '67%',
  },
  rightcomponent: {
    // width: '33%',
  },
  header: {
    padding:'15px 24px',
    background: '#fff',

  },
  placeOrder: {
    background: '#fb641b',
    color: '#fff',
    borderRadius:2,
    width:'250px',
    height: '50px',
    display:'flex',
    marginLeft:'auto'
  },
  bottom: {
     padding: '16px 22px',
     bnackground: '#fff',
     borderTop: '1px solid #f0f0f0',
     boxShadow: ' 0 -2px 10px 0 rgb(0 0 0 /10%)'
  }
})

const Cart = () => {
    
   const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);
    
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(cartItems);
    })

    const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id))
    }

    const buyNow = async () => {
      let response = await payUsingPaytm({ amount: 500, email: 'mohsinsubhan01@gmail.com' });

      let information = {
          action: 'https://securegw-stage.paytm.in/order/process',
          params: response
       }

      post(information);
   }


    return (
       <>
        {
            cartItems.length ? 
            <Box className={classes.component}>
              <Box className={classes.leftcomponent}>
                 <Box className={classes.header}>
                   <Typography style={{fontWeight:600, fontSize:18}}>My Cart ({cartItems.length})</Typography>
                 </Box>
                 {
                   cartItems.map(item => (
                    <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                   ))   
                 }
                 <Box className={classes.bottom}>
                   <Button onClick={()=> buyNow()} variant="contained" className={classes.placeOrder} >Place Order</Button>
                 </Box>
              </Box>
                 <TotalView cartItems={cartItems} />
            </Box> 
            : <EmptyCart/>
        }
       </>
    )
}

export default Cart;