import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/buttons";
import { Paragraph, Title } from "../../components/text";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 80vh;
  text-align: left;
`;
export default function NotFound() {
  return (
    <StyledDiv>
      <Paragraph>
        <Title>404</Title>Page not found.
        <br />
        <br />
        Seems that you are lost 😨.
      </Paragraph>
      <Link to="/">
        <Button color="secondary">Go to home</Button>
      </Link>
    </StyledDiv>
  );
}
