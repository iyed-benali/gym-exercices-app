import React from 'react'
import { Typography, Stack, Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const StyledBox = styled(Box)(({ theme }) => ({
  width: { xs: '100%', lg: '50%' },
  height: { xs: 'auto', lg: '500px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  '&:hover .overlay': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0%)',
  },
}));

const Details = ({ exerciceDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciceDetail

  return (
    <Stack
      gap={'60px'}
      sx={{
        flexDirection: {
          lg: 'row'
        },
        p: '20px',
        alignItems: 'center'
      }}
    >
      <StyledBox>
        <img
          src={gifUrl}
          alt={name}
          loading='lazy'
          className='detail-image'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(70%)',
            transition: 'all 0.5s',
          }}
        />
        <div className="overlay"    >
          <Typography
            variant='h3'
            component='h3'
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              zIndex: 1,
              textAlign: 'center',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
              fontSize: { xs: '3rem', md: '4rem', lg: '6rem' },
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            {name}
          </Typography>
        </div>
      </StyledBox>
      <Stack
        sx={{
          width: { xs: '100%', lg: '50%' },
          gap: '30px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img src={BodyPartImg} alt='body part' />
          <Typography variant='h5' component='h5' sx={{ ml: '10px' }}>
            {bodyPart}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img src={TargetImg} alt='target' />
          <Typography variant='h5' component='h5' sx={{ ml: '10px' }}>
          {target}
</Typography>
</Box>
<Box
sx={{
display: 'flex',
alignItems: 'center'
}}
>
<img src={EquipmentImage} alt='equipment' />
<Typography variant='h5' component='h5' sx={{ ml: '10px' }}>
{equipment}
</Typography>
</Box>
<Button
variant='contained'
sx={{
backgroundColor: '#4CAF50',
color: 'white',
borderRadius: '30px',
fontWeight: 'bold',
px: '30px'
}}
>
Add to workout
</Button>
</Stack>
</Stack>
)
}

export default Details
