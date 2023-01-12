import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <main className="Header">
        <h1> NC Games </h1>
        <Link to='/' className="HomeLink">
            Home
        </Link>
        <Link to='/reviews' className="ReviewLink">
            Reviews
        </Link>
        </main>
    )
}