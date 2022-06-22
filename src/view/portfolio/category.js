import { Link, useParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/buttons";
import { PortfolioContainer } from "../../components/containers";
import { iconTags, tags } from "../../components/tag";
import { Paragraph, Title } from "../../components/text";
import { projects } from "../../data";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  min-height: 90vh;
  margin-top: 1rem;
  padding: 1.5rem;
  gap: 1.5rem;
  text-align: left;
  .render {
    > h2 {
      width: 100%;
    }
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 1.5rem;
  }
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
    background-color: #bababa;
    animation: loading 1s ease-in infinite;
    min-height: 10rem;
  }
  @keyframes loading {
    0% {
      background: #fafafa;
    }
    50% {
      background: #eaeaea;
    }
    100% {
      background: #fafafa;
    }
  }
`;
const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  text-align: left;
`;
export default function Category() {
  let params = useParams();
  const theme = useTheme();
  let projectsData = projects.filter((project) =>
    project.lang.includes(params.id.toLowerCase())
  );
  console.log(params, projectsData);
  return projectsData.length !== 0 ? (
    <StyledDiv>
      <PortfolioContainer bgcolor={theme.background.gray}>
        <Link to="/portfolio">
          <Title size="sm">{params.id}</Title>
        </Link>
      </PortfolioContainer>
      <div className="container">
        {projectsData.map((project) => (
          <PortfolioContainer
            className="render"
            key={project.id}
            bgcolor={theme.background.cardGray}
          >
            <div className="iconTagsContainer">{iconTags(project.icons)}</div>
            <Title size="sm">{project.name}</Title>
            <div className="tagsContainer">{tags(project.tags)}</div>
            <Paragraph size="sm">{project.description}</Paragraph>
            <img src={project.image} alt={project.name} />

            <Button
              color="secondary"
              maxWidth={true}
              onClick={() => window.open(`${project.url}`, "_blank")}
            >
              {" "}
              See project{" "}
            </Button>
          </PortfolioContainer>
        ))}
      </div>
    </StyledDiv>
  ) : (
    <StyledDiv2>
      <Paragraph>
        No projects loaded for<Title>{params.id}</Title> category.
        <br />
        <br />
        Please check back later.
      </Paragraph>
      <Link to="/portfolio">
        <Button color="secondary">Go to porfolio</Button>
      </Link>
    </StyledDiv2>
  );
}
