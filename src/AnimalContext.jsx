import { createContext, useContext, useState } from "react";

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState(["camel", "zebra", "elephant", "panda", "owl", "kangaroo"]);

    const setAnimalData = (index, data) => {
        setAnimals((previous) => previous.map((animal, i) => (i === index ? data : animal)))
    }

    return <AnimalContext.Provider value={{ animals, setAnimals, setAnimalData }}>{children}</AnimalContext.Provider>

}

const useAnimals = () => useContext(AnimalContext);
const fetchAnimal = async (animalName) => {
    const res = await fetch(
        `/.netlify/functions/animals?name=${animalName}`
    );
    if (!res.ok) throw new Error(`Could not load animal ${animalName}`);
    return res.json();
}




export { AnimalContext, AnimalProvider, useAnimals, fetchAnimal }
