

import { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Stack, Slider, Button  } from '@mui/material'
import {styled} from '@mui/material/styles';

import WalletConnect from '../../components/WalletButton/WalletButton';
import useActiveWeb3React from '../../hook/useActiveWeb3React';
import { toast } from 'react-toastify';
import styles from './MintNobu.module.css';
import {MintContract} from '../../hook/useContract'
import config from '../../Config/config.json';
import { getMintContract } from '../../utils/contractHelper';
import {ethers} from 'ethers'
const PrettoSlider = styled(Slider)({
  color: '#FDAB45',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const MintButton  = styled(Button)({
  background: '#94FF66',
  color:'black',
  fontSize:'30px',
  fontWeight: 600,
  padding:'2px 25px',
  // height: '100px',
  // padding:'10px 20px',
  maxWidth:'200px',
  margin:' 0 auto',
  marginTop:'20px',
  '&:hover':{
    background:'yellow',
    color:'tomato'
  }
})

const MintNobu = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { chainId, account, library } = useActiveWeb3React();
  // const [contractInstance, setContractInstance] = useState<any>();
  const [value, setValue] = useState<number>(1);

  const handleSlider = (event: any, newValue: any) => {    
    setValue(newValue);
    // fetchData();
  }

  const fetchData = async () => {
    try{

      const mintContract = getMintContract(config.mint_contract, library?.getSigner())
      // let contractInstance =  MintContract(config.mint_contract);
      console.log("contractInstance:::", mintContract);
      const totalCost = value * 99;
      const cost = ethers.utils.parseEther(totalCost.toString());
      
      await mintContract.mint(value, {value: cost});
      toast("Mint Success!", { position: "bottom-left", type: "success" });
    }
    catch(err: any){
      console.log("err::", err);
      toast(err?.error?.data.message || err.message, { position: "bottom-left", type: "error" });
    }
  }

  return(
    <>
        <Box className={styles.main}>
          {/* <img style={{width:'80%', margin:'auto'}} src='./assets/img/MintNft/Raid.png' /> */}
          <Typography sx={{textAlign:'center', fontSize:'10vw',color:'white'}}>Let's Raid!</Typography>
          <Box className={styles.section}>
           
            <Typography sx={{textAlign:'center', fontSize:'5vw',color:'white',width:'30%'}}>99 CRO</Typography>
            <img src='./assets/img/MintNft/Viking.png' alt='viking' />
            <Stack direction='row' alignItems='center'>
              {
                !account &&
                  <WalletConnect>CONNECT</WalletConnect>
              }
              {
                account &&
                  <Stack direction='column'>
                      <PrettoSlider
                        value={value}
                        onChange={handleSlider}
                        sx={{marginTop:'25px', width:'300px'}}
                        min={1}
                        max={10}
                        step={1}
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={1}
                    />
                      <MintButton onClick={fetchData}>Mint</MintButton>
                      {/* <img style={{width:"60%"}} src='./assets/img/MintNft/Mint Button.png' alt='mintbutton' onClick={fetchData}/> */}
                  </Stack>
                  
              }
              
            </Stack>
          </Box>
          <Box className={styles.crypto}>
            <img src='./assets/img/MintNft/Gold Stack.png' alt='gold stack' />
            <img src='./assets/img/MintNft/Silver Stack.png' alt='silver' />
            <img src='./assets/img/MintNft/Bronze Stack.png' alt='bronze' />
          </Box>
        </Box>
    </>
  );
}


export default MintNobu;