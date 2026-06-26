
import './App.css';
import FeatureCard from "./components/FeatureCard";
import FunFact from './components/FunFact';

export default function App() {

    return (

        <main className="min-h-screen bg-pale-green py-12 px-6 md:px-12">
            <section className="mx-auto max-w-7xl text-center">

            <div className="text-center mb-10">
                <h1 className="page-title mb-4 text-4xl font-bold text-fontColour">
                    Welcome to Zoopedia
                </h1>
            </div>
            <FunFact />
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
                        description="Flip cards to learn fun facts about 10 different zoo animals!"
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

        </section>
        </main>
    );
}

