import styled from "styled-components/macro";

export const BannerImageContainer = styled.div`
height: 20vh;
width: 100vw;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`

export const BannerImage = styled.img`
width: 100%;
object-fit: cover;
`

export const InfoContainer = styled.div`
width: 100vw;
padding-left: 1rem; /* 16px */
padding-right: 1rem; /* 16px */
`

export const MidRow = styled.div`
width: 100%;
display: flex;
justify-content: center;
color: white;
`

export const EndRow = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
color: white;`

export const ProfileImg = styled.img`
	width: 10rem; /* 160px */
  height: 10rem; /* 160px */
  object-fit: cover;
  border: 4px solid #202225 ;
  border-radius: 9999px;
  margin-top: -4rem;
`

export const SocialIconsContainer = styled.div`
display: flex;
font-size: 1.875rem; /* 30px */
line-height: 2.25rem; /* 36px */
margin-bottom: -4rem;
`
export const SocialIconsWrapper = styled.div`
	width: 11rem; /* 176px */
`

export const SocialIconsContent = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.4rem;
line-height: 1.4rem;
border: 2px solid white;
border-radius: 0.5rem; /* 8px */
padding-left: 0.5rem; /* 8px */
padding-right: 0.5rem; /* 8px */
`

export const SocialIcon = styled.div`
margin-top: 0.5rem; /* 8px */
margin-bottom: 0.5rem; /* 8px */
`

export const Divider = styled.div`
	border-right-width: 2px;
`

export const title = styled.div``

export const createdBy = styled.div``

export const statsContainer = styled.div``



// bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
// bannerImage: `w-full object-cover`,
// infoContainer: `w-screen px-4`,
// midRow: `w-full flex justify-center text-white`,
// endRow: `w-full flex justify-end text-white`,
// profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
// socialIconsContainer: `flex text-3xl mb-[-2rem]`,
// socialIconsWrapper: `w-44`,
// socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
// socialIcon: `my-2`,
// divider: `border-r-2`,
// title: `text-5xl font-bold mb-4`,
// createdBy: `text-lg mb-4`,
// statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
// collectionStat: `w-1/4`,
// statValue: `text-3xl font-bold w-full flex items-center justify-center`,
// ethLogo: `h-6 mr-2`,
// statName: `text-lg w-full text-center mt-1`,
// description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,