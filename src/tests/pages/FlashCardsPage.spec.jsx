import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import FlashCardsPage from '../../pages/FlashCardsPage';

import { AnimalProvider } from '../../AnimalContext';

vi.mock('../../AnimalContext', async (importOriginal) => {
    const actual = await importOriginal(); // sends the request to the module 
    return {
        // we don't need to mock all of the functions, so we must 'place back' the default exports and keep them functional
        ...actual,
        // we only mock the function we need
        fetchAnimal: vi.fn((name) => Promise.resolve({
            animalName: name.charAt(0).toUpperCase() + name.slice(1), // the name is set dynamically while the rest of the data is hardcoded
            locations: ['Africa', 'Asia', 'Eurasia', 'Oceania'],
            characteristics: {
                prey: 'Thorny and Salty Plants, Grass, Grain',
                name_of_young: 'Calf',
                group_behavior: 'Herd',
                habitat: 'Arid desert and scrubland',
                diet: 'Herbivore',
                predators: 'Lions, Leopards, Humans',
                most_distinctive_feature: 'Long, curved neck and large hump',
                location: 'Throughout the Middle East',
                slogan: 'Can survive without water for 10 months!',
                group: 'Mammal',
                top_speed: '40 mph',
                lifespan: '40 - 50 years',
                length: '2.2m - 3.5m (7.25ft - 11.5ft)',
                weight: '300kg - 690kg (660lbs - 1,500lbs)'
            },
            images: {
                thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/330px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg',
                fullImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg'
            }
        })
        )
    };

});

describe('FlashCardsPage', () => {
    beforeEach(() => {
        vi.clearAllMocks(); //resetting the mocks 
    });

    afterEach(() => {
        cleanup();

    });
    const clickNext = () => fireEvent.click(screen.getByRole("button", { name: /next/i }));
    const clickPrevious = () => fireEvent.click(screen.getByRole("button", { name: /back/i }));
    const clickRestart = () => fireEvent.click(screen.getByRole("button", { name: /restart/i }));
    const renderWithProvider = () => {
        return render(
            <AnimalProvider>
                <FlashCardsPage />
            </AnimalProvider>
        );
    };

    test('the page renders with default content', async () => {
        renderWithProvider();

        expect(screen.getByText("Test your knowledge")).toBeInTheDocument();
        expect(screen.getByText("Revise what you've already learned!")).toBeInTheDocument();

        expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();


        // because there are two 'headings' for the animal card (one on the front, one on the back of the card)
        // we have to select them all using 'findAllByRole' 
        // which returns more than 1 record
        const headings = await screen.findAllByRole('heading', { name: "Camel", level: 2 }); // level 2 because it's h2 (h1 would be level 1)

        // there are two h2s in the flashcard component, one for the 'front' and one for the 'back'
        expect(headings.length).toBe(2);
    });

    test('the page renders a new animal (updates the animal name) after pressing the next button', async () => {
        renderWithProvider();
        clickNext();
        // animals[1] is set to zebra, so that is the response we should see on the screen 
        expect((await screen.findAllByText("Zebra")).length).toBeGreaterThan(0);

    });

    test('clicking next button twice an advancing two animals', async () => {
        renderWithProvider();
        clickNext(); // animals[1] is zebra 
        clickNext(); // animals[2] is elephant 
        expect((await screen.findAllByText("Elephant")).length).toBeGreaterThan(0);

    });

    test('the page renders the last animal when we press previous from page load', async () => {
        renderWithProvider();

        clickPrevious();
        // animals[9] is set to 'alpaca', so that is the response we should see on the screen 
        expect((await screen.findAllByText("Alpaca")).length).toBeGreaterThan(0);

    });

    test('the page renders the the previous animal when we press next and then press previous', async () => {
        renderWithProvider();
        clickNext();
        clickPrevious();
        // animals[0] is 'camel'
        expect((await screen.findAllByText("Camel")).length).toBeGreaterThan(0);

    });

    test('the page resets back to the first animal after pressing the restart button ', async () => {
        renderWithProvider();
        clickNext();
        clickNext();
        clickRestart();
        // animals[0] is 'camel'
        expect((await screen.findAllByText("Camel")).length).toBeGreaterThan(0);

    });

});

