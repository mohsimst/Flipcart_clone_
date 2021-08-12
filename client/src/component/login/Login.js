import {useState} from 'react';
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';
import { authenticateSignup, authenticateLogin } from '../../service/api.js';

const useStyle= makeStyles({
    component:{
         height: '70vh',
         width: '90vh',
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        width:'40%',
        backgroundRepeat: 'no-repeat',
        background:'#2874f0',
        backgroundPosition:'center 85%',
        padding:'45px 35px',

        '& > *': {
            color:'#ffffff',
            fontWeight:800
        }
    },
    login:{
        padding:'23px 35px',
        flex:1,
        display:'flex',
        flexDirection:'column',
          '& > *': {
                   marginTop:15,
                  }
    },
    text:{
       color:"#878787",
       fontSize:14,
    },
    loginBtn:{
        textTransform:'none',
        color:'#ffffff',
        background:'#fb641b',
        height:48,
        borderRadius:2,
        fontWeight:750,
        
    },
    requestBtn:{
        textTransform:'none',
        color:'#2874f0',
        background:'#ffffff',
        height:48,
        borderRadius:2,
        boxShadow:'0 2px 4px 0 rgb(0 0 0 / 20%)',
        fontWeight:750,

    },
    createText:{
        textAlign:'center',
        marginTop:'auto',
        fontSize:14,
        color:'#2874f0',
        fontWeight:650,
        cursor:"pointer",
    },
    error: {
        fontSize:10,
        color:"#ff6161",
        marginTop:10,
        fontWeight:600,
        lineHeight:0
    }
})

const initialValue = {
    login :{
      view: 'login',
      heading:'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signup:{
        view: 'signup',
        heading:'Looks like you are new here!',
        subHeading: 'Sign up with your mobile number to get started',
    }
}

const signupInitialValue = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitialValue = {
    username:'',
    password:''
}


const Login = ({open, setOpen, setAccount}) => {
    const classes = useStyle();
     
    const [ account, toggleAccount ] = useState(initialValue.login);
    const [ signup, setSignup ] = useState(signupInitialValue);
    const [ login, setLogin ] = useState(loginInitialValue);
    const [ error, setError ] = useState(false);
    
    const handleClose = () =>{
        setOpen(false);
        toggleAccount(initialValue.login);

    }

    const toggleUserAccount =()=>{
        toggleAccount(initialValue.signup);
    } 

    const signupUser = async() =>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response) {
        setError(true);
         return
        }
        handleClose();
        setAccount(login.username);
    }
const onInputChange = (e) =>{
    setSignup({...signup, [e.target.name] : e.target.value});
    console.log(signup);
}

const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
}

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                      <Typography variant='h5'>{account.heading}</Typography>
                      <Typography style={{marginTop:20, color:'#bdc3c7', fontWeight:600, fontSize:'18px'}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login'?
                    
                    <Box className={classes.login}>
                        <TextField onChange={(e)=>onValueChange(e)} name="username" label="Enter Email/Mobile number"/>
                        <TextField onChange={(e)=>onValueChange(e)} name="password" label="Enter Password"/>
                        { error && <Typography className={classes.error}>Invalid username or password</Typography>}
                        <Typography className={classes.text}>
                        By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Typography>
                        <Button variant="contained" onClick={()=> loginUser()} className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign:'center',color:"#878787"}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                        <Typography onClick={()=>toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>

                    </Box> :
                    <Box className={classes.login} style={{padding: '0px 35px'}}>
                        <TextField onChange={(e)=>onInputChange(e)} name="firstname" label="Enter Firstmame"/>
                        <TextField onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname"/>
                        <TextField onChange={(e)=>onInputChange(e)} name="username" label="Enter Usename"/>
                        <TextField onChange={(e)=>onInputChange(e)} name="email" label="Enter Email"/>
                        <TextField onChange={(e)=>onInputChange(e)} name="password" label="Enter Password"/>
                        <TextField onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone number"/>

                        <Button variant="contained" className={classes.loginBtn} onClick={()=>signupUser()}>SignUp</Button>

                    </Box>
                    }

                </Box>

            </DialogContent>
        </Dialog>
    )
}

export default Login;