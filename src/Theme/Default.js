const Default = ({ contentEl, authorEl }) => {
    return <div className="bBlocksBlockquote default">
        <span className="quote quoteOpen">❝</span>
        <div className='content'>
            {contentEl}{authorEl}
        </div>
        <span className="quote quoteClose">❞</span>
    </div>
}
export default Default;