import { useState } from "react";

export default function Search() {
    // Stores the animal searched and updates the value when the user types
    const [animal, setAnimal] = useState("");
    // Stores the data from the API and saves it so it can be displayed
    const [result, setResult] = useState(null);

    // This sends a request for the animal the user searches
    const search = async () => {
        const res = await fetch(
            `/.netlify/functions/animals?name=${animal}`
        );
        // API returns the data
        const data = await res.json();
        setResult(data);
    };

    // This displays an input box and a button to search
    return (
        <div>
            <input
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                placeholder="Search animal..."
            />
            
            <button onClick={search}>Search</button>

            {result && (
                <div>
                    <h2>{result.animalName}</h2>
                    <p>Locations: {result.locations?.join(", ")}</p>
                    <p>Prey: {result.characteristics?.prey}</p>
                    <p>Habitat: {result.characteristics?.habitat}</p>
                    <p>Diet: {result.characteristics?.diet}</p>
                    <p>Top speed: {result.characteristics?.top_speed}</p>
                    <p>Lifespan: {result.characteristics?.lifespan}</p>
                    <p>Weight: {result.characteristics?.weight}</p>
                </div>
            )}
        </div>
    );
}



// TO TEST PASTE INTO App.jsx
// import Search from "./pages/Search";

// function App() {
//   return (
//     <div>
//       <Search />
//     </div>
//   );
// }