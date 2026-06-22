import { useState } from 'react';
import './App.css';
import FeatureCard from "./components/FeatureCard";



function App() {

    return (

        <>

            <div className="text-center">
                <h1>Welcome to Zoopedia</h1>
            </div>
            <div className="flex ml-6 mr-6">
                <div className="bg-[#E55934] rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Find an animal"
                        description="Search for your favourite zoo animal and learn all about it!"
                        pageLink="/search"
                    />
                </div>

                <div className="bg-[#5BC0EB] rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Flash Cards"
                        description="Flip cards to learn fun facts about 15 different zoo animals!"
                        pageLink="/flash-cards-page"
                    />
                </div>

                <div className="bg-[#9BC53D] rounded-xl text-center m-2 p-6">
                    <FeatureCard
                        title="Take a quiz"
                        description="How much do you know about zoo animals?"
                        pageLink="/quiz"
                    />
                </div>

                <div className="bg-[#FDE74C] rounded-xl text-center m-2 p-6">
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

export default App;
