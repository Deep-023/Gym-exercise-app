import React from 'react'
import { Box,Button,Stack,Typography } from '@mui/material'
import BodyPartImage from '../assests/icons/body-part.png'
import TargetImage from '../assests/icons/target.png'
import EquipmentImage from '../assests/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

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

  return (
    <Stack gap="60px" 
    sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}
    >
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image"/>
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography textTransform='capitalize' variant='h3'>
          {name}
        </Typography>
        <Typography textTransform='capitalize' variant='h6'>
          Exercises keep you strong. {name} is
          one of the best exercises to target your {target}. It will help you improve your
          mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
        <Stack key={item.text} direction="row" gap="24px" alignItems="center">
          <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
            <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
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