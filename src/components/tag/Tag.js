import styled from "styled-components";
import { fonts } from "../../styles";

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 0.6rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  line-height: 11px;
  color: #000000;
`;

export function tags(tags) {
  return tags.map((tag) => {
    return <StyledTag>{tag}</StyledTag>;
  });
}
