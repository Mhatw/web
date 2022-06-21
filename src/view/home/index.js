import styled from "styled-components";
import { Button } from "../../components/buttons";
import { Paragraph, Title } from "../../components/text";
import { SvgContainer } from "../../components/containers";
import { Categories } from "../portfolio/Categories";

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
  padding: 0rem 2rem 0 3rem;
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
    animation: loading 1s ease-in infinite;
    
    @media (max-width: 800px) {
      display: none;
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
          <Button
            maxWidth={true}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1j5OATajjRVbJHlv8RXfGO0797lqYg5ZK/view?usp=sharing",
                "_blank"
              )
            }
          >
            View Resume
          </Button>
        </div>
        <img
          src="https://images.pexels.com/photos/7213441/pexels-photo-7213441.jpeg?cs=srgb&dl=pexels-ivan-samkov-7213441.jpg&fm=jpg"
          alt="portada"
        />
      </StyledDiv>
      <Categories />
    </>
  );
}
