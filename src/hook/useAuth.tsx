import { useCallback } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import {ConnectorNames} from '../components/WalletButton/type'
import {setupNetwork} from '../utils/wallet';
import config from '../Config/config.json'
import { hexlify } from '@ethersproject/bytes'
import { ExternalProvider } from '@ethersproject/providers'
import {ethers} from 'ethers'
import useActiveWeb3React from '../hook/useActiveWeb3React';
export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 25, 338],
 });

export const WalletConnect = new WalletConnectConnector({
  rpc:{[25]: config.write_rpc },
  qrcode: true,
  // pollingInterval: 12000,
 });
// export const WalletConnect = new WalletConnectConnector({
//   // rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   supportedChainIds: [1, 3, 4, 5, 42, 25, 338],
//  }); 

export const bscConnector = new BscConnector({ supportedChainIds: [1, 3, 4, 5, 42, 25, 338] })

export const connectorsByName = {
  [ConnectorNames.Injected]: Injected,
  [ConnectorNames.WalletConnect]: WalletConnect ,
  [ConnectorNames.BSC]: bscConnector,
}

const useAuth = () => {
  const { chainId, activate, deactivate, setError }  = useActiveWeb3React();
  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      console.log("connector::::",connector);
        if(connector){
          activate(connector, async (error: Error) => {
            if( error instanceof UnsupportedChainIdError){
              setError(error);
              const provider = await connector.getProvider();
              const hasSetup = await setupNetwork(provider);
              if(hasSetup){
                activate(connector); 
              }
            }
          })
        }
    },[activate,chainId]
  )
  const logout = useCallback(() => {
    deactivate();
    window.location.reload();

  },[deactivate,chainId])

  return { login };
}
export default useAuth;
