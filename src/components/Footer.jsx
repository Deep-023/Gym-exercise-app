import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assests/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#fff3f4" width="100%">
      <Stack gap="30px" alignItems='center' px="40px" pt="24px">
      <Stack direction="row" alignItems='center'>
        <img src={Logo} alt="logo" width="80px" height="60px" />
        <Typography variant='h4' pt={3.5} pl={2}>FitBit</Typography>
      </Stack>
        <Typography variant='h5' pb="40px" textAlign="center">
          Made with 💝 by {"<Team.render/>"}
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer