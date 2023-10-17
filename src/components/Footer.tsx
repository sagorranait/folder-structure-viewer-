import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>By creating your folder using our service you agree with our <LinkText>Terms of Service</LinkText> and <LinkText>Privacy Policy</LinkText>.</p>
      <Text>&copy; 2023 Sagor Rana. All rights reserved.</Text>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const LinkText = styled.span`
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`;

const Text = styled.p`
  color: #9d9d9d;
`;