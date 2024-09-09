import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>Blog Post</h1>
            <div className="Links" >
                <Link className="One" to="/" >
                Home
                </Link>
                <Link className="One" to ="/Create">Create</Link>
            </div>
        </div>
    )
}

export default Navbar;