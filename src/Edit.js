import { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

import Settings from "./Settings";
import Style from "./Style";
import Blockquote from "./Blockquote";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;
  const { author, content, theme } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  const contentEl = <RichText
    tagName="blockquote"
    value={content}
    allowedFormats={["core/bold", "core/italic"]}
    onChange={(val) => setAttributes({ content: val })}
    placeholder={__("Add Your Text...")}
    inlineToolbar
    className={theme}
  />

  const authorEl = <RichText
    tagName="cite"
    value={author}
    allowedFormats={["core/bold", "core/italic"]}
    onChange={(val) => setAttributes({ author: val })}
    placeholder={__("Add Your Text...")}
  />

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksBlockquote-${clientId}`}>
      <Style attributes={attributes} clientId={clientId} />

      <Blockquote attributes={attributes} clientId={clientId} contentEl={contentEl} authorEl={authorEl} />
    </div>
  </>
};
export default Edit;
