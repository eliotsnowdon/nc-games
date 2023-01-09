import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <main>
        <h1> NC Games </h1>
        <Link to='/'>
            Home
        </Link>
        </main>
    )
}