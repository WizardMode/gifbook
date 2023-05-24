function Page(props) {
    return (
        <div className="gif-section">
            <h2 className="gif-title">{props.title}</h2>
            <div className={`gif-img ${props.theme}`} id={props.gif}>
            </div>
        </div>
    )
}

export default Page;