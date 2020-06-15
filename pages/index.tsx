import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import UnknownPleasures from "../components/unknownPleasures";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="name">thomasSDK</h1>
      <UnknownPleasures />
      <style jsx>{`
        .name {
          line-height: 1.5;
          padding: 0 10px;
          margin: auto;
          z-index: 1;
          color: var(--selected-line-color);
          background-color: var(--selected-primary-color);
        }
      `}</style>
    </Layout>
  );
}
