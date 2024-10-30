import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia, anvil } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia,anvil],
  transports: {
    [mainnet.id]: http("https://eth.llamarpc.com"),
    [sepolia.id]: http("https://sepolia.infura.io/v3/"),
    [anvil.id]: http("http://localhost:8545"), // new
  },
})
