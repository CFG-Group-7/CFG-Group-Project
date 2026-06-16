import { createContext, useState } from "react";

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState(["whale", "camel", "zebra", "elephant", "panda", "owl", "kangaroo"]);

    return <AnimalContext.Provider value={{ animals, setAnimals }}>{children}</AnimalContext.Provider>

}

export { AnimalContext, AnimalProvider }