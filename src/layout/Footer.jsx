import {Typography,Box} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

function Footer() {
  return (
    <>
    <Box sx={{bgcolor:'#1A1A19',color:'white',p:3}}>
       
        <Box sx={{my:3,"& svg":{fontSize:"40px"},
        "& svg:hover":{color:"goldenrod",transform:"translateX(5px)",transition:"all 400ms"}}}>
           <InstagramIcon/>
           <FacebookIcon/>
           <TwitterIcon/>
           <YouTubeIcon/>
        </Box>
        <Typography variant='h5'>All rights reserver @2024</Typography>
    </Box>
    </>
  )
}

export default Footer