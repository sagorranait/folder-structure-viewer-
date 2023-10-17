import styled from "styled-components";
import FolderList from "./FolderList";

const Folders = () => {
  return (
    <AccordionItem>
      <AccordionSummary>
        <SummaryText>
          <TextImg src="./assets/open-folder.png" alt="folder-icon" />
          <Text>Root</Text>
        </SummaryText>
        <SummaryButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
          <ButtonText>New</ButtonText>
        </SummaryButton>
      </AccordionSummary>
      <AccordionContent>
        <AccordionContainer>
          <FolderList
            title="Section 1"
            content="No Folders"
          />
          <FolderList
            title="Section 2"
            content={<FolderList title="Section 3" content="No Folders" />}
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

const AccordionItem = styled.div`
  width: 100%;
  height: 650px;
  margin: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const SummaryText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TextImg = styled.img`
  width: 30px;
`;

const Text = styled.p`
  font-size: 17px;
`;

const SummaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 68px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #0ea5e9;
`;

const ButtonText = styled.span`
  font-weight: 600;
  padding-top: 5px;
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 5px 20px;
`;