import { useState } from "react";
import { useAnimals } from "../AnimalContext";

export default function Search() {
    // these are context setters for flashcards 
    const { cacheSearchData, updateDefaultAnimals } = useAnimals();
    // Stores the animal searched and updates the value when the user types
    const [animal, setAnimal] = useState("");
    // Stores the data from the API and saves it so it can be displayed
    const [result, setResult] = useState(null);

    // This sends a request for the animal the user searches
    const search = async (name) => {
        if (!name) return;

        console.log("Searching for:", name);

        const res = await fetch(
            `/.netlify/functions/animals?name=${name}`
        );
        // API returns the data
        const data = await res.json();
        console.log("API RESPONSE:", data);
        setResult(data);

        // these are required for the flashcards to work - they set the context 
        cacheSearchData(data);
        updateDefaultAnimals(data)
    };

    // Array storing animals for the short cut search buttons
    const quickAnimals = ["Lion", "Elephant", "Penguin", "Giraffe", "Tortoise", "Zebra", "Bear"];

    // This displays an input box and a button to search
    return (
        <div>
            <input
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                placeholder="Search animal..."
            />

            <button onClick={() => search(animal)}>
                Search
            </button>

            {/*Short cut search button*/}
            <div>
                {quickAnimals.map((animalName) => (
                    <button
                        key={animalName}
                        onClick={() => search(animalName.toLowerCase())}
                    >
                        {animalName}
                    </button>
                ))}
            </div>

            {result && (
                <div>
                    <h2>{result.animalName}</h2>
                    {/*Displays an image of the searched animal */}
                    {result.images?.fullImage && (
                        <img
                            src={result.images.fullImage}
                            alt={result.animalName}
                            style={{
                                maxWidth: "400px",
                                width: "100%"
                            }}
                        />
                    )}
                    <p>Locations: {result.locations?.join(", ")}</p>
                    <p>Habitat: {result.characteristics?.habitat}</p>
                    <p>Diet: {result.characteristics?.diet}</p>
                    {/*If top speed isn't available, it'll instead display prey */}
                    {!result.characteristics?.top_speed ? (
                        result.characteristics?.prey && (
                            <p>Prey: {result.characteristics.prey}</p>
                        )
                    ) : (
                        <p>Top speed: {result.characteristics.top_speed}</p>
                    )}
                    <p>Lifespan: {result.characteristics?.lifespan}</p>
                    <p>Weight: {result.characteristics?.weight}</p>
                </div>
            )}
        </div>
    );
}