import { useNavigate } from 'react-router-dom';
import Container from './Container';
import theme from '../theme';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Link, Typography } from '@mui/material';
import VsLogoFull from '../assets/logo-full-white.svg';
import * as React from 'react';

const Footer = () => {
	const navigate = useNavigate();

	const links = [
		{
			category: '',
			linkItems: [
				{
					label: '',
					href: '',
				},
			],
		},
		{
			category: '',
			linkItems: [
				{
					label: '',
					href: '',
				},
			],
		},
		{
			category: '',
			linkItems: [
				{
					label: '',
					href: '',
				},
			],
		},
	];

	return (
		<div
			style={{
				width: '100%',
				backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main}`,
				color: 'white',
				textAlign: 'center',
			}}
		>
			<Container
				style={{
					display: 'flex',
					width: '100%',
					flexDirection: 'column',
					alignItems: 'center',
					paddingTop: 32,
					paddingBottom: 32,
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<img
						src={VsLogoFull}
						alt="Vera &amp; Sons Commercial Cleaning Logo"
						height={64}
						style={{ padding: 8, cursor: 'pointer' }}
						onClick={() => navigate('/')}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Link
						underline="none"
						color="white"
						variant="button"
						style={{
							textDecoration: 'underline',
							padding: 8,
							cursor: 'pointer',
						}}
					>
						Sitemap
					</Link>
					|
					<Link
						underline="none"
						color="white"
						variant="button"
						style={{
							textDecoration: 'underline',
							padding: 8,
							cursor: 'pointer',
						}}
					>
						Terms of Use
					</Link>
				</div>
				<div
					style={{
						display: 'flex',
						width: 128,
						justifyContent: 'space-between',
					}}
				>
					<IconButton color="white">
						<FacebookIcon fontSize="medium" />
					</IconButton>
					<IconButton
						color="white"
						href="https://www.instagram.com/veransoncc/"
						target="_blank"
					>
						<InstagramIcon fontSize="medium" />
					</IconButton>
					<IconButton color="white">
						<LinkedInIcon fontSize="medium" />
					</IconButton>
					<IconButton color="white">
						<YouTubeIcon fontSize="medium" />
					</IconButton>
				</div>
				<Typography variant="caption">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Typography>
				<Typography
					variant="caption"
					style={{ paddingTop: 4 }}
				>
					© 2022 Vera &amp; Sons Commercial Cleaning
				</Typography>
			</Container>
		</div>
	);
};

export default Footer;
