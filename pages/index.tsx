import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import UnknownPleasures from "../components/unknownPleasures";
import { lineColor, padding, backgroundColor } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>thomasSDK</h1>
      <UnknownPleasures />
      <style jsx>{`
        h1 {
          line-height: 1.5;
          border-radius: 100px;
          padding: 0 10px;
          margin: auto;
          z-index: 1;
          color: ${lineColor};
          background-color: ${backgroundColor};
        }
      `}</style>
    </Layout>
  );
}
