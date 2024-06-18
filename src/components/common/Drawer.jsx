import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import setting from '../../assets/images/Settings.svg'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography'; 
function Drawer() {
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
                    {index % 2 === 0 ? <HomeIcon sx={{color:'#272C52',fontSize:50}} /> : <AccountCircleIcon sx={{color:'#272C52',fontSize:50}}/>}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontSize: '30px'}}>{text}</Typography>} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{color:'#CA5050',backgroundColor:'#CA5050',height:5}}/>
          <List sx={{fontSize:40 }}>
            {['تسجيل الدخول', 'اللغة'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{fontSize:50}}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <LoginIcon sx={{color:'#272C52' , fontSize:50}} /> : <LanguageIcon sx={{color:'#272C52' , fontSize:50}}/>}
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
    {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
            
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    ))} */}

      <img src={setting}  className='px-3 py-3' alt="" onClick={toggleDrawer("left" , true)} />
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
