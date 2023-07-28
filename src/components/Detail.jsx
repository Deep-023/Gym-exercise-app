import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import BodyPartImage from '../assests/icons/body-part.png'
import TargetImage from '../assests/icons/target.png'
import EquipmentImage from '../assests/icons/equipment.png'
import { fetchData, exerciseOptions } from '../utils/fetchData'


const Detail = ({ exerciseDetail }) => {
  const [exerciseDet, setExerciseDet] = useState("");
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      text: bodyPart
    },
    {
      icon: TargetImage,
      text: target
    },
    {
      icon: EquipmentImage,
      text: equipment
    }
  ]

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseUrl = 'https://exercises-by-api-ninjas.p.rapidapi.com';
      const exerciseInst = await fetchData(`${exerciseUrl}/v1/exercises?name=${name}`, exerciseOptions)
      setExerciseDet(exerciseInst);
    }
    fetchExercisesData();
  }, [name])

  return (
    <Stack gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography textTransform='capitalize' variant='h3'>
          {name}
        </Typography>
        <Typography textTransform='capitalize' variant='h6'>
          {exerciseDet[0]?.instructions ? exerciseDet[0]?.instructions : `Exercises keep you strong. ${name} is
          one of the best exercises to target your ${target}. It will help you improve your
          mood and gain energy`}
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.text} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail