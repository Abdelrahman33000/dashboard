import { Box, Button, Stack } from "@mui/material"
import Row1 from "./Row1"
import { DownloadOutlined } from "@mui/icons-material"
import Row2 from "./Row2"
import Row3 from "./Row3"


const Dashboard = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <h1 style={{color:"#ea2f05"}}>Dashboard</h1>
      <h2>Welcom To Your Dashboard</h2>
   <Box textAlign={"right"}> 
       <Button variant="contained" color="primary" >
         <DownloadOutlined />
           Dashboard Reports 
       </Button>
   </Box>
    <Stack direction={"column"} gap={5}>
        <Row1 />
        <Row2 />
        <Row3 />
    </Stack>
     
      
  
    </div>
  )
}

export default Dashboard
