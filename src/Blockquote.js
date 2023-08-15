const Blockquote = ({ attributes, children }) => {
    const { author, content } = attributes;

    return <div className="bBlocksBlockquote default">
        <span className="quote quoteOpen">❝</span>
        <div className='content'>
            {children}
            <blockquote dangerouslySetInnerHTML={{ __html: content }} />
            <cite dangerouslySetInnerHTML={{ __html: author }} />
        </div>
        <span className="quote quoteClose">❞</span>
    </div>
}
export default Blockquote;