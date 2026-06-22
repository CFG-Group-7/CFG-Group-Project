//Navigation bar function
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <nav className="flex justify-end p-2 space-x-2">
            <h1 className="font-[irish-grover] basis-300">Zoopedia</h1> {/*basis not permenant*/}
            <Link className="bg-[#FCA311] rounded-xl p-2 w-32 text-center " to="/">Home</Link>
            <Link className="bg-[#E55934] rounded-xl p-2 w-32 text-center ml-4" to="/search">Search</Link>
            <Link className="bg-[#5BC0EB] rounded-xl p-2 w-32 text-center ml-4 text-nowrap" to="/flash-cards">Flash Cards</Link>
            <Link className="bg-[#9BC53D] rounded-xl p-2 w-32 text-center ml-4" to="/quiz">Quiz</Link>
            <Link className="bg-[#FDE74C] rounded-xl p-2 w-32 text-center ml-4 text-nowrap" to="/more-fun">More Fun</Link>
        </nav>
        </>
    );
}