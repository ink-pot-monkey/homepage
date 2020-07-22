import styled, { keyframes } from "styled-components";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import UnknownPleasures from "../components/unknownPleasures";
import { lineColor, canvasMargin, backgroundColor } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Name>Thomas Sean Dominic Kelly</Name>
      <UnknownPleasures />
    </Layout>
  );
}

const Name = styled.h1`
  font-weight: lighter;
  text-align: center;
  position: relative;
  bottom: 10vw;
  z-index: 1;
  border-radius: 100px;
  padding: 0 10px;
  margin: auto;
  color: ${lineColor};
`;
