import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: [
    {
      name: "MetaMask",
      logo: "https://opensea.io/static/images/logos/metamask-alternative.png",
    },
    {
      name: "Coinbase Wallet",
      logo: "https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png",
    },
    {
      name: "WalletConnect",
      logo: "https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png",
    },
    {
      name: "Fortmatic",
      logo: "https://static.opensea.io/logos/fortmatic-alternative.png",
    },
    {
      name: "Kaikas",
      logo: "https://opensea.io/static/images/logos/kaikas-alternative.png",
    },
    {
      name: "Bitski",
      logo: "https://static.opensea.io/logos/bitski-alternative.png",
    },
    {
      name: "Venly",
      logo: "https://opensea.io/static/images/logos/venly.svg",
    },
    {
      name: "Dapper",
      logo: "https://static.opensea.io/logos/dapper-icon.png",
    },
    {
      name: "Authereum",
      logo: "https://storage.opensea.io/static/wallets/authereum/authereum-alternative.png",
    },
    {
      name: "Torus",
      logo: "https://storage.opensea.io/static/wallets/torus/torus-alternative.png",
    },
    {
      name: "Portis",
      logo: "https://static.opensea.io/logos/portis-alternative.svg",
    },
  ]
}

export const walletSlice = createSlice({
  name: "walletData",
  initialState,
  reducers: {
  }
})

// export const { } = walletSlice.actions;


export default walletSlice.reducer