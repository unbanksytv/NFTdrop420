import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        Dimitri Daniloff and LiveTheLifeTV are sending you Good Vibes tbh. Claim your free NFT on Mumbai
      </FooterContainer>
    </Container>
  )
}

export default Footer

const FooterContainer = tw.div`
 max-w-screen-lg
 w-full
`

const Container = tw.div`
 flex
 justify-center
 my-5
`