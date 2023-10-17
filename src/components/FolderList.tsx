import React, { useState } from 'react';
import styled from 'styled-components';

interface FolderListProps {
  title: string;
  content: React.ReactNode;
}

const FolderList = ({ title, content }: FolderListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem onClick={toggleAccordion}>
      <AccordionSummary>
        <SummaryText>
          {isOpen ? 
            <TextImg src="./assets/open-folder.png" alt="folder-icon" /> : 
            <TextImg src="./assets/folder.png" alt="folder-icon" /> 
          }          
          <Text>{title}</Text>
        </SummaryText>
        <ButtonArea>
          <SummaryButton>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <ButtonText>New</ButtonText>
          </SummaryButton>
          <SummaryDeleteButton>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </SummaryDeleteButton>
        </ButtonArea>
      </AccordionSummary>
      <AccordionContent>
        {content}
      </AccordionContent>
    </AccordionItem>
  )
}

export default FolderList;

const AccordionItem = styled.details`
  margin: 8px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ededede0;
  background: rgba(255, 255, 255, 0.1);
`;

const AccordionSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SummaryText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 30px;
`;

const TextImg = styled.img`
  width: 30px;
`;

const Text = styled.p`
  font-size: 17px;
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
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

const SummaryDeleteButton = styled.button`
  width: 33px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #0ea5e9;
  padding-top: 5px;
`;

const ButtonText = styled.span`
  font-weight: 600;
  padding-top: 5px;
`;

const AccordionContent = styled.p`
  padding: 10px 20px;
`;