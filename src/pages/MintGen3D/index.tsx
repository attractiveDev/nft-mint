import { Box, Stack, IconButton, Typography } from '@mui/material';
import styles from './MintGen3D.module.css';

const MintGen3D = () => {
  return(
    <>
      <Box className={styles.main}>
        {/* <img style={{width:'70%', margin:'0 auto'}} src='./assets/img/mintGen3d/Let.png' /> */}
        <Typography sx={{fontSize:'10vw', color:'white', textAlign:'center'}}>Let's Fly!</Typography>
        <Box className={styles.section}>
          <Stack className={styles.left} direction='column' spacing={2} sx={{width:'30%'}}>
            <Typography sx={{color:'white', fontSize:'5vw', textAlign:'center'}}>499 CRO</Typography>
            <Typography sx={{color:'white', fontSize:'5vw',  textAlign:'center'}}>449 CRO WL</Typography>
          </Stack>
          <img  style={{width:'30%'}} src='./assets/img/mintGen3d/Pilot.png' alt='pilot' />
          <Stack className={styles.right} direction='column' spacing={2} sx={{width:'30%'}}>
           
            <Typography sx={{color:'white', fontSize:'5.5vw', textAlign:'center'}}>399 CRO</Typography>
            <Typography sx={{color:'white', fontSize:'3vw',  textAlign:'center'}}>NoBu NFT Holders</Typography>
          </Stack>
        </Box>
        <img style={{width:'50%',margin:'0 auto'}} src='./assets/img/mintGen3d/In 3D.png' alt='in 3d' />
        <IconButton className={styles.mint}><img style={{width:'25%'}} src='./assets/img/mintGen3d/Mint Button.png' alt='mint' /></IconButton>
        <Box className={styles.bottom_section}>
          <img src='./assets/img/mintGen3d/Chalk 1.png' alt='chalk1' />
          <img src='./assets/img/mintGen3d/Chalk 1.png' alt='chalk2' />
        </Box>
      </Box>
    </>
  );
}

export default MintGen3D;