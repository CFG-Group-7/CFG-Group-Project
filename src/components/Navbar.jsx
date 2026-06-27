//Navigation bar function
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="flex justify-end p-2 space-x-2 bg-pale-green text-fontColour rounded-xl shadow-md">
                <Link to="/" className="font-logo text-3xl text-dark-green basis-300 md:text-4xl">Zoopedia</Link> {/*basis not permenant*/}
                <Link className="bg-orange rounded-xl p-2 w-32 text-center hover:scale-105 hover:brightness-110" to="/">Home</Link>
                <Link className="bg-red rounded-xl p-2 w-32 text-center ml-4 hover:scale-105 hover:brightness-110" to="/search">Search</Link>
                <Link className="bg-blue rounded-xl p-2 w-32 text-center ml-4 text-nowrap hover:scale-105 hover:brightness-110" to="/flash-cards">Flash Cards</Link>
                <Link className="bg-green rounded-xl p-2 w-32 text-center ml-4 hover:scale-105 hover:brightness-110" to="/quiz">Quiz</Link>
                <Link className="bg-yellow rounded-xl p-2 w-32 text-center ml-4 text-nowrap hover:scale-105 hover:brightness-110" to="/more-fun">More Fun</Link>
            </nav>
        </>
    );
}