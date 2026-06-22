import { useEffect, useState } from "react";
import { useAnimals, fetchAnimal } from "../AnimalContext";
import FlashCard from "../components/FlashCard";

export default function FlashCardsPage() {
    // array of default animal names from the context 
    const { animals, searchData, cacheSearchData } = useAnimals();
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentName = animals[currentIndex]; // animals[0] - 'camel'

    // here, we are checking if Rachel has camels, if she doesnt then we have to go and find them ourselves 
    const animalData = searchData.find((animal) => animal.animalName.toLowerCase() === currentName.toLowerCase()); // looks at each animal name from the search results and checks if it exists in the list of animal names from the default list 

    const [error, setError] = useState(null);

    const handleNextCard = () => {
        setCurrentIndex((current) => {
            if (current === animals.length - 1) {
                return 0; // if we reached the end of the animals array then we should start from the beginning 
            }
            return current + 1; // increases the index by 1 and goes to the next animal in the array 
        });
    };
    const handlePreviousCard = () => {
        setCurrentIndex((current) => {
            if (current === 0) {
                return animals.length - 1;
            }
            return current - 1;
        });
    };

    const handleRestart = () => {
        setCurrentIndex(0);
    };

    useEffect(() => {
        if (animalData) return;// a guard that checks if we already have the data for the animal 

        fetchAnimal(currentName)
            .then((data) => {
                cacheSearchData(data);
            }).catch((err) => {
                setError(true);
            }).finally(() => {

            });
    }, [currentName, animalData, cacheSearchData]);

    if (error) {
        return (
            <p>Sorry an error occurred </p>

        );
    }

    return (
        <div className="min-h-screen bg-pale-green">
            <div className="flex flex-col items-center justify-center gap-y-3 pb-5">
                <h1 className="text-3xl font-bold text-fontColour">Test your knowledge</h1>
                <p className="font-bold text-fontColour">
                    Revise what you've already learned!
                </p>
            </div>

            <div className="flex items-center justify-center">
                <button className="w-32 bg-blue-500 hover:bg-blue mx-10 text-white cursor-pointer font-bold py-2 px-4 rounded-full" onClick={handlePreviousCard}>Back</button>
                {animalData ? <FlashCard animal={animalData} /> : <div className="skeleton h-160 w-120"></div>}

                <button className="w-32 bg-blue-500 hover:bg-blue mx-10 cursor-pointer text-white font-bold py-2 px-4 rounded-full" onClick={handleNextCard}>Next</button>
            </div>
            <div className="flex items-center justify-center">

                <button className="bg-dark-green hover:bg-green-700 my-10 text-white font-bold py-2 px-4 rounded-full" onClick={handleRestart}>RESTART</button>
            </div>
        </div>
    );
}

