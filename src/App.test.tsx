import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './Contact/ContactPage';

test('renders Email Us link', () => {
	render(<ContactPage />);
	const emailElement = screen.getByText(/Email Us/);
	expect(emailElement).toHaveAttribute(
		'href',
		'mailto:veraandsonscc@example.com'
	);
});
