import HomeAttributes from './HomeAttributes';
import HomeHeader from './HomeHeader';
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
			<HomeServiceAreas />
		</>
	);
};

export default HomePage;
