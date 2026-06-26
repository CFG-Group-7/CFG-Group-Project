import { findAnimal, formatAnimal } from './apiHelpers';
import { describe, expect, test } from 'vitest';


const capeLionObject = {
    name: 'Cape Lion',
    taxonomy: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        genus: 'Panthera',
        scientific_name: 'Panthera leo melanochaitus'
    },
    locations: ['Africa'],
    characteristics: {
        prey: 'Wildebeests, antelopes, zebras, buffalos, rodents, and more',
        name_of_young: 'cub',
        group_behavior: 'Pride',
        biggest_threat: 'Habitat loss and hunting',
        most_distinctive_feature: 'The male’s dark-colored mane',
        gestation_period: 'around 100 days',
        litter_size: '1-6 cubs',
        habitat: 'plains',
        diet: 'Carnivore',
        type: 'mammal',
        common_name: 'Cape Lion',
        origin: 'South Africa',
        number_of_species: '1',
        location: 'South Africa',
        color: 'BrownYellowWhiteOrange',
        skin_type: 'Hair',
        top_speed: '48 mph',
        lifespan: '25 years',
        weight: 'up to 600 pounds',
        height: '4 feet',
        length: '6-7 feet',
        age_of_sexual_maturity: '3-4 years',
        age_of_weaning: '6-7 months'
    }
};

const goldenLionTamarinObject = {
    name: 'Golden Lion Tamarin',
    taxonomy: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Primates',
        family: 'Callitrichidae',
        genus: 'Leontopithecus',
        scientific_name: 'Leontopithecus rosalia'
    },
    locations: ['South-America'],
    characteristics: {
        main_prey: 'Fruit, Insects, Small Mammals, Small Reptiles',
        habitat: 'Lowland tropical forest',
        predators: 'Hawks, Wild Cats, Snakes, Rats',
        diet: 'Omnivore',
        average_litter_size: '2',
        lifestyle: 'Troop',
        favorite_food: 'Fruit',
        type: 'Mammal',
        slogan: 'Native to the eastern rainforests of Brazil!',
        color: 'BrownBlackGoldOrange',
        skin_type: 'Hair',
        top_speed: '24 mph',
        lifespan: '8-15 years',
        weight: '550-700g (19-25oz)'
    }
};


const lionObject = {
    name: 'Lion',
    taxonomy: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        genus: 'Panthera',
        scientific_name: 'Panthera leo'
    },
    locations: ['Africa', 'Asia'],
    characteristics: {
        prey: 'Antelope, Warthog, Zebra',
        name_of_young: 'Cub',
        group_behavior: 'Pride',
        estimated_population_size: '23,000',
        biggest_threat: 'Habitat loss',
        most_distinctive_feature: 'Long and thick hairy mane of the male around the face',
        'other_name(s)': 'African Lion',
        gestation_period: '110 days',
        habitat: 'open woodland, scrub, grassland',
        diet: 'Carnivore',
        average_litter_size: '3',
        lifestyle: 'Diurnal/Nocturnal',
        common_name: 'Lion',
        number_of_species: '2',
        location: 'sub-Saharan Africa',
        slogan: 'Lives in small groups called prides!',
        group: 'Mammal',
        color: 'BrownGoldTawnyBlonde',
        skin_type: 'Fur',
        top_speed: '35 mph',
        lifespan: '8 - 15 years',
        weight: '120kg - 249kg (264lbs - 550lbs)',
        length: '1.4m - 2.5m (4.7ft - 8.2ft)',
        age_of_sexual_maturity: '2 - 3 years',
        age_of_weaning: '6 months'
    }
};

const fakeLion = {
    name: 'Lion',
    taxonomy: {
        kingdom: 'Plants',
        phylum: 'fake lion',
        class: 'almost-mammal-like',
        order: 'Carnivora',
        family: 'Felidae',
        genus: 'Panthera',
        scientific_name: 'Panthera leo'
    }
};


const animals = [
    capeLionObject,
    goldenLionTamarinObject,
    lionObject,
    fakeLion
];

