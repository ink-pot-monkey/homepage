import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const name = "thomasSeanDominicKelly";
export const siteTitle = "thomasSDK";
export const padding = 35;
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
        <a
          href="https://github.com/thomasSDK"
          style={{ right: padding, top: padding }}
        >
          <FontAwesomeIcon
            className="icon"
            icon={faLinkedin}
            color={lineColor}
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/thomassdk/"
          style={{ right: padding * 3, top: padding }}
        >
          <FontAwesomeIcon
            className="icon"
            icon={faGithub}
            color={lineColor}
            size="2x"
          />
        </a>
        <div className="container">{children}</div>
      </body>
      <style jsx>{`
        a {
          position: fixed;
          z-index: 1;
        }
        .container {
          display: flex;
          height: 100vh;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
