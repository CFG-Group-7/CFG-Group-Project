import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App.jsx';

test('renders the welcome message', () => {
    render(<App />);

    expect(screen.getByText("Welcome to Zoopedia")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Zoopedia")).toBeVisible();

});