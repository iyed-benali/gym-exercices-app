
import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'

const Search = () => {
  return (
    <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p='20px'>
<Typography fontWeight={700} sx={{
fontSize:{lg:'44px',xs:'30px'}
}} mb={"50px"} textAlign={'center'}>
workouts that will take your fitness<br /> to the next level.
</Typography>
<Box>
    <TextField 

    sx={{
        input:{fontWeight:'700',border:'none',borderRadius:"4px"}
    }}
    height='76px'
    value={""}
    onChange={(e)=>{console.log(e)}}
    placeholder='Search for exercices'
    type='text'
    />
</Box>
    </Stack>
  )
}

export default Search
