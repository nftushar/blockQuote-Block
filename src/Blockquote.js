import { useState } from 'react';

const Blockquote = ({ attributes, clientId, children }) => {
    const { author, content } = attributes;

    return <div className="bBlocksBlockquote default">
        <span className="quote quoteOpen">❝</span>

        {children}

        <cite>{author}</cite>

        <span className="quote quoteClose">❞</span>
    </div>
}
export default Blockquote;