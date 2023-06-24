import * as React from 'react';
import HomeAttributes from './HomeAttributes';
import HomeHeader from './HomeHeader';
import HomeReviewsCarousel from './HomeReviewsCarousel';
import HomeServiceAreas from './HomeServiceAreas';
import HomeServicesCards from './HomeServicesCards';

const HomePage = () => {
	return (
		<>
			<HomeHeader />
			<HomeAttributes />
			<div style={{ backgroundColor: '#4848480a' }}>
				<HomeServicesCards />
			</div>
			<HomeReviewsCarousel />
			<div style={{ backgroundColor: '#4848480a' }}>
				<HomeServiceAreas />
			</div>
		</>
	);
};

export default HomePage;
