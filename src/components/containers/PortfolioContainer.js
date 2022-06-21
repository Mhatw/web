import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  justify-content: center;
  padding: 2rem 1.5rem;
  width: 100%;
  box-sized: border-box;
  border-radius: 0.5rem;
  background-color: ${(props) => props.bgcolor};
`;

export function PortfolioContainer({ ...props }) {
  return <StyledDiv {...props}></StyledDiv>;
}
