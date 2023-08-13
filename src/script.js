import { render } from "react-dom";

import "./style.scss";
import Style from "./Style";
import Blockquote from "./Blockquote";

document.addEventListener("DOMContentLoaded", () => {
  const BlockquoteEls = document.querySelectorAll(
    ".wp-block-b-blocks-Blockquote"
  );
  BlockquoteEls.forEach((BlockquoteEl) => {
    const attributes = JSON.parse(BlockquoteEl.dataset.attributes);
    const { cId } = attributes;

    render(
      <>
        <Style attributes={attributes} clientId={cId} />
        <Blockquote attributes={attributes} clientId={cId} />
      </>,
      BlockquoteEl
    );

    BlockquoteEl?.removeAttribute("data-attributes");
  });
});
