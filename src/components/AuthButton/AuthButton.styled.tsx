import styled from "styled-components";

export const AuthButtonCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px #979797;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
