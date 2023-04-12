import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const randomTargetMuscleExercises = targetMuscleExercises.sort(() => Math.random() - Math.random()).slice(0, 3);
  const randomEquipmentExercises = equipmentExercises.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {randomTargetMuscleExercises.length !== 0 && randomTargetMuscleExercises.map((exercise) => (
          <img src={exercise.gifUrl} alt={exercise.name} key={exercise.id} />
        ))}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {randomEquipmentExercises.length !== 0 && randomEquipmentExercises.map((exercise) => (
          <img src={exercise.gifUrl} alt={exercise.name} key={exercise.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
