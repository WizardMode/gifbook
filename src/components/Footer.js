import pencil from "../images/pencil.png"
import pencil2 from "../images/pencil2.png"
import icon from "../images/logo.png"

function Footer() {
    return (
        <footer>
            <h4 className="attribute">images by 
                <a href="https://pixabay.com/users/designermariene-2114881/"> DesignerMariene</a> via <a href="https://pixabay.com"> Pixabay</a>
            </h4>
            <h4 className="attribute">and</h4>
            <h4 className="attribute"> GIFs by 
                <a href="https://giphy.com"> GIPHY</a>
            </h4>
            <div className="container">
                <a className="footer-links" href="https://leocreate.pythonanywhere.com/blog/">
                <img className="icon" src={icon}/>
                <div className="text">Leonardo Ramirez 2023</div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;