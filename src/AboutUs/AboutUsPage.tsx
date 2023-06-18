import '../App.css';
import theme from '../theme';
import { Typography, useMediaQuery } from '@mui/material';
import { AboutUsMapping } from './AboutUsMapping';
import Container from '../components/Container';
import * as React from 'react';
import InfoCard from '../components/InfoCard';

const AboutUsPage = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Container>
			<>
				<Typography
					variant={isTablet ? 'h4' : 'h3'}
					color="secondary"
					style={{ paddingBottom: 16, textAlign: 'center' }}
				>
					About Us
				</Typography>
				<Typography
					variant={isTablet ? 'subtitle2' : 'subtitle1'}
					color={theme.palette.darkGray.main}
					style={{ textAlign: 'center', paddingBottom: 24 }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Typography>
				{AboutUsMapping.map((item, index) => {
					return (
						<InfoCard
							alignment={index % 2 === 0 ? 'RIGHT' : 'LEFT'}
							title={item.title}
							text={item.text}
							image={item.image}
						/>
					);
				})}
			</>
		</Container>
	);
};

export default AboutUsPage;
