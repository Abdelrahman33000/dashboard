import { EmailOutlined, Person2, ScaleSharp, Traffic } from "@mui/icons-material"
import {  Stack } from "@mui/material"
import RowComp1 from "./rowComp1"

const Row1 = () => {
  return (
   <Stack direction={"row"} flexWrap={"wrap"} gap={3} mt={5} justifyContent={"space-between"}>

    <RowComp1 icon= <EmailOutlined /> title1="12.548" title2="Email Sent" title3="+17%" />
    <RowComp1 icon= <ScaleSharp /> title1="15.548" title2=" Sales" title3="+17%" />
    <RowComp1 icon= <Person2 /> title1="17.58" title2=" New Clients"  title3="+17%"/>
    <RowComp1 icon= <Traffic /> title1="12.548" title2=" Traffic" title3="+27%" />



  
   </Stack>
  )
}

export default Row1
