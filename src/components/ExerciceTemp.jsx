import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciceTemp = ({ exercice }) => {
  return (
    <Link className='exercice-card' to={`/exercise/${exercice.id}`}>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <img src={exercice.gifUrl} loading='lazy' style={{ width: '100%', marginBottom: '20px', borderRadius: '10px' }} />
        <Typography variant="h4" style={{ color: 'red', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {exercice.name}
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Equipment: <span style={{ fontWeight: 'bold' }}>{exercice.equipment}</span>
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Body Part: <span style={{ fontWeight: 'bold' }}>{exercice.bodyPart}</span>
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Learn More
        </Button>
      </div>
    </Link>
  )
}

export default ExerciceTemp
