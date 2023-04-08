import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'

import { options,fetchData } from '../utils/fetchData'
import HorizentalScrollbar from './horizentalScrollbar'
import bodyPart from './bodyPart'
const Search = ({setExercises,setBodyPart,bodyPart  }) => {
  const [search,setSearch]=useState('')
  // const [data,setData]=useState([])
  const [bodyParts,setBodyParts]=useState([])

useEffect(()=>{
const fetchExercices=async ()=>{
  const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)

  setBodyParts(['all',...bodyPartsData])
  console.log(bodyPartsData);
 
}
fetchExercices()
},[])

  const handleSearch=async ()=>{
    if(search){
      const data=await fetchData('https://exercisedb.p.rapidapi.com/exercises',options)
      const searchedExercices = data.filter(
        (exercice)=>exercice.name.toLowerCase().includes(search) 
        || exercice.target.toLowerCase().includes(search) 
        ||exercice.equipment.toLowerCase().includes(search) 
        ||exercice.bodyPart.toLowerCase().includes(search) 
      )
      
      setSearch('')
      setExercises(searchedExercices)
      console.log(searchedExercices);
    }
  }


  return (
    <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }} mb={'50px'} textAlign={'center'}>
        workouts that will take your fitness<br /> to the next level.
      </Typography>
      <Box>
        <TextField 
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: {lg: '1170px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px',
            height: {lg: '76px', xs: '50px'},
            mb: {lg: '0', xs: '20px'},
          }}
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder='Search for exercises'
          type='text'
        />
        <Button
          className='search-button'
          sx={{
            fontWeight: '700',
            fontSize: {lg: '18px', xs: '14px'},
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #000',
            px: {lg: '30px', xs: '20px'},
            height: {lg: '55px', xs: '40px'},
            '&:hover': {
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Box>
        <HorizentalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      </Box>
    </Stack>
  )
}

export default Search
