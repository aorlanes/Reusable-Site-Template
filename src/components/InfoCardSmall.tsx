import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

type ServiceCardProps = {
	title: string;
	text: string;
	image: string;
};

const InfoCardSmall = ({ title, text, image }: ServiceCardProps) => {
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

export default InfoCardSmall;
