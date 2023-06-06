import { useState } from "react"

function Card(props) {

    const [isHover, setIsHover] = useState(false)

    const styles = {
        backgroundImage: isHover && `url(${props.gif})`
    }
    
    function handleMouseEnter() {
        setIsHover(true)
    }

    function handleMouseLeave() {
        setIsHover(false)
    }

    return (
            <div className="gif-card">
                <h2 className="gif-title">{props.title}</h2>
                <div 
                    className={`gif-img ${props.theme}`} 
                    style={styles}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
            </div>
    )
}

export default Card
