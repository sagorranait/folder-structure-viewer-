import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <CommonArea>
        <LogoImg src="./assets/logo.png" alt="Folder-Structure-Logo" />
        <LogoText>Folder Structure</LogoText>
      </CommonArea>
      <CommonArea>
        <UserText>sagorranait@gmail.com</UserText>
        <UserImg src="https://avatars.githubusercontent.com/u/60606778?v=4" alt="Sagor Rana" />
      </CommonArea>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const CommonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 50px;
`;

const LogoText = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #333;
`;

const UserImg = styled.img`
  width: 40px;
  border-radius: 50px;
  object-fit: cover;
  border: 2px solid #e70844;
  object-position: center center;
`;

const UserText = styled.p`
  color: #9d9d9d;
`;