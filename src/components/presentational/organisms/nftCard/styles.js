import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: #303339;
  flex: 1 1 auto;
  width: 14rem;
  height: 22rem;
  margin-top: 2.5rem; /* 40px */
  margin-bottom: 2.5rem; /* 40px */
  margin-left: 1.25rem; /* 20px */
  margin-right: 1.25rem; /* 20px */
  border-radius: 1rem; /* 16px */
  overflow: hidden;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  height:66%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NftImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 0.75rem; /* 12px */
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e4e8eb;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

export const InfoLeft = styled.div`
  flex-wrap: wrap;
  flex: 1 1 auto;
  /* infoLeft: flex-0.6 flex-wrap, */
`;

export const CollectionName = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25rem; /* 20px */
  color: #8a939b;
`;

export const AssetName = styled.div`
  font-weight: 700;
  font-size: 12px;
  margin-top: 0.5rem; /* 8px */
`;

export const InfoRight = styled.div`
  text-align: right;
  flex: 1 1 auto;

  /* flex-0.4  */
`;

export const PriceTag = styled.div`
  font-weight: 600;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: #8a939b;
`;

export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.875rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 700;
  margin-top: 0.1rem; /* 8px */
`;

export const EthLogo = styled.img`
  height: 1.25rem; /* 20px */
  margin-right: 0.5rem; /* 8px */
`;

export const Likes = styled.div`
  color: #8a939b;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 0.75rem; /* 12px */
`;

export const LikeIcon = styled.div`
display: flex;
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  margin-right: 0.25rem; /* 8px */
  &:hover {
    color: red;
  }
`;

export const LikeValue = styled.div`
  font-size: 0.875rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  margin-right: 0.75rem; /* 8px */
  display: flex;
`;

// wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
// imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
// nftImg: `w-full object-cover`,
// details: `p-3`,
// info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
// infoLeft: `flex-0.6 flex-wrap`,
// collectionName: `font-semibold text-sm text-[#8a939b]`,
// assetName: `font-bold text-lg mt-2`,
// infoRight: `flex-0.4 text-right`,
// priceTag: `font-semibold text-sm text-[#8a939b]`,
// priceValue: `flex items-center text-xl font-bold mt-2`,
// ethLogo: `h-5 mr-2`,
// likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
// likeIcon: `text-xl mr-2`,
