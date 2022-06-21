import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function PortfolioView() {
  return (
    <StyledDiv>
      <Outlet />
    </StyledDiv>
  );
}
