
import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import mintAbi from '../contract/NoBuNFT.json';
import config from '../Config/config.json';


export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer;
  return new Contract(address, abi, signerOrProvider)
}


export const getMintContract = (address: string, signer?: Signer | Provider) => {
  return getContract(mintAbi, address , signer)
}