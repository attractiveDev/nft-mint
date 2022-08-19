import config from '../Config/config.json';
import { ExternalProvider } from '@ethersproject/providers'
import {BigNumber, ethers} from 'ethers';


export const setupNetwork = async (externalProvider?: ExternalProvider) => {
  
  const provider = externalProvider || window.ethereum;
  const cid = ethers.utils.hexValue(BigNumber.from(config.chain_id));
  if(provider){
    try{
      await provider?.request({
        method: 'wallet_switchEthereumChain',
        params:[{chainId:cid,}]
      })
      return true;
    }
    catch(switchError){
      if((switchError as any)?.code === 4902){
        try{
          await provider?.request({
            method:'wallet_addEthereumChain',
            params: [
              {
                chainId: cid,
                chainName: config.name,
                nativeCurrency: {
                  name:'CRO',
                  symbol: config.symbol,
                  decimals: 18
                },
                rpcUrl:config.write_rpc,
                blockExplorerUrls: config.explorer,
              }
            ]
          })
          return true;
        }
        catch(error){
          console.log(error);
          return false;
        }
      }
    } 
  }
  else{
    console.error("Error");
  }
}