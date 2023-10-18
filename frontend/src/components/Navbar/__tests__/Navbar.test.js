import '../../../matchMedia.mock';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders Navbar and verifies button click', () => {
  render(<Navbar />);

  // Check if the Navbar is rendered
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Logo')).toBeInTheDocument();
  expect(screen.getByText('Account')).toBeInTheDocument();

  // Simulate button click and verify the state change
  const button = screen.getByText('Account');
  fireEvent.click(button);

  // Here, you can add assertions based on what your 'handleShow' function is supposed to do.
  // For example, if it's supposed to render some text, you can check for that text.
});