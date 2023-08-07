import { useEffect } from "react";

import Settings from "./Settings";
import blockquote from "./blockquote";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
  const{src} = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksblockquote-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}

      <Style attributes={attributes} clientId={clientId} />
      {src ? <Blockquote attributes={attributes} clientId={clientId} /> : <div className="notice">
        Please insert a source to show blockquote.
        </div>}
    </div>
  </>
};
export default Edit;
