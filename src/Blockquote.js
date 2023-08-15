 const Blockquote = ({ attributes, children }) => {
    const {  author, content } = attributes; 

    return <div className="bBlocksBlockquote default">
        <span className="quote quoteOpen">❝</span>
        <div className='content'>
            {children}
            <blockquote>{content}</blockquote>
            <cite>{author}</cite>
        </div>
        <span className="quote quoteClose">❞</span>
    </div>
}
export default Blockquote;