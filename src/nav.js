import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/labs/a6">Labs</Link> |
            <Link to="/labs/a6/hello">Hello</Link> |
            <Link to="/tuiter/home">Tuiter</Link>
        </div>
    )
}

export default Nav;

