

import { FC } from "react";


export interface Config {
  title: string;
  icon: FC;
  connectorId: ConnectorNames;
}

export enum ConnectorNames {
  Injected = "Injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;