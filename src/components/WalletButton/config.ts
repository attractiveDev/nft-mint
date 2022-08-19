import Metamask from "./Icons/Metamask";
import MathWallet from "./Icons/MathWallet";
import TokenPocket from "./Icons/TokenPocket";
import TrustWallet from "./Icons/TrustWallet";
import WalletConnect from "./Icons/WalletConnect";
import BinanceChain from "./Icons/BinanceChain";
import Coin98 from "./Icons/Coin98";
import SafePal from "./Icons/SafePal";
import {Config, ConnectorNames} from './type';


const connectors:Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
