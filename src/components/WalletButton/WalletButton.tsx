import { Button  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import WalletModal from './WalletModal';

const StyleButton = styled(Button)({
  background:'#1B6A97',
  border:'none',
  borderRadius:'50px',
  color:'white',
  padding:'2px 10px',
  width:'300px'
 
})


const WalletButton  = ({ children, component }:any ) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return(
    <>
      <StyleButton
          size='large'
          onClick={() => setModalVisible(true)}>
          {children}
      </StyleButton>

      <WalletModal 
          {...component}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
      />
    </>
  );
}

export default WalletButton;
