import { afterEach, describe, it, expect } from 'vitest';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

import Quiz from '../../pages/Quiz';
import Score from '../../components/Quiz/Score';

describe('Quiz', () => {
    it('renders correctly', () => {
        render(<Quiz />);

        const beginQuiz = screen.getByTestId('beginQuiz');

        expect(beginQuiz.textContent).toEqual('Begin Quiz');

    });
});

describe('score presented', () => {
    it('renders the score after the quiz is completed', () => {
        render(<Score score={3} />);
        expect(screen.getByText('Your score: 3 / 5 🙂')).toBeInTheDocument();
    });

});

describe("Go! button functionality", async () => {
    it("should start the quiz when Go is clicked", async () => {
        render(<Quiz />);

        await userEvent.click(screen.getByText("Go!"));

        expect(screen.queryByText("Go!"))
            .not.toBeInTheDocument();
    });

});
