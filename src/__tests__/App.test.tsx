import { render, screen } from '@testing-library/react';
import {
  describe, test, expect, beforeEach,
} from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App';


describe('<App/>', () => {
  describe('Layout:', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
    });

    test('should have a "main" navigation bar', () => {
      expect(screen
        .getByRole('navigation', { name: /main navigation/i }))
        .toBeInTheDocument();
    });

    test('should have a "sidebar" navigation', () => {
      expect(screen
        .getByRole('navigation', { name: /sidebar navigation/i }))
        .toBeInTheDocument();
    });

    test('should have a "hero" section with an image', () => {
      expect(screen
        .getByRole('banner', { name: /hero-section/i }))
        .toContainElement(screen
          .getByRole('img', { name: /hero-astronaut/i }));
    });

    test('should have an "aside" section', () => {
      expect(screen
        .getByRole('complementary', { name: /todos-list-column/i }))
        .toBeInTheDocument();
    });
  });
});
