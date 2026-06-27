import { Link } from "react-router-dom";


export default function FeatureCard(props) {
    return (
        <div className="flex flex-col min-h-50 h-full justify-between">
            <h2 className="text-3xl pb-6">{props.title}</h2>
            <p className="mb-8 text-xl">{props.description}</p>
            <div className="mt-auto">
                <Link className="py-3 hover:brightness-110 bg-dark-green text-white font-logo text-2xl rounded-xl p-1 px-16" to={props.pageLink}>Lets go {'>'}</Link>
            </div>
        </div>
    );
}