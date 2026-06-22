import { afterEach, beforeEach, describe, it, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Quiz from '../../pages/Quiz';

describe('Quiz', () => {
    it('begins quiz on button click', () => {
        render(<Quiz />);

        const button = screen.getByRole('button', {name: /Go!/i });
        const beginQuiz = screen.getByTestId('beginQuiz')

        expect(beginQuiz.textContent).toEqual('Begin Quiz');

    });
});