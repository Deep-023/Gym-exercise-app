import React, { useContext } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import VideoPlayer from './VideoPlayer'
import RightArrowIcon from '../assests/icons/right-arrow.png';
import LeftArrowIcon from '../assests/icons/left-arrow.png';
import Loader from './Loader'

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
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos?.length) return <Loader/>
    return (
        <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p='20px'>
            <Typography variant="h3" mb="33px">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Box component="div" sx={{ position: 'relative', width: '100%', p: '20px 0' }}>
                <Box sx={{ position: 'static' }}>
                    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                        {exerciseVideos?.slice(0,9).map((item, index) => (
                            <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                target="_black" //to open in new tab
                                rel="noreferrer"
                                style={{ margin: "20px 70px 20px 0", width: '400px', height: '400px' }}
                            >
                                <VideoPlayer url={`https://www.youtube.com/watch?v=${item.video.videoId}`} />
                                <Box position='absolute' top="240px">
                                    <Typography variant='h5' color="#000" m="0 8px">
                                        {item.video.title}
                                    </Typography>
                                    <Typography variant='h6' color="#000" m="5px 8px">
                                        {item.video.channelName}
                                    </Typography>
                                </Box>
                            </a>
                        ))}
                    </ScrollMenu>
                </Box>
            </Box>
        </Box>
    )
}

export default ExerciseVideos