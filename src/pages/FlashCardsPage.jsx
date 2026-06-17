import { useEffect, useState } from "react";
import { useAnimals, fetchAnimal } from "../AnimalContext";
import FlashCard from "../components/FlashCard";




export default function FlashCardsPage() {
    const { animals, setAnimals, setAnimalData, setSearchData, searchData, cacheSearchData } = useAnimals(); // array of default animal names from the context 
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentName = animals[currentIndex]; // animals[0] - 'camel'
    // we are checking if Rachel has camels, if she doesnt then we have to go and find them ourselves 
    const animalData = searchData.find((animal) => animal.animalName.toLowerCase() === currentName.toLowerCase()); // looks at each animal name from the search results and checks if it exists in the list of animal names from the default list 

    const [isloading, setLoanding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (animalData) return;// a guard that checks if we already have the data for the animal 
        setLoanding(true)

        fetchAnimal(currentName)
            .then((data) => {
                cacheSearchData(data);
            }).catch((err) => {
                setError(true);
            }).finally(() => {
                setLoanding(false);
            })
    }, [currentName, animalData, cacheSearchData]);


    if (isloading) {
        return (
            <p>Loading...please wait</p>

        )
    }
    if (error) {
        return (
            <p>Sorry an error occurred </p>

        )

    }

    return (
        <>
            <h1>FLASH CARDS COMPONENT</h1>
            <FlashCard animal={animalData} />
        </>
    )
}