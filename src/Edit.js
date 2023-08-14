import { useEffect } from "react";
import { RichText } from "@wordpress/block-editor";
import Settings from "./Settings";
import Blockquote from "./Blockquote";
import Style from "./Style";
import { __ } from "@wordpress/i18n";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;
  const { textAlign, author, content } = attributes;
  // console.log(props);
  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div className={className} id={`bBlocksBlockquote-${clientId}`}>
        <div className="bBlocksBlockquote default">
          <span className="quote quoteOpen">❝</span>
          <div className="content">
            <RichText
              tagName="blockquote"
              value={content}
              allowedFormats={["core/bold", "core/italic"]}
              onChange={(val) => setAttributes({ content: val })}
              placeholder={__("Add Your Text...")}
            />
            <cite>{author}</cite>
          </div>
          <span className="quote quoteClose">❞</span>
        </div>

        <Style attributes={attributes} clientId={clientId} />
      </div>
    </>
  );
};
export default Edit;
