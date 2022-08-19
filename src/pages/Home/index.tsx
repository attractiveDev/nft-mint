import { Box } from '@mui/material';

import styles from './Home.module.css';
import Note from './Note'
import Line from '../../components/line/Line';
import Check from './Check';
import Alllist from './Alllist'
import Ranking from './Ranking';
import Gen3D from './Gen3D';


const Home = () => {
    return(
        <>
            <Box className={styles.container}>
							<Box style={{display:'flex'}}>
								<img className={styles.nobuddy} src='./assets/img/NoBuddies Logo.png' />
							</Box>
							<Note/>
							<Line img='./assets/img/Yellow.png' />
							<Check />
							<Line img='./assets/img/Yellow.png' />
							<Alllist/>
							<Line img='./assets/img/Blue.png' />
							<Ranking/>
							<Line img='./assets/img/Red.png' />
							<Gen3D />
            </Box>	
        </>
    );
}

export default Home;