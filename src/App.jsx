import { useState } from 'react';
import './App.css';
import FeatureCard from "./components/FeatureCard";



function App() {

  return (

    <>
      <h1>Welcome to Zoopedia</h1>
         <FeatureCard
             title="Find an animal"
             description=" Search for your favourite zoo animal and learn all about it!"
             pageLink="/search" />
     
         <FeatureCard
             title="Flash Cards"
             description=" Flip cards to learn fun facts about 15 different zoo animals!"
             pageLink="/flash-cards-page" />
     
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
    </>
  );
}

export default App;
