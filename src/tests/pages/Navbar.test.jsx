import { afterEach, beforeEach, describe, expect, vi, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'
import NavBar from '../../components/Navbar';

describe('NavBar Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    afterEach(() => {
        cleanup();
    })

    const renderNavBar = () => {
        //render nav bar with links
        return render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    };

    test('the component renders', async () => {
        // render NavBar
        renderNavBar();
        // expect all nav links
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /flash cards/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /quiz/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /more fun/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /zoopedia/i })).toBeInTheDocument();
    });

    test('the nav links render with correct destinations', async () => {
        //render NavBar
        renderNavBar();

        //define expected links and their paths
        const expectedLinks = [
            { text: 'Home', path: '/' },
            { text: 'Search', path: '/search' },
            { text: 'Flash Cards', path: '/flash-cards' },
            { text: 'Quiz', path: '/quiz' },
            { text: 'More Fun', path: '/more-fun' }
        ];

        //test the links
        expectedLinks.forEach(({ text, path }) => {
            const linkElement = screen.getByRole('link', { name: text });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.getAttribute('href')).toBe(path);
        });
    });
});