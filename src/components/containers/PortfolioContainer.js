import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  justify-content: center;
  padding: 2rem 1.5rem;
  width: 40%;
  box-sized: border-box;
  border-radius: 0.5rem;
  background-color: ${(props) => props.bgcolor};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function PortfolioContainer({ ...props }) {
  return <StyledDiv {...props}></StyledDiv>;
}
