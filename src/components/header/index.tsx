import { Box, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import './header.css';

const Header = () => {
		

    return(
        <>
					<Box className='header_container'>
						
						
						<Box className='header' sx={{paddingTop:'60px'}}>
							<Link to='/'>Home</Link>
							<img src='./assets/img/Home Line.png' />
							<Link to='/mintGen3d'>Mint Gen 3D</Link>
							<img src='./assets/img/Home Line.png' />
							<Link to='/mint_nft'>Mint NoBu NFT</Link>
							<img src='./assets/img/Home Line.png' />
							<Link to='/doxgang'>DoxGang</Link>
						</Box>
						<Box className='header'>
							<Link to='/nobu_nft'>NoBu NFT</Link>
							<img src='./assets/img/Home Line.png' />
							<Link to='/roadmap'>RoadMap</Link>
						</Box>
						{/* {
							menuVisible &&
								
						} */}


					<button type="button" className="btn btn-primary menubtn" data-bs-toggle="collapse" data-bs-target="#demo"><MenuIcon/></button>
						<div id="demo" className="collapse visible">
							<Stack direction='column' spacing={1.5} sx={{paddingLeft:'40px', paddingTop:'20px'}}>
								<Link to='/'>Home</Link>
								<Link to='/mintGen3d'>Mint Gen 3D</Link>
								<Link to='/mint_nft'>Mint NoBu NFT</Link>
								<Link to='/doxgang'>DoxGang</Link>
								<Link to='/nobu_nft'>NoBu NFT</Link>
								<Link to='/roadmap'>RoadMap</Link>
							</Stack>
						</div>
					</Box>
						
        </>
    );
}

export default  Header;