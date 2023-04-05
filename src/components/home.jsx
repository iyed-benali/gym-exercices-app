import React from 'react'
import {Box} from "@mui/material"
import Search from './Search'
import Exercices from './Exercices'
import HeroBanner from './HeroBanner'
const Home = () => {
  return (
    <div>
      <Box>
<Exercices />
<HeroBanner />
<Search />
      </Box>
    </div>
  )
}

export default Home
