import styled from "styled-components";
import { Button } from "../../components/buttons";
import { Logo, Paragraph, Title } from "../../components/text";
import { SvgContainer } from "../../components/containers";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.background.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  max-width: 1344px;
  padding: 2.75rem 3rem 0 3rem;
  gap: 4rem;
  .logo {
    position: absolute;
    top: 2.25rem;
    left: 2.25rem;
  }
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
  }
  img{
    width: 50%;
    max-height: 80vh;
    fit-content: cover;
    @media (max-width: 800px) {
      display: none;
  }
`;

export function HomeView() {
  return (
    <StyledDiv>
      <Logo className="logo" />
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
        <SvgContainer />
        {/* button */}
        <Button maxWidth={true}>View Resume</Button>
      </div>
      <img
        src="https://images.pexels.com/photos/7213441/pexels-photo-7213441.jpeg?cs=srgb&dl=pexels-ivan-samkov-7213441.jpg&fm=jpg"
        alt="portada"
      />
    </StyledDiv>
  );
}
