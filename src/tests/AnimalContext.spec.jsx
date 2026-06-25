import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react'

import { AnimalProvider, useAnimals } from '../AnimalContext'

const wrapper = ({ children }) => <AnimalProvider>{children}</AnimalProvider>

describe('AnimalContext', () => {
    test('cacheSearchData adds a new animal to the front of the list ', () => {
        const { result } = renderHook(() => useAnimals(), { wrapper });

        act(() => {
            result.current.cacheSearchData({
                animalName: "Camel",
                locations: ['Africa', 'Asia', 'Eurasia', 'Oceania'],
                characteristics: {
                    prey: 'Thorny and Salty Plants, Grass, Grain',
                    name_of_young: 'Calf',
                    group_behavior: 'Herd',
                    habitat: 'Arid desert and scrubland',
                    diet: 'Herbivore',
                },
                images: {
                    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg'
                }
            })

        })

        expect(result.current.searchData.length).toBe(1);
        expect(result.current.searchData[0].animalName).toBe("Camel");
        expect(result.current.searchData[0].locations).toEqual(['Africa', 'Asia', 'Eurasia', 'Oceania']);
        expect(result.current.searchData[0].characteristics.prey).toBe("Thorny and Salty Plants, Grass, Grain");
    })
    test('cacheSearchData only stores 10 animals', () => {
        const { result } = renderHook(() => useAnimals(), { wrapper });
        act(() => {
            for (let i = 0; i < 12; i++) {

                result.current.cacheSearchData({ animalName: `Animal${i}` })
            }

        })
        expect(result.current.searchData.length).toBe(10);
        expect(result.current.searchData[0].animalName).toBe('Animal11')

    });

    test('updateDefaultAnimals adds a new animal to the front of the list ', () => {
        const { result } = renderHook(() => useAnimals(), { wrapper });

        act(() => {
            result.current.updateDefaultAnimals({
                animalName: "penguin",
                locations: ['Africa', 'Asia', 'Eurasia', 'Oceania'],
                characteristics: {
                    prey: 'Thorny and Salty Plants, Grass, Grain',
                    name_of_young: 'Calf',
                    group_behavior: 'Herd',
                    habitat: 'Arid desert and scrubland',
                    diet: 'Herbivore',
                },
                images: {
                    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg'
                }
            })

        })

        expect(result.current.animals[0]).toBe('penguin');


    })

    test('updateDefaultAnimals only stores 10 animals', () => {
        const { result } = renderHook(() => useAnimals(), { wrapper });
        act(() => {
            for (let i = 0; i < 12; i++) {

                result.current.updateDefaultAnimals({ animalName: `Animal${i}` })
            }
        })
        expect(result.current.animals.length).toBe(10);
        expect(result.current.animals[0]).toBe('animal11')

    });
})

