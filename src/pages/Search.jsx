import { useState } from "react";
import { useAnimals } from "../AnimalContext";
import MonkeyImage from '../images/monkey.svg?react'

export default function Search() {
    // these are context setters for flashcards 
    const { cacheSearchData, updateDefaultAnimals } = useAnimals();
    // Stores the animal searched and updates the value when the user types
    const [animal, setAnimal] = useState("");
    // Stores the data from the API and saves it so it can be displayed
    const [result, setResult] = useState(null);
    // Creates error state
    const [error, setError] = useState(false);

    // This sends a request for the animal the user searches
    const search = async (name) => {
        if (!name) return;

        // Resets error before every search
        setError(false);

        try {
            const res = await fetch(
                `/.netlify/functions/animals?name=${name}`
            );

            // API returns data
            const data = await res.json();


            // Checks if the API returns an animal
            if (!data || !data.animalName) {
                setResult(null);
                setError(true);
                return;
            }

            // Stores the data to display it
            setResult(data);

            // these are required for the flashcards to work - they set the context 
            cacheSearchData(data);
            updateDefaultAnimals(data);

        } catch (err) {
            console.error("Search failed:", err);

            // Clears previous result and displays the error message
            setResult(null);
            setError(true);
        }
    };

    // Array storing animals for the short cut search buttons
    const quickAnimals = ["Lion", "Elephant", "Penguin", "Giraffe", "Tortoise", "Zebra", "Bear"];

    // This displays an input box and a button to search
    return (
        <div className="min-h-screen bg-pale-green py-10 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-8">
                    <div className=" flex justify-center items-center">
                        <MonkeyImage width={70} height={70} />
                    </div>
                    <h1 className="text-5xl font-bold text-fontColour mb-3">
                        Find an Animal
                    </h1>

                    <p className="text-xl text-fontColour">
                        Type the name of any zoo animal to learn all about it!
                    </p>

                </div>

                {/* Search area */}
                <div className="max-w-xl mx-auto mb-10">
                    <div className="flex gap-3">
                        <input
                            value={animal}
                            onChange={(e) => setAnimal(e.target.value)}
                            placeholder="Search an animal here..."
                            className="flex-1 input input-bordered rounded-xl bg-white h-12 shadow-md px-4"
                        />

                        <button
                            className="btn bg-dark-green text-white rounded-xl border-none h-12  hover:scale-105 transition shadow-md px-3"
                            onClick={() => search(animal)}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/*Quick search button*/}
                <p className="text-center font-bold text-fontColour mb-3">
                    Or click one here!
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">

                    {quickAnimals.map((animalName) => (
                        <button
                            key={animalName}
                            onClick={() => search(animalName.toLowerCase())}
                            className="btn btn-sm text-base text-fontColour w-28 h-10 flex items-center justify-center text-center rounded-xl bg-[#FEFAE0] hover:scale-105 transition shadow-md"
                        >
                            {animalName}
                        </button>
                    ))}
                </div>

                {/*Error message*/}
                {error && (
                    <p className="text-center text-red-600 font-bold mb-4">
                        No animal found. Please check the spelling and try again.
                    </p>
                )}

                {/*Search result*/}
                {result && (
                    <div className="shadow-xl rounded-2xl p-6 bg-[#E55934]">
                        <h2 className="text-3xl font-bold text-black text-center mb-6">
                            {result.animalName}
                        </h2>
                        {/*Displays an image of the searched animal */}
                        {result.images?.fullImage && (
                            <div className="flex justify-center mb-6">
                                <img
                                    src={result.images.fullImage}
                                    alt={result.animalName}
                                    className="max-w-md w-full rounded-2xl object-cover shadow-md"
                                />
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                            <div className="bg-white rounded-xl shadow p-4">
                                <p className="font-bold">Locations</p>
                                <p>{result.locations?.join(", ")}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow p-4">
                                <p className="font-bold">Habitat</p>
                                <p>{result.characteristics?.habitat}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow p-4">
                                <p className="font-bold">Diet</p>
                                <p>{result.characteristics?.diet}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                                <p className="font-bold">
                                    {result.characteristics?.top_speed ? "Top Speed" : "Prey"}
                                </p>

                                <p>
                                    {result.characteristics?.top_speed
                                        ? result.characteristics.top_speed
                                        : result.characteristics?.prey}
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow p-4">
                                <p className="font-bold">Lifespan</p>
                                <p>{result.characteristics?.lifespan}</p>
                            </div>

                            <div className="bg-white rounded-xl shadow p-4">
                                <p className="font-bold">Weight</p>
                                <p>{result.characteristics?.weight}</p>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}