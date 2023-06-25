import * as React from 'react';
import {
	Button,
	Card,
	CardContent,
	Typography,
	useMediaQuery,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useNavigate } from 'react-router-dom';
import * as _ from 'lodash';
import theme from '../theme';
import Container from '../components/Container';
import Carousel from '../components/Carousel';

const HomeReviewsCarousel = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const navigate = useNavigate();

	const reviews = [
		{
			name: 'John D.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 5,
		},
		{
			name: 'Jane D.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 4.5,
		},
		{
			name: 'Bob G.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 5,
		},
		{
			name: 'Max C.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 3.5,
		},
		{
			name: 'Anjela O.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 5,
		},
		{
			name: 'Enrique V.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 4,
		},
		{
			name: 'Ana K.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 3,
		},
		{
			name: 'Sam S.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 5,
		},
		{
			name: 'Karen B.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 1,
		},
	];

	const reviewCards = reviews.map((review, index) => {
		return (
			<ReviewCard
				key={index}
				rating={review.rating}
				name={review.name}
				text={review.text}
			/>
		);
	});

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Typography
				variant={isTablet ? 'h4' : 'h3'}
				color="primary"
				style={{ paddingBottom: 24 }}
			>
				See Our Reviews
			</Typography>
			<Carousel
				items={reviewCards}
				displayCount={3}
				slideByCount={3}
				style={{ paddingBottom: 24 }}
			/>
			<Button
				variant="outlined"
				color="primary"
				onClick={() => {}}
			>
				See More
			</Button>
		</Container>
	);
};

type ReviewCardProps = {
	rating: number;
	name: string;
	text: string;
};

const ratingToStars = (rating: number) => {
	let stars = [];
	const fullStars = rating % 1 !== 0 ? rating - 0.5 : rating;
	_.times(fullStars, () => {
		stars.push(<StarIcon color="secondary" />);
	});
	rating % 1 !== 0
		? stars.push(<StarHalfIcon color="secondary" />)
		: rating !== 5
		? stars.push(<StarBorderIcon color="secondary" />)
		: stars.push();
	_.times(5 - stars.length, () => {
		stars.push(<StarBorderIcon color="secondary" />);
	});
	return stars;
};

const ReviewCard = ({ rating, name, text }: ReviewCardProps) => {
	return (
		<Card style={{ minWidth: 300, maxWidth: 300, margin: 9 }}>
			<CardContent>
				<div style={{ height: 40, paddingTop: 8 }}>
					{ratingToStars(rating).map((star, index) => {
						return (
							<div
								key={index}
								style={{ display: 'inline' }}
							>
								{star}
							</div>
						);
					})}
				</div>
				<Typography
					gutterBottom
					variant="h5"
				>
					{name}
				</Typography>
				<Typography variant="body2">{text}</Typography>
			</CardContent>
		</Card>
	);
};

export default HomeReviewsCarousel;
