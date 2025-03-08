export interface Coin {
  amount: number;
  asset: string;
  decimals: number;
}

export interface Node {
  country: string;
  ipAddress: string;
  nodeAddress: string;
  pubKey: PubKey;
  status: string;
  totalBond: number;
  version: string;
}

export interface Pool {
  asset: string;
  assetTorPrice: number;
  balanceAsset: number;
  balanceRune: number;
  derivedDepthBps: number;
  loanCollateral: number;
  loanCollateralRemaining: number;
  loanCr: number;
  lpUnits: number;
  pendingInboundAsset: number;
  pendingInboundRune: number;
  poolUnits: number;
  saversCapacityRemaining: number;
  saversDepth: number;
  saversFillBps: number;
  saversUnits: number;
  shortCode: string;
  status: string;
  synthMintPaused: boolean;
  synthSupply: number;
  synthSupplyRemaining: number;
  synthUnits: number;
}

export interface PubKey {
  secp256k1: string;
  ed25519: string;
}

export interface Vault {
  bond: number;
  height: number;
  pubKey: string;
  locked: number;
  membership: string[];
  coins: Coin[];
}
