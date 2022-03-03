import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nftCards: [
    {
      author: "Crypto Coven",
      id: 1,
      nft_name: "jujube, the soft puff",
      img: "https://lh3.googleusercontent.com/cVlXbOppkWKttyHZlG5AiEcM-o1xUKiR5PCvJc0GhjdyF5X7mbwWRr78f9267VvYkknkCfnV6X2K9ciKUHamOhgj9TB9XPslMxIHyQ=w600",
      price: "0,05",
      likes: 31,
    },
    {
      author: "Crypto Coven",
      id: 2,
      nft_name: "neroli, the sculptural diadem",
      img: "https://lh3.googleusercontent.com/3L5BPymJiVKw5eX9VNY8jXhTcBvzrW395f1miV-LX6uQzzqDPgiw13tVcLcQEMOcA5slqgyCnd5H1MVHkbKEyjU3KVmPdueBljQW=w600",
      price: "0,7451",
      likes: 50,
    },
    {
      author: "Crypto Coven",
      id: 3,
      nft_name: "capella the sufficient",
      img: "https://lh3.googleusercontent.com/oUIxw0slTFqsTYriVUtAyCC6x0d1U0Wh67nDIlvjozX789qzAw8gi1ic8Mu-cfPgYtzu9HGY4hMDiT-VrVBgMK3kqkXuJ2-qIyafwA=w600",
      price: "0,7156",
      likes: 19,
    },
    {
      author: "Crypto Coven",
      id: 4,
      nft_name: "apprentice pyxis",
      img: "https://lh3.googleusercontent.com/koVASwhhLvGtE_nqlomFVwtdlzrM5h5_hSJYQhyn3VqGSWrai5HqSnMa4HjQDhuo5_WEYW5oXrvtcrhIh5SZm8bSRfZSP8ScI3DclgY=w600",
      price: "0,0262",
      likes: 106,
    },
    {
      author: "Crypto Coven",
      id: 5,
      nft_name: "argon, the cruel knife",
      img: "https://lh3.googleusercontent.com/uZhMP7Eerd8XBPOC2J935Qj3BSVH004SVX3_3mQTHICES1Xi1Y6Hp5oFo440xOrkkKNeUsI_5VVohaxiYlTxSwvubww53d3vSf14=w600",
      price: "0,5",
      likes: 83,
    },
    {
      author: "Crypto Coven",
      id: 6,
      nft_name: "jatoba the undone",
      img: "https://lh3.googleusercontent.com/nZJ1K5L9a8W8xP0P80OsERKe-YdKTxutXngnHdw45XTt39jPhNyVTDRK7GKGtU5rgIijIH_dyvSooD8KHpT3svCMrZIZxvipx3I9WuQ=w600",
      price: "0,3",
      likes: 154,
    },
    {
      author: "Crypto Coven",
      id: 7,
      nft_name: "krakatoa rumpus",
      img: "https://lh3.googleusercontent.com/IEeiUlmlZt-MyBVhJUGBotniW-VtN0NAr3StITf1eg2QukSN9y6Ks6a7eqWZoxLFC43_szM8jT19YtyJIW4PcaSzSHY3dMREWKsS=w600",
      price: "0,7763",
      likes: 42,
    },
    {
      author: "Crypto Coven",
      id: 8,
      nft_name: "frangipani, the luscious chime",
      img: "https://lh3.googleusercontent.com/CZhnyKg0UM92CtKJVOoP_vHMu2r5-HHEELb3U-pMx_iU-kTuQ8CsO6B5AudpvNT0JvBCtrI_qbAnIPUXEYwUgwzKD4AZ_lRODw9Oaw=w600",
      price: "1,25",
      likes: 94,
    },
    {
      author: "Crypto Coven",
      id: 9,
      nft_name: "tsunami, the vicious bomb",
      img: "https://lh3.googleusercontent.com/6fMCe7OtrnI67Q3qYBwzoyX6ga-3boovXdbl1piAQgdczj0vYCoBStk-FqoRE9HNoiR47CACSK_ztRbkRxHqzfZJj-RJxTVAbbqWxg=w600",
      price: "1,37",
      likes: 10,
    },
    {
      author: "Crypto Coven",
      id: 10,
      nft_name: "asacha the raw",
      img: "https://lh3.googleusercontent.com/EUQcLrXAaNRYSopUE5pREoWvmIZ80HSASoqy0ajr_efrqs4LSPKbREkIax0bGyBbIPMro5Jx2LVMmGa995RnE9RE9J8w1l7p-1n8kg=w600",
      price: "1,4",
      likes: 2,
    },
    {
      author: "Crypto Coven",
      id: 11,
      nft_name: "boson grid",
      img: "https://lh3.googleusercontent.com/6f-LfVFV1WPL3HQFPzKioYCh-MajBOMHVrdYO0Ck3NBJpy077TGDRkZhWx4QXptTAs3Mm877MSLPPMT3qcXa1FCUQsfP9n7wlIlORA=w600",
      price: "1,4",
      likes: 7,
    },
    {
      author: "Crypto Coven",
      id: 12,
      nft_name: "papaya fog",
      img: "https://lh3.googleusercontent.com/rgXinkjgvzNVzqUnijGy7VGx7LlPAvHi1Qch8xKJ13LMyyqvbiyW9ORkP1mzo9relhfKREiInJlswDUcvqJpYrcn-tUb3G9vGWd2=w600",
      price: "1,5",
      likes: 1,
    },
    {
      author: "Crypto Coven",
      id: 13,
      nft_name: "devotee cereme",
      img: "https://lh3.googleusercontent.com/y1-On7afGlCY5DTBKdjPOYmtO8qKLp-UhwuHgBIs_TIcKXHftC-LIYaKj62-zuQQFwQJaRPvwwWJ3SyuPs25sRB8ITpnTyDcrA4lT24=w600",
      price: "1,5",
      likes: 6,
    },
    {
      author: "Crypto Coven",
      id: 14,
      nft_name: "cumaru, the snow-covered spear",
      img: "https://lh3.googleusercontent.com/cLuVK405vwsISLx6jIZ-bDUOxcygQT4-XAjHw-ddL7Tumpsg8-D5myWa2n5EOEfKOQ2jLma0vtv123RGBJneInrVvyN622hnGLkAHg=w600",
      price: "1,5",
      likes: 24,
    },
    {
      author: "Crypto Coven",
      id: 15,
      nft_name: "mademoiselle cloud",
      img: "https://lh3.googleusercontent.com/hIvpgrLTnvTNUYaxTF9j7Ql6OVzhaTW7ZScRfkbnybyEFliTA9QbnyEqpU4rYtjXQ4tg1d4GAcn4P2W7Wo-1QXBGqx9v7snszaTa=w600",
      price: "1,5",
      likes: 15,
    },
    {
      author: "Crypto Coven",
      id: 16,
      nft_name: "carrot of the wilds",
      img: "https://lh3.googleusercontent.com/FLbX_w-0XDok1WpB6ObI8fVBtqy96jFHEn5C7BYCZi0uZrz1GaA9f3Uon0Zq-PLf6I0MsooIXuIRNHJF1bpxS5s-4hmpCai1be9oog=w600",
      price: "1,7",
      likes: 6,
    },
    {
      author: "Crypto Coven",
      id: 17,
      nft_name: "katla the depraved",
      img: "https://lh3.googleusercontent.com/835lmBXKBsyvvSuDN6jb8gDA-cuu8WtW7-FGjtR5xjmlV0AsneEAWzjfh13Cmk7-akfi-yPB2EdSmthNeLExFxdoYt1yStZGXDZNuA=w600",
      price: "1,95",
      likes: 7,
    },
    {
      author: "Crypto Coven",
      id: 18,
      nft_name: "melon, the sweet kelp",
      img: "https://lh3.googleusercontent.com/tRW9WomurGhduz0J8GrZEOFNAw8CpOPb1u-5xzbj2ihvazBwmegJU-RHojwdjIXJzIT4C891H2ZantyrFK8lB5w7Cfd-Q-RlXYdnAg=w600",
      price: "1,75",
      likes: 2,
    },
    {
      author: "Crypto Coven",
      id: 19,
      nft_name: "tamarind the hazy",
      img: "https://lh3.googleusercontent.com/6LUb937f0TIXyjEqiI6V3yaM6pJPbf0VLcY1Xjoo56zxX2l0dcqnJgpgMe24ZYJY9_aVU08lM_jx8tn_GB632JW3TqcLEdsoqg1iTQ=w600",
      price: "1,75",
      likes: 5,
    },
    {
      author: "Crypto Coven",
      id: 20,
      nft_name: "clover the lithe",
      img: "https://lh3.googleusercontent.com/ZZNanYXIKLqJ3l7d99q4vsWZRpyULLdF3U1ci2YcyTewhhqSv0uWLaHN46-0GeImi5hYEX9cdEPWTyaTWq9DEo5tQdyolQtQyhnm=w600",
      price: "1,8",
      likes: 8,
    },
  ]
}

export const nftCardsSlice = createSlice({
  name: "nftCardsData",
  initialState,
  reducers: {
  }
})

export const { } = nftCardsSlice.actions;


export default nftCardsSlice.reducer