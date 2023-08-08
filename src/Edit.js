import { useEffect } from "react";

import Settings from "./Settings";
import Blockquote from "./Blockquote";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
  const{skin, alignment } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksblockquote-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}
<h1>Hello</h1>
      <Style attributes={attributes} clientId={clientId} />
     
    </div>
  </>
};
export default Edit;
