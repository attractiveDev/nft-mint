
import { Box, Stack, Typography } from '@mui/material'
import style from './Ranking.module.css';

const Ranking = () => {
  return(
    <>
      <Box className={style.section}>
        <img style={{width:'90%', margin:'0 auto'}} src='./assets/img/Mobile Billboard.png' alt='billboard' />
        <Box className={style.row}>
          <Stack direction='column'alignItems='center' className={style.left}>
            <img className={style.gen2} src='./assets/img/Gen2edit.png' alt='gen2edit' />
          </Stack>
          <Box className={style.right}>
            <Stack direction='row' alignItems='center' justifyContent='center'  spacing={1.5} flexWrap='wrap'>
              <img src='./assets/img/Mobile 1.png' alt='mobile1' />
              <img src='./assets/img/Mobile 2.png' alt='mobile2' />
              <img src='./assets/img/Mobile image 3.png' alt='mobile3' />
            </Stack>
          </Box>
        </Box>
        <Box className={style.next_section}>
            {/* <img src='./assets/img/Downlaod and play.png' /> */}
            <Typography sx={{color:'white', fontSize:'50px', textAlign:'center'}}>Download<br/>and<br/>play!</Typography>
            <img className={style.arrow} src='./assets/img/Arrow-right.png' style={{marginRight:'20px'}} alt='arrow-right' />
            <Stack className={style.down} direction='row' alignItems='center' spacing={-2.5}>
              <a href='https://apps.apple.com/pl/app/nobuddies/id1617155969'><img src='./assets/img/Apple Logo.png' alt='apple' /></a>
              <a href='https://play.google.com/store/apps/details?id=com.noBuddiesnft.nobuddies&hl=nl&gl=US'><img src='./assets/img/Android Logo.png' alt='android' /></a>
            </Stack>
        </Box>
        
      </Box>
    </>
  );
}


export default Ranking;