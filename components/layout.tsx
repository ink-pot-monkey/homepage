import Head from "next/head";
import styled from "styled-components";
import { Github, Linkedin } from "@styled-icons/fa-brands";

const name = "Thomas Sean Dominic Kelly";
export const siteTitle = "thomasSDK";
export const canvasMargin = 35;
export const lineColor = "white";
export const backgroundColor = "black";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/favicon/favicon_Leafy/favicon.ico" />
        <meta name={name} content="A portfolio site showing my wares" />
        <meta property="og:image" content="images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <body>
        <LinkContainer>
          <StyledLink href="https://www.linkedin.com/in/thomassdk/">
            <Linkedin className="icon" color={lineColor} size="40" />
          </StyledLink>
          <StyledLink href="https://github.com/thomasSDK">
            <Github className="icon" color={lineColor} size="40" />
          </StyledLink>
        </LinkContainer>
        <AppContainer className="container">{children}</AppContainer>
      </body>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 35px;
  right: ${canvasMargin}px;
`;

const StyledLink = styled.a`
  &:not(:last-child) {
    padding-right: 20px;
  }
`;
