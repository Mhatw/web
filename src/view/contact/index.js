import { Linkedin } from "@styled-icons/boxicons-logos";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/buttons";
import { PortfolioContainer } from "../../components/containers";
import { Paragraph } from "../../components/text";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 1rem;
  padding: 1.5rem;

  min-height: 70vh;
  div {
    background-color: ${(props) => props.theme.background.lightblue};
    svg {
      color: #fff;
    }
  }
`;

const StyledButton = styled(Button)`
  font-size: 0.8rem;
  padding: 1.5rem;
`;

export function IndexContact() {
  React.useEffect(() => {
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/mhatw/", "_blank");
    }, 3000);
  });
  return (
    <>
      <StyledDiv>
        <PortfolioContainer>
          <Paragraph size="sm">
            We are automatically redirecting you to LinkedIn. Please wait.
            <Linkedin />
          </Paragraph>
          <StyledButton
            color="secondary"
            onClick={() =>
              window.open("https://www.linkedin.com/in/mhatw/", "_blank")
            }
          >
            not working? click me
          </StyledButton>
        </PortfolioContainer>
      </StyledDiv>
    </>
  );
}
