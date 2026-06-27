import { Link } from "react-router-dom";


export default function FeatureCard(props) {
    return (
        <div>
            <h2 className="text-xl">{props.title}</h2>
            <p className="mb-2">{props.description}</p>
            <Link className="bg-dark-green text-pale-yellow font-logo text-base text-nowrap rounded-xl p-1 px-8" to={props.pageLink}>Lets go</Link>
        </div>
    );
}