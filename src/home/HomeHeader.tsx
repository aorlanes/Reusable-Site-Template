import { Typography, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';
import bgImg from '../assets/img10.jpeg';
import Container from '../components/Container';
import * as React from 'react';

const HomeHeader = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const navigate = useNavigate();

	return (
		<div style={{ height: 602 }}>
			<div
				style={{
					position: 'absolute',
					backgroundImage: `url(${bgImg})`,
					backgroundSize: 'cover',
					display: 'flex',
					width: '100%',
					height: 'inherit',
				}}
			/>
			<div
				style={{
					position: 'relative',
					zIndex: 2,
					height: '100%',
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 60%, ${
						isMobile ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
					})`,
				}}
			>
				<Container
					style={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
					}}
				>
					<Typography
						variant={isTablet ? 'h4' : 'h3'}
						color={theme.palette.white.main}
					>
						<span style={{ display: 'block' }}>Top-Rated Commercial </span>
						Cleaning Service in Los Angeles
					</Typography>
					<Typography
						variant={isTablet ? 'h6' : 'h5'}
						color={theme.palette.white.main}
						style={{ marginTop: 16 }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Typography>
					<div
						style={{
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							alignItems: isMobile ? 'center' : 'flex-start',
							justifyContent: 'center',
							width: '100%',
							marginTop: 36,
						}}
					>
						<Button
							variant="contained"
							size="large"
							style={{
								width: 256,
								marginTop: 12,
								marginRight: isMobile ? 0 : 12,
							}}
							onClick={() => navigate('/services')}
						>
							Services
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							style={{ width: 256, marginTop: 12 }}
							onClick={() => navigate('/contact')}
						>
							Contact Us
						</Button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default HomeHeader;
