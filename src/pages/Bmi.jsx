import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import bmi from "../assests/images/bmi.png"
import BmiForm from '../components/BmiForm'

const Bmi = () => {
    return (
        <Box mt={8}>
            <Typography textAlign="center" mb={5}
                fontWeight={550} sx={{ fontSize: { lg: '44px', xs: '30px' }, color: "#ff2625" }}
            >
                BMI Calculator
            </Typography>
            <Stack gap="10px"
                sx={{ flexDirection: { lg: 'row' }, p: '10px', alignItems: 'center', mixBlendMode: "multiply" }}
            >
                <img src={bmi} alt="obesity" loading='lazy' className='bmi-image' />
                <BmiForm />
            </Stack>
            <Typography textTransform='capitalize' variant='h6' mt={10} ml={{ xs: "20px" }} mr={{ xs: "20px" }}>
                Body mass index (BMI) is a measure of your weight relative to your height and functions as a rough estimate of body fat. When you enter your height and weight into a BMI calculator, you’ll get a number. That number is one way to gauge if you have a healthy or unhealthy weight.
            </Typography>
        </Box>
    )
}

export default Bmi