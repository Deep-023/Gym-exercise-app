import React from 'react'
import { Box,Typography, Stack } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that target same muscle group
      </Typography>
      <Stack>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5} mt={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises