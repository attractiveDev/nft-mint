import { Box } from '@mui/material';
import styles from './Doxgang.module.css';


const Doxgang = () => {
  return(
    <>
      <Box className={styles.main}>
        <img style={{width:'50%', margin:'20px auto'}} src='./assets/img/Doxgang/NoBuddies Logo.png' alt='nobuddies logo' />
        <img src='./assets/img/Doxgang/boxline.png'  alt='boxline' />
        <Box className={styles.section}>
          <img src='./assets/img/Doxgang/JonnyChimps.png' alt='chimps' />
          <img className={styles.note} src='./assets/img/Doxgang/Note.png' alt='doxgang note' />
        </Box>
        <img style={{width:'40%', margin:'15px auto'}} src='./assets/img/Doxgang/Doxgang.png' alt='doxgang' />
      </Box>
    </>
  );
}


export default Doxgang;