
import { AppBar, Toolbar, makeStyles, Typography, Box, withStyles } from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton.js';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55,
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 12,
        height: 10,
        marginLeft: 4
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: 128,
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    }

})

const ToolBar = withStyles({
  root: {
      minHeight: 55
  }
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component='span'  style={{color:'#FFE500'}}>Plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButton/>
            </ToolBar>
        </AppBar>
    )

}

export default Header;