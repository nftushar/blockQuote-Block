import { render } from "react-dom";
import "./style.scss";
import Style from "./Style";
import Blockquote from "./Blockquote";

document.addEventListener("DOMContentLoaded", () => {
  const blockquoteEls = document.querySelectorAll(".wp-block-b-blocks-blockquote");
  blockquoteEls.forEach((blockquoteEl) => {
    const attributes = JSON.parse(blockquoteEl.dataset.attributes);
    const { cId } = attributes;

    console.log(attributes);

    render(
      <>
        <Style attributes={attributes} clientId={cId} />
        <Blockquote attributes={attributes} clientId={cId} />
      </>,
      blockquoteEl
    );

    blockquoteEl?.removeAttribute("data-attributes");
  });
});
