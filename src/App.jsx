
import './App.css';
import FeatureCard from "./components/FeatureCard";

export default function App() {

    return (

        <>

            <div className="text-center">
                <h1>Welcome to Zoopedia</h1>
            </div>
            <div className="flex ml-6 mr-6">
                <div className="bg-red rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Find an animal"
                        description="Search for your favourite zoo animal and learn all about it!"
                        pageLink="/search"
                    />
                </div>

                <div className="bg-blue rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Flash Cards"
                        description="Flip cards to learn fun facts about 15 different zoo animals!"
                        pageLink="/flash-cards"
                    />
                </div>

                <div className="bg-green rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Take a quiz"
                        description="How much do you know about zoo animals?"
                        pageLink="/quiz"
                    />
                </div>

                <div className="bg-yellow rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="More Fun"
                        description="Visit amazing websites to discover even more about animals!"
                        pageLink="/more-fun"
                    />
                </div>
            </div>

        </>
    );
}

