import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from '../../pages/Search';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest"


vi.mock('../../AnimalContext', () => ({
    useAnimals: () => ({
        cacheSearchData: vi.fn(),
        updateDefaultAnimals: vi.fn(),
    })
}));

describe('search', () => {
    beforeEach(() => {

        global.fetch = vi.fn()
    })

    afterEach(() => {
        vi.resetAllMocks();
        cleanup();

    })


    test('the component renders successfully', async () => {

        render(<Search />);

        expect(
            await screen.findByText("Find an Animal")
        ).toBeInTheDocument();
        expect(
            await screen.findByText("Type the name of any zoo animal to learn all about it!")
        ).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();

        // quick search buttons render
        const quickAnimals = ['Lion', 'Elephant', 'Penguin', 'Giraffe', 'Tortoise', 'Zebra', 'Bear'];

        quickAnimals.forEach((animal) => {
            expect(
                screen.getByRole('button', { name: animal })
            ).toBeInTheDocument();
        });
    });

    test('fetches and displays the searched animal', async () => {
        const user = userEvent.setup();

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                animalName: 'Camel',
                locations: ['Africa', 'Asia'],
                characteristics: {
                    habitat: 'Arid desert and scrubland',
                    diet: 'Herbivore',
                    prey: 'Plants'
                }
            })
        });

        render(<Search />);

        const input = screen.getByPlaceholderText(
            "Search an animal here..."
        );

        await user.type(input, "camel");

        await user.click(
            screen.getByRole("button", { name: /search/i })
        );

        expect(
            await screen.findByText("Camel")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Locations")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Habitat")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Diet")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Arid desert and scrubland")
        ).toBeInTheDocument();
    });

    test('shows an error message when the API request fails', async () => {
        const user = userEvent.setup();

        global.fetch.mockRejectedValueOnce(
            new Error('Network error')
        );


        render(<Search />);

        await user.type(
            screen.getByPlaceholderText(/search an animal/i),
            'bob'
        );

        await user.click(
            screen.getByRole('button', { name: /search/i })
        );

        expect(
            await screen.findByText(
                /No animal found. Please check the spelling and try again./i
            )
        ).toBeInTheDocument();
    });


    test('quick search button fetches an animal', async () => {
        const user = userEvent.setup();

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                animalName: 'Lion',
                locations: ['Africa'],
                characteristics: {
                    habitat: 'Grasslands',
                    diet: 'Carnivore',
                    prey: 'Zebra'
                }
            })
        });

        render(<Search />);

        await user.click(
            screen.getByRole('button', { name: 'Lion' })
        );

        expect(
            await screen.findByRole('heading', { name: 'Lion' })).toBeInTheDocument();
    });


    test('does not call fetch when the search input is empty', async () => {
        const user = userEvent.setup();

        // renders search component for the test
        render(<Search />);

        // user clicks search without typing into input
        await user.click(
            screen.getByRole('button', { name: /search/i })
        );

        // checks the API request wasn't triggered because the input is empty
        expect(global.fetch).not.toHaveBeenCalled();
    });


    test('the API gets called with the searched animal name', async () => {
        const user = userEvent.setup();

        // mock API response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                animalName: 'Camel',
                locations: [],
                characteristics: {}
            })
        });

        render(<Search />);

        // user types into the input
        const input = screen.getByPlaceholderText(/search an animal here/i);

        await user.type(input, 'camel');

        // user clicks search
        await user.click(
            screen.getByRole('button', { name: /search/i })
        );

        // checks fetch was called correctly
        expect(global.fetch).toHaveBeenCalledWith(
            '/.netlify/functions/animals?name=camel'
        );
    });

});



