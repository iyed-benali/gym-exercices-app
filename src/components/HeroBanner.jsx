import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Hero from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{
        mt: { lg: '100px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f7f7f7',
        padding: '60px',
        borderRadius: '20px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
      position={'relative'}
    >
      <Box sx={{ flex: 1 }}>
        <Typography color={'#FF2625'} fontWeight={'600'} fontSize={'26px'}>
          Stay fit
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
          Sweat, smile <br /> and repeat
        </Typography>
        <Typography mb={3}>Check out the best exercises for your gain</Typography>
        <Button variant="contained" color="error">
          DISCOVER EXERCISES
        </Button>
        <Typography mt={3} sx={{ fontSize: '14px', color: '#666666' }}>
          *Limited time offer. Valid only for new users.
        </Typography>
      </Box>
      <img src={Hero} className="heroBanner" style={{ width: '50%', marginLeft: '50px' }} />
    </Box>
  )
}

export default HeroBanner
