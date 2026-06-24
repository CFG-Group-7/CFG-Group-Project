// This component is for the 'home page' of the app, 
// it will be used to create the 'find an animal', 'flash cards, 'take a quiz' feature cards of the app.
// It will be a resusable component where we will change the title and the description for each card.
import { Link } from "react-router-dom";



export default function FeatureCard(props) {
    return (
        /* Styling for the card, including background color, padding, text alignment, and shadow effects. */
        <div className="flex min-h-64 flex-col items-center justify-between rounded-[2rem] bg-yellow p-6 text-center shadow-sm">
            <div>
                <h2 className="mb-4 text-3xl font-medium text-fontColour">
                    {props.title}
                </h2>

                <p className="text-lg leading-snug text-fontColour">
                    {props.description}
                </p>
            </div>

            <Link
                to={props.pageLink}
                className="mt-6 rounded-xl bg-dark-green px-8 py-3 text-lg font-bold text-white shadow-md hover:scale-105 hover:brightness-110"
            >
                Let&apos;s go &gt;
            </Link>
        </div>
    );
}
