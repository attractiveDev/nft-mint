import { Box, Typography } from "@mui/material";

import style from './Alllist.module.css'


const Alllist = () => {
  return(
    <>
      <Box className={style.section}>
        <Typography sx={{fontSize:'10vw', color:'white'}}>250 OG'S</Typography>
        <img style={{width:'40%'}} src='./assets/img/OG NoBuddies.png' alt='nobuddies' />
      </Box>
    </>
  );
}

export default Alllist;