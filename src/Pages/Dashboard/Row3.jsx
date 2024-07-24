import {  Paper, Stack } from '@mui/material'
import Pie from '../Pie/Pie'
import Line from '../Line/Line'
import Geography from '../Geography/Geography'
const Row3 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"space-between"}>
     <Paper sx={{minWidth:"250px" ,width:"30%" ,flexGrow:1}}>
         <Pie />
     </Paper>
     <Paper sx={{minWidth:"250px" ,width:"30%" ,flexGrow:1}}>
                 <Line />
     </Paper>
     <Paper sx={{minWidth:"250px" ,width:"30%" ,flexGrow:1}}>
         <Geography />
     </Paper>
    </Stack>
  )
}

export default Row3
