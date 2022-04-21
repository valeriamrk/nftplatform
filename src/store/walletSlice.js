import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: [
    {
      id: 1, 
      name: "MetaMask",
      logo: "https://opensea.io/static/images/logos/metamask-alternative.png",
    },
    {
      id: 2, 
      name: "Coinbase Wallet",
      logo: "https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png",
    },
    {
      id: 3, 
      name: "WalletConnect",
      logo: "https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png",
    },
    {
      id: 4, 
      name: "Fortmatic",
      logo: "https://static.opensea.io/logos/fortmatic-alternative.png",
    },
    {
      id: 5, 
      name: "Kaikas",
      logo: "https://opensea.io/static/images/logos/kaikas-alternative.png",
    },
    {
      id: 6, 
      name: "Bitski",
      logo: "https://static.opensea.io/logos/bitski-alternative.png",
    },
    {
      id: 7, 
      name: "Venly",
      logo: "https://opensea.io/static/images/logos/venly.svg",
    },
    {
      id: 8, 
      name: "Dapper",
      logo: "https://static.opensea.io/logos/dapper-icon.png",
    },
    {
      id: 9, 
      name: "Authereum",
      logo: "https://storage.opensea.io/static/wallets/authereum/authereum-alternative.png",
    },
    {
      id: 10, 
      name: "Torus",
      logo: "https://storage.opensea.io/static/wallets/torus/torus-alternative.png",
    },
    {
      id: 11, 
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