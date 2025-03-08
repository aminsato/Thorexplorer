import axios from "axios";

import { toCamelCase, toSnakeCase } from "@/utils/functions";
import { Node, Pool, Vault } from "@/utils/interfaces";

const apiRef = {
  ninerealms: "https://thornode.ninerealms.com/thorchain/",
  vultisig: "https://api.vultisig.com/",
};

const fetch = axios.create({
  baseURL: apiRef.vultisig,
  headers: { accept: "application/json" },
});

fetch.interceptors.request.use(
  (config) => {
    config.data = toSnakeCase(config.data);

    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

fetch.interceptors.response.use(
  (response) => {
    response.data = toCamelCase(response.data);

    return response;
  },
  ({ response }) => {
    response.data = toCamelCase(response.data);

    return Promise.reject(response);
  }
);

const api = {
  getCountryByIp: async (ipAddress: string) => {
    if (!ipAddress) return Promise.resolve("Unknown");

    return fetch
      .get<{ countryCode: string }>(
        `https://ipwhois.app/json/${ipAddress.replace(/\s/g, "")}`
      )
      .then(({ data }) => {
        return data?.countryCode || "Unknown";
      })
      .catch((response) => {
        console.error(
          `Error fetching country for IP "${ipAddress}":`,
          response
        );

        return "Unknown";
      });
  },
  getNodes: async () => {
    return fetch
      .get<
        {
          country: string;
          ipAddress: string;
          nodeAddress: string;
          pubKeySet: { secp256k1: string; ed25519: string };
          status: string;
          totalBond: string;
          version: string;
        }[]
      >(`${apiRef.ninerealms}nodes`)
      .then(({ data }) => {
        const nodes: Node[] = data.map((node) => ({
          country: "Unknown",
          ipAddress: node.ipAddress,
          nodeAddress: node.nodeAddress,
          pubKey: node.pubKeySet,
          status: node.status,
          totalBond: Number(node.totalBond),
          version: node.version,
        }));

        return nodes;
      })
      .catch((response) => {
        console.error("Unexpected response format:", response);

        return [] as Node[];
      });
  },
  getPools: async () => {
    return fetch
      .get<
        {
          asset: string;
          assetTorPrice: string;
          balanceAsset: string;
          balanceRune: string;
          derivedDepthBps: string;
          loanCollateral: string;
          loanCollateralRemaining: string;
          loanCr: string;
          LPUnits: string;
          pendingInboundAsset: string;
          pendingInboundRune: string;
          poolUnits: string;
          saversCapacityRemaining: string;
          saversDepth: string;
          saversFillBps: string;
          saversUnits: string;
          shortCode: string;
          status: string;
          synthMintPaused: boolean;
          synthSupply: string;
          synthSupplyRemaining: string;
          synthUnits: string;
        }[]
      >(`${apiRef.ninerealms}pools`)
      .then(({ data }) => {
        const pools: Pool[] = data.map((pool) => ({
          asset: pool.asset,
          assetTorPrice: Number(pool.assetTorPrice),
          balanceAsset: Number(pool.balanceAsset),
          balanceRune: Number(pool.balanceRune),
          derivedDepthBps: Number(pool.derivedDepthBps),
          loanCollateral: Number(pool.loanCollateral),
          loanCollateralRemaining: Number(pool.loanCollateralRemaining),
          loanCr: Number(pool.loanCr),
          lpUnits: Number(pool.LPUnits),
          pendingInboundAsset: Number(pool.pendingInboundAsset),
          pendingInboundRune: Number(pool.pendingInboundRune),
          poolUnits: Number(pool.poolUnits),
          saversCapacityRemaining: Number(pool.saversCapacityRemaining),
          saversDepth: Number(pool.saversDepth),
          saversFillBps: Number(pool.saversFillBps),
          saversUnits: Number(pool.saversUnits),
          shortCode: pool.shortCode,
          status: pool.status,
          synthSupply: Number(pool.synthSupply),
          synthMintPaused: pool.synthMintPaused,
          synthSupplyRemaining: Number(pool.synthSupplyRemaining),
          synthUnits: Number(pool.synthUnits),
        }));

        return pools;
      })
      .catch((response) => {
        console.error("Unexpected response format:", response);

        return [] as Pool[];
      });
  },
  getRunePriceUsd: async () => {
    return fetch
      .get<{ thorchain: { usd: string } }>(
        "https://api.coingecko.com/api/v3/simple/price?ids=thorchain&vs_currencies=usd"
      )
      .then(({ data }) => {
        return parseFloat(data?.thorchain?.usd) || 0;
      })
      .catch((response) => {
        console.error("Error fetching RUNE price:", response);

        return 0;
      });
  },
  getVaults: async () => {
    return fetch
      .get<
        {
          blockHeight: string;
          coins: { amount: string; asset: string; decimals: number }[];
          membership: string[];
          pubKey: string;
        }[]
      >(`${apiRef.ninerealms}vaults/asgard`)
      .then(({ data }) => {
        const vaults: Vault[] = data.map((vault) => ({
          height: Number(vault.blockHeight),
          pubKey: vault.pubKey,
          bond: 0,
          locked: 0,
          membership: vault.membership,
          coins: vault.coins.map(({ amount, asset, decimals = 0 }) => ({
            asset,
            amount: Number(amount),
            decimals,
          })),
        }));

        return vaults;
      })
      .catch((response) => {
        console.error("Unexpected response format:", response);

        return [] as Vault[];
      });
  },
};

export default api;
