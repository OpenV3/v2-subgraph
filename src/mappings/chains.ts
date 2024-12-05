import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'
import { dataSource } from '@graphprotocol/graph-ts'

import { TokenDefinition } from './tokenDefinition'

export class SubgraphConfig {
  // Core protocol addresses
  factoryAddress: string

  // Price calculation pairs
  ethUsdcPair: string // created 10008355
  ethDaiPair: string // created block 10042267
  ethUsdtPair: string // created block 10093341

  // Core assets
  wrappedNativeAddress: string

  // Minimum liquidity thresholds
  minimumUsdThresholdNewPairs: BigDecimal
  minimumLiquidityThresholdEth: BigDecimal

  // Token lists
  whitelistTokens: string[]
  stablecoinAddresses: string[]
  untrackedPairs: string[]
  skipTotalSupply: string[]

  // Token metadata overrides
  tokenOverrides: TokenDefinition[]
}

// subgraph does not support string enums, hence these constants
// const ARBITRUM_ONE_NETWORK_NAME = 'arbitrum-one'
// const AVALANCHE_NETWORK_NAME = 'avalanche'
// const BASE_NETWORK_NAME = 'base'
// const BLAST_MAINNET_NETWORK_NAME = 'blast-mainnet'
// const BSC_NETWORK_NAME = 'bsc'
// const CELO_NETWORK_NAME = 'celo'
const MAINNET_NETWORK_NAME = 'mainnet'
// const MATIC_NETWORK_NAME = 'matic'
// const OPTIMISM_NETWORK_NAME = 'optimism'
// const ZKSYNC_ERA_NETWORK_NAME = 'zksync-era'
// const ZORA_MAINNET_NETWORK_NAME = 'zora-mainnet'
// const WORLDCHAIN_MAINNET_NETWORK_NAME = 'worldchain-mainnet'
// const SEPOLIA_NETWORK_NAME = 'sepolia'
const INK_SEPOLIA_NETWORK_NAME = 'ink-sepolia'

export function getSubgraphConfig(): SubgraphConfig {
  const network = dataSource.network()

  // For now, just return mainnet config since that's what's currently implemented
  if (network == MAINNET_NETWORK_NAME) {
    return {
      factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',

      // Price reference pairs
      ethUsdcPair: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      ethDaiPair: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      ethUsdtPair: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',

      wrappedNativeAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH

      minimumUsdThresholdNewPairs: BigDecimal.fromString('400000'),
      minimumLiquidityThresholdEth: BigDecimal.fromString('2'),

      whitelistTokens: [
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
        '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
        '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
        '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
        '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643', // cDAI
        '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
        '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f', // EBASE
        '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
        '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
        '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
        '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
        '0x960b236a07cf122663c4303350609a66a7b288c0', // ANT
        '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', // SNX
        '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', // YFI
        '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8', // yCurv
        '0x853d955acef822db058eb8505911ed77f175b99e', // FRAX
        '0xa47c8bf37f92abed4a126bda807a7b7498661acd', // WUST
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', // WBTC
        '0x956f47f50a910163d8bf957cf5846d573e7f87ca', // FEI
      ],

      stablecoinAddresses: [
        '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
        '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      ],

      untrackedPairs: ['0x9ea3b5b4ec044b70375236a281986106457b20ef'],

      skipTotalSupply: ['0x0000000000bf2686748e1c0000255036e7617e8a5'],

      tokenOverrides: [
        new TokenDefinition(
          Address.fromString('0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'),
          'DGD',
          'DGD',
          BigInt.fromI32(9),
        ),
        new TokenDefinition(
          Address.fromString('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'),
          'AAVE',
          'Aave Token',
          BigInt.fromI32(18),
        ),
        new TokenDefinition(
          Address.fromString('0xeb9951021698b42e4399f9cbb6267aa35f82d59d'),
          'LIF',
          'Lif',
          BigInt.fromI32(18),
        ),
        new TokenDefinition(
          Address.fromString('0xbdeb4b83251fb146687fa19d1c660f99411eefe3'),
          'SVD',
          'savedroid',
          BigInt.fromI32(18),
        ),
        new TokenDefinition(
          Address.fromString('0xbb9bc244d798123fde783fcc1c72d3bb8c189413'),
          'TheDAO',
          'TheDAO',
          BigInt.fromI32(16),
        ),
        new TokenDefinition(
          Address.fromString('0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2'),
          'HPB',
          'HPBCoin',
          BigInt.fromI32(18),
        ),
      ],
    }
  } else if (network == INK_SEPOLIA_NETWORK_NAME) {
    // TODO
  }

  throw new Error('Unsupported network')
}
