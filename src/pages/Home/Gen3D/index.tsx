import { Box, Stack } from '@mui/material'
import style from  './Gen3D.module.css';



const Gen3D = () => {
  return(
    <>
      <Box className={style.section}>
        <img className={style.gen3}  src='./assets/img/Gen 3D Group.png' alt='gen3d-group' />
        <Stack direction='column' alignItems='center'>
          <img style={{width:'85%'}}  src='./assets/img/Gen3edit.png' alt='gen3' />
        </Stack>
      </Box>
    </>
  );
}

export default Gen3D;