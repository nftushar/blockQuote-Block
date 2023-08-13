import {  getBorderCSS, getMultiShadowCSS, getTypoCSS, getBackgroundCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { border, descShadow, descColor, descTypo, quoteColor, quoteSize, authorColor, authorTypo, bgColor } = attributes;
    // console.log(bgColor);

    const mainClass = ` #bBlocksBlockquote-${clientId}`;
    const quoteSl = ` #{mainClass} .bBlocksBlockquote`;

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
        
        ${getTypoCSS(``, authorTypo)?.googleFontLink}
        ${getTypoCSS(`${quoteSl} cite`, authorTypo)?.styles} 
        
        ${getTypoCSS(``, descTypo)?.googleFontLink}
        ${getTypoCSS(`${quoteSl} blockquote`, descTypo)?.styles}

        ${mainClass}{ 
            ${getBackgroundCSS(bgColor)}
        }
        ${quoteSl}{
            ${getBorderCSS(border)}
        }
        ${quoteSl} .quote{
            ${getBackgroundCSS(bgColor)}
                color:${quoteColor};
                font-size:${quoteSize}
        }
        ${quoteSl} blockquote{
            text-shadow: ${getMultiShadowCSS(descShadow, "text")};
            color:${descColor}
        }
        ${quoteSl} cite{
            color: ${authorColor}
        }
    `,
            }}
        />
    );
};
export default Style;
