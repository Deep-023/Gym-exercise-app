import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e,value) =>{
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior:"smooth"});
  }

  useEffect(()=>{
      const fetchExerciseData = async()=> {
          let exercisesData = [];
          if(bodyPart === "all"){
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
          }else{
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
          }
          setExercises(exercisesData);
      }

      fetchExerciseData();
  },[bodyPart, setExercises]);

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }} mt="50px" p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignContent="center">
        {exercises.length > 9 &&
        <Pagination 
          color="standard"
          shape="rounded"
          defaultPage={1}
          count= {Math.ceil(exercises.length/9)}
          page={currentPage}
          onChange={paginate}
          size="large"
        /> }
      </Stack>
    </Box>
  )
}

export default Exercises