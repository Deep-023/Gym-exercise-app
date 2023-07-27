import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import bmi from "../assests/images/bmi.png"
import BmiForm from '../components/BmiForm'

const Bmi = () => {
    return (
        <Box mt={10}>
            <Typography textAlign="center" mb={5}
                fontWeight={550} sx={{ fontSize: { lg: '44px', xs: '30px' }, color:"#ff2625"}}
            >
                BMI Calculator
            </Typography>
            <Stack gap="40px"
                sx={{ flexDirection: { lg: 'row' }, p: '10px', alignItems: 'center', mixBlendMode: "multiply" }}
            >
                <img src={bmi} alt="obesity" loading='lazy' style={{ width: "750px", height: "450px" }} />
                <BmiForm/>
            </Stack>
        </Box>
    )
}

export default Bmi