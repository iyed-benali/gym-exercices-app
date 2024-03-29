import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material/';
import ExerciceTemp from './ExerciceTemp';
import { options, fetchData } from '../utils/fetchData';

const Exercices = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          options
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  if (!exercises.length) return 'adzadzdaz';

  return (
    <Box
      id="exercices"
      sx={{
        mt: '50px',
        p: '20px',
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: '110px', xs: '50px' },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises
          .slice((currentPage - 1) * exercisesPerPage, currentPage * exercisesPerPage)
          .map((exercise, index) => (
            <ExerciceTemp key={index} exercice={exercise} />
          ))}
      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercices;
