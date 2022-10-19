import styled from 'styled-components';
import Image from 'next/image';
import { GlobalStyle } from '../styles/global';
import Head from 'next/head';

const Background = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 80px 120px;
`;

const Main = styled.main`
  display: flex;
  gap: 40px;
`;

const Projects = styled.section`
  padding-top: 48px;
`;

const MyImage = styled.div`
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.5));

  img {
    background: #1a1817;
    background-image: linear-gradient(
      to right,
      #1a1817 0%,
      #000000 20%,
      #1a1817 40%,
      #1a1817 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;

const CallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.h1`
  color: #fafafa;
  font-size: 32px;
  line-height: 56px;
  font-weight: 600;

  margin-top: -12px;
`;

const TitleHighlight = styled.span`
  color: #f27f0c;
  font-size: 80px;
  font-weight: 700;
`;

const Bio = styled.p`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const BioHighlight = styled.span`
  color: #f27f0c;
  font-size: 24px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 276px;
  height: 64px;

  background-color: #f27f0c;

  border: none;

  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.h2`
  color: #fafafa;
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
`;

const BadgeSelector = styled.div`
  display: flex;
  gap: 16px;

  padding-top: 8px;
  padding-bottom: 8px;
`;

const TechBadge = styled.span`
  background-color: #1a1817;

  color: #fafafa;
  font-size: 16px;
  font-weight: 400;

  padding: 8px 24px;

  border-radius: 10px;
`;

const ProjectCards = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 32px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 256px;

  img {
    background: #1a1817;
    background-image: linear-gradient(
      to right,
      #1a1817 0%,
      #000000 20%,
      #1a1817 40%,
      #1a1817 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;

const ProjectName = styled.p`
  color: #fafafa;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const ProjectDetail = styled.p`
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>mateusjbarbosa.dev.br</title>
      </Head>
      <Background>
        <GlobalStyle />
        <Main>
          <MyImage>
            <Image
              src="/images/profile.webp"
              alt="O desenvolvedor Mateus sentado com uma paisagem ao fundo"
              height={350}
              width={350}
              quality={75}
            />
          </MyImage>
          <CallWrapper>
            <Title>
              Olá eu sou o <br />
              <TitleHighlight>Mateus</TitleHighlight>
            </Title>
            <Bio>
              Tenho 23 anos e trabalho como desenvolvedor desde 2018. Sou
              bacharel <br />
              em <BioHighlight>Sistemas de Informação</BioHighlight> e
              atualmente sou <BioHighlight>Engenheiro de Software</BioHighlight>{' '}
              e <br />
              também professor na{' '}
              <BioHighlight>Digital House Brasil</BioHighlight>.
            </Bio>
            <Button type="button">Vamos conversar</Button>
          </CallWrapper>
        </Main>

        <Projects>
          <Subtitle>Projetos</Subtitle>
          <BadgeSelector>
            <TechBadge>Node.js</TechBadge>
            <TechBadge>React</TechBadge>
            <TechBadge>React Native</TechBadge>
          </BadgeSelector>

          <ProjectCards>
            <ProjectCard>
              <Image
                src="/images/generic-project-thumb.webp"
                alt="Thumb genérica de um projeto"
                height={144}
                width={256}
                quality={75}
              />
              <ProjectName>Nome do projeto</ProjectName>
              <ProjectDetail>
                Lorem ipsum dolor sit amet, banana com café
              </ProjectDetail>
            </ProjectCard>

            <ProjectCard>
              <Image
                src="/images/generic-project-thumb.webp"
                alt="Thumb genérica de um projeto"
                height={144}
                width={256}
                quality={75}
              />
              <ProjectName>Nome do projeto 2</ProjectName>
              <ProjectDetail>
                Lorem ipsum dolor sit amet, banana com café
              </ProjectDetail>
            </ProjectCard>

            <ProjectCard>
              <Image
                src="/images/generic-project-thumb.webp"
                alt="Thumb genérica de um projeto"
                height={144}
                width={256}
                quality={75}
              />
              <ProjectName>Nome do projeto 3</ProjectName>
              <ProjectDetail>
                Lorem ipsum dolor sit amet, banana com café
              </ProjectDetail>
            </ProjectCard>
          </ProjectCards>
        </Projects>
      </Background>
    </>
  );
}
