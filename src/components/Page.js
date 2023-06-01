import { useState } from "react";

function Page(props) {

    const [isHover, setIsHover] = useState(false)
    
    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

    return (
        <div className="gif-section">
            <h2 className="gif-title">{props.title}</h2>
            <div 
                className={`gif-img ${props.theme}`} 
                style={{backgroundImage: isHover && `url(${props.gif})`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            </div>
        </div>
    )
}

export default Page;
