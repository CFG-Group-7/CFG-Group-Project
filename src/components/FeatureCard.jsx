// This component is for the 'home page' of the app, 
// it will be used to create the 'find an animal', 'flash cards, 'take a quiz' feature cards of the app.
// It will be a resusable component where we will change the title and the description for each card.
import { Link } from "react-router-dom";


export default function FeatureCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={props.pageLink}>Lets go</Link>
        </div>
    );
}