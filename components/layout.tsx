import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const name = "thomasSeanDominicKelly";
export const siteTitle = "thomasSDK";
export const padding = 35;
export const lineColor = "white";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="images/favicon/favicon_Leafy/favicon.ico" />
        <meta name={name} content="A portfolio site showing my wares" />
        <meta property="og:image" content="images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <body>
        <FontAwesomeIcon
          className="icon"
          icon={faHammer}
          color={lineColor}
          style={{ left: padding }}
        />
        <p className="headerText">Under Construction</p>
        <a href="https://github.com/thomasSDK">
          <FontAwesomeIcon
            className="icon"
            icon={faLinkedin}
            color={lineColor}
            style={{ right: padding }}
          />
        </a>
        <a href="https://www.linkedin.com/in/thomassdk/">
          <FontAwesomeIcon
            className="icon"
            icon={faGithub}
            color={lineColor}
            style={{ right: padding * 3 }}
          />
        </a>
        {children}
      </body>
      <style jsx global>{`
        :root {
          /* Set the default values */
          --selected-primary-color: var(--dark-primary-color);
          --selected-line-color: var(--dark-line-color);

          /* Set the 'light' theme */
          --light-primary-color: #007bff;
          --light-line-color: #6c757d;

          /* Set the 'dark' theme */
          --dark-primary-color: black;
          --dark-line-color: ${lineColor};

          /* Set padding */
          --body-padding: ${padding}px;
        }

        body {
          margin: 0;
          font-size: 18px;
          font-weight: 400;
          font-family: sans-serif;
          display: flex;
          height: 100vh;
          flex-direction: column;
          background-color: var(--selected-line-color);
        }

        .icon {
          position: fixed;
          top: var(--body-padding);
          z-index: 1;
          width: 40px;
        }

        .headerText {
          position: fixed;
          top: var(--body-padding);
          z-index: 1;
          color: var(--selected-line-color);
          left: calc(var(--body-padding) * 2);
        }
      `}</style>
    </div>
  );
}
