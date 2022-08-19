

import { Web3ReactProvider } from '@web3-react/core'
import getLibrary from './utils/getLibrary';


const Providers = ( {children}:any ) => {
  return(
    <>
      <Web3ReactProvider getLibrary={getLibrary} > 
          {children}
      </Web3ReactProvider>
    </>
  );
}
export default Providers;