

import FeatureCard from "./components/FeatureCard";
import FunFact from './components/FunFact';

export default function App() {

    return (

        <main className="min-h-screen bg-pale-green py-12 px-6 md:px-12">
            <section className="mx-auto max-w-7xl text-center">

                <div className="text-center mb-10">
                    <h1 className="font-logo page-title mb-4 text-4xl text-fontColour">
                        Welcome Explorer!
                    </h1>
                    <p className="text-xl">Let's discover some amazing zoo animals from around the world</p>
                </div>
                <FunFact />
                <p className="text-center text-3xl my-10">Where should we start?</p>
                <div className="grid grid-flow-col gap-4 mx-10">
                    <div className="bg-red rounded-xl text-center p-6">
                        <FeatureCard
                            title="Find an animal"
                            description="Search for your favourite zoo animal and learn all about it!"
                            pageLink="/search"
                        />
                    </div>

                    <div className="bg-blue rounded-xl text-center p-6">
                        <FeatureCard
                            title="Flash Cards"
                            description="Flip cards to learn fun facts about 10 different zoo animals!"
                            pageLink="/flash-cards"
                        />
                    </div>

                    <div className="bg-green rounded-xl text-center p-6">
                        <FeatureCard
                            title="Take a quiz"
                            description="How much do you know about zoo animals?"
                            pageLink="/quiz"
                        />
                    </div>

                    <div className="bg-yellow rounded-xl text-center p-6">
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

