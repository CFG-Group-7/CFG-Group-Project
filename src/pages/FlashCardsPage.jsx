import { useEffect, useState } from "react";
import { useAnimals, fetchAnimal } from "../AnimalContext";
import FlashCard from "../components/FlashCard";



export default function FlashCardsPage() {
    const { animals, setAnimals, setAnimalData } = useAnimals(); // array of default animal names from the context 
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = animals[currentIndex]; // animals[0]

    useEffect(() => {

        fetchAnimal(current).then((data) =>
            setAnimalData(currentIndex, data));
    }, [current, currentIndex, setAnimalData]);

    return (
        <>
            <h1>FLASH CARDS COMPONENT</h1>
            <FlashCard animal={current} />
        </>
    )
}