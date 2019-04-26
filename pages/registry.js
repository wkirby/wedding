import { Section } from "bloomer";
import React from "react";
import { Layout } from "../components/Layout";
import Safe from "react-safe";

function setDangerousHtml(html, el) {
  if (el === null) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  range.deleteContents();
  el.appendChild(range.createContextualFragment(html));
}

const zolaScriptTag =
  '<script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script>';

export default () => {
  return (
    <Layout>
      <Section>
        <a
          className="zola-registry-embed"
          href="https://www.zola.com/registry/operationmidnightviper"
          data-registry-key="operationmidnightviper"
        >
          Our Zola Wedding Registry
        </a>

        <div ref={setDangerousHtml.bind(null, zolaScriptTag)} />
      </Section>
    </Layout>
  );
};
