import styled, { useTheme } from "styled-components";
import { PortfolioContainer } from "../../components/containers";
import { iconSkillTags } from "../../components/tag";
import { Paragraph, Title } from "../../components/text";
import { designSkills, devSkills, languages } from "../../data";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
  margin-top: 1rem;
  padding: 1.5rem;
  gap: 1.5rem;
  text-align: left;
  .aboutBody {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    @media (min-width: 768px) {
    }
  }
`;

const StyledDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;
const StyledPortfolioContainer = styled(PortfolioContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  > div {
    width: 100%;
  }
`;

export function AboutView() {
  const theme = useTheme();
  return (
    <>
      <StyledDiv>
        <PortfolioContainer bgcolor={theme.background.gray}>
          <Title size="sm">About</Title>
        </PortfolioContainer>
        <div className="aboutBody">
          <PortfolioContainer bgcolor={theme.background.cardGray}>
            <Paragraph size="sm">
              Hi 👋🏻, I'm Cristian, a Full Stack developer, and designer.
              <br />
              Since I was very young I liked to solve problems and find the most
              efficient way to do things, so I have undertaken and experimented
              in various sectors, learning and feeding my knowledge. Thanks to
              this I can give another perspective to the challenges that are
              presented to me.
              <br />
              A few years ago I discovered my passion for development and
              design, since then I have not stopped researching and learning. I
              am currently on my personal quest to create simple and intuitive
              solutions.
              <br />
              🧠 I have knowledge in Javascript, Ruby, ReactJs, Ruby on Rails,
              and Adobe among others.
              <br />
              👨🏻💻 My goal is to develop myself as a Frontend Developer and Dev
              Designer.
              <br />
              ⛰My motto is:
              <br />
              "I seek to create, ideate, question, learn and constantly improve
              current know-how."
              <br />
              FullStack Dev. <br />
              Designer. <br />
              Disruptor.
              <br />
            </Paragraph>
          </PortfolioContainer>

          <StyledPortfolioContainer bgcolor="transparent">
            <PortfolioContainer bgcolor={theme.background.blue}>
              <Title size="sm">Dev Skills</Title>
              <StyledDiv2>{iconSkillTags(devSkills)}</StyledDiv2>
            </PortfolioContainer>

            <PortfolioContainer bgcolor={theme.background.violet}>
              <Title size="sm">Design Skills</Title>
              <StyledDiv2>{iconSkillTags(designSkills)}</StyledDiv2>
            </PortfolioContainer>
          </StyledPortfolioContainer>
          <PortfolioContainer bgcolor={theme.background.red}>
            <Title size="sm">Languages</Title>
            <StyledDiv2>{iconSkillTags(languages)}</StyledDiv2>
          </PortfolioContainer>
        </div>
      </StyledDiv>
    </>
  );
}
