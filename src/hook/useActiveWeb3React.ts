import { useState, useEffect, useRef } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider} from '@ethersproject/providers';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import config from '../Config/config.json';
import { simpleRpcProvider } from '../utils/providers';

const CHAIN_ID = config.chain_id;

const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, ...web3React } = useWeb3React();
  const refEth = useRef(library);
  const [provider, setProvider] = useState(library || simpleRpcProvider);

  useEffect( () => {
    if(library !== refEth.current){
      setProvider(library || simpleRpcProvider);

    }
  },[library]);
  return { library:provider, chainId: chainId ?? parseInt(CHAIN_ID, 10), ...web3React}
}

export default useActiveWeb3React;