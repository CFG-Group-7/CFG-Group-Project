import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeatureCard from '../../src/components/FeatureCard';



describe('FeatureCard.jsx tests', () => {
    afterEach(() => {
        cleanup(); // cleaning the dom between tests 

    });

    test('renders the feature card for the search component', () => {

        render(
            <MemoryRouter>
                <FeatureCard
                    title="Find an animal"
                    description="Search for your favourite zoo animal and learn all about it!"
                    pageLink="/search"
                />
            </MemoryRouter>
        );


        expect(screen.getByText('Find an animal')).toBeInTheDocument();
        expect(
            screen.getByText('Search for your favourite zoo animal and learn all about it!')
        ).toBeInTheDocument();
    });


    test('renders a link with the correct destination', () => {
        render(
            <MemoryRouter>
                <FeatureCard
                    title="Find an animal"
                    description="Search for your favourite zoo animal"
                    pageLink="/search"
                />
            </MemoryRouter>
        );

        const link = screen.getByRole('link', {
            name: /lets go/i,
        });

        expect(link).toHaveAttribute('href', '/search');
    });



});

