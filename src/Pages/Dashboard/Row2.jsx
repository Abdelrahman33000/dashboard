import { Box, Paper, Stack, Typography, useTheme } from "@mui/material"
import Line from "../Line/Line"
import { DownloadOutlined } from "@mui/icons-material"
import { Transactions } from "./data"

const Row2 = () => {
    const theme = useTheme()
  return (
   <Stack direction={"row"} flexWrap={"wrap"} gap={5} justifyContent={"space-between"} >

<Paper sx={{maxWidth:800 ,flex:1 }} >
    <Stack direction={"row"}  flexWrap={"wrap"} p={2} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
           <Typography color={theme.palette.secondary.main} variant="h6">
            Revenue Generated
           </Typography>
            <Typography variant="body2">
                $90,524.2335
            </Typography>
        </Box>
        <Box>
<DownloadOutlined />
            </Box>
    </Stack>
<Box minWidth={"250px"}>
    <Line /> 
</Box> 
</Paper>

<Box  height={"auto"} width={"500px"}   sx={{overflowY:"auto" }} >
<Paper >
    <Typography  color={theme.palette.secondary.main}>
        Recent Transactions
    </Typography>
{Transactions.map((item) => 
  
    <Stack direction={"row"} p={2} justifyContent={"space-between"}  key={item.txId} gap={1}>
        <Typography>{item.user}</Typography>
        <Typography>{item.date}</Typography>
        <Typography sx={{backgroundColor:"red" , width:70 ,p:1}}>${item.cost}</Typography>
    </Stack>

)}
</Paper>

</Box>
   </Stack>
  )
}

export default Row2
