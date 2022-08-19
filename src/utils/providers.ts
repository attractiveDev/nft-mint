import { StaticJsonRpcProvider } from '@ethersproject/providers'
import config from '../Config/config.json';


const Rpc_Url = config.write_rpc;

export const simpleRpcProvider = new StaticJsonRpcProvider(Rpc_Url);

export default null;

