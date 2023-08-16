const Theme1 = ({ attributes, contentEl, authorEl }) => {
    return <div className="bBlocksBlockquote theme1">
        <div className="content">
            {contentEl}
            {authorEl}
        </div>
    </div>
}
export default Theme1;