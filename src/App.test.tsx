import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vera & Sons link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Vera & Sons/i);
	expect(linkElement).toBeInTheDocument();
});
