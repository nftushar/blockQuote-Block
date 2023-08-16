import { getBoxValue } from "../../Components/utils/functions";
import { getBorderCSS, getMultiShadowCSS, getTypoCSS, getBackgroundCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { border, textShadow, color, typography, padding, contentPadding, textAlign, quoteColor, quoteSize, authorColor, authorTypo, background } = attributes;

    const mainSl = `#bBlocksBlockquote-${clientId}`;
    const quoteSl = `${mainSl} .bBlocksBlockquote`;

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
                ${getTypoCSS(``, typography)?.googleFontLink}
        ${getTypoCSS(``, authorTypo)?.googleFontLink}
        ${getTypoCSS(`${quoteSl} blockquote`, typography)?.styles}
        ${getTypoCSS(`${quoteSl} cite`, authorTypo)?.styles}

        ${mainSl}{ 
            ${getBackgroundCSS(background)}
            padding: ${getBoxValue(padding)};
        }
        ${quoteSl}{
            ${getBorderCSS(border)}
        }
        ${quoteSl} .quote{
            ${getBackgroundCSS(background)}
                color:${quoteColor};
                font-size:${quoteSize}
        }
        ${mainSl} .theme1::before{
            color:${quoteColor};
            font-size:${quoteSize}
        }
        ${quoteSl} .content{
            text-align: ${textAlign};
            padding: ${getBoxValue(contentPadding)}
        }
        ${quoteSl} blockquote{
            text-shadow: ${getMultiShadowCSS(textShadow, "text")};
            color:${color}
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
