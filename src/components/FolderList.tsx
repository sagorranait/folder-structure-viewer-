import React, { useState } from 'react';
import styled from 'styled-components';

interface FolderListProps {
  title: string;
  content: string;
}

const FolderList = ({ title, content }: FolderListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem>
      <AccordionSummary>
        {title}
      </AccordionSummary>
      <AccordionContent>
        {content}
      </AccordionContent>
    </AccordionItem>
  )
}

export default FolderList;

const AccordionItem = styled.details`
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
  padding: 10px 20px;
`;