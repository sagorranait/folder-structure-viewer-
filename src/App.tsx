import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Folders from "./components/Folders";

const App = () => {
  return (
    <Container>
      <Header/>
      <Folders/>
      <Footer/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 1240px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto 0;
  gap: 20px;
  // height: 650px;
  // background: #FFFFFF;
  // border-radius: 10px;
  // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`