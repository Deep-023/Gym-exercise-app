import React from 'react'
import { Stack, Typography } from '@mui/material'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack type="button" alignItems={"center"} justifyContent="center" className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                background: '#fff',
                borderRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" 
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top:1800, left: 100, behavior:'smooth'})}}
        >
            <img src={require(`../assests/icons/${item}.png`)} alt="dumbbell" style={{ width: '60px', height: '60px'}} />
            <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform='capitalize'>
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart