
import { Box, Stack, Typography } from '@mui/material';
import styles from './NobuNFT.module.css';
import Line from '../../components/line/Line';

const NobuNFT = () => {
  return(
    <>
      <Stack direction='column' spacing={1.5} sx={{width:'80%',margin:'auto'}}>
        {/* <img  src='./assets/img/nobu/What Rank....png' /> */}
        <Typography sx={{marginTop:'20px',color:'white', fontSize:'6vw', textAlign:'center'}}>What rank will you hold?</Typography>
        <Box className={styles.gold}>
          <img src='./assets/img/nobu/Gold.png' alt='gold' />
          <img src='./assets/img/nobu/Silver.png' alt='silver' />
          <img src='./assets/img/nobu/Bronze.png' alt='bronze' />
        </Box>
        <Typography sx={{color:'white', fontSize:'3.5vw', textAlign:'center'}}>2750 NFTS<br/>Show off your rank in game! Not enough for<br/>everyone So hold one proudly!</Typography>
        <Line img='./assets/img/Red.png' />
        <Typography sx={{color:'white', fontSize:'3.5vw', textAlign:'center'}}>Enjoy exclusive discounts on<br/>merch in out store by holding any<br/> NoBu Token NFT. Tier level<br/>discounts, hold a gold for best<br/>offer.</Typography>
        <Typography sx={{marginTop:'30px !important',color:'white', fontSize:'3.5vw', textAlign:'center'}}>In game bonuses as well, along with other goodies.</Typography>
      </Stack>
    </>
  );
}


export default NobuNFT;