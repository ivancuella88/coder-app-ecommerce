
import './Banner.css'
const Banner = ({ url, title }) => {
    return (
        <div className="banner-container">
            <img className="banner-container__img" src={url} width={1200} height={200} alt={title} />
        </div>
    )
}

export default Banner