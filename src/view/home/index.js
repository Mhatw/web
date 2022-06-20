import styled from "styled-components";
import { Button } from "../../components/buttons";
import { Paragraph, Title } from "../../components/text";
import { Category, SvgContainer } from "../../components/containers";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.background.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100vw;
  max-width: 1344px;
  padding: 0rem 3rem 0 3rem;
  gap: 4rem;
  .left {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h2 {
      text-align: left;
      margin-bottom: 0.875rem;
      white-space: nowrap;
    }
    p {
      text-align: left;
    }
    .social{
      margin: 2.125rem 0;
    }
  }
  img{
    width: 50%;
    max-height: 80vh;
    fit-content: cover;
    @media (max-width: 800px) {
      display: none;
  }
`;

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`;

function renderCategories(categories) {
  return categories.map((category) => {
    return (
      <Category
        key={category.id}
        name={category.name}
        bgcolor={category.bgcolor}
      ></Category>
    );
  });
}
const categories = [
  { id: 1, name: "Ruby Projects", bgcolor: "#D9D9D9" },
  { id: 2, name: "Javascript Projects", bgcolor: "#F3F3F3" },
  { id: 3, name: "React Projects", bgcolor: "#EDEDED" },
  { id: 4, name: "Graphic Design", bgcolor: "#D9D9D9" },
];

export function HomeView() {
  return (
    <>
      <StyledDiv>
        {/* <Logo className="logo" /> */}
        <div className="left">
          {/* Title */}
          <Title size="md" color="primary">
            FullStack Dev.
            <br />
            Designer.
            <br />
            Disrupter.
          </Title>
          {/* paragraph */}
          <Paragraph size="md">
            Hi! I’m Cristian, FullStack developer and designer looking for new
            adventures
          </Paragraph>
          {/* svg container */}
          <SvgContainer className="social" />
          {/* button */}
          <Button maxWidth={true}>View Resume</Button>
        </div>
        <img
          src="https://images.pexels.com/photos/7213441/pexels-photo-7213441.jpeg?cs=srgb&dl=pexels-ivan-samkov-7213441.jpg&fm=jpg"
          alt="portada"
        />
      </StyledDiv>
      <StyledCategory>{renderCategories(categories)}</StyledCategory>
    </>
  );
}
