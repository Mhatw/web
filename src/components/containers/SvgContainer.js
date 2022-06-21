import { Github, Instagram, Linkedin } from "@styled-icons/boxicons-logos";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 2rem;
    padding: 0.25rem;
    border-radius: 50%;
    color: ${(props) => props.theme.svg.primary};
    transition: 0.1s ease-in 20ms;
    // transition-delay: 0.1s;
    &:hover {
      color: ${(props) => props.theme.svg.hoverPrimary};
      background-color: ${(props) => props.theme.svg.hoverBackground};
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
    }
  }
`;

export function SvgContainer({ ...props }) {
  return (
    <StyledDiv {...props}>
      <Linkedin
        onClick={() =>
          window.open("https://www.linkedin.com/in/mhatw/", "_blank")
        }
      />

      <Github
        onClick={() => window.open("https://github.com/Mhatw", "_blank")}
      />

      <Instagram
        onClick={() =>
          window.open("https://www.instagram.com/_mhatw/", "_blank")
        }
      />
    </StyledDiv>
  );
}
