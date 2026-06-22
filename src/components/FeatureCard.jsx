// This component is for the 'home page' of the app, 
// it will be used to create the 'find an animal', 'flash cards, 'take a quiz' feature cards of the app.
// It will be a resusable component where we will change the title and the description for each card.
import { Link } from "react-router-dom";


export default function FeatureCard(props) {
    return (
        <div>
            <h2 className="text-xl">{props.title}</h2>
            <p className="mb-2">{props.description}</p>
            <Link className="bg-[#3B5640] text-[#FEFAE0] text-base rounded-xl w-96 p-1 pr-8 pl-8" to={props.pageLink}>Lets go</Link>
        </div>
    );
}