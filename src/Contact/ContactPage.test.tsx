import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('Contact Page contact buttons', () => {
	it('renders Email Us link', () => {
		render(<ContactPage />);
		const emailElement = screen.getByText(/Email Us/);
		expect(emailElement).toHaveAttribute(
			'href',
			'mailto:veraandsonscc@example.com'
		);
	});

	it('renders Call Now link', () => {
		render(<ContactPage />);
		const callElement = screen.getByText(/Call Now/);
		expect(callElement).toHaveAttribute('href', 'tel:3235555555');
	});
});
