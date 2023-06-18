import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';
import Container from '../components/Container';
import commercialImg from '../assets/img5.jpeg';
import windowImg from '../assets/img13.jpeg';
import carpetImg from '../assets/img12.jpeg';
import floorImg from '../assets/img9.jpeg';
import detailingImg from '../assets/img6.jpeg';
import pressureWashingImg from '../assets/img11.jpeg';
import * as React from 'react';

const HomeServicesCards = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const navigate = useNavigate();

	const services = [
		{
			title: 'Commercial Cleaning',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: commercialImg,
		},
		{
			title: 'Window Cleaning',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: windowImg,
		},
		{
			title: 'Carpet Care',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: carpetImg,
		},
		{
			title: 'Hard Floor Care',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: floorImg,
		},
		{
			title: 'Detailing',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: detailingImg,
		},
		{
			title: 'Pressure Washing',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: pressureWashingImg,
		},
	];

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				alignItems: 'center',
			}}
		>
			<Typography
				variant={isTablet ? 'h4' : 'h3'}
				color="primary"
				style={{ paddingBottom: 24 }}
			>
				Our Services
			</Typography>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					paddingBottom: 24,
				}}
			>
				{services.map((service) => {
					return (
						<ServicesCard
							title={service.title}
							text={service.text}
							image={service.image}
						/>
					);
				})}
			</div>
			<Button
				variant="outlined"
				color="primary"
				onClick={() => navigate('/services')}
			>
				Learn More
			</Button>
		</Container>
	);
};

type ServiceCardProps = {
	title: string;
	text: string;
	image: string;
};

const ServicesCard = ({ title, text, image }: ServiceCardProps) => {
	return (
		<Card style={{ width: 300, margin: 8 }}>
			<CardMedia
				component="img"
				height="140"
				image={image}
				alt={title}
				sx={{ backgroundPosition: 'center bottom' }}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
				>
					{title}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
				>
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default HomeServicesCards;