describe('findAnimal tests - happy path', () => {

    test('finds the searched animal name in the passed in object when the animal name is of correct format ', () => {

        expect(findAnimal(animals, "lion")).toEqual(lionObject);

    });

    test('finds the searched animal name in the passed in object when the animal name is capitalised', () => {
        expect(findAnimal(animals, "Lion")).toEqual(lionObject);
    });

    test('finds the searched animal name in the passed in object when the animal name is all capiital letters', () => {
        expect(findAnimal(animals, "LION")).toEqual(lionObject);
    });

    test('finds the searched animal name in the passed in object when the animal name is longer than one word', () => {
        expect(findAnimal(animals, "Cape Lion")).toEqual(capeLionObject);
    });
    test('finds the first object with the searched animal name  when the searched animal name occurs twice in the array', () => {
        expect(findAnimal(animals, "lion")).toEqual(lionObject);
        expect(findAnimal(animals, "lion")).not.toEqual(fakeLion);
    });

});

describe('findAnimal tests - error cases ', () => {
    test('returns undefined when the searched animal does not exist in the animals array', () => {

        expect(findAnimal(animals, "cat")).toEqual(undefined);

    });

    test('returns undefined when the searched animal name contains non-letters', () => {
        expect(findAnimal(animals, "Lion1")).toEqual(undefined);
        expect(findAnimal(animals, "lio%n")).toEqual(undefined);
        expect(findAnimal(animals, "li282%n")).toEqual(undefined);
    });

});

//formatAnimals function 




describe('formatAnimal tests - happy path', () => {
    test('returns an object with 17 keys regardless of the initial length of the passed in object ', () => {

        const output = formatAnimal(lionObject);
        const keyLength = Object.keys(output).length + Object.keys(output.characteristics).length;
        expect(keyLength).toBe(17);

        const output2 = formatAnimal(fakeLion);
        const keyLength2 = Object.keys(output2).length + Object.keys(output2.characteristics).length;
        expect(keyLength2).toBe(17);


    });

    test('always returns the same properties after formatting', () => {


        expect(formatAnimal(lionObject)).toEqual(
            {
                animalName: lionObject.name,
                locations: lionObject.locations,
                characteristics: {
                    prey: lionObject.characteristics?.prey,
                    name_of_young: lionObject.characteristics?.name_of_young,
                    group_behavior: lionObject.characteristics?.group_behavior,
                    habitat: lionObject.characteristics?.habitat,
                    diet: lionObject.characteristics?.diet,
                    predators: lionObject.characteristics?.predators,
                    most_distinctive_feature: lionObject.characteristics?.most_distinctive_feature,
                    location: lionObject.characteristics?.location,
                    slogan: lionObject.characteristics?.slogan,
                    group: lionObject.characteristics?.group,
                    top_speed: lionObject.characteristics?.top_speed,
                    lifespan: lionObject.characteristics?.lifespan,
                    length: lionObject.characteristics?.length,
                    weight: lionObject.characteristics?.weight
                }
            });

        expect(formatAnimal(fakeLion)).toEqual(
            {
                animalName: fakeLion.name,
                locations: fakeLion.locations,
                characteristics: {
                    prey: fakeLion.characteristics?.prey,
                    name_of_young: fakeLion.characteristics?.name_of_young,
                    group_behavior: fakeLion.characteristics?.group_behavior,
                    habitat: fakeLion.characteristics?.habitat,
                    diet: fakeLion.characteristics?.diet,
                    predators: fakeLion.characteristics?.predators,
                    most_distinctive_feature: fakeLion.characteristics?.most_distinctive_feature,
                    location: fakeLion.characteristics?.location,
                    slogan: fakeLion.characteristics?.slogan,
                    group: fakeLion.characteristics?.group,
                    top_speed: fakeLion.characteristics?.top_speed,
                    lifespan: fakeLion.characteristics?.lifespan,
                    length: fakeLion.characteristics?.length,
                    weight: fakeLion.characteristics?.weight
                }
            });
    });


});
