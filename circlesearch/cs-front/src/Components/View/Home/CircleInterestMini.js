import React,{useState} from 'react'
import {Box, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';

const LINES_TO_SHOW = 2;

const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical"
  }
});

function CircleInterestMini(props) {
    const [CircleInfo, setCircleInfo] = useState({
        name : props.name,
        purpose : props.purpose,
        img : props.img
    })
  return (
    <div>
        <Box sx={{
            display: 'grid', gridTemplateRows: 'repeat(4, 60px)',
            width: '100%',
             border: '1px solid grey'
        }}>
                    <Box sx={{
                        gridColumn: '1', gridRow: '1',
                        p: 2
                    }}>
                        <Typography
                            sx={{
                                fontSize: 18,
                                fontWeight: 'Bold',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                            }}
                            >
                                {CircleInfo.name}
                            </Typography>
                    </Box>
                    <Box sx={{
                        gridColumn: '1', gridRow: '5', p: 2,
                    }}>
                        <Typography
                            sx={{
                                fontSize: 14,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                            }}
                            >
                                {CircleInfo.purpose}
                            </Typography>
                    </Box>
        </Box>
    </div>
  )
}

export default CircleInterestMini