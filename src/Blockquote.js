import Default from "./Theme/Default";
import Theme1 from "./Theme/Theme1";
import Theme2 from "./Theme/Theme2";

const Blockquote = ({ attributes, contentEl, authorEl }) => {
    const { theme } = attributes;

    switch (theme) {
        case 'theme2':
            return <Theme2 attributes={attributes} contentEl={contentEl} authorEl={authorEl} />;
        case 'theme1':
            return <Theme1 attributes={attributes} contentEl={contentEl} authorEl={authorEl} />;
        default:
            return <Default attributes={attributes} contentEl={contentEl} authorEl={authorEl} />;
    }
}
export default Blockquote;