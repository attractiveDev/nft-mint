import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './footer.module.css'



const Footer = () => {
    return(
        <>
					<Box className={style.footer_section}>
            <Box className ={style.footer}>
              <Box className={style.body}>
                <Stack direction='column' spacing={3.5}>
                  <Typography className={style.footer_text_1}>Powered by its Holders</Typography>
                  <Typography className={style.footer_text_1}>Copyright © 2022 NoBuddies NFT - All Rights Reserved</Typography>
                </Stack>

                <Stack direction='column' spacing={0.5}>
                  <Typography className={style.footer_text_2}>Sitemap</Typography>
                  <Stack direction='row' spacing={2} >
                    <ul className={style.list} style={{marginTop:'-1px'}}>
                      <Link to='/'><li>Home</li></Link>
                      <Link to='/nobu_nft'><li>NoBu</li></Link>
                      <Link to='/mintGen3d'><li>Gen3D</li></Link>
                    </ul>
                    <ul className={style.list} >
                      <Link to='/doxgang'><li>Team</li></Link>
                      {/* <Link to='/mint_nft'><li>Jungle Media</li></Link> */}
                      <Link to='/roadmap'><li>roadmap</li></Link>
                    </ul>
                  </Stack>
                </Stack>

                <Stack direction='column' spacing={0.5} sx={{marginTop:'-20px'}}>
                  <Typography className={style.footer_text_2}>Socials</Typography>
                  <ul className={style.list}>
                    <a href='https://twitter.com/NoBuddiesNFT' target='_blank'><li>Twitter</li></a>
                    <a href='https://discord.com/invite/nobuddies'  target='_blank'><li>Discord</li></a>
                    <a href='https://nobuddiesnft.medium.com/' target='_blank'><li>Medium</li></a>
                  </ul>
                </Stack>
              </Box>
            </Box>
          </Box>
        </>
    );
}

export default Footer;