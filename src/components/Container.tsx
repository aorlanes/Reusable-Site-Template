import { useMediaQuery } from '@mui/material';
import * as React from 'react';
import theme from '../theme';

type ContainerProps = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
};

const Container = ({ children, style }: ContainerProps) => {
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isTablet = useMediaQuery(theme.breakpoints.only('md'));
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					maxWidth: isMobile ? '45rem' : isTablet ? '50rem' : '60rem',
					paddingTop: isMobile ? 32 : isTablet ? 48 : 64,
					paddingBottom: isMobile ? 32 : isTablet ? 48 : 64,
					paddingLeft: isMobile ? 32 : isTablet ? 48 : 64,
					paddingRight: isMobile ? 32 : isTablet ? 48 : 64,
					...style,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Container;
