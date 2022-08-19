import { useMemo } from 'react';
import { Contract } from '@ethersproject/contracts'
import useActiveWeb3React from './useActiveWeb3React';
import { getMintContract } from '../utils/contractHelper';



export const MintContract = (address: string) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getMintContract(address, library?.getSigner()), [address, library])
}