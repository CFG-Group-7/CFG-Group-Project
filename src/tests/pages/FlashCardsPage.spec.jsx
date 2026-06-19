import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FlashCardsPage from '../../pages/FlashCardsPage';

import { AnimalProvider } from '../../AnimalContext';

// vi.mock('./api', () => ({
//     fetchUsers: vi.fn().mockResolvedValue([]),
//     createUser: vi.fn().mockResolvedValue({ id: 1 }),
// }));

vi.mock('../../AnimalContext', async (importOriginal) => {
    const actual = await importOriginal(); // sends the request to the module 
    return {
        ...actual,
        fetchAnimal: vi.fn().mockResolvedValue({
            animalName: 'Camel',
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
    }
});

describe.only('FlashCardsPage', () => {
    const renderWithProvider = () => {
        return render(
            <AnimalProvider>
                <FlashCardsPage />
            </AnimalProvider>
        );
    };
    test('the page renders with default content', async () => {
        renderWithProvider();


        expect(screen.getByText("Test your knowledge!")).toBeInTheDocument();

        expect(screen.getByText("Revise what you've already learned")).toBeInTheDocument();

        // expect(await screen.getByText("Camel")).toBeInTheDocument();

    });


});

