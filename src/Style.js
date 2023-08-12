import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { width, height, border, descShadow } = attributes;

    return <style dangerouslySetInnerHTML={{
        __html: `
        #bBlocksBlockquote-${clientId} .bBlocksBlockquote blockquote{
            
            
            text-shadow: ${getMultiShadowCSS(descShadow,  'text')}
        }
    `}}
    />
}
export default Style;