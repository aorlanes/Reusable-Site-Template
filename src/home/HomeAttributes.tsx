import { Icon, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';
import Container from '../components/Container';

const HomeAttributes = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));

	const attributes = [
		{
			title: 'Reliability',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			icon: 'check_circle_outline_rounded',
		},
		{
			title: 'Expertise',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			icon: 'lightbulb',
		},
		{
			title: 'Quality',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			icon: 'auto_awesome_rounded',
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
			>
				A Team of Professionals You Can Trust
			</Typography>
			<div
				style={{
					display: 'flex',
					flexDirection: isTablet ? 'column' : 'row',
				}}
			>
				{attributes.map((att) => {
					return (
						<Attribute
							title={att.title}
							text={att.text}
							icon={att.icon}
						/>
					);
				})}
			</div>
		</Container>
	);
};

type AttributeProps = {
	title: string;
	text: string;
	icon: string;
};

const Attribute = ({ title, text, icon }: AttributeProps) => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<div
			style={{
				flexDirection: 'column',
				paddingLeft: isTablet ? 0 : 16,
				paddingRight: isTablet ? 0 : 16,
			}}
		>
			<Icon
				fontSize="large"
				color="secondary"
				style={{ marginTop: 32, marginBottom: 4 }}
			>
				{icon}
			</Icon>
			<Typography
				variant={isTablet ? 'h5' : 'h4'}
				color={theme.palette.darkGray.main}
				style={{ paddingBottom: 4 }}
			>
				{title}
			</Typography>
			<Typography
				variant={'body1'}
				color={theme.palette.darkGray.main}
			>
				{text}
			</Typography>
		</div>
	);
};

export default HomeAttributes;
