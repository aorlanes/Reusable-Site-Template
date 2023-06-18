import '../App.css';
import theme from '../theme';
import { Typography, useMediaQuery } from '@mui/material';
import ServicesSectionItem from '../Services/ServiceSectionItem';
import { ServicesMapping } from '../Services/ServicesMapping';
import Container from '../components/Container';

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
					style={{ textAlign: 'center', paddingBottom: 8 }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Typography>
				{ServicesMapping.map((service, index) => {
					return (
						<ServicesSectionItem
							alignment={index % 2 === 0 ? 'RIGHT' : 'LEFT'}
							title={service.title}
							text={service.text}
							servicesList={service.servicesList}
							image={service.image}
						/>
					);
				})}
			</>
		</Container>
	);
};

export default AboutUsPage;
