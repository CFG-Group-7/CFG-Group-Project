import { createContext, useContext, useState } from "react";

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState(["camel", "zebra", "elephant", "owl", "kangaroo", "lion", "donkey", "alpaca"]);

    const [searchData, setSearchData] = useState([]); // to keep track of the search result
    // const setAnimalData = (index, data) => {
    //     setAnimals((previous) => previous.map((animal, i) => (i === index ? data : animal)))
    // }
    const cacheSearchData = (data) => {
        setSearchData((prev) => {
            const existingIndex = prev.findIndex((animal) => animal.animalName.toLowerCase() === data.animalName.toLowerCase());
            const updatedList = [...prev];
            // If the animal name is already in the list, take it out if its current spot 
            if (existingIndex !== -1) {
                updatedList.splice(existingIndex, 1);

            }

            // put the animal to the front of the list 
            updatedList.unshift(data);

            // keeping track of only 10 most recent animals to not allow the context overgrow 
            return updatedList.slice(0, 10);
        });
    };


    const updateDefaultAnimals = ({ animalName }) => {
        setAnimals((prev) => {
            const existingIndex = prev.findIndex((animal) => animal.toLowerCase() === animalName.toLowerCase());
            const updatedList = [...prev];
            // If the animal name is already in the default list, take it out if its current spot 
            if (existingIndex !== -1) {
                updatedList.splice(existingIndex, 1);

            }

            // put the animal to the front of the default list 
            updatedList.unshift(animalName.toLowerCase());

            // keeping track of only 10 most recent animals to not allow the context overgrow 
            return updatedList.slice(0, 10);

        });

    };


    return <AnimalContext.Provider value={{ animals, setAnimals, searchData, setSearchData, cacheSearchData, updateDefaultAnimals }}>{children}</AnimalContext.Provider>;

};

const useAnimals = () => useContext(AnimalContext);
const fetchAnimal = async (animalName) => {
    const res = await fetch(
        `/.netlify/functions/animals?name=${animalName}`
    );
    if (!res.ok) throw new Error(`Could not load animal ${animalName}`);
    return res.json();
};




export { AnimalContext, AnimalProvider, useAnimals, fetchAnimal };
