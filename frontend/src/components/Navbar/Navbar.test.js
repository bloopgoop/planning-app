import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
      
    it('should show account menu when account button is pressed', () => {
        const { getByText, getByRole } = render(<Navbar />);
        const accountButton = getByRole('button', { name: /account/i });
        fireEvent.click(accountButton);
        expect(getByText('Log out')).toBeInTheDocument();
        expect(getByText('Your plans')).toBeInTheDocument();
        expect(getByText('Your templates')).toBeInTheDocument();
        expect(getByText('Profile')).toBeInTheDocument();
        expect(getByText('Set status')).toBeInTheDocument();
    });
});
