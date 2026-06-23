//Navigation bar function

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>Zoopedia</h1>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/flash-cards">Flash Cards</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/more-fun">More Fun</Link>
        </nav>
    );
}