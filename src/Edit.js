import { useEffect } from "react";
import { RichText } from "@wordpress/block-editor";
import Settings from "./Settings";
import Blockquote from "./Blockquote";
import Style from "./Style";
import { __ } from "@wordpress/i18n";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;
  const { skin, alignment, author, desc } = attributes;
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
          <RichText
            tagName="blockquote"
            value={desc}
            allowedFormats={["core/bold", "core/italic"]}
            onChange={(val) => setAttributes({ desc: val })}
            placeholder={__("Add Your Text...")}
          />
          <cite>{author}</cite>
          <span className="quote quoteClose">❞</span>
        </div>

        <Style attributes={attributes} clientId={clientId} />
      </div>
    </>
  );
};
export default Edit;
