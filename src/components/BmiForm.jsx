import React, {useState} from 'react'
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

const BmiForm = () => {

  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleSubmit = () => {
    const bmiVal = weight / ((height/100) * (height/100));
    setBmi(bmiVal);
    setheight("")
    setweight("")
  }

  return (
    <Box height={{lg:"500px", xs:"400px"}} width={{lg:"450px", xs:"280px"}} borderRadius="30px"
      ml={{lg:30, xs:1}} p={4} className="bmi-calc"
    >
      <Typography textAlign="center" variant='h4' fontWeight={300} mb={5} mt={2}> Metric Units</Typography>
      <Box sx={{ mt: 3 }} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography fontSize={{lg:"25px", xs:"16px"}} mt={3}>Weight: </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              fullWidth
              variant='standard'
              label="in Kgs"
              value={weight}
              onChange={(e) => {setweight(e.target.value)}}
              InputProps={{
                style: { fontSize: "20px"},
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography fontSize={{lg:"25px", xs:"16px"}} mt={3}>Height: </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              fullWidth
              variant='standard'
              label="in cms"
              value={height}
              onChange={(e) => {setheight(e.target.value)}}
              InputProps={{
                style: { fontSize: "20px"},
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="Calculate"
          variant="contained"
          sx={{ mt: 5, mb: 2, width: "120px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {bmi && (
          <Typography mt={10} fontWeight={200} variant='h5'>
            Your BMI is {bmi.toFixed(2)}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default BmiForm;