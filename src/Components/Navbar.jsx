import "./navbar.css"

const Navbar = () =>{
    return (
        <header className="navbar-section">
            <div className="navbar-left">
                <p className="navbar-email">aganiayman063@gmail.com</p>
                <p className="CV"><a href="#">CV</a></p>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li className="nav-links"><a href="#">About</a></li>
                    <li className="nav-links"><a href="#">Project</a></li>
                    <li className="nav-links"><a href="#">Experience</a></li>
                    <li className="nav-links"><a href="#">Services</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Navbar;