import React from "react";
import { Layout } from "../components/Layout";
import FlexView from "react-flexview";

const MAP_URL =
  "https://www.google.com/maps/place/Frontier/@43.919757,-69.9691237,17z/data=!3m1!4b1!4m5!3m4!1s0x4cad87705c7a502d:0x46d203cdf7b1ad6a!8m2!3d43.919757!4d-69.966935";

const InfoBlock = ({ label, href, children, ...props }) => {
  const content = href ? (
    <a href={href} target="_blank" className="info_block__link">
      {children}
    </a>
  ) : (
    children
  );

  return (
    <div className="info_block" {...props}>
      <h4 className="info_block__label">{label}</h4>
      <h3 className="info_block__content">{content}</h3>
    </div>
  );
};

const Jumbo = props => <h1 className="jumbo" {...props} />;

export default () => {
  return (
    <Layout>
      <FlexView
        hAlignContent="center"
        vAlignContent="center"
        style={{ height: "100%", width: "100%" }}
      >
        <div style={{ width: "100%", maxWidth: 600 }}>
          <header className="block" style={{ textAlign: "center" }}>
            <img src="/static/img/berry.png" alt="W<3J" className="logo" />

            <Jumbo>
              Wyatt&nbsp;<small style={{ fontStyle: "italic" }}>&amp;</small>{" "}
              Jessica
            </Jumbo>

            <h2 className="subjumbo">
              are <sub className="handwriting" title="finally" /> getting
              married
            </h2>
          </header>

          <div
            className="block"
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <InfoBlock label="on saturday">August 3, 2019</InfoBlock>
            <InfoBlock
              href={MAP_URL}
              label="in beautiful"
              style={{ textAlign: "right" }}
            >
              Brunswick, ME
            </InfoBlock>
          </div>
          <hr />
          <footer style={{ maxWidth: "60%", margin: "auto" }}>
            <h5 className="small" style={{ textAlign: "center" }}>
              Details to follow.
              <br />
              Send questions to:{" "}
              <a href="mailto:kirby.wa@gmail.com">kirby.wa@gmail.com</a>.
            </h5>
          </footer>
        </div>
      </FlexView>
    </Layout>
  );
};
