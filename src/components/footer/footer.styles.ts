import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 10px 15px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #777;
  font-size: 14px;
  background-color: white;
`;

const ItemLeft = styled.span``;

const StatusContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const AllItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }

  :active {
    background-color: rgba(175, 47, 47, 0.15);
  }
`;

const ActiveItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }

  :active {
    background-color: rgba(175, 47, 47, 0.15);
  }
`;

const CompletedItems = styled.button`
  padding: 3px 7px;
  border: 1px solid rgba(175, 47, 47, 0.15);
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border: 1px solid rgba(175, 47, 47, 0.298);
  }

  :active {
    background-color: rgba(175, 47, 47, 0.15);
  }
`;

const ClearCompleted = styled.button`
  border: none;
  background-color: transparent;
  color: #777;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid #777;
  }
`;

export {
  FooterContainer,
  ItemLeft,
  StatusContainer,
  ActiveItems,
  AllItems,
  CompletedItems,
  ClearCompleted,
};
