const findAnimal = (animals, name) => {
    return animals.find(animal => animal.name.toLowerCase() === name.toLowerCase());
};

const formatAnimal = (animal) => {
    return {

        animalName: animal.name,
        locations: animal.locations,
        characteristics: {
            prey: animal.characteristics?.prey,
            name_of_young: animal.characteristics?.name_of_young,
            group_behavior: animal.characteristics?.group_behavior,
            habitat: animal.characteristics?.habitat,
            diet: animal.characteristics?.diet,
            predators: animal.characteristics?.predators,
            most_distinctive_feature: animal.characteristics?.most_distinctive_feature,
            location: animal.characteristics?.location,
            slogan: animal.characteristics?.slogan,
            group: animal.characteristics?.group,
            top_speed: animal.characteristics?.top_speed,
            lifespan: animal.characteristics?.lifespan,
            length: animal.characteristics?.length,
            weight: animal.characteristics?.weight
        }

    };



};



export { findAnimal, formatAnimal };
