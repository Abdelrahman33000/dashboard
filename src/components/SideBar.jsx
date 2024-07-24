import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Avatar, styled, useTheme , Typography, Tooltip} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ContactsOutlined, CottageOutlined, Groups3Outlined, PersonOutlineOutlined, ReceiptOutlined , CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlineOutlined, StackedLineChartOutlined, MapOutlined} from '@mui/icons-material';
import {  useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  

  const drawerWidth = 240;


  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });




  
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const SideBar = ({open , handleDrawerClose}) => {
  const theme = useTheme();

  const Array1=[
    {text:"Dashboard" , icon:<CottageOutlined /> , url:"/" , id:"1"},
    {text:"Manage Team" , icon:<Groups3Outlined /> , url:"/team" , id:"2"},
    {text:"Contacts Info" , icon:<ContactsOutlined /> , url:"/contacts" , id:"3"},
    {text:"Invoice Balance" , icon:<ReceiptOutlined /> , url:"/invoice" , id:"4"},
  ]

  const Array2=[
    {text:"Profile Form" , icon:<PersonOutlineOutlined /> , url:"/form" , id:"1"},
    {text:" Calender" , icon:<CalendarTodayOutlined /> , url:"/calender" , id:"2"},
    {text:"FAQ Page " , icon:<HelpOutlineOutlined /> , url:"/faq" , id:"3"},
  ]

  const Array3=[
    {text:"Bar Chart" , icon:<BarChartOutlined /> , url:"/bar" , id:"1"},
    {text:"Pie Chart" , icon:<PieChartOutlineOutlined /> , url:"/pie" , id:"2"},
    {text:" Line Chart" , icon:<StackedLineChartOutlined /> , url:"/line" , id:"3"},
    {text:"Geography  Chart" , icon:<MapOutlined /> , url:"/geography" , id:"4"},
  ]

 let location =useLocation();
  const navigate =useNavigate()
  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Avatar alt="abdo" src="/abdo.jpg" sx={{mx:"auto" , width:50 , height:50 ,mt:1 ,border:"3px solid gray"}} />
        <Typography align='center' sx={{fontSize:open ? "17px" :"0" , transition:".5s" ,color:theme.palette.info.main}}>Abdulrahman</Typography>
        <Typography align='center' >Admin</Typography>


        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={open?null : item.text} placement='left'>

              <ListItemButton
                onClick={() => {
                  navigate(item.url)
                }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor:location.pathname===item.url ? theme.palette.mode==="dark"?grey[800] :grey[300] :null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>

            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={open?null : item.text} placement='left'>
                
              <ListItemButton
               onClick={() => {
                navigate(item.url)
              }
              }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor:location.pathname===item.url ? theme.palette.mode==="dark"?grey[800] :grey[300] :null,
                  

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={open?null : item.text} placement='left'>
                
              <ListItemButton
                onClick={() => {
                  navigate(item.url)
                }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  backgroundColor:location.pathname===item.url ? theme.palette.mode==="dark"?grey[800] :grey[300] :null,

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default SideBar
