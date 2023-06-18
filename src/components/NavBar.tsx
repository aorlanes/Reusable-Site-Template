import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@mui/material';
import VsLogoFull from '../assets/logo-full-color.svg';
import VsLogoShort from '../assets/logo-short-color.svg';
import { MenuRounded } from '@mui/icons-material';
import theme from '../theme';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services' },
	{ label: 'About', href: '/about-us' },
	{ label: 'Contact', href: '/contact' },
];

const NavBar = () => {
	const isTablet = useMediaQuery(theme.breakpoints.down('md'));
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const navList = () => {
		return navItems.map((item) => (
			<ListItem
				key={item.label}
				disablePadding
				style={{ width: isTablet ? 'auto' : 128 }}
			>
				<ListItemButton
					sx={{
						textAlign: isTablet ? 'left' : 'center',
						justifyContent: isTablet ? 'left' : 'center',
					}}
					onClick={() => navigate(item.href)}
				>
					<Typography
						style={{
							color: '#484848',
						}}
						variant="button"
					>
						{item.label}
					</Typography>
				</ListItemButton>
			</ListItem>
		));
	};

	return (
		<>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar
					style={{ position: 'relative', background: theme.palette.white.main }}
				>
					{isTablet && (
						<MenuRounded
							htmlColor={theme.palette.primary.main}
							onClick={() => setIsOpen(!isOpen)}
							fontSize={'large'}
							style={{ position: 'absolute', zIndex: 2 }}
						/>
					)}
					<div
						style={{
							display: 'flex',
							justifyContent: isTablet ? 'center' : 'flex-start',
							width: '100%',
						}}
					>
						<img
							src={isTablet ? VsLogoShort : VsLogoFull}
							alt="Vera &amp; Sons Commercial Cleaning Logo"
							height={64}
							style={{ padding: 8, cursor: 'pointer' }}
							onClick={() => navigate('/')}
						/>
					</div>
					<Divider />
					{!isTablet ? (
						<List
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								width: '100%',
							}}
						>
							{navList()}
						</List>
					) : (
						<Drawer
							anchor="top"
							open={isOpen}
							onClose={() => setIsOpen(false)}
							PaperProps={{ square: false }}
						>
							<Box
								sx={{ width: 256 }}
								role="presentation"
								onClick={() => setIsOpen(false)}
								onKeyDown={() => setIsOpen(false)}
							>
								<div style={{ height: 80 }} />
								<Divider />
								<List>{navList()}</List>
							</Box>
						</Drawer>
					)}
				</Toolbar>
			</AppBar>
			<div style={{ height: 80 }} />
		</>
	);
};

export default NavBar;
