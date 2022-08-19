import { Box } from '@mui/material';
import './note.css';
const Note = () => {
  return(
    <>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <img className='h_note' src='./assets/img/Sticky Note.png' alt='note' />
      </Box>
    </>
  );
}


export default  Note;