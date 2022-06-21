import {
  Bootstrap,
  Css3,
  Figma,
  Git,
  Github,
  Html5,
  Javascript,
  ReactLogo,
  Sass,
} from "@styled-icons/boxicons-logos";
import {
  MessageAlt,
  MessageAltDots,
  Terminal,
} from "@styled-icons/boxicons-regular";
import { Ruby } from "@styled-icons/octicons";
import {
  Adobeaftereffects,
  Adobeillustrator,
  Adobephotoshop,
  Adobepremierepro,
  Bulma,
  Linux,
  Postgresql,
  Rubyonrails,
  Vite,
} from "@styled-icons/simple-icons";
import styled from "styled-components";
import { PortfolioContainer } from "../../components/containers";
import { Paragraph, Title } from "../../components/text";

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
const StyledDiv3 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
  }
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

const devSkills = [
  {
    id: 1,
    name: "JavaScript",
    icon: <Javascript />,
    color: "#f0db4f",
  },
  {
    id: 2,
    name: "React",
    icon: <ReactLogo />,
    color: "#0d96b4",
  },
  {
    id: 3,
    name: "Ruby",
    icon: <Ruby />,
    color: "#e43717",
  },
  {
    id: 4,
    name: "Ruby on Rails",
    icon: <Rubyonrails />,
    color: "#d30001",
  },
  {
    id: 5,
    name: "Vite",
    icon: <Vite />,
    color: "#5daeff",
  },
  {
    id: 6,
    name: "HTML",
    icon: <Html5 />,
    color: "#e14e1d",
  },
  {
    id: 7,
    name: "CSS3",
    icon: <Css3 />,
    color: "#0277bd",
  },
  {
    id: 8,
    name: "Sass",
    icon: <Sass />,
    color: "#cd6799",
  },
  {
    id: 9,
    name: "Bootstrap",
    icon: <Bootstrap />,
    color: "#7812f8",
  },
  {
    id: 10,
    name: "Bulma",
    icon: <Bulma />,
    color: "#00d0b1",
  },
  {
    id: 11,
    name: "PostgreSQL",
    icon: <Postgresql />,
    color: "#336791",
  },
  {
    id: 12,
    name: "Git",
    icon: <Git />,
    color: "#f03c2e",
  },
  {
    id: 13,
    name: "GitHub",
    icon: <Github />,
    color: "#336791",
  },
  {
    id: 14,
    name: "Linux",
    icon: <Linux />,
    color: "#0277bd",
  },
  {
    id: 15,
    name: "Terminal",
    icon: <Terminal />,
    color: "#336791",
  },
];
const designSkills = [
  {
    id: 1,
    name: "Adobe Photoshop",
    icon: <Adobephotoshop />,
    color: "#31a8ff",
  },
  {
    id: 2,
    name: "Adobe Illustrator",
    icon: <Adobeillustrator />,
    color: "#ff9a00",
  },
  {
    id: 3,
    name: "Adobe Premiere",
    icon: <Adobepremierepro />,
    color: "#3a3a99",
  },
  {
    id: 4,
    name: "Adobe After Effects",
    icon: <Adobeaftereffects />,
    color: "#9999ff",
  },
  {
    id: 5,
    name: "Figma",
    icon: <Figma />,
    color: "#0acf83",
  },
];

const languages = [
  {
    id: 1,
    name: "English",
    icon: <MessageAlt />,
    color: "#e43717",
  },
  {
    id: 2,
    name: "Spanish",
    icon: <MessageAltDots />,
    color: "#0077b5",
  },
];

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

function iconSkillTags(icon) {
  return icon.map((skill) => (
    <StyledTag key={skill.id} color={skill.color}>
      {skill.icon}&nbsp;&nbsp;{skill.name}
    </StyledTag>
  ));
}

export function AboutView() {
  return (
    <>
      <StyledDiv>
        <PortfolioContainer bgcolor="#F5F5F5">
          <Title size="sm">About</Title>
        </PortfolioContainer>
        <StyledDiv3>
          <PortfolioContainer bgcolor="#fff1e6">
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
            <PortfolioContainer bgcolor="#dfe7fd">
              <Title size="sm">Dev Skills</Title>
              <StyledDiv2>{iconSkillTags(devSkills)}</StyledDiv2>
            </PortfolioContainer>

            <PortfolioContainer bgcolor="#eae4e9">
              <Title size="sm">Design Skills</Title>
              <StyledDiv2>{iconSkillTags(designSkills)}</StyledDiv2>
            </PortfolioContainer>
          </StyledPortfolioContainer>
          <PortfolioContainer bgcolor="#fad2e1">
            <Title size="sm">Languages</Title>
            <StyledDiv2>{iconSkillTags(languages)}</StyledDiv2>
          </PortfolioContainer>
        </StyledDiv3>
      </StyledDiv>
    </>
  );
}
