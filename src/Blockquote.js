import { useState } from 'react'; 

const Blockquote = ({ attributes, clientId }) => {
    const {  title } = attributes;

    const [isNowFull, setIsNowFull] = useState(false);

    const onFullScreen = () => {
        const element = document.querySelector(`#bBlocksBlockquote-${clientId}`);

        if (document.fullscreenElement) {
            setIsNowFull(false);
            document.exitFullscreen();
        } else {
            setIsNowFull(true);
            element.requestFullscreen();
        }
    };

    return <div className='bBlocksBlockquote'>
        <blockquote
            title={title}
            width='100%'
            height='100%'
        ></blockquote>
    </div>
}
export default Blockquote;