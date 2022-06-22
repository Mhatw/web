import styled, { useTheme } from "styled-components";
import { PortfolioContainer } from "../../components/containers";
import { Title } from "../../components/text";
import { categories } from "../../data";
import { renderCategories } from "./functions";

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 98vw;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 1.5rem;
`;

export function Categories() {
  return <StyledCategory>{renderCategories(categories)}</StyledCategory>;
}

export function IndexCategories() {
  const theme = useTheme();
  return (
    <>
      <StyledDiv>
        <PortfolioContainer bgcolor={theme.background.gray}>
          {" "}
          <Title size="sm">Portfolio</Title>{" "}
        </PortfolioContainer>
      </StyledDiv>
      <StyledCategory>{renderCategories(categories)}</StyledCategory>
    </>
  );
}
