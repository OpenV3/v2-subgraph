# Uniswap V2 Subgraph

[Uniswap](https://uniswap.org/) is a decentralized protocol for automated token exchange on Ethereum.

This subgraph dynamically tracks any pair created by the uniswap factory. It tracks of the current state of Uniswap contracts, and contains derived stats for things like historical data and USD prices.

- aggregated data across pairs and tokens,
- data on individual pairs and tokens,
- data on transactions
- data on liquidity providers
- historical data on Uniswap, pairs or tokens, aggregated by day

## Running Locally

Make sure to update package.json settings to point to your own graph account.

## Queries

Below are a few ways to show how to query the uniswap-subgraph for data. The queries show most of the information that is queryable, but there are many other filtering options that can be used, just check out the [querying api](https://thegraph.com/docs/graphql-api). These queries can be used locally or in The Graph Explorer playground.

## Key Entity Overviews

#### UniswapFactory

Contains data across all of Uniswap V2. This entity tracks important things like total liquidity (in ETH and USD, see below), all time volume, transaction count, number of pairs and more.

#### Token

Contains data on a specific token. This token specific data is aggregated across all pairs, and is updated whenever there is a transaction involving that token.

#### Pair

Contains data on a specific pair.

#### Transaction

Every transaction on Uniswap is stored. Each transaction contains an array of mints, burns, and swaps that occured within it.

#### Mint, Burn, Swap

These contain specifc information about a transaction. Things like which pair triggered the transaction, amounts, sender, recipient, and more. Each is linked to a parent Transaction entity.

## Example Queries

### Querying Aggregated Uniswap Data

This query fetches aggredated data from all uniswap pairs and tokens, to give a view into how much activity is happening within the whole protocol.

```graphql
{
  uniswapFactories(first: 1) {
    pairCount
    totalVolumeUSD
    totalLiquidityUSD
  }
}
```


## GoldSky Graph Deployment

```shell
# since goldsky does not work with the networks.json file like the graph cli we can do the following

# as before make sure deps are installed
yarn install

# to overwrite the subgraph.yaml with the network config
npx mustache config/<network-name>.json subgraph.template.yaml > subgraph.yaml

# you can then normally codgen and build
yarn codegen
yarn buildonly

# specific to GoldSky:

# deploy subgraph to GoldSky
goldsky subgraph deploy <subgraph-name>/<version> --path .
## for example:
goldsky subgraph deploy open-v2/1.0.0 --path .

## create a tag for a subgraph
goldsky subgraph tag create <subgraph-name>/<version> --tag <tag-string>
## for example:
goldsky subgraph tag create open-v2/1.0.0 --tag prod

```
