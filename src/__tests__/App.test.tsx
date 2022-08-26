import { render, screen } from '@testing-library/react';
import {
  describe, it, expect, beforeEach,
} from 'vitest';
import { App } from '../App';


describe('<App/>', () => {
  describe('Layout:', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should have a "main" navigation bar', () => {
      expect(screen
        .getByRole('navigation', { name: /main navigation/i }))
        .toBeInTheDocument();
    });

    it('should have a "sidebar" navigation', () => {
      expect(screen
        .getByRole('navigation', { name: /sidebar navigation/i }))
        .toBeInTheDocument();
    });

    it('should have a "hero" section with an image', () => {
      expect(screen
        .getByRole('banner', { name: /hero-section/i }))
        .toContainElement(screen
          .getByRole('img', { name: /hero-astronaut/i }));
    });

    it('should have an "aside" section', () => {
      expect(screen
        .getByRole('complementary', { name: /todos-list-column/i }))
        .toBeInTheDocument();
    });
  });
});
