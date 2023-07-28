import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, useMediaQuery, IconButton, Box } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import Logo from '../assests/images/Logo.png';
import { useState } from 'react';

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const navigateToExercise = () => {
    setIsMobileMenuToggled(!isMobileMenuToggled)
    setTimeout(() => {
      const ExerciseSection = document.getElementById("exercises");
      if (ExerciseSection) {
        ExerciseSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <Stack direction="row" sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px='20px'>
      <Link to='/'>
        <img src={Logo} alt="Logo" style={{ width: '58px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" justifyContent="right">
        {isNonMobileScreens ? (
          <>
            <Link to='/' className="custom-link" style={{ textDecoration: 'none', color: '#3A1212' }}>Home</Link>
            <Link to='/' className="custom-link" style={{ textDecoration: 'none', color: '#3A1212' }} onClick={navigateToExercise}>Exercises</Link>
            <Link to='/bmicalculator' className="custom-link" style={{ textDecoration: 'none', color: '#3A1212' }}>BMI Calculator</Link>
          </>
        ) : (
          <Stack ml="8rem">
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Menu />
            </IconButton>
          </Stack>
        )}

        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            mt={3}
            mr={3}
            position="fixed"
            right="0"
            top="0"
            zIndex="10"
            maxWidth="200px"
            minWidth="150px"
            backgroundColor= "#FFFAFB"
            pl={2}
            pb={2}
            sx={{transition: "ease"}}
          >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                <Close />
              </IconButton>
            </Box>
            <Stack display="flex" flexDirection="column" justifyContent="center" alignItems="start" gap="2rem">
              <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', fontSize:"20px" }} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>Home</Link>
              <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', fontSize:"20px" }} onClick={navigateToExercise}>Exercises</Link>
              <Link to='/bmicalculator' style={{ textDecoration: 'none', color: '#3A1212', fontSize:"20px" }} onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>BMI Calculator</Link>
            </Stack>
          </Box>)}

      </Stack>
    </Stack>
  )
}

export default Navbar