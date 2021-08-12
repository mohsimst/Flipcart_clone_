import {Box, makeStyles} from '@material-ui/core';

// component
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';

 // import { products } from '../../constants/data';
 import { useSelector, useDispatch } from 'react-redux';
 import { useEffect } from 'react';
 import { getProducts as listProducts } from '../../redux/actions/productAction';



const useStyle = makeStyles({
  component:{
      padding:10,
      // background:"green",
      background: '#F2F2F2'
  },
  rightWrapper:{
    // background:'yellow',
    background:'#ffffff',
    padding: 6,
    margin:'12px 0 0 10px',
    width:'17%',
    height:'90%',
  }
})
const Home = () =>{
  const classes= useStyle();
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  const { products } = useSelector( state => state.getProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

    return (
  <div>
      <NavBar/>
     <Box className={classes.component}>
        <Banner/>
        <Box style={{display:'flex', height:'52vh'}}>
            <Box style={{width: '83%'}}>
                <Slide 
                timer={true} 
                title="Deal of the Day" 
                products={products}
                />
            </Box>
            <Box className={classes.rightWrapper}>
                 <img src={adURL} style={{width:'100%', height:'100%'}}/>
            </Box>
        </Box>
        <MidSection/>

        <Slide 
            timer={false} 
            title="Discount for You"
            products={products}
        />
        <Slide 
            timer={false} 
            title="Suggested Items"
            products={products}
        />
        <Slide 
            timer={false} 
            title="Top Selection"
            products={products}
        />
        <Slide 
            timer={false} 
            title="Recommended Items"
            products={products}
        />
        <Slide 
            timer={false} 
            title="Best Seller"
            products={products}
        />

     </Box> 
  </div>
)
}

export default Home;