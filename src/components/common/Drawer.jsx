import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography'; 
import { Link } from 'react-router-dom';
import Settings from '../../assets/images/Settings.svg'
import { useAuth } from '../../Auth/Auth';


function Drawer() {
  const auth =useAuth();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };    

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , fontSize:50}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['الصفحة الرئيسية', 'برفايل'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{fontSize:50}}>
               <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ?<Link to='/'> <HomeIcon sx={{color:'#272C52',fontSize:50}} /> </Link> :    <Link to='/profile'><AccountCircleIcon sx={{color:'#272C52',fontSize:50}}/> </Link>}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontSize: '30px'}}>
                    <Link to='/'>{text}</Link>
                   
                  </Typography>} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{color:'#CA5050',backgroundColor:'#CA5050',height:5}}/>
          <List sx={{fontSize:40 }}>
            {[' خدماتنا', 'تسجيل الدخول'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{fontSize:50}}>
                <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ?  <Link to='/service'> <LoginIcon sx={{color:'#272C52' , fontSize:50}} /></Link>  :   <Link to="/login"> <LanguageIcon sx={{color:'#272C52' , fontSize:50}}/></Link>}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontSize: '30px'}}>{text}</Typography>} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
  return (
    <div className='self-start'>


      <img  src={Settings}  className=' setting px-3 py-3' alt="" onClick={toggleDrawer("left" , true)} />
      <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
            
          {list("left")}
        </SwipeableDrawer>
   
  </div>
  )
}

export default Drawer
