import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('should show the account menu when the account button is clicked', () => {
        const { getByText, queryByText } = render(<Navbar />);
        const accountButton = getByText('Account');
        fireEvent.click(accountButton);
        expect(queryByText('Set status')).toBeInTheDocument();
        expect(queryByText('Profile')).toBeInTheDocument();
        expect(queryByText('Your plans')).toBeInTheDocument();
        expect(queryByText('Your templates')).toBeInTheDocument();
        expect(queryByText('Log out')).toBeInTheDocument();
    });
});
