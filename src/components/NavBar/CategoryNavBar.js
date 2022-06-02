import { Link, useLocation } from "react-router-dom";

const CategoryNavBar = () => {
    
    const location = useLocation();

    return (
        <>
           <div className="category-links">
                <div>
                    <Link to="/categorias" className={location.pathname == '/categorias' ? 'current-link' : '' }>Todas las categorias</Link>
                </div>
                <div>
                    <Link to="/categoria/guitarras" className={ location.pathname == '/categoria/guitarras' ? 'current-link' : '' }>Guitarras</Link>
                </div>
                <div>
                    <Link to="/categoria/bajos" className={ location.pathname == '/categoria/bajos' ? 'current-link' : '' }>Bajos</Link>
                </div>
                <div>
                    <Link to="/categoria/saxofones" className={ location.pathname == '/categoria/saxofones' ? 'current-link' : '' }>Saxofones</Link>
                </div>
                <div>
                    <Link to="/categoria/otros" className={ location.pathname == '/categoria/otros' ? 'current-link' : '' }>Otros</Link>
                </div>
            </div>
        </>
    )
}

export default CategoryNavBar;