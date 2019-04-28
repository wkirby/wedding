import React from "react";
import { iframeResizer } from "iframe-resizer";

export class ZolaEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
    this.resizer = null;
  }

  componentDidMount() {
    const iframe = this.iframe.current;
    iframe.onload = () => {
      this.resizer = iframeResizer({}, iframe);
    };
  }

  render() {
    const { slug, ...props } = this.props;
    return (
      <iframe
        style={{ minWidth: "100%", width: 1 }}
        ref={this.iframe}
        src={`https://widget.zola.com/v1/widget/registry/${slug}/html`}
      />
    );
  }
}
