import { useEffect } from "react";

import Settings from "./Settings";
import Blockquote from "./Blockquote";
import Style from "./Style";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
  const { skin, alignment } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div className={className} id={`bBlocksBlockquote-${clientId}`}>
        <div className="bBlocksBlockquote default">
          <span className="quoteOpen">❝</span>
          <blockquote>
            The deeds you do may be the only sermon some persons will hear
            today.
          </blockquote>
          <cite>Francis of Assisi</cite>
          <span className="quoteClose">❞</span>
        </div>

        <Style attributes={attributes} clientId={clientId} />
      </div>
    </>
  );
};
export default Edit;
