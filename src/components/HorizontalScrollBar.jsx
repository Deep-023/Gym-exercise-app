import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assests/icons/right-arrow.png';
import LeftArrowIcon from '../assests/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow" >
      <img src={RightArrowIcon} alt="right-arrow"/>
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, isbodyParts, setBodyPart, bodyPart }) => (
  <Box mt={4} sx={{position:'static'}}>
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="10px 40px"
      >
        {isbodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :
         <ExerciseCard exercise={item}/>
        }
      </Box>
    ))}
  </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;