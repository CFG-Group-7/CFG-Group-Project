import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';



const renderWithProvider = () => {
    return render(
        <MemoryRouter> {/*memory router is needed because the app component has react links*/}
            <App />
        </MemoryRouter>
    );
};

describe('App.jsx tests', () => {

    afterEach(() => {
        cleanup(); // cleaning the dom between tests 

    })

    test('renders the welcome message', () => {
        renderWithProvider();

        expect(screen.getByText("Welcome to Zoopedia")).toBeInTheDocument();
        expect(screen.getByText("Welcome to Zoopedia")).toBeVisible();

    })

    test('renders the feature cards', () => {
        renderWithProvider();

        expect(screen.getByText("Find an animal")).toBeInTheDocument();
        expect(screen.getByText("Flash Cards")).toBeInTheDocument();
        expect(screen.getByText("Take a quiz")).toBeInTheDocument();
        expect(screen.getByText("More Fun")).toBeInTheDocument();

    })
});