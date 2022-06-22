import styled from "styled-components";

const StyledTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.color};
  }
  svg {
    width: 1.5rem;
  }
`;

export function iconSkillTags(icon) {
  return icon.map((skill) => (
    <StyledTag key={skill.id} color={skill.color}>
      {skill.icon}&nbsp;&nbsp;{skill.name}
    </StyledTag>
  ));
}
