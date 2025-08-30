import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/events">Seznam událostí</Link></li>
                <li><Link to="/events/new">Nová událost</Link></li>
            </ul>
        </nav>
    );
}
