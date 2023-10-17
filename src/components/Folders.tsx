import styled from "styled-components";
import FolderList from "./FolderList";

const Folders = () => {
  return (
    <AccordionItem open>
      <AccordionSummary>
        Root
      </AccordionSummary>
      <AccordionContent>
        <AccordionContainer>
          <FolderList
            title="Section 1"
            content="This is the content of section 1."
          />
          <FolderList
            title="Section 2"
            content="This is the content of section 2."
          />
      </AccordionContainer>
      </AccordionContent>
    </AccordionItem>
  )
}

export default Folders;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccordionItem = styled.details`
  width: 100%;
  height: 650px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  margin: 8px;
  border-radius: 10px;
  cursor: pointer;
`;

const AccordionSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 5px 20px;
`;