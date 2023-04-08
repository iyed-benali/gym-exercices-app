import React, { useState } from 'react'
import {Box} from "@mui/material"
import Search from './Search'
import Exercices from './Exercices'
import HeroBanner from './HeroBanner'
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <div>
      <Box>
      <HeroBanner />
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} />
      <Exercices setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      </Box>
    </div>
  )
}

export default Home
