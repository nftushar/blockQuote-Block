import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { border, descShadow, descColor, authorShadow, authorColor } = attributes;

    const quoteSl = ` #bBlocksBlockquote-${clientId} .bBlocksBlockquote`;
  
    return <style dangerouslySetInnerHTML={{
        __html: `
        ${quoteSl}{
            ${getBorderCSS(border)}; 
        }
        ${quoteSl} blockquote{
            text-shadow: ${getMultiShadowCSS(descShadow, 'text')};
            color:${authorColor}
        }
        ${quoteSl} cite{
            text-shadow: ${getMultiShadowCSS(authorShadow, 'text')};
            color: ${descColor}
             

        }
    `}}
    />
}
export default Style;