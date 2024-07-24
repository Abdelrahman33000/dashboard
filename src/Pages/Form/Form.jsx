import { Box, Button, MenuItem, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form";


const currencies = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'User',
      label: 'User',
    },

  ];


const Form = () => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
 
      
  return (
    <Box
    onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '100%' },
      display:"flex", flexDirection:"column", gap:1 ,mt:5
    }}
    noValidate
    autoComplete="off"
  >
   <Stack direction={"row"} spacing={2}>
     <TextField 
     error={errors.firstName}
     helperText={ errors.firstName ?"Please enter Your First Name":null} 

     {...register("firstName", { required: true, minLength: 2 })} 
     sx={{flexGrow:"1"}} label="First Name" variant="filled" />
     <TextField   sx={{flexGrow:"1"}} label="Last Name" variant="filled" />
   </Stack>
    <TextField   label="Email" variant="filled" type="email"/>
    <TextField   label="Phone Number" variant="filled" />
    <TextField   label="Adress 1" variant="filled" />
    <TextField   label="Adress 2" variant="filled" />

    <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="User"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

    <Box textAlign={"right"} >
            <Button variant="contained">
                Create New User
            </Button>
    </Box>
  </Box>
  )
}

export default Form
