import { afterEach, beforeEach, describe, it, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Quiz from '../../pages/Quiz';

describe('Quiz', () => {
    it('renders correctly', () => {
        render(<Quiz />);

        const beginQuiz = screen.getByTestId('beginQuiz')

        expect(beginQuiz.textContent).toEqual('Begin Quiz');

    });
});