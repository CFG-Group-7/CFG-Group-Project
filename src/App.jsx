
import './App.css';
import FeatureCard from "./components/FeatureCard";

export default function App() {

    return (

        <main className="page-shell">
            <section className="page-container text-center">
                <div className="mb-10">
                    <h1 className="page-title mb-4">
                        Welcome Explorer!
                    </h1>

                    <p className="text-xl md:text-2xl">
                        Let’s discover some amazing zoo animals from around the world
                    </p>
                </div>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        title="Find an animal"
                        description=" Search for your favourite zoo animal and learn all about it!"
                        pageLink="/search" />

                    <FeatureCard
                        title="Flash Cards"
                        description=" Flip cards to learn fun facts about 15 different zoo animals!"
                        pageLink="/flash-cards" />

                    <FeatureCard
                        title="Take a quiz"
                        description=" How much do you know about zoo animals?"
                        pageLink="/quiz"
                    />

                    <FeatureCard
                        title="More Fun"
                        description=" Search for your favourite zoo animal and learn all about it!"
                        pageLink="/more-fun"
                    />
                </section>
            </section>
        </main>
    );
}

