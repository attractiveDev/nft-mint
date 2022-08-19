import { Typography, Box } from '@mui/material'

import DoneIcon from '@mui/icons-material/Done';


const Check = () => {
  return(
    <>
      <Box sx={{color:'white', textAlign:'center'}}>
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-Actual CroFam<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
        
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-Doxxed team<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
        
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-ConSistently building Since January<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
        
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-Very active in community<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
        
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-Live mobile game on Apple and Android<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
        
        <Typography sx={{fontSize: {md:'40px', sm: '20px'}}}>-Here for the long run<DoneIcon sx={{marginBottom:'10px',fontSize: {md:'40px', sm: '20px'}}}/></Typography>
      </Box>
    </>
  );
}

export default Check;