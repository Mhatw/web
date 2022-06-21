import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/buttons";
import { PortfolioContainer } from "../../components/containers";
import { iconTags, tags } from "../../components/tag";
import { Paragraph, Title } from "../../components/text";
import { projects } from "../../data";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  min-height: 90vh;
  margin-top: 1rem;
  padding: 1.5rem;
  gap: 1.5rem;
  .tagsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.25rem;
    width: 100%;
    padding-right: 10%;
    margin: 0.5rem 0;
  }
  .iconTagsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0.25rem;
  }
  img {
    margin: 1rem 0;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

export default function Category() {
  let params = useParams();
  let projectsData = projects.filter((project) =>
    project.lang.includes(params.id.toLowerCase())
  );
  console.log(params, projectsData);
  return (
    <StyledDiv>
      <PortfolioContainer bgcolor="#F5F5F5">
        {" "}
        <Title size="sm">{params.id}</Title>{" "}
      </PortfolioContainer>

      {projectsData.map((project) => (
        <PortfolioContainer key={project.id} bgcolor={project.bgcolor}>
          <div className="iconTagsContainer">{iconTags(project.icons)}</div>
          <Title size="sm">{project.name}</Title>
          <div className="tagsContainer">{tags(project.tags)}</div>
          <Paragraph size="sm">{project.description}</Paragraph>
          <img src={project.image} alt={project.name} />

          <Button
            maxWidth={true}
            onClick={() => window.open(`${project.url}`, "_blank")}
          >
            {" "}
            See project{" "}
          </Button>
        </PortfolioContainer>
      ))}
    </StyledDiv>
  );
}
