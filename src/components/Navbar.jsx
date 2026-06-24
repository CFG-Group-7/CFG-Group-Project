//Navigation bar function

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-pale-green px-6 py-6">
            {/* Applying spacing and responsive styling */}
            <div className="flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Font styling */}
                <h1 className="text-3xl font-bold text-dark-green md:text-4xl">
                    Zoopedia
                </h1>

{/* Links and styling with hover effects */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <Link
                        to="/"
                        className="rounded-xl bg-orange px-6 py-3 text-lg font-medium text-fontColour shadow-sm hover:-translate-y-1 hover:shadow-md"
                    >
                        Home
                    </Link>

                    <Link
                        to="/search"
                        className="rounded-xl bg-red px-6 py-3 text-lg font-medium text-fontColour shadow-sm hover:-translate-y-1 hover:shadow-md"
                    >
                        Search
                    </Link>

                    <Link
                        to="/flash-cards"
                        className="rounded-xl bg-blue px-6 py-3 text-lg font-medium text-fontColour shadow-sm hover:-translate-y-1 hover:shadow-md"
                    >
                        Flash Cards
                    </Link>

                    <Link
                        to="/quiz"
                        className="rounded-xl bg-green px-6 py-3 text-lg font-medium text-fontColour shadow-sm hover:-translate-y-1 hover:shadow-md"
                    >
                        Quiz
                    </Link>

                    <Link
                        to="/more-fun"
                        className="rounded-xl bg-yellow px-6 py-3 text-lg font-medium text-fontColour shadow-sm hover:-translate-y-1 hover:shadow-md"
                    >
                        More Fun
                    </Link>
                </div>
            </div>
        </nav>
    );
}
