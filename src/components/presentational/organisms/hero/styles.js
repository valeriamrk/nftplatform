import styled from "styled-components/macro";

export const HeroWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  &:before {
    content: "";
    background-color: rgb(239 68 68);
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-image: url(https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250);
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    filter: blur(8px);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 50%;
`;
export const Title = styled.div`
  position: relative;
  color: white;
  font-size: 46px;
  font-weight: 600;
`;

export const Description = styled.div`
  color: #8a939b;
  max-width: 400px;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  margin-top: 0.8rem;
  margin-bottom: 2.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
`;

export const InfoContainer = styled.div`
  height: 5rem; /* 80px */
  background-color: #313338;
  padding: 1rem; /* 16px */
  border-bottom-right-radius: 0.5rem; /* 8px */
  border-bottom-left-radius: 0.5rem; /* 8px */
  display: flex;
  align-items: center;
  color: white;
`;

export const MainImage = styled.img`
  border-top-right-radius: 0.5rem; /* 8px */
  border-top-left-radius: 0.5rem; /* 8px */
`;

export const Avatar = styled.img`
  height: 2.25rem;
  border-radius: 9999px;
`;
//h-[2.25rem] rounded-full"

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem; /* 16px */
`;

export const Name = styled.div``;

export const Link = styled.a`
  color: #1868b7;
`;

export const InfoIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 1 0%;
  color: #8a939b;
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 700;
`;

// wrapper: `relative`,
//   container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
//   contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
//   copyContainer: `w-1/2`,
//   title: `relative text-white text-[46px] font-semibold`,
//   description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
//   ctaContainer: `flex`,
//   accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
//   button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
//   cardContainer: `rounded-[3rem]`,
//   infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
//   author: `flex flex-col justify-center ml-4`,
//   name: ``,
//   infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
