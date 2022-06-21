import styled from "styled-components";

const StyledTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000000;
  line-height: 11px;
  // border: 1px solid red;
  object-fit: cover;
  svg {
    height: auto;
    width: 1rem;
    padding: 0;
  }
`;

export function iconTags(iconTags) {
  return iconTags.map((icon) => {
    return <StyledTag>{icon}</StyledTag>;
  });
}
